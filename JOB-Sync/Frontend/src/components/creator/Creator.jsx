import React from 'react';
import Navbar from '../components_lite/Navbar';

const Creator = () => {
  return (
    <div>
      <Navbar />

      <div className="text-center p-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Meet the Creators</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Shivam Kumar */}
          <ProfileCard
            name="Shivam Kumar"
            img="https://i.pravatar.cc/300?img=10"
            description="Shivam Kumar is a Full Stack Developer who specializes in the MERN stack. He played a key role in building both the frontend and backend of this job portal. His strong knowledge of JavaScript and passion for clean architecture drove the technical direction of this project."
            reg="211101250XX"
            role="Full Stack Developer"
          />

          {/* Kundan Kumar */}
          <ProfileCard
            name="Kundan Kumar"
            img="https://i.pravatar.cc/300?img=12"
            description="Kundan Kumar contributed as a Frontend Developer with a focus on creating responsive UI using React and Tailwind CSS. His keen eye for detail ensured that every component matched the user experience expectations."
            reg="211101250XX"
            role="Frontend Developer"
          />

          {/* Yaswant Yadav */}
          <ProfileCard
            name="Yaswant Yadav"
            img="https://i.pravatar.cc/300?img=13"
            description="Yaswant Yadav handled the backend integration, creating robust API endpoints and ensuring smooth communication between the client and server. His work on authentication and database modeling added core functionality to the app."
            reg="211101250XX"
            role="Backend Developer"
          />

          {/* Yash Raj Yadav */}
          <ProfileCard
            name="Yash Raj Yadav"
            img="https://i.pravatar.cc/300?img=15"
            description="Yash Raj Yadav was responsible for designing the visual flow of the application. As a UI Designer, he brought simplicity and elegance to the overall layout and interaction of the portal."
            reg="211101250XX"
            role="UI Designer"
          />
        </div>
      </div>
    </div>
  );
};

const ProfileCard = ({ name, img, reg, role, description }) => (
  <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
    <img
      src={img}
      alt={name}
      className="mx-auto rounded-full h-32 w-32 object-cover mb-4 border-2 border-blue-500"
    />
    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
    <p className="text-gray-500 text-sm mb-1">{reg}</p>
    <p className="text-blue-600 text-sm font-medium mb-4">{role}</p>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default Creator;
