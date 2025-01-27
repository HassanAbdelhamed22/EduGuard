import api from "../config/api";
import { BASE_URL } from "../constants";

export const getStatistics = async () => {
  const { data } = await api.get(`${BASE_URL}admin/statistics`);
  return data;
};

export const getResentActivities = async () => {
  const { data } = await api.get(`${BASE_URL}admin/recent-activities`);
  return data;
};