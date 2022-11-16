import request from "services/request";

export const getListTransactions = async (params) =>
  request({
    url: `/transaction`,
    method: "GET",
    params,
    isAuth: false,
  });