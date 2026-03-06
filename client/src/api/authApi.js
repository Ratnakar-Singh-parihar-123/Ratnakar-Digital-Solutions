import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/auth`,
});

// Register
export const registerUser = async (userData) => {
  const response = await API.post("/register", userData);
  return response.data;
};

// Login
export const loginUser = async (userData) => {
  const response = await API.post("/login", userData);

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("token");
};
