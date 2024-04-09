import React, { TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { ScrollView, Image, Text } from "react-native";

//import do dataset
import { MOVIES_DETAILS } from "../../dataset/movies";

//import de icones e imagens
import Icon from "react-native-vector-icons/AntDesign";
import Marvelous from "../../../assets/marvelous_logo.png";

//import de componente de bibliotéca
import Swiper from "react-native-swiper";

const Details = ({ navigation, route}) => {
    const { filme } = route.params;
    const movie = MOVIES_DETAILS.find(
        movie => movie.title === filme.title);

    function goBack(){
        navigation.goBack();
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity style={styles.btn_back}
                onPress={goBack}
                >
                    <Icon
                        name="back"
                        size={30}
                        color="#EC1D24"
                    />
                </TouchableOpacity>
                <Image
                    style={styles.logo}
                    source={Marvelous}
                />
            </View>
            <Image
                style={styles.img}
                source={{
                    uri: movie.image
                }}
            />
            <View style={styles.vwTitle}>
                <Text style={styles.txtTitle}>
                    {movie.title}</Text>
                <Text style={[styles.txtTitle, styles.txtDate]}>
                    Data de lançamento: {movie.date}
                </Text>
            </View>
            <br />
            <View style={styles.vwOverview}>
                <Text style={styles.txtOverview}>
                    {movie.overview}
                </Text>
            </View>
            <br />
            <View>
                <Text style={[styles.txtTitle, styles.txtSwiper]}>
                    Confira mais imagens:
                </Text>
                <Swiper
                    style={styles.swiper}
                    loop={true}
                    showsPagination={false}
                    showsButtons={true}
                >
                    {
                        movie.backdrops.map(
                            (img, index) =>
                                <View key={index}>
                                    <Image
                                        style={styles.img}
                                        source={{
                                            uri: img
                                        }} />
                                </View>
                        )
                    }

                </Swiper>
            </View>
        </ScrollView>
    );
}

export default Details;