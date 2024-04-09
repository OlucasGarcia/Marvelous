import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 60,
    },
    logoImg: {
        width: 150,
        height: 40,
        marginHorizontal: 40,
    },
    icons: {
        marginLeft: 70,
    },
    line: {
        marginLeft: 15,
    },
    txtNome: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'arial',
        textTransform: 'uppercase',
        fontWeight: 600,
        marginBottom: -5,
    },

});

export default style;