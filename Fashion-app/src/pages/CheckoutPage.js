import React from 'react';
import { View, StyleSheet , Image} from 'react-native';

export const CheckoutPageScreen = () => {
  return (
    <View style={styles.container}>

        <View style={styles.checkoutHeader}>
            <Image source={require('../../assets/Logo.png')}/>

            <Image source={require('../../assets/Search.png')}/>
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        marginTop:80,
    }
});