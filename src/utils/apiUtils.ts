import { APIMethod } from "./apiMethod";

export const getData = async (url: string) => {
  return APIMethod("GET", url);
};

export const deleteData = async (url: string) => {
  return APIMethod("DELETE", url);
};

export const postData = async (url: string, data?: any) => {
  return APIMethod("POST", url, data);
};

export const putData = async (url: string, data: any) => {
  return APIMethod("PUT", url, data);
};
