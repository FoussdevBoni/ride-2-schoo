import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import StackAppBarr from './../../components/sections/User/Appbars/StackAppBar';

const mealsData = [
  { id: '1', title: 'Repas 1', description: 'Description du repas 1', price: '$10', image:'https://www.mutuellebleue.fr/app/uploads/sites/2/2020/07/quappelle-t-on-un-repas-%C3%A9quilibr%C3%A9.jpg'},
  { id: '2', title: 'Repas 2', description: 'Description du repas 2', price: '$12', image: 'https://www.mutuellebleue.fr/app/uploads/sites/2/2020/07/quappelle-t-on-un-repas-%C3%A9quilibr%C3%A9.jpg' },
];

const MealItem = ({ title, description, price, image }) => (
  <View style={styles.mealItem}>
    <View style={styles.mealInfo}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
    <Image source={{uri: image}} style={styles.image} />
  </View>
);

const MealsList = () => (
  <View style={styles.container}>
    <StackAppBarr title={'Liste des repas disponibles'} />
    <FlatList
      data={mealsData}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <MealItem {...item} />}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  mealItem: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  mealInfo: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#666',
    marginBottom: 10,
  },
  price: {
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    height: 150,
    resizeMode: 'cover',
  },
});

export default MealsList;
