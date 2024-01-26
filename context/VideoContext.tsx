import axios from "axios";
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

type Video = {};

interface VideoContextProps {
  video: Video;
  category: string;
}

interface VideoProviderProps {
  children: ReactNode;
}

const VideoContext = createContext<VideoContextProps | undefined>(undefined);

export const VideoProvider: React.FC<VideoProviderProps> = ({ children }) => {
  const [videos, setVideos] = useState<Video>();

  useEffect(() => {
    const loadVideos = () => {
      axios
        .get("https://www.googleapis.com/youtube/v3")
        .then((videoRes) => {
          console.log(videoRes);
          setVideos(videoRes);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    loadVideos();
  }, []);

  

  return (
    <VideoContext.Provider value={{}}>
    {children} 
  </VideoContext.Provider>
  );
}

export const useVideo = (): VideoContextProps => {
  const context = useContext(VideoContext);
  if(!context){
    throw new Error('useVideo must be used within a VideoProvider');
  }
  return context;
}

