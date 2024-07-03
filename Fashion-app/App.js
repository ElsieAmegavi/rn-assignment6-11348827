import React from 'react';
import { StyleSheet, View, Image, Text, FlatList } from 'react-native';

const catalogueData = [
  {
    id: '1',
    items: [
      { source: require('./assets/dress1.png'), label: 'Office Wear', description: "reversible angora cardigan", price: "$120" },
      { source: require('./assets/dress2.png'), label: 'Black', description: 'reversible angora cardigan', price: '$120' },
    ],
  },
  {
    id: '2',
    items: [
      { source: require('./assets/dress3.png'), label: 'Church Wear', description: "reversible angora cardigan", price: "$120" },
      { source: require('./assets/dress4.png'), label: 'Lamerei', description: 'reversible angora cardigan', price: '$120' },
    ],
  },
  {
    id: '3',
    items: [
      { source: require('./assets/dress5.png'), label: '21Wn', description: "reversible angora cardigan", price: "$120" },
      { source: require('./assets/dress6.png'), label: 'Lopo', description: 'reversible angora cardigan', price: '$120' },
    ],
  },
  {
    id: '4',
    items: [
      { source: require('./assets/dress7.png'), label: '21Wn', description: "reversible angora cardigan", price: "$120" },
      { source: require('./assets/dress1.png'), label: 'Lame', description: 'reversible angora cardigan', price: '$120' },
    ],
  },
];

const App = () => {
    const renderItem = ({ item }) => (
      <View style={styles.catalogueRow}>
        {item.items.map((dress, index) => (
          <View key={index} style={styles.dressContainer}>
            <Image style={styles.images} source={dress.source} />
            {dress.label && <Text style={styles.imageLabel}>{dress.label}</Text>}
            {dress.description && <Text style={styles.imageDescription}>{dress.description}</Text>}
            {dress.price && <Text style={styles.imagePrice}>{dress.price}</Text>}
          </View>
        ))}
      </View>
    );

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
            <Text style={styles.secondHeaderText}>OUR STORY</Text>

            <View style={styles.secondInnerImage}>
              <View style={styles.background}>
                <Image source={require('./assets/Listview.png')}/>
              </View>
              
              <View style={styles.background}>
                <Image 
                  style={styles.filterImage}
                  source={require('./assets/Filter.png')}
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
    marginTop: 80,
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
    // flexDirection: 'row',
    paddingHorizontal: 15
  },
  catalogueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  dressContainer: {
    alignItems: 'left'
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
    fontWeight: 'bold',
    color: 'orange'
  }, 
});

export default App;