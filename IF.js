import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { Marker } from 'react-native-maps';


/*
  IFCORD

  lat:-31.331721719026632,
  long:-54.07196811905036,
*/ 
const IF = ()=>{
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        initialRegion={{
          latitude: -31.331988721694138,
          longitude: -54.07184725073027,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0421,
        }}>
          <Marker
            coordinate={{
              latitude: -31.331988721694138,
              longitude: -54.07184725073027,
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

export default IF;