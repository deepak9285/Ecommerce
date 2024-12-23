// src/pages/ProfilePage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const ProfilePage = () => {
  // Sample data you provided
  const userData = {
   
  };
  const navigate = useNavigate();
  // State to hold user data
  const [userProfile, setUserProfile] = useState(userData);
  const userdata = JSON.parse(localStorage.getItem("userData"));
  const userId = userdata?.userId;
  
  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:5000/auth/user/${userId}`)
        .then((response) => {
          setUserProfile(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user profile:", error);
        });
    }
  }, [userId]); // Dependency array ensures the effect runs when userId changes
  if (!userId) {
    // Handle the case where userId is not available
    return (
      <div>
        <h1 className="text-black">Not logged in</h1>
        <button
          className="text-white p-3 rounded-xl bg-green-500"
          onClick={() => navigate("/login")}
        >
          Go to login page
        </button>
      </div>
    );
  }
 
  const handleLogout = () => {
    axios
      .post("http://localhost:5000/auth/logout")
      .then((response) => {
        localStorage.removeItem("userData");
        console.log(response.data);
        alert("logged out");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-full m-4 p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-xl mt-12">
      <h1 className="text-4xl font-semibold text-white text-center mb-6">
        User Profile
      </h1>

      <div className="flex justify-center mb-6">
        <img
          src="https://via.placeholder.com/150" // Placeholder profile image
          alt="Profile"
          className="rounded-full w-36 h-36 border-4 border-white shadow-lg"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Name:</h2>
          <p className="text-gray-600">{userProfile.name}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Email:</h2>
          <p className="text-gray-600">{userProfile.email}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Phone:</h2>
          <p className="text-gray-600">{userProfile.phone}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Account Status:
          </h2>
          <p className="text-gray-600">{userProfile.accountStatus}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">User ID:</h2>
          <p className="text-gray-600">{userProfile?.userId}</p>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => handleLogout()}
          className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
