import React from 'react';
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const catalogueData = [
  {
    id: '1',
    items: [
      { id: 1, source: require('../../assets/dress1.png'), label: 'Office Wear', description: "reversible angora cardigan", price: "$120" },
      { id: 2, source: require('../../assets/dress2.png'), label: 'Black', description: 'reversible angora cardigan', price: '$120' },
    ],
  },
  {
    id: '2',
    items: [
      { id: 3, source: require('../../assets/dress3.png'), label: 'Church Wear', description: "reversible angora cardigan", price: "$120" },
      { id: 4, source: require('../../assets/dress4.png'), label: 'Lamerei', description: 'reversible angora cardigan', price: '$120' },
    ],
  },
  {
    id: '3',
    items: [
      { id: 5, source: require('../../assets/dress5.png'), label: '21Wn', description: "reversible angora cardigan", price: "$120" },
      { id: 6, source: require('../../assets/dress6.png'), label: 'Lopo', description: 'reversible angora cardigan', price: '$120' },
    ],
  },
  {
    id: '4',
    items: [
      { id: 7, source: require('../../assets/dress7.png'), label: '21Wn', description: "reversible angora cardigan", price: "$120" },
      { id: 8, source: require('../../assets/dress1.png'), label: 'Lame', description: 'reversible angora cardigan', price: '$120' },
    ],
  },
];

export const HomeScreen = () => {

    const navigation = useNavigation();

    const addToCart = async (product) => {
        
        try {
            const cartItems = await AsyncStorage.getItem('cartItems');
            if(cartItems == null){
                await AsyncStorage.setItem('cartItems', JSON.stringify(product));
            }else{
                let arrayItem;
                arrayItem = JSON.parse(cartItems);
                if (!Array.isArray(arrayItem)) {
                    arrayItem = Array(arrayItem);
                }

                const itemFound = arrayItem.filter(item => item.id == product.id);
                if (itemFound.length > 0) {
                    console.log("Product already exists. No need to save it again");
                }else{
                    arrayItem.push(product);
                    await AsyncStorage.setItem('cartItems', JSON.stringify(arrayItem));
                }
            }


        } catch (e) {
            // saving error
            console.error(e);
        }
    }


    const navigateToCart = () => {
        navigation.navigate('Checkout');
    }




    const renderItem = ({ item }) => (
      <View style={styles.catalogueRow}>
        {item.items.map((product, index) => (
          <View key={index}>
            <View>
                <Image style={styles.images} source={product.source} />
                
                <TouchableOpacity onPress={() => addToCart(product)}>
                    <Image style={styles.addToCart} source={require('../../assets/add_circle.png')}/>
                </TouchableOpacity>
            </View>  

            <View style={styles.imageWriting}>
                {product.label && <Text style={styles.imageLabel}>{product.label}</Text>}
                {product.description && <Text style={styles.imageDescription}>{product.description}</Text>}
                {product.price && <Text style={styles.imagePrice}>{product.price}</Text>}
            </View> 
            
          </View>
        ))}
      </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerImages}>
                <Image source={require('../../assets/Menu.png')} />

                <Image source={require('../../assets/Logo.png')}/>

                <View style={styles.innerImages}>
                <Image 
                source={require('../../assets/Search.png')}
                />
                
                <TouchableOpacity onPress={() => navigateToCart()}>
                    <Image style={styles.shoppingBagImage} source={require('../../assets/shoppingBag.png')}/>
                </TouchableOpacity>

                </View>

            </View>

            <View style={styles.secondHeader}>
                <Text style={styles.secondHeaderText}>OUR STORY</Text>

                <View style={styles.secondInnerImage}>
                <View style={styles.background}>
                    <Image source={require('../../assets/Listview.png')}/>
                </View>
                
                <View style={styles.background}>
                    <Image 
                    style={styles.filterImage}
                    source={require('../../assets/Filter.png')}
                    />
                </View>
                
                </View>
                
            </View>

            <FlatList
                data={catalogueData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.catalogue}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  headerImages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,

  },
  innerImages: {
    flexDirection: 'row',
  },
  shoppingBagImage: {
    marginLeft: 15
  },
  secondHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 25,
    paddingHorizontal: 17
  },
  secondInnerImage: {
    flexDirection: 'row',
  },
  
  background: {
    height: 40,
    width: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#f9f9f9',
  },
  secondHeaderText: {
    letterSpacing: 6, 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginTop: 10
  },
  catalogue: {
    paddingHorizontal: 15
  },
  catalogueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  images: {
    margin: 10
  },
  imageLabel: {
    textAlign: 'left',
    marginTop: 8,
    fontSize: 16,
  },
 imageDescription: {
    textAlign: 'left',
    marginTop: 4,
    fontSize: 14,
    color: '#888',
  },
  imagePrice: {
    textAlign: 'left',
    marginTop: 4,
    fontSize: 14,
    fontWeight: '600',
    color: '#f5680a'
  }, 
  addToCart: {
    position: 'absolute',
    right:20,
    bottom:20
  },
  imageWriting: {
    marginLeft: 12
  }
});

