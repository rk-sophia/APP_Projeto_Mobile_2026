import { StyleSheet } from "react-native";

const estilosProd = StyleSheet.create({
    corFundo: {
        backgroundColor: "#FFFFFF",
        paddingBottom: 50,
        paddingTop: 40,
    },
    card: {
        width: "90%",
        margin: 5,
        alignSelf: "center",
        borderWidth: 2,
        borderColor: "#001F3F",
        borderRadius: 8,
        overflow: 'hidden',
    },
    cardBlue: {
        backgroundColor: "#1565C0",
    },
    cardOrange: {
        backgroundColor: "#FF8C42",
    },
    nomeProduto: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    imagem: {
        minHeight: 180,
        backgroundColor: '#F2F2F2',
    },
    botao: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 6,
        marginRight: 12,
    },
    textoBotao: {
        color: '#1565C0',
        fontWeight: 'bold',
        fontSize: 14,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modal: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 20,
        width: '90%',
        maxHeight: '80%',
    },
    descProduto: {
        fontSize: 14,
        color: '#333333',
        marginBottom: 16,
        lineHeight: 20,
        textAlign: 'justify',
    },
    container: {
        height: 250,
        marginBottom: 16,
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
    },
    imagemSlider: {
        width: '100%',
        height: '100%',
    },
})

export default estilosProd;
