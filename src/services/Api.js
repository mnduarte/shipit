// @Vendors
import axios from "axios";

const privateRequest = ({ method, endpoint, params, options }) => {
  return axios({
    method: method,
    url: endpoint,
    headers: {
      "Content-Type": process.env.headers.contentType,
      "X-Shipit-Email": process.env.headers.xShipitEmail,
      "X-Shipit-Access-Token": process.env.headers.xShipitAccessToken,
      Accept: process.env.headers.accept,
    },
    data: { ...params },
    ...options,
  });
};

const privateGet = (endpoint, params, options) =>
  privateRequest({ method: "get", endpoint, params, options });

const privatePost = (endpoint, params, options) =>
  privateRequest({
    method: "post",
    endpoint,
    params,
    options,
  });

const getCommunes = () => privateGet("https://api.shipit.cl/v/communes");

const getCouriers = () => privateGet("https://prices.shipit.cl/v/couriers");

const priceQuotation = (props) =>
  privatePost("https://api.shipit.cl/v/rates", props);

const createShipping = (props) =>
  privatePost("https://api.shipit.cl/v/shipments", props);

const exportedObject = {
  getCommunes,
  getCouriers,
  priceQuotation,
  createShipping,
};

export default exportedObject;
