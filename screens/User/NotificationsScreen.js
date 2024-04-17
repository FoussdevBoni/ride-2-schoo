import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Animated, Easing } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { onValue, ref } from 'firebase/database';
import * as Haptics from 'expo-haptics';
import { db } from '../../firebase/firebaseConfig';
import NotificationItem from '../../components/items/User/NotificationsSreen/NotificationItem';
import StackAppBarr from '../../components/sections/User/Appbars/StackAppBar';
import { ScrollView } from 'react-native-gesture-handler';

enableScreens();




  
const NotificationsScreen = () => {
   const [notifications , setNotifications] = useState()
 const navigation = useNavigation()


 
  useEffect(()=>{
    const notificationsRef = ref(db, 'notifications')

    onValue(notificationsRef , (sn)=>{
      const data = sn.val()
      if (data) {
        const dataArray = Object.entries(data).map(([key , value])=>({
          ...value,
          id: key
        }))
        setNotifications(dataArray)
      }
    })
  },[])
   


  return (
     <View style={styles.container}>
        <StackAppBarr title={'Notifications'} goBack={navigation.goBack}/>
        <ScrollView style={{padding: 12}}>
            {
                notifications&&notifications.map((item)=>{
                  return (
                      <NotificationItem text={item?.body} date={item?.date}/>
                  )
                })
            }
        </ScrollView>
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  
  },
});

export default NotificationsScreen;