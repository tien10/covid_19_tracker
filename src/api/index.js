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

export const fetchData = async () => {
    try {
        // code ban dau de test xem goi api duoc chua
        // const response = axios.get(url);
        // return response;

        // lấy ra những thứ cần thiết, không lấy hết: confirmed, recovered, deaths, lastUpdate
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {

    }
}