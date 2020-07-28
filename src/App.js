import React from 'react';

// cách import ngắn gọn, xem file './components/index.js'
import { Cards, CountryPicker, Chart } from './components';

import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/image.png'

class App extends React.Component {

    state = {
        data: {},
        country: ''
    }

    // bat buoc phai co async, await
    async componentDidMount() {
        const fetchedData = await fetchData();
        // console.log(fetchedData);
        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        // console.log(fetchedData);
        // console.log(country);
        this.setState({ data: fetchedData, country: country })
    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img src={coronaImage} alt="coronaImage" className={styles.image} />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}
export default App;