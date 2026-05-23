import React, { useState } from "react";
import { Card } from "react-native-paper";
import { StyleSheet, View, Image, TouchableOpacity, Modal, Alert } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PagerView from "react-native-pager-view";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    backgroundColor: '#1565C0'
  },
  cardOrange: {
    backgroundColor: '#FF8C42'
  },
  botaoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  botao: {
    backgroundColor: '#1565C0',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    marginRight: 12,
  },
  textoBotao: {
    color: '#FFFFFF',
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
  nomeProduto: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1565C0',
    marginBottom: 12,
    textAlign: 'center',
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
    marginVertical: 16,
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
  closeButton: {
    alignSelf: 'center',
    marginTop: 16,
  }
});

export default function Produto({produto:{id,nome,imagem,descricao,cor,icone,slider}}:any){
    const isBlue = cor === "#1565C0";
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
                Alert.alert('Este serviço já está na sua Lista de Favoritados')
                return
            }

            //Inclui o novo produto
            listaDesejosNova.push(lista)

            //Atualiza o AsyncStorage
            await AsyncStorage.setItem('ListaDesejos', JSON.stringify(listaDesejosNova))
            Alert.alert('Serviço adicionado na Lista de Favoritados')
            console.log(listaDesejosNova)

        } else {
            //Não há lista, cria uma e inclui o produto clicado
            //Salva o produto no AsyncStorage
            await AsyncStorage.setItem('ListaDesejos', JSON.stringify([lista]))
            Alert.alert('Serviço adicionado na sua Lista de Favoritados.')
            console.log(lista)
        }
    }
    
    return <View>
                <Card mode='elevated' style={[styles.card, isBlue ? styles.cardBlue : styles.cardOrange]}>
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
                    <View style={styles.botaoContainer}>
                        <TouchableOpacity style={styles.botao} onPress={()=>acaoAbreFecha(true)}>
                            <Texto style={styles.textoBotao}>
                                <MaterialCommunityIcons name="information-outline" size={14} color="white"/> Detalhes
                            </Texto>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>addListaDesejos(id,nome,imagem,descricao)}>
                            <MaterialCommunityIcons name="heart-outline" size={28} color="#1565C0" />
                        </TouchableOpacity>
                    </View>
                </Card>

                <Modal animationType="fade" transparent={true} visible={statusModal}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            <Texto style={styles.nomeProduto}>{nome}</Texto>
                            <Texto style={styles.descProduto}>{descricao}</Texto>
                            {slider && slider.length > 0 ? (
                                <PagerView initialPage={0} style={styles.container}>
                                    {slider.map((img:any, index:any)=> (
                                        <View style={styles.page} key={index}>
                                            <Image source={img} style={styles.imagemSlider} resizeMode="contain"/>
                                        </View>
                                    ))}
                                </PagerView>
                            ) : (
                                <Image source={imagem} style={{...styles.imagemSlider, height: 250, marginVertical: 16}} resizeMode="contain"/>
                            )}
                            <TouchableOpacity onPress={()=>acaoAbreFecha(false)} style={styles.closeButton}>
                                <MaterialCommunityIcons name="close" size={32} color="#1565C0"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
           </View>
}