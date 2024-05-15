import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Avatar, Card, Divider, List, Paragraph, Switch, Title } from 'react-native-paper';
import { getChildren } from '../../../../utils/api';
import { useSelector } from 'react-redux';




function ChildItem({user , child , onSwitchChange}) {
const navigation = useNavigation()
   const schools = useSelector((state)=> state.schools.schools)
   const school  = schools.filter(school=>(school._id===child?.ecole))


    return (
        <TouchableOpacity onPress={()=>{
           if (child.isChecked) {
                onSwitchChange(child.id , false)
           }else{
             onSwitchChange(child.id , true)
           }
        }} style= {{ paddingHorizontal: 8}}>
            <List.Item style= {{backgroundColor: 'white', marginVertical: 1}} title = {child?.nom} left={()=>(
                <View style={styles.profilContainer}>
                        <Image source={{uri: 'https://www.shutterstock.com/image-photo/portrait-smiling-african-american-schoolboy-260nw-2326745069.jpg'}} style={styles.driverProfil}/>
                </View>
            )}   description={school[0].nomEcole} right={()=>(
               
                 <Switch
                   value={child.isChecked}
                   onValueChange={(newValue) => onSwitchChange(child.id, newValue)}
          />
            )}>

            </List.Item>
            <Divider />
        </TouchableOpacity>
    );
}

export default ChildItem;




const styles = StyleSheet.create({
    driverProfil:{
      width: 50,
      height: 50,
      borderRadius: 25,
      
    },
    profilContainer: {
        padding: 5
    }
})