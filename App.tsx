//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

//Ícones
import Ionicons from '@expo/vector-icons/Ionicons';

//Importação da Fonte
import { useFonts, DeliusSwashCaps_400Regular } from "@expo-google-fonts/delius-swash-caps"

//Menu SOBRE
import TelaSobre from "./telas/Sobre"

//Menu PRODUTOS
import TelaProduto from "./telas/Produtos/Index"
import ListaProdutos from "./telas/mocks/listaProdutos"

function MenuProdutos(){
  return <TelaProduto {...ListaProdutos}/>
}

//MENU - BOTTOM TABS
const Tab = createBottomTabNavigator();

function Menu(){
  return <Tab.Navigator
            screenOptions={({route})=>({
              tabBarIcon:({focused, color, size})=>{
                let iconName: any;

                if(route.name==="Sobre"){
                  iconName = focused ? 'paw' : 'paw-outline';
                }else if(route.name==="Produtos"){
                  iconName = focused ? 'bag' : 'bag-outline';
                }else if(route.name==="Perfil"){
                  iconName = focused ? 'person' : 'person-outline';
                }
                return <Ionicons name={iconName} size={size} color={color}/>
              },
              headerShown: false,
              tabBarActiveTintColor: 'purple',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Sobre" component={TelaSobre}/>
            <Tab.Screen name="Produtos" component={MenuProdutos}/>
            <Tab.Screen name="Perfil" component={TelaSobre}/>
        </Tab.Navigator>
}

export default function App() {

  //Carrega a fonte
  const [fonteCarregada] = useFonts({"FontePadrao": DeliusSwashCaps_400Regular});

  //Verifica se a fonte foi carregada
  if(!fonteCarregada){
    return <View />
  }

  return <NavigationContainer>
            <Menu />
        </NavigationContainer>
  
}
