import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#1E1E1E',
    },
    vwLogo: {
        height: 60,
        justifyContent: 'center',
        marginVertical: 20,
    },
    logo: {
        width: 180,
        height: 50,
        marginHorizontal: 40,
        alignSelf: 'center'
    },
    vwPerfil: {
        marginVertical: 200,
    },
    btnPerfil: {
        borderRadius: 80,
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: 'white'
    },
    txtPerfil: {
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
        textTransform: 'uppercase',
        fontWeight: 700,
    }
})

export default styles;