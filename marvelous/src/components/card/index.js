import React from "react-native";
import styles from "./styles";
import { View, Image } from "react-native";

const Card = ( props ) => {
    const { onPress, movie} = props;
    return (
        <View
        style={styles.container}
        onPress={onPress}
        >
            <Image
            style={styles.img}
            source={{
                uri: movie.poster
            }}
            />
        </View>
    );
}

export default Card;