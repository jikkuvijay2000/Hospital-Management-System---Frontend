import React, { useContext, useState } from "react";
import { authContext } from "./../../context/AuthContext";
import MyBookings from "./MyBookings";
import ProfileSettings from "./ProfileSettings";
import useGetProfile from "../../Hooks/useFetchData";
import { BASE_URL } from "../../../config";
import Loading from "../../Components/Loader/Loading";
import Error from "../../Components/Error/Error";
import { toast } from "react-toastify";

function MyAccount() {
  const { dispatch, token } = useContext(authContext);
  const [tab, setTab] = useState("bookings");
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);
  console.log(userData, "userData");

  const handleDelete = async (userID) => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        const response = await fetch(`${BASE_URL}/users/${userID}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const result = await response.json();
          toast.success(result.message);
          dispatch({ type: "DELETE_USER" });
        } else {
          const errorData = await response.json();
          toast.error(`Failed to delete account: ${errorData.message}`);
        }
      } catch (err) {
        console.error(err);
        toast.error("Failed to delete account.");
      }
    }
  };

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {loading && !error && <Loading />}

        {error && !loading && <Error errMessage={error} />}

        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-10">
            <div className="pb-[50] px-[30px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-primaryColor">
                  <img
                    src={userData.photo}
                    alt=""
                    className="w-full h-full rounded-full"
                  />
                </figure>
              </div>

              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                  {userData.name}
                </h3>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  {userData.email}
                </p>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  <span className="ml-2 text-headingColor text-[22px] leading-8">
                    {userData.bloodType}
                  </span>
                </p>
              </div>
              <div className="mt-[50px] md:mt-[100px]">
                <button
                  onClick={handleLogout}
                  className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
                >
                  Log Out
                </button>
                <button
                  onClick={() => handleDelete(userData._id)}
                  className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white"
                >
                  Delete Account
                </button>
              </div>
            </div>

            <div className="md:col-span-2 md:px-[30px]">
              <div>
                <button
                  onClick={() => setTab("bookings")}
                  className={` ${
                    tab === "bookings" &&
                    "bg-primaryColor text-white font-normal"
                  } p-2 mr-5 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  My Bookings
                </button>
                <button
                  onClick={() => setTab("settings")}
                  className={` ${
                    tab === "settings" &&
                    "bg-primaryColor text-white font-normal"
                  } py-2 px-5 rounded-md text-headingColor font-semibold text-[16px] leading-7 border border-solid border-primaryColor`}
                >
                  Profile Settings
                </button>
              </div>

              {tab === "bookings" && <MyBookings />}

              {tab === "settings" && <ProfileSettings user={userData} />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default MyAccount;
