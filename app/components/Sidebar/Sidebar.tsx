import React from "react";

const Sidebar = () => {
  return (
    <div className="p-5 bg-zinc-950 shadow-lg rounded-md mt-4">
      <h3 className="text-xl font-semibold text-zinc-200 mb-3 pb-5 border-b-[1px] border-zinc-700 uppercase">
        vidéo d&#39;explication
      </h3>
      <video width="0" className="w-full" height="240" controls preload="none">
        <source src="/path/to/video.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
      </video>
    </div>
  );
};

export default Sidebar;
