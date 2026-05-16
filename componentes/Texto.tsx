import { Text, StyleSheet } from "react-native";

export default function Texto({children, estiloEspecifico, style}: any){
    return <Text style={[estilos.padrao, estiloEspecifico, style]}>{children}</Text>
}

const estilos=StyleSheet.create({
    padrao: {
        fontFamily: 'RobotoFlex',
        fontSize: 16,
        color: '#000000',
        textAlign: "justify",
        lineHeight: 24,
    }
})