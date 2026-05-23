import { FlatList, View, Text } from "react-native";

import CadaProduto from './Produto'
import Style from './estiloProd'
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#1565C0',
    marginBottom: 12
  },
  headerText: {
    fontSize: 22,
    fontFamily: 'RobotoFlex',
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  introText: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    color: '#333333',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify'
  }
});

export default function Index({itens}:any){
    return <View style={Style.corFundo}>
                <View style={styles.header}>
                  <Text style={styles.headerText}>{itens.titulo}</Text>
                </View>
                <Text style={styles.introText}>
                  {"Serviços\nAtuamos em várias áreas de Restauração Predial, com parcerias e acesso à matéria-prima de\nalta qualidade, você tem a maior gama de opções e benefícios para cuidar do seu condomínio."}
                </Text>
                <FlatList
                    data={itens.lista}
                    renderItem={({item})=> <CadaProduto produto={item} />}
                    keyExtractor={(item: any) => item.id.toString()}/>
            </View>
}