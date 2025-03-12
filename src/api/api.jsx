import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const API = axios.create({
  // baseURL: "http://localhost:7000/api/v1",
  baseURL: "https://prep-service.onrender.com/api/v1",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

//  Price reason
export const useAdminProfile = () => {
  const getAdminProfile = async () => {
    const response = await API.get("/admin/me");
    return response.data;
  };

  const {
    data: adminProfile = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["adminProfile"],
    queryFn: getAdminProfile,
  });

  return { adminProfile, isLoading, isError, error, refetch };
};
// all Model with Single brand
export const useAllRates = () => {
  const getAllRates = async () => {
    const response = await API.get(`/rate/all`);
    return response.data.data;
  };
  const {
    data: allRates = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allRates"],
    queryFn: getAllRates,
  });
  return { allRates, isLoading, isError, error, refetch };
};
// all Model with Single brand
export const useSingleRate = (rateId) => {
  const getSingleRate = async () => {
    const response = await API.get(`/rate/${rateId}`);
    return response.data.data;
  };
  const {
    data: singleRate = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["singleRate", rateId],
    queryFn: getSingleRate,
  });
  return { singleRate, isLoading, isError, error, refetch };
};

// get all Inventories
export const useAllInventories = ({
  start_date,
  end_date,
  page = 1,
  limit = 10,
} = {}) => {
  const getAllInventories = async () => {
    const response = await API.get("/inventory/all", {
      params: { start_date, end_date, page, limit },
    });
    return response.data;
  };

  const {
    data: response = {},
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allInventories", start_date, end_date, page, limit],
    queryFn: getAllInventories,
  });

  const { data: allInventories = [], pagination = {} } = response;

  return { allInventories, pagination, isLoading, isError, error, refetch };
};
