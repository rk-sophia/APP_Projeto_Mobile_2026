//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity } from 'react-native';

//Ícones
import { MaterialCommunityIcons } from '@expo/vector-icons';

//Importação da Fonte
import { useFonts, RobotoFlex_400Regular } from "@expo-google-fonts/roboto-flex";
import { DeliusSwashCaps_400Regular } from "@expo-google-fonts/delius-swash-caps";

// //Áudio
// import { useAudioPlayer } from "expo-audio";

//Menu SOBRE
import TelaSobre from "./telas/Sobre"

//Componente de Texto
import Texto from "./componentes/Texto"

//Menu PRODUTOS
import TelaProduto from "./telas/Produtos/Index"
import ListaProdutos from "./telas/mocks/listaProdutos"

//Menu PERFIL
import TelaPerfil from "./telas/Perfil"

function MenuProdutos(){
  return <TelaProduto {...ListaProdutos}/>
}

//Função para execução do áudio
// function MenuAudio(){
  // const audioSource = require('./assets/audio-repinte.mp3');
  // const player = useAudioPlayer(audioSource);

  // //Configura o controle liga/desliga
  // const onOff = () => {
  //   if(player.playing) {
  //     player.pause();
  //   } else {
  //     if(player.currentTime >= player.duration) {
  //       player.seekTo(0);
  //     }
  //     player.play();
  //   }
  // }

//   return <TouchableOpacity onPress={onOff} style={{ 
//     paddingVertical: 12, 
//     paddingHorizontal: 16,
//     marginBottom: 8 
//   }}>
//               <Texto style={{ 
//                 color: '#1565C0', 
//                 fontWeight: 'bold',
//                 fontSize: 14,
//                 textAlign: 'center'
//               }}>🎧 {player.playing ? 'Pausar' : 'Áudio'}</Texto>
//           </TouchableOpacity>
// }

//MENU - BOTTOM TABS
const Tab = createBottomTabNavigator();

function Menu(){
  return <Tab.Navigator
            screenOptions={({route})=>({
              tabBarIcon:({focused, color, size})=>{
                let iconName: any;

                if(route.name==="Sobre"){
                  iconName = focused ? 'information' : 'information-outline';
                }else if(route.name==="Serviços"){
                  iconName = focused ? 'hammer-screwdriver' : 'hammer-screwdriver';
                }else if(route.name==="Perfil"){
                  iconName = focused ? 'account' : 'account-outline';
                }
                return <MaterialCommunityIcons name={iconName} size={size} color={color}/>
              },
              headerShown: false,
              tabBarActiveTintColor: '#1565C0',
              tabBarInactiveTintColor: '#CCCCCC',
            })}
          >
            <Tab.Screen name="Sobre" component={TelaSobre}/>
            <Tab.Screen name="Serviços" component={MenuProdutos}/>
            <Tab.Screen name="Perfil" component={TelaPerfil}/>
        </Tab.Navigator>
}

export default function App() {

  //Carrega a fonte Roboto Flex
  const [fonteCarregada] = useFonts({
    "RobotoFlex": RobotoFlex_400Regular
  });

  //Verifica se a fonte foi carregada
  if(!fonteCarregada){
    return <View />
  }

  return <NavigationContainer>
            <Menu />
            {/* <MenuAudio/> */}
        </NavigationContainer>
  
}