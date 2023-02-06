import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import styles from './stylesheet'

const Mapa = () => {

const [position, setPosition] = useState({
  latitude: -31.308840,
  longitude: -54.113702,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
});
const [title, setTitle] = useState("");
const [descricao, setDescricao] = useState("");


const enviarDados=()=>{}

  return (
          <View style={styles.container}>
          <MapView style={styles.mapaClicavel}
            region={position}
            onPress={e =>setPosition({...position,
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
            latitudeDelta:e.nativeEvent.coordinate.latitudeDelta,
            longitudeDelta:e.nativeEvent.coordinate.longitudeDelta
            })
            }>

            <Marker
               coordinate={position}
              title={title}
              description={descricao}
            />
          </MapView>


  <Text>Latitude : {position.latitude}</Text>
  <Text>Longitude : {position.longitude}</Text>
      <TextInput
          placeholder="Título:"
          value={title}
          onChangeText={title => setTitle(title)}
          style={styles.txtareaLayout}
        />
        <TextInput
          placeholder="Descrição"
          value={descricao}
          onChangeText={descricao => setDescricao(descricao)}
          style={styles.txtareaLayout}
        />
         <TouchableOpacity
          onPress={() => {enviarDados}}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Salvar</Text>
        </TouchableOpacity>
  </View>
  );
};

export default Mapa;