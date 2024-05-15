import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import { colors } from '../../assets/styles/colors';
import Br from '../../components/widgets/br/br';
import { ScrollView } from 'react-native-gesture-handler';
import Children from '../../components/sections/User/HomeScreen/Children';
import { useNavigation } from '@react-navigation/native';

function HomeScreen({user}) {
  const navigation = useNavigation()
  return (
    <ScrollView style={{padding: 10}}>
       <View>
        <Title style={styles.heading}>Bienvenu sur R2S</Title>
      </View>

      <View style={styles.section1}>
        <View>
          <Text style={styles.section1Text}>
            <Text style={styles.boldText}>Facilitez le trajet de vos enfants vers l'école</Text>
            {'\n'}
            Avec Ride-2-school , simplifie la vie scolaire de vos enfants
          </Text>
        </View>
          <Br size={25}/>
        <TouchableOpacity style={styles.section1Button} onPress={()=>{
                navigation.navigate('add-child' , {user})
        }}>
          <Text style={styles.buttonText}>
            Ajouter un enfant
          </Text>
        </TouchableOpacity>
      </View>

      <Children user={user}/>

    </ScrollView>
  );
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.background,
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: colors.primary,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
  section1: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  section1Text: {
    color: 'white',
    opacity: 0.8,
  },
  section1Button: {
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'blue',
  },
  section2:{
      backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    flexDirection: 'column',
  }
});
