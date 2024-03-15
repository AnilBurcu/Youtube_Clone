import axios from "axios";

// İstek için gerekli ayarlar
const options = {
    headers: {
        'X-RapidAPI-Key': 'acd257a390mshc36fbf0e17b4a24p198b66jsnf222ca17be11',
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
};

// yapılan bütün isteklerin ortak olan başlangıç kısmı

axios.defaults.baseURL = 'https://yt-api.p.rapidapi.com/'


// Parametre olarak aldığı url'e istek atıp geriye
// elde ettiği verlileri döndüren

export const getData = async (endPoint) => {
    // api isteği
    try {
        const response = await axios.get(endPoint, options)
        // fonksiyonun çağrıldığı yere veriyi döndür
        return response.data
    } catch (error) {
        console.log(`Verileri çekerken bir sorun oluştu: ${error}`)
    }
}