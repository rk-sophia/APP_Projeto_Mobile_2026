import React, {useState} from "react";
import { Card } from "react-native-paper";
import { View, TouchableOpacity, Modal, Image, Alert} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PagerView from "react-native-pager-view";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Texto from '../../componentes/Texto';
import styles from './estilosProdutos';

export default function Item({prod:{id,nome,imagem,descricao,slider}}:any){
    
    const [statusModal, acaoAbreFecha] = useState(false)
    
    //Função para salvar o produto na Lista de Desejos
    async function addListaDesejos(id:any,nome:any,imagem:any,descricao:any){
        const lista = {id, nome, imagem, descricao}

        //Verifica se o produto já existe na lista
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');

        if(listaDesejosSalva!==null){
            //Já existe uma lista, adiciona mais um produto
            const listaDesejosNova = JSON.parse(listaDesejosSalva);

            //Verifica se o produto já está na Lista de Desejos
            const jaExiste = listaDesejosNova.some((item:any)=> item.id===id)
            if(jaExiste){
                Alert.alert('Este produto já está na sua Lista de Desejos')
                return
            }

            //Inclui o novo produto
            listaDesejosNova.push(lista)

            //Atualiza o AsyncStorage
            await AsyncStorage.setItem('ListaDesejos', JSON.stringify(listaDesejosNova))
            Alert.alert('Produto adicionado na Lista de Desejos')
            console.log(listaDesejosNova)

        } else {
            //Não há lista, cria uma e inclui o produto clicado
            //Salva o produto no AsyncStorage
            await AsyncStorage.setItem('ListaDesejos', JSON.stringify([lista]))
            Alert.alert('Produto adicionado na sua Lista de Desejos.')
            console.log(lista)
        }
    }

    return <View>
                <Card mode='elevated' style={styles.card}> 
                    <Card.Content>
                        <Texto style={styles.nomeProduto}>{nome}</Texto>
                    </Card.Content>
                    <Card.Cover source={imagem} style={styles.imagem}/>
                    <Card.Actions>
                        <TouchableOpacity style={styles.botao} onPress={()=>acaoAbreFecha(true)}>
                            <Texto style={styles.textoBotao}>
                                <MaterialCommunityIcons name="list" size={12} color="white"/> Detalhes
                            </Texto>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>addListaDesejos(id,nome,imagem,descricao)}>
                            <MaterialCommunityIcons name="heart-outline" size={30} color="#1565C0" />
                        </TouchableOpacity>
                    </Card.Actions>
                </Card>

                <Modal animationType="fade" transparent={true} visible={statusModal}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            <Texto style={styles.nomeProduto}>{nome}</Texto>
                            <Texto style={styles.descProduto}>{descricao}</Texto>
                            {/* <Image source={imagem} style={styles.imagemModal} resizeMode="contain"/> */}
                            <PagerView initialPage={0} style={styles.container}>
                                {/* Monta o laço de repetição para as imagens do Slider */}
                                {slider.map((img:any, index:any)=> (
                                    <View style={styles.page} key={index}>
                                        <Image source={img} style={styles.imagemSlider} resizeMode="contain"/>
                                    </View>
                                ))}
                            </PagerView>
                            <TouchableOpacity onPress={()=>acaoAbreFecha(false)}>
                                <MaterialCommunityIcons name="close" size={30} color="#1565C0"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
           </View>
}
