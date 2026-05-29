import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import Texto from '../componentes/Texto';
import cores from '../cores';

export default function TelaPerfil() {
  const [nome, setNome] = useState('Sophia R Keller');
  const [email, setEmail] = useState('sophia@repinte.com');
  const [whatsapp, setWhatsapp] = useState('(11) 98765-4321');
  const [isEditing, setIsEditing] = useState(false);
  const [fotoPerfil, setFotoPerfil] = useState(null); // novo estado

  const abrirCamera = async () => {
    // Solicita permissão para usar a câmera
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos de acesso à câmera para trocar sua foto.');
      return;
    }

    // Abre a câmera
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,   // permite recortar após tirar a foto
      aspect: [1, 1],        // recorte quadrado (ideal para foto de perfil)
      quality: 0.8,          // qualidade 80%
    });

    // Atualiza a foto se o usuário não cancelou
    if (!result.canceled) {
      setFotoPerfil(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.perfilContainer}>
        {/* Foto de Perfil */}
        <View style={styles.fotoContainer}>
          <Image
            source={fotoPerfil ? { uri: fotoPerfil } : require('../assets/logo.png')}
            style={styles.fotoPerfil}
          />
          <TouchableOpacity style={styles.btnCamera} onPress={abrirCamera}>
            <MaterialCommunityIcons name="camera" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Formulário */}
        <View style={styles.formContainer}>
          <View style={styles.fieldGroup}>
            <Texto style={styles.label}>Nome</Texto>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              editable={isEditing}
              placeholderTextColor="#CCCCCC"
            />
          </View>

          <View style={styles.fieldGroup}>
            <Texto style={styles.label}>Email</Texto>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              editable={isEditing}
              keyboardType="email-address"
              placeholderTextColor="#CCCCCC"
            />
          </View>

          <View style={styles.fieldGroup}>
            <Texto style={styles.label}>WhatsApp</Texto>
            <TextInput
              style={styles.input}
              value={whatsapp}
              onChangeText={setWhatsapp}
              editable={isEditing}
              keyboardType="phone-pad"
              placeholderTextColor="#CCCCCC"
            />
          </View>

          <TouchableOpacity
            style={styles.btnEditar}
            onPress={() => setIsEditing(!isEditing)}
          >
            <MaterialCommunityIcons
              name={isEditing ? "check" : "pencil"}
              size={20}
              color="#FFFFFF"
            />
            <Texto style={styles.btnEditarTexto}>
              {isEditing ? 'Salvar' : 'Editar Perfil'}
            </Texto>
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="dark" animated />
    </ScrollView>
  );
}

// ... styles permanecem idênticos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  perfilContainer: {
    paddingVertical: 24,
  },
  fotoContainer: {
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 16,
  },
  fotoPerfil: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#F5F5F5',
    borderWidth: 3,
    borderColor: '#001F3F',
  },
  btnCamera: {
    position: 'absolute',
    bottom: 0,
    right: '50%',
    marginRight: -80,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#001F3F',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  formContainer: {
    marginTop: 12,
  },
  fieldGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#001F3F',
    marginBottom: 8,
    fontFamily: 'RobotoFlex',
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#001F3F',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: 'RobotoFlex',
    color: '#000000',
  },
  btnEditar: {
    flexDirection: 'row',
    backgroundColor: '#001F3F',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  btnEditarTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    fontFamily: 'RobotoFlex',
  },
});
