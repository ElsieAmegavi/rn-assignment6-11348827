import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.headerImages}>
            <Image source={require('./assets/Menu.png')} />

            <Image source={require('./assets/Logo.png')}/>

            <View style={styles.innerImages}>
            <Image 
              source={require('./assets/Search.png')}
            />
            <Image 
              style={styles.shoppingBagImage}
              source={require('./assets/shoppingBag.png')}
            />
            </View>

          </View>

          <View style={styles.secondHeader}>
            <Text></Text>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 80,
    paddingHorizontal: 30,
   
  },
  headerImages: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  innerImages: {
    flexDirection: 'row',
  },
  shoppingBagImage: {
    marginLeft: 15
  }
});
