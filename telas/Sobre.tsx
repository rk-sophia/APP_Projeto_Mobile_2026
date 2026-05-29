import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';

//Componente de Texto
import Texto from '../componentes/Texto'

export default function Sobre() {

  //Indica o vídeo e coloca ele em loop
  const player = useVideoPlayer('https://repinte.com.br/wp-content/uploads/2026/04/Video-25-anos-site-correto.mp4', player => {
      player.loop = true
      //player.play()
  })

  return (
    <ScrollView style={styles.container}>
      
      <Image source={require('../assets/adaptive-icon.png')} style={styles.logo} resizeMode="contain"/>
      
      <VideoView player={player} style={styles.video} allowsPictureInPicture/>

      <Texto estiloEspecifico={styles.texto}>Bem-vindo à Repinte! Somos uma empresa especializada em restauração predial e serviços de pintura profissional.
      {'\n'}{'\n'}
      Com mais de uma década de experiência, oferecemos os melhores serviços em repintura, texturização, impermeabilização e restauração de fachadas.
      {'\n'}{'\n'}
      Cada projeto é executado com dedicação e atenção aos detalhes, garantindo qualidade e durabilidade.
      {'\n'}{'\n'}
      Nossas equipes são treinadas e preparadas para entregar resultados excepcionais em todos os trabalhos realizados.
      {'\n'}{'\n'}
      Transformamos seus espaços com profissionalismo e compromisso!
      </Texto>
      
      <Image source={require('../assets/work.png')} style={styles.imagem} resizeMode="contain"/>
      
      <StatusBar style="dark" animated />


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8c7a8',
    paddingHorizontal:16,
  },
  texto:{
    color: '#000000',
    paddingVertical: 12,
    fontSize: 16,
    lineHeight: 24,
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