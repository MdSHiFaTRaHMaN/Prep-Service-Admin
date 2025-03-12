import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const API = axios.create({
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
// all Inventory

export const useAllInventory = ({
  startTime = "",
  endTime = "",
  page = 1,
  limit = 10,
}) => {
  const getAllInventory = async () => {
    const response = await API.get("/inventory/all", {
      params: { page, limit, startTime, endTime },
    });

    console.log("response", response);
    return response.data;
  };

  const {
    data = {},
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allInventory", startTime, endTime, page, limit],
    queryFn: getAllInventory,
  });

  const allInventory = data?.data || [];
  const pagination = data?.pagination || {};

  return { allInventory, pagination, isLoading, isError, error, refetch };
};

