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
export const useModelByBrand = (brandID) => {
  const getModelByBrand = async () => {
    // const response = await API.get(`/model/all?brand_id=${brandID}`);
    const response = await API.get(`/model?brand_id=${brandID}`);
    return response.data;
  };
  const {
    data: modelByBrand = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["modelByBrand", brandID],
    queryFn: getModelByBrand,
  });
  return { modelByBrand, isLoading, isError, error, refetch };
};

