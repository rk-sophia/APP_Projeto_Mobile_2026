import { Card } from "react-native-paper";

import Texto from '../../componentes/Texto'
import Style from './estiloProd'

export default function Produto({produto:{id,nome,imagem,descricao}}:any){
    return <Card mode='elevated' style={Style.card}>
        <Card.Content>
            <Texto>{nome}</Texto>
            <Texto>{descricao}</Texto>
        </Card.Content>
        <Card.Cover source={imagem}/>
    </Card>
}