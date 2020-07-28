import React from 'react';

// cách import ngắn gọn, xem file './components/index.js'
import { Cards, CountryPicker, Chart } from './components';

import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {

    state = {
        data: {}
    }

    // bat buoc phai co async, await
    async componentDidMount() {
        const fetchedData = await fetchData();
        // console.log(fetchedData);
        this.setState({ data: fetchedData })
    }

    render() {
        return (
            <div className={styles.container}>
                <Cards data={this.state.data} />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}
export default App;