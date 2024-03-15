import { createContext } from "react";
import { useState } from "react";
// 1) context temelini oluştur
export const VideoContext = createContext();
// 2) Sağlayıcı tanımla
export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <VideoContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </VideoContext.Provider>
  );
};
