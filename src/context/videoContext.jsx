import { createContext, useEffect } from "react";
import { useState } from "react";
import { categories } from "../constants";
import { getData } from "../helpers/getData";
// 1) context temelini oluştur
export const VideoContext = createContext();
// 2) Sağlayıcı tanımla
export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // kategori her değiştiğinde api'den veriyi al
  useEffect(() => {
    getData("/home").then((data) => console.log(data));
  }, [selectedCategory]);
  return (
    <VideoContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </VideoContext.Provider>
  );
};
