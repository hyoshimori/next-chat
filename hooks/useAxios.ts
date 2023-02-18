import axios from "axios"

export const useAxios = () => {
  const instance = axios.create({
    headers: {"Content-Type": "application/json"},
    responseType: 'json',
    baseURL: "https://next-chat-d1541-default-rtdb.europe-west1.firebasedatabase.app/"
  });

  return { axios: instance };
}
