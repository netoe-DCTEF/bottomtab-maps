import * as React from 'react';
import { Text, View, Image, ImagePickerIOS } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './stylesheet';
import IF from './IF';
import Mapa from './Mapa';
import Unipampa from './Unipampa';

function IFScreen() {
  return <IF></IF>;
}


function UnipampaScreen() {
  return <Unipampa></Unipampa>;
}


function MapaScreen() {
  return <Mapa></Mapa>;
}



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="IF" component={IFScreen}
          options={{
            tabBarIcon: () => (<Image source={require("./assets/favicon.png")}
              style={styles.icons} />)
          }} />
        <Tab.Screen name="Unipampa" component={UnipampaScreen}
          options={{
            tabBarIcon: () => (<Image source={require("./assets/favicon.png")}
              style={styles.icons} />)
          }} />
        <Tab.Screen name="Mapa" component={MapaScreen}
          options={{
            tabBarIcon: () => (<Image source={require("./assets/favicon.png")}
              style={styles.icons} />)
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}