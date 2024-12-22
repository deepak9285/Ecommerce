import axios from "axios";

const API_BASE_URL = "http://localhost:5000/auth";
const API_BASEADMIN_URL="http://localhost:5000/admin";

const AuthService = {
  Login: async (FormData) => axios.post(`${API_BASE_URL}/login`, FormData),
  GetUserProfile:()=>axios.get(`${API_BASE_URL}/user/:userId`),
  SignupAsUser: (data) =>axios.post(`${API_BASE_URL}/signup`, data),
  LogoutAsUser:()=>axios.post(`${API_BASE_URL}/logout`),
  //sellers auth
  SingupAsSeller: (FormData) => axios.post(`${API_BASEADMIN_URL}/seller/signup`,FormData),
  LoginAsSeller:(FormData)=>axios.post(`${API_BASEADMIN_URL}/login`,FormData),
  LogoutAsSeller:()=>axios.post(`${API_BASEADMIN_URL}/logout`),
  GetSellerProfile:()=>axios.get(`${API_BASEADMIN_URL}/seller/:sellerId`),
  VerifySeller:()=>axios.post(`${API_BASEADMIN_URL}/verify-seller`),

};

export default AuthService;
