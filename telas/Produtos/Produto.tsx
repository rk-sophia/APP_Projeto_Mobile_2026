import { Card } from "react-native-paper";
import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Texto from '../../componentes/Texto'
import Style from './estiloProd'

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5
  },
  textContainer: {
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icone: {
    marginRight: 10,
  },
  titulo: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 6,
    fontSize: 16,
    flex: 1,
  },
  descricao: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20
  },
  cardBlue: {
    backgroundColor: '#001F3F'
  },
  cardOrange: {
    backgroundColor: '#FF8C42'
  }
});

export default function Produto({produto:{id,nome,imagem,descricao,cor,icone}}:any){
    const isBlue = cor === "#001F3F";
    
    return <Card mode='elevated' style={[styles.card, isBlue ? styles.cardBlue : styles.cardOrange]}>
        <Card.Cover source={imagem}/>
        <View style={styles.textContainer}>
            <View style={styles.headerContainer}>
                {icone && (
                    <MaterialCommunityIcons 
                        name={icone} 
                        size={24} 
                        color="#FFFFFF"
                        style={styles.icone}
                    />
                )}
                <Texto style={styles.titulo}>{nome}</Texto>
            </View>
            <Texto style={styles.descricao}>{descricao}</Texto>
        </View>
    </Card>
}