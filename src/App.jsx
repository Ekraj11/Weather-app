import React, {useEffect, useState} from "react";
import Sidebar from "./Sidebar";
import RightBar from "./Rightbar";

const App = () => { 

  return (
    <div className="bg-black min-h-screen flex items-center justify-center px-4 py-8">
      <div style = {{
          backgroundImage: `url('https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`
          }}
          className="flex w-full max-w-8xl min-h-[90vh] bg-cover rounded-lg bg-center"
        >
        {/* Left Section */}
        <Sidebar />

        {/* Right Section */}
        <RightBar />
      </div>
    </div>
  );
};

export default App;
