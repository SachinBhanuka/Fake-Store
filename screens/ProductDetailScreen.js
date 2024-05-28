import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

// Existing imports and component definition...

return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Empty header section */}
      </View>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Product Detail</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productPrice}>{`Price: $${product.price}`}</Text>
        <Text style={styles.productRating}>{`Rating: ${product.rating.rate} (${product.rating.count} reviews)`}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <TouchableOpacity style={styles.addToCartButton}>
          <Ionicons name="cart" size={28} color="white" />
          <Text style={styles.addToCartButtonText}>Add to Shopping Cart</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60, // Fixed height for the header
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
  },
  backButtonText: {
    fontsize: 24, 
    color:"white",
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  scrollContainer: {
    paddingBottom: 20,
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 8,
  },
  productRating: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 8,
  },
  addToCartButton: {
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    borderRadius: 8,
    lineHeight: 24,
    marginBottom: 16,
    backgroundColor: '#f9e4bc',
    borderWidth: 2,
    borderColor: 'black',
    padding: 8, 
  },  
  addToCartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
