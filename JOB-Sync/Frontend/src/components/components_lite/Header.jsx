import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    if (query.trim() !== "") {
      dispatch(setSearchedQuery(query));
      navigate("/browse");
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#f8f7ff] to-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#f1f1f1] text-[#d9534f] rounded-full font-medium text-sm shadow-sm">
          <span className="text-[#614232] text-lg"><PiBuildingOfficeBold /></span>
          No.1 Job Sync Platform
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-800">
          Search, Apply &<br />
          Land Your <span className="text-[#6A38C2]">Dream Job</span>
        </h1>

        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Start your job hunt for life-changing career opportunities. Explore openings in your chosen field and get hired with ease.
        </p>

        <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-md w-full sm:w-[70%] mx-auto border border-gray-200">
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your dream job..."
            className="flex-1 px-3 py-2 bg-transparent outline-none text-gray-700"
          />
          <Button onClick={searchjobHandler} className="rounded-full bg-[#6A38C2] hover:bg-[#5a2ea8] text-white px-4 py-2">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
