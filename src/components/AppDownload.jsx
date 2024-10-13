import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div id="app_download" className="app_download mt-8 ">
      <p className="text-2xl font-semibold px-4">
        For better experience, download <br /> Our App on
      </p>
      <div className="app_download_platforms flex gap-4 mt-4 cursor-pointer">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
