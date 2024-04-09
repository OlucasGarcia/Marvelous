import React from "react-native";
import { ScrollView } from "react-native";
import { MOVIES } from "../../dataset/movies";
import Card from "../card";
import styles from "../card/styles";

const List = ({ navigation }) => {
    const navegar = ( filme ) => {
        navigation.navigate('Details', { filme });
    }

    return (
        <ScrollView 
        style={styles.container}
        horizontal={true}
        >
            {
                MOVIES.map(
                    (movie) => {
                        return <Card
                            key={movie.title}
                            movie={movie}
                            onPress={() => navegar(movie)}
                        />
                    }
                )
            }
        </ScrollView>
    );
}

export default List;