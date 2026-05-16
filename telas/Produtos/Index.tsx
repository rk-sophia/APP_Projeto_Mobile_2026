import { FlatList, View, Text } from "react-native";

import CadaProduto from './Produto'
import Style from './estiloProd'
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#001F3F',
    marginBottom: 12
  },
  headerText: {
    fontSize: 22,
    fontFamily: 'RobotoFlex',
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default function Index({itens}:any){
    return <View style={Style.corFundo}>
                <View style={styles.header}>
                  <Text style={styles.headerText}>{itens.titulo}</Text>
                </View>
                <FlatList
                    data={itens.lista}
                    renderItem={({item})=> <CadaProduto produto={item} />}
                    keyExtractor={(item: any) => item.id.toString()}/>
            </View>
}