// screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'; // Add TouchableOpacity import
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Categories');
    }, 3000); // Adjust the timeout as needed
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#ffffff', '#00008b']}
      start={[0, 0]}
      end={[1, 1]}
      locations={[0.1, 1]}
      style={styles.container}
    >
      <View style={styles.container}>
        <Image 
          source={require('../assets/shopping_bags.png')} 
          style={styles.image} 
        />
        <View style={styles.titleBox}>
          <Text style={styles.fakeText}>Fake</Text>
          <Text style={styles.storeText}>Store</Text>
        </View>
        <View style={styles.secondTitleBox}>
          <Text style={styles.shoreText}>Shore</Text>
        </View>
        {/* Add your personal branding elements here */}
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={[styles.bottomButton, { backgroundColor: '#b03060' }]}>
          <Ionicons name="cart" size={24} color="white" />
          <Text style={styles.bottomButtonText}>Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.bottomButton, { backgroundColor: '#00008b' }]}>
          <MaterialIcons name="location-on" size={24} color="white" />
          <Text style={styles.bottomButtonText}>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Image source={require('../assets/toy_icon.png')} style={{ width: 24, height: 24, tintColor: 'black' }} />
          <Text style={[styles.bottomButtonText, { color: 'black' }]}>Toys</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20, // Adjust margin as needed
  },
  titleBox: {
    width: '80%', // Expanded width
    alignItems: 'center',
    backgroundColor: '#f0c14b', // Example color, customize as needed
    padding: 10,
    borderRadius: 15, // Curvy edges
    marginBottom: 10, // Space between the title boxes
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    transform: [{ scale: 1.03 }], // Slight increase in size for popup effect
  },
  secondTitleBox: {
    width: '80%', // Expanded width
    alignItems: 'center',
    backgroundColor: '#f0c14b', // Example color, customize as needed
    padding: 10,
    borderRadius: 15, // Curvy edges
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    transform: [{ scale: 1.03 }], // Slight increase in size for popup effect
  },
  fakeText: {
    fontSize: 72, // Slightly larger than 'Store'
    fontWeight: 'bold',
    color: '#ffffff', // White color
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  storeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000000', // Black color
    fontFamily: 'serif', // Different font family
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  shoreText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000', // Black color
    fontFamily: 'serif', // Different font family
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 75,
    left: 0,
    right: 0,
  },
  bottomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0c14b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  bottomButtonText: {
    color: 'white',
    marginLeft: 5,
  },
});

export default SplashScreen;
