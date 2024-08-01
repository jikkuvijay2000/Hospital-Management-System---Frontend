/* eslint-disable no-unused-vars */
import React from "react";
import useFetchData from "../../Hooks/useFetchData";
import { BASE_URL } from "../../../config";
import DoctorCard from "./../../Components/Doctors/DoctorCard";
import Loading from "../../Components/Loader/Loading";
import Error from "../../Components/Error/Error";

function MyBookings() {
  const {
    data: appointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);
  return (
    <div>
      {loading && !error && <Loading />}

      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 ">
          {appointments.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor._id} />
          ))}

          {!loading && !error && appointments.length === 0 && (
            <h2 className="mt-5 text-center text-primaryColor leading-7 text-[20px] font-semibold">
              You dont have any appointments!
            </h2>
          )}
        </div>
      )}
    </div>
  );
}

export default MyBookings;
