import axios from 'axios';

// yapılan her istekte geçerli olmasını istediğimiz ayarları tanımladığımız bir axios örneği oluşturalım.

const api = axios.create({
    baseURL: 'https://yt-api.p.rapidapi.com',
    params: {
        geo: 'TR',
        lang: 'tr',
    },
    headers: {
        'X-RapidAPI-Key': 'acd257a390mshc36fbf0e17b4a24p198b66jsnf222ca17be11',
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    },
});

export default api;

// Parametre olarak aldığı url'e istek atıp geriye
// elde ettiği verlileri döndüren
