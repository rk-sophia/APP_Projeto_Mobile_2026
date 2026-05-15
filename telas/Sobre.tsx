import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';

//Componente de Texto
import Texto from '../componentes/Texto'

export default function Sobre() {

  //Indica o vídeo e coloca ele em loop
  const player = useVideoPlayer('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', player => {
      player.loop = true
      //player.play()
  })

  return (
    <ScrollView style={styles.container}>
      
      <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain"/>
      
      <Texto estiloEspecifico={styles.texto}>A Sil Fazendo Arte é uma empresa que começou durante a pandemia de 2020 para distração e relaxamento de sua proprietária, Silvia, porém o dom dela não passou despercebido e começou a chamar atenção dos familiares, amigos, amigos dos amigos, familiares dos amigos e por aí seguiu!
      {'\n'}{'\n'}
      Hoje ela tem clientes em várias cidades, estados e até de outro país! 
      {'\n'}
      Todos ficam encantados com as artes que ela faz!!!!
      {'\n'}
      Todos os produtos são feitos com muito carinho e dedicação e os atendimentos são feitos apenas por WhatsApp ou Instagram.
      {'\n'}{'\n'}
      Veja como funciona a produção: o auxiliar Tony, escolhe criteriosamente qual fita deve ser utilizada.
      </Texto>
      
      <Image source={require('../assets/escolha_fitas.jpeg')} style={styles.imagem} resizeMode="contain"/>
      
      <StatusBar style="light" animated />

      <VideoView player={player} style={styles.video} allowsPictureInPicture/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9900CC',
    paddingHorizontal:16,
  },
  texto:{
    color: 'white',
    paddingVertical: 12,
  },
  imagem:{
    height: 350,
    alignSelf: "center",
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  video: {
    width: 350,
    height: 275,
    alignSelf: "center",
  },
});