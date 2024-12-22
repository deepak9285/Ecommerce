import axios from "axios";

const API_BASE_URL = "http://localhost:5000/complaints";

const ComplaintService = {
  postComplaint: (complaint) => {
    axios.post(`${API_BASE_URL}/post-complaints`, complaint)
    .then((response) => {
        console.log(response.data);
        return response.status;
        })
  },
  getComplaints: () => axios.get(`${API_BASE_URL}/get-complaints`),
  updateComplaintStatus: (data) =>
    axios.put(`${API_BASE_URL}/update-complaint-status`, data),
};

export default ComplaintService;
