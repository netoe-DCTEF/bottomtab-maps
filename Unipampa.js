import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Marker } from 'react-native-maps';


/*
    Unipampa

  lat: -31.30637,
  long:-54.064440
*/ 
const Unipampa = ()=>{
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        initialRegion={{
          latitude: -31.30637,
          longitude: -54.064440,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0421,
        }}>
          <Marker
            coordinate={{
              latitude: -31.30637,
              longitude: -54.064440,
             }}
            title={"Titulo do Marcador"}
            description={"Aqui vai mais informação"}
          ></Marker>
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Unipampa;