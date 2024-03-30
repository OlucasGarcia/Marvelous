import React from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native';
import List from '../../components/list';

const Home = () => {
    return (
        <ScrollView
        style={styles.container}
        >
            <List/>
        </ScrollView>
    );
}

export default Home;