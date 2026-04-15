import axios from "axios";

export const sendContact = (data) => {
  return axios.post("http://localhost:5000/api/contact", data);
};