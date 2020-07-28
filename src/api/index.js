import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// bắt buộc phải có async, await. So sanh khi them async, await voi khong them async, await. App.js bat buoc phai co async, await
// export const fetchData = async () => {
//     try {
//         const response = await axios.get(url);
//         return response;
//     } catch (error) {

//     }
// }

export const fetchData = async (country) => {
    let changeableUrl = url;
    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }

    try {
        // code ban dau de test xem goi api duoc chua
        // const response = axios.get(url);
        // return response;

        // lấy ra những thứ cần thiết, không lấy hết: confirmed, recovered, deaths, lastUpdate
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name)
    } catch (error) {
        console.log(error);
    }
}