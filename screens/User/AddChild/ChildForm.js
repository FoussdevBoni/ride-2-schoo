import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker'; 
import { useDispatch } from 'react-redux';
import { colors } from '../../../assets/styles/colors';
import StackAppBarr from '../../../components/sections/User/Appbars/StackAppBar';
import { getSchoolsFromAdmins } from '../../../functions/getShools';
const defautlSchools = [
  { label: "Quelle est l'école de l'enfant", value: '' },

  { label: 'École Publique de Bastos', value: 'Ecole Publique de Bastos' },
  { label: 'Collège Bilingue de Biyem-Assi', value: 'Collège Bilingue de Biyem-Assi' },
  { label: 'Lycée de Ngoa-Ekellé', value: 'Lycée de Ngoa-Ekellé' },
];
const ChildForm = () => {
  const [school, setSchool] = useState('');
  const [schools , setSchools] = useState(defautlSchools)
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const [child, setChild] = useState({
    nom: '',
    prenom: '',
    school: '',
    year: '',
    lieu: '',
    gradle: '',
    photo: '',
    imatriculation: 'cm237',
    driver: 'Adams'
  });


  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setChild({
        ...child,
        photo: result.uri
      })
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };

  const handleChange = (key, value) => {
    setChild({
      ...child,
      [key]: value
    })

    console.log(value)
  }


  const handleNext = () => {
    navigation.navigate('choix-preferences' , child)
  };

  async function fetchSchools() {
    try {
        const schools = await getSchoolsFromAdmins();
        setSchools(schools); // Faire quelque chose avec les écoles récupérées
    } catch (error) {
        // Gérer les erreurs
        console.error("Erreur lors de la récupération des écoles:", error);
    }
}

  return (
   <View style={{flex: 1}}>
    <StackAppBarr  title={'Ajouter un enfant'} goBack={navigation.goBack}/>
    <ScrollView style={styles.container}>
      <View style={styles.selected}>
        <Picker
          label="École de l'enfant"
          value={school}
          onValueChange={(itemValue) => handleChange('school', itemValue)}
          style={styles.selected}
        >
          {schools.map((school, index) => (
            <Picker.Item key={index} label={school.label} value={school.value} />
          ))}
        </Picker>
      </View>
      <TextInput
        label="Nom(s)"
        onChangeText={text => handleChange('nom', text)}
        style={styles.input}
      />
      <TextInput
        label="Prenom(s)"
        onChangeText={text => handleChange('prenom', text)}
        style={styles.input}
      />
      <TextInput
        label="Niveau scolaire"
        onChangeText={text => handleChange('gradle', text)}
        style={styles.input}
      />
      <TextInput
        label="âge"
        onChangeText={text => handleChange('year', text)}
        style={styles.input}
      />
      <TextInput
        label="Lieu D’habitation"
        onChangeText={text => handleChange('lieu', text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleChoosePhoto} style={[styles.button, styles.input]}>
        <Text style={{ color: 'white',  textTransform: 'none' }}>
          Ajouter  une photo
        </Text>
      </Button>
     
        <TouchableOpacity  onPress={()=>{handleNext()}} style={[styles.button, {height:40, justifyContent:'center'}]} >
          <Text style={{ color: 'white', textAlign:'center' , textTransform: 'none' }}>
            Suivant
          </Text>
        </TouchableOpacity>
      

    </ScrollView>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop:20
  },
  selected: {
    marginVertical: 10,
    borderColor: 'gray',
    borderRadius: 2,
    borderBottomWidth: 1
  },
  input: {
    marginVertical: 10,
  },
  button: {
    marginVertical: 10,
    backgroundColor: colors.primary,
    color: 'white',
    marginBottom:50
  },
});

export default ChildForm;
