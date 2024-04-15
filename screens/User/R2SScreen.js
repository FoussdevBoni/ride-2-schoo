import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import * as Location from "expo-location"
import  MapView, {Marker, Polyline}  from 'react-native-maps'
import {decode} from '@mapbox/polyline'
import { GoogleDirections } from 'react-native-google-maps-directions';
import { Ionicons } from '@expo/vector-icons';
import { onValue, ref } from 'firebase/database';
import { db } from '../../firebase/firebaseConfig';

const R2SScreen = (props) => {
  const [location, setLocation] = useState(null)
  const [route, setRoute] = useState([])
  const mapRef = useRef(null)
  const [distance , setDistance] = useState(0)
  const [strokeWidth , setstrokeWidth] = useState(4)
  const [strokeColor, setstrokeColor] = useState('red')
  const point2 = {
    latitude:  9.8513579263639155,
    longitude: 1.493556816130877, 
  }

const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Rayon de la Terre en kilomètres
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance;
  };

  const toRadians = (angle) => {
    return (angle * Math.PI) / 180;
  };


  useEffect(()=>{
    if (location!==null) {
         const coords = [
    { latitude: location.latitude, longitude: location.longitude },
    { latitude: location.latitude - 0.02, longitude: location.longitude },
    { latitude: location.latitude - 0.06, longitude: location.longitude + 0.02 },
  ];

  // Mise à jour de la route avec les coordonnées des marqueurs
  setRoute(coords);
   let totalDistance = 0;
    for (let i = 0; i < coords.length - 1; i++) {
      const distance = haversineDistance(
        coords[i].latitude,
        coords[i].longitude,
        coords[i + 1].latitude,
        coords[i + 1].longitude
      );
      totalDistance += distance;
    }

    console.log('Distance totale entre les marqueurs:', totalDistance.toFixed(2), 'km');
    setDistance(totalDistance.toFixed(2))
    }
  },[location , strokeColor , strokeWidth])

  useEffect(()=>{
    
      const positionRef = ref(db , 'location')

      onValue(positionRef , (sn)=>{
        const data = sn.val()
        console.log(data)
        setLocation(data)
        setstrokeColor('red')
      })

  },[])

  if(!location){
    return <Text> Chargement</Text>
  }
  // console.log(location);
  const goToMyLocation = ()=>{
    mapRef.current.animateToRegion(location, 3*1000)

  }

  console.log(route);
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
      ref={mapRef}
      
          // onRegionChange={(region)=>console.log(region)}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421
            
          }}
           
            title='Le chauffeur'
          pinColor="blue"
          icon={()=><Ionicons name='home'  size={50} color={'red'}/>}
          image={require('../../assets/images/icon-car.png')}
        />
        
        <Marker
          coordinate={{
          latitude: location.latitude-0.02,
            longitude: location.longitude,
          }}
          title='Point de ramassage'
          pinColor="blue"
         image={require('../../assets/images/icon-student.png')}
        />
      
          <Marker
          coordinate={{
            latitude: location.latitude-0.06,
            longitude: location.longitude+0.02,
          }}
         title='Ecole de Douala'
          pinColor="blue"
          image={require('../../assets/images/icon-school.png')}

         />
        { route.length >0 && <Polyline coordinates={route}  strokeWidth={strokeWidth} 
        strokeColor= {'red'} />}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  
  markerImage: {
    width: 10, // spécifiez la largeur désirée de l'image
    height: 10, 
    display: "none"
    // spécifiez la hauteur désirée de l'image
  },
});

export default R2SScreen;
