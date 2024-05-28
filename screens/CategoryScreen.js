import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const CategoryScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.categoryTitle}>Categories</Text>
      </View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryButton}
            onPress={() => navigation.navigate('ProductList', { category: item })}
          >
            <Text style={styles.categoryText}>{item.charAt(0).toUpperCase() + item.slice(1)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    backgroundColor: 'blue',
    padding: 10,
    marginBottom: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  categoryButton: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1, // Border width
    borderColor: 'black', // Border color
  },
  categoryText: {
    fontSize: 18,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
});

export default CategoryScreen;
