import React from "react-native";
import styles from "./styles";
import { TouchableOpacity, Image } from "react-native";

const Card = ( props ) => {
    const { onPress, movie } = props;
    return (
        <TouchableOpacity
        style={styles.container}
        onPress={onPress}
        >
            <Image
            style={styles.img}
            source={{
                uri: movie.poster
            }}
            />
        </TouchableOpacity>
    );
}

export default Card;