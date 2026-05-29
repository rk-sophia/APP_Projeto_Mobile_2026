import React, {useState} from "react";
import { Card } from "react-native-paper";
import { View, TouchableOpacity, Modal, Image} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PagerView from "react-native-pager-view";

import Texto from '../../componentes/Texto';
import styles from '../Produtos/estiloProd';

export default function Item({prod:{id,nome,imagem,descricao,cor,slider}}:any){
    const isBlue = cor === '#1565C0';
    const estiloCard = [styles.card, isBlue ? styles.cardBlue : styles.cardOrange];

    const [statusModal, acaoAbreFecha] = useState(false)

    return <View>
                <Card mode='elevated' style={estiloCard}> 
                    <Card.Content>
                        <Texto style={styles.nomeProduto}>{nome}</Texto>
                    </Card.Content>
                    <Card.Cover source={imagem} style={styles.imagem}/>
                    <Card.Actions>
                        <TouchableOpacity style={styles.botao} onPress={()=>acaoAbreFecha(true)}>
                            <Texto style={styles.textoBotao}>
                                <MaterialCommunityIcons name="format-list-bulleted" size={12} color="#1565C0"/> Detalhes
                            </Texto>
                        </TouchableOpacity>
                    </Card.Actions>
                </Card>

                <Modal animationType="fade" transparent={true} visible={statusModal}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            <Texto style={styles.nomeProduto}>{nome}</Texto>
                            <Texto style={styles.descProduto}>{descricao}</Texto>
                            {/* <Image source={imagem} style={styles.imagemModal} resizeMode="contain"/> */}
                            {slider && slider.length > 0 ? (
                                <PagerView initialPage={0} style={styles.container}>
                                    {/* Monta o laço de repetição para as imagens do Slider */}
                                    {slider.map((img:any, index:any)=> (
                                        <View style={styles.page} key={index}>
                                            <Image source={img} style={styles.imagemSlider} resizeMode="contain"/>
                                        </View>
                                    ))}
                                </PagerView>
                            ) : (
                                <Image source={imagem} style={[styles.imagemSlider, { height: 250 }]} resizeMode="contain"/>
                            )}
                            <TouchableOpacity onPress={()=>acaoAbreFecha(false)}>
                                <MaterialCommunityIcons name="close" size={30} color="#fff"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
           </View>
}
