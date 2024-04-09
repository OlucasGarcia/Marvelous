import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#1E1E1E',
        color: 'white'
    },
    nav: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        width: 150,
        height: 40,
        alignSelf: 'center',
    },
    img: {
        width: '100%',
        height: 220,
    },
    vwTitle: {
        padding: 10,
        width: '100%',
        height: 80,
        gap: 5,
        alignSelf: 'center',

    },
    txtTitle: {
        fontSize: 22,
        color: 'white',
        fontWeight: 700,
        textTransform: 'uppercase',
    },
    txtDate: {
        fontSize: 16,
    },
    vwOverview: {
        padding: 10,
        width: '100%',
        alignSelf: 'center',
        marginVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#f1f1f1',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
    },
    txtOverview: {
        fontSize: 16,
        fontWeight: 500,
        color: 'white',
    },
    txtSwiper: {
        marginHorizontal: 10,
        textAlign: 'center',
    },
    swiper: {
        height: 250,
        marginVertical: 20,
    }

});

export default styles;