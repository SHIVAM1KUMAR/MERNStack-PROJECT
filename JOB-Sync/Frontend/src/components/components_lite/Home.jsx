import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Header from "./Header";
import Categories from "./Categories";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { loading, error } = useGetAllJobs(); // Trigger data fetch
  const jobs = useSelector((state) => state.jobs.allJobs); // Access Redux state
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "Recruiter") {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <div className="bg-[#f9f9fb] text-gray-800">
      <Navbar />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Categories />

        {loading && (
          <div className="text-center py-10">
            <div className="animate-pulse text-lg text-gray-600">Loading jobs...</div>
          </div>
        )}

        {error && (
          <div className="text-center py-10">
            <p className="text-red-500 text-lg font-medium">Error: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#6A38C2]">Latest Job Listings</h2>
            <LatestJobs jobs={jobs} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
