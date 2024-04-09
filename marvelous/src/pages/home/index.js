import React from 'react-native';
import styles from './styles';
import { ScrollView, View, Image } from 'react-native';

//import de componentes
import List from '../../components/list';

//import das imagens e ícones da página
import Icon from "react-native-vector-icons/AntDesign";
import Logo from "../../../assets/marvelous_logo.png";

const Home = ({ navigation  }) => {
    return (
        <ScrollView
            style={styles.container}
        >
            <View style={styles.nav}>
                <Image
                style={styles.logoImg}
                source={Logo}
                />
                <Icon
                style={styles.icons}
                name='user'
                size={35}
                color="#000000"
                />
                <Icon
                name='down'
                size={15}
                color="#000000"
                />
            </View>

            <View style={styles.line}>
                <p style={styles.txtNome}>
                    Todos os lançamentos:
                </p>
                <List 
                navigation={navigation}
                />
            </View>

            <View style={styles.line}>
                <p style={styles.txtNome}>
                    Capitão América:
                </p>
                <List 
                navigation={navigation}
                />
            </View>

            <View style={styles.line}>
                <p style={styles.txtNome}>
                    Animações:
                </p>
                <List 
                navigation={navigation}
                />
            </View>

        </ScrollView>
    );
}

export default Home;