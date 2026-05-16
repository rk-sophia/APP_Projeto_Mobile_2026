//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

//Ícones
import { MaterialCommunityIcons } from '@expo/vector-icons';

//Importação da Fonte
import { useFonts, RobotoFlex_400Regular } from "@expo-google-fonts/roboto-flex";
import { DeliusSwashCaps_400Regular } from "@expo-google-fonts/delius-swash-caps";

//Menu SOBRE
import TelaSobre from "./telas/Sobre"

//Menu PRODUTOS
import TelaProduto from "./telas/Produtos/Index"
import ListaProdutos from "./telas/mocks/listaProdutos"

//Menu PERFIL
import TelaPerfil from "./telas/Perfil"

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
                  iconName = focused ? 'information' : 'information-outline';
                }else if(route.name==="Produtos"){
                  iconName = focused ? 'hammer-screwdriver' : 'hammer-screwdriver';
                }else if(route.name==="Perfil"){
                  iconName = focused ? 'account' : 'account-outline';
                }
                return <MaterialCommunityIcons name={iconName} size={size} color={color}/>
              },
              headerShown: false,
              tabBarActiveTintColor: '#001F3F',
              tabBarInactiveTintColor: '#CCCCCC',
            })}
          >
            <Tab.Screen name="Sobre" component={TelaSobre}/>
            <Tab.Screen name="Produtos" component={MenuProdutos}/>
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
        </NavigationContainer>
  
}
