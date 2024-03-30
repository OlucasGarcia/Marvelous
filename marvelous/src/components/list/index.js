import React from "react-native";
import { ScrollView } from "react-native";
import { MOVIES } from "../../dataset/movies";
import Card from "../card";
import styles from "../card/styles";

const List = () => {
    return (
        <ScrollView 
        style={styles.container}
        >
            {
                MOVIES.map(
                    (movie) => {
                        return <Card
                            key={movie.title}
                            movie={movie}
                        />
                    }
                )
            }
        </ScrollView>
    );
}

export default List;