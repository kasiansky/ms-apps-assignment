import axios from "axios";

export const performRequest = async ({
  method,
  path = "",
  headers,
  params,
}) => {
  try {
    const request = {
      method: method ?? "GET",
      url: `${process.env.REACT_APP_API_URL}/${path}`,
      params,
      headers: {
        "access-control-allow-origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const { data: response } = await axios(request);
    return response;
  } catch (error) {
    console.error(error.message);
    throw error.response;
  }
};
