import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteAllNotifications,
  deleteNotification,
  getAllNotifications,
  getUnreadNotifications,
  markAsRead,
} from "../../services/notificationService";
import toast from "react-hot-toast";
import Loading from "../../components/ui/Loading";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch notifications and unread count
  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const allNotifications = await getAllNotifications();
      const unreadNotifications = await getUnreadNotifications();
      setNotifications(allNotifications.notifications);
      setUnreadCount(unreadNotifications.notifications.length);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch notifications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  });

  // Handle marking a notification as read
  const handleMarkAsRead = async (notificationId) => {
    try {
      await markAsRead(notificationId);
      toast.success("Notification marked as read");
      fetchNotifications();
    } catch (error) {
      console.error(error);
      toast.error("Failed to mark notification as read");
    }
  };

  // Handle marking all notifications as read
  const handleMarkAllAsRead = async () => {
    try {
      await markAsRead();
      toast.success("All notifications marked as read");
      fetchNotifications();
    } catch (error) {
      console.error(error);
      toast.error("Failed to mark all notifications as read");
    }
  };

  // Handle deleting a notification
  const handleDeleteNotification = async (notificationId) => {
    try {
      await deleteNotification(notificationId);
      toast.success("Notification deleted");
      fetchNotifications();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete notification");
    }
  };

  // Handle deleting all notifications
  const handleDeleteAllNotifications = async () => {
    try {
      await deleteAllNotifications();
      toast.success("All notifications deleted");
      fetchNotifications();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete all notifications");
    }
  };

  // Handle notification click
  const handleNotificationClick = (notification) => {
    if (notification.type === "quiz") {
      navigate(`/student/quizzes`);
    } else if (notification.type === "material") {
      navigate(`/student/materials/${notification.CourseId}`);
    }
  };

  if (loading) {
    return <Loading />;
  }
  return <div>NotificationsPage</div>;
};

export default NotificationsPage;
