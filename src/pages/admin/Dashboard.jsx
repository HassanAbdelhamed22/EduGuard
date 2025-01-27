import {
  BookOpen,
  File,
  GraduationCap,
  School,
  Settings,
  Users,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { getStatistics } from "../../services/adminService";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const initialStatistics = {
  totalUsers: 0,
  totalStudents: 0,
  totalProfessors: 0,
  totalCourses: 0,
};

const Dashboard = () => {
  const [statistics, setStatistics] = useState(initialStatistics);

  useEffect(() => {
    handleGetStatistics();
  }, []);

  const handleGetStatistics = async () => {
    try {
      const data = await getStatistics();
      setStatistics(data);
    } catch (error) {
      toast.error(error);
    }
  };

  const recentActivities = [
    {
      id: 1,
      type: "New Professor",
      message: "Dr. Sarah Johnson joined Computer Science",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "Exam Alert",
      message: "Multiple submissions detected in CS101 Final",
      time: "3 hours ago",
    },
    {
      id: 3,
      type: "Course Added",
      message: "New course: Advanced Machine Learning",
      time: "5 hours ago",
    },
    {
      id: 4,
      type: "System Alert",
      message: "Peak user activity detected",
      time: "6 hours ago",
    },
  ];

  const quickActions = [
    {
      id: 1,
      name: "Create User",
      icon: <Users className="w-6 h-6" />,
      path: "/admin/users/create",
    },
    {
      id: 2,
      name: "Create Course",
      icon: <BookOpen className="w-6 h-6" />,
      path: "/admin/courses/create",
    },
    {
      id: 3,
      name: "Profile Settings",
      icon: <Settings className="w-6 h-6" />,
      path: "/admin/profile",
    },
    {
      id: 4,
      name: "View Reports",
      icon: <File className="w-6 h-6" />,
      path: "#",
    },
  ];

  return (
    <div className="min-h-screen py-6">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-darkGray ">
            Welcome to Your Dashboard
          </h1>
          <p className="text-gray-600 ">
            Here’s an overview of your system stats and quick actions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Users */}
          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 overflow-hidden shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
            <div className="p-5 flex items-center">
              <div className="bg-white p-3 rounded-full">
                <Users className="h-6 w-6 text-indigo-500" />
              </div>
              <div className="ml-5">
                <h3 className="text-white text-lg font-medium">Total Users</h3>
                <p className="text-3xl font-bold text-white">
                  {statistics.totalUsers}
                </p>
              </div>
            </div>
          </div>

          {/* Total Professors */}
          <div className="bg-gradient-to-r from-red-500 to-pink-500 shadow-lg rounded-lg p-5 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center">
              <div className="bg-white p-3 rounded-full">
                <School className="h-6 w-6 text-red-500" />
              </div>
              <div className="ml-5">
                <h3 className="text-white text-lg font-medium">Professors</h3>
                <p className="text-3xl font-bold text-white">
                  {statistics.totalProfessors}
                </p>
              </div>
            </div>
          </div>

          {/* Total Students */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg rounded-lg p-5 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center">
              <div className="bg-white p-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-yellow-500" />
              </div>
              <div className="ml-5">
                <h3 className="text-white text-lg font-medium">Students</h3>
                <p className="text-3xl font-bold text-white">
                  {statistics.totalStudents}
                </p>
              </div>
            </div>
          </div>

          {/* Total Courses */}
          <div className="bg-gradient-to-r from-green-500 to-teal-500 shadow-lg rounded-lg p-5 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center">
              <div className="bg-white p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-5">
                <h3 className="text-white text-lg font-medium">
                  Active Courses
                </h3>
                <p className="text-3xl font-bold text-white">
                  {statistics.totalCourses}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4 text-darkGray">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => (
              <div
                key={action.id}
                className="bg-white shadow-lg rounded-lg p-5 flex items-center justify-between  hover:cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <Link
                  to={action.path}
                  className="flex items-center text-gray-700 "
                >
                  <div className="bg-indigo-100  p-3 rounded-full">
                    {action.icon}
                  </div>
                  <p className="ml-4 text-lg font-medium">{action.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
