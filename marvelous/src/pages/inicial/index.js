import React, { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { ScrollView, Image, Text } from "react-native";

//import das imagens da página
import Logo from "../../../assets/marvelous_logo.png";
import Perfil from "../../../assets/perfilFoto.jpg"

const Inicial = ({ navigation }) => {

    function next(){
        navigation.navigate("Home");
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.vwLogo}>
                <Image
                    style={styles.logo}
                    source={Logo}
                />
            </View>
            <View style={styles.vwPerfil}>
                <TouchableOpacity 
                style={styles.btnPerfil}
                onPress={next}
                >
                    <Image
                        style={{
                            width: 90,
                            height: 90,
                            borderRadius: 80
                        }}
                        source={Perfil}
                    />
                </TouchableOpacity>
                <Text style={styles.txtPerfil}>
                    Meu Perfil
                </Text>
            </View>

        </ScrollView>
    )
}

export default Inicial;