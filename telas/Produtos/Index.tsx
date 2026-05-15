import { FlatList, View } from "react-native";

import CadaProduto from './Produto'
import Style from './estiloProd'

export default function Index({itens}:any){
    return <View style={Style.corFundo}>
                <FlatList
                    data={itens.lista}
                    renderItem={({item})=> <CadaProduto produto={item} />}
                    keyExtractor={itens.lista.id}/>
            </View>
}