import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const data = [
    {
        id:"123",
        title:"Get a Ride",
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Flokasi-logo-png%2Flokasi-logo-red-map-location-icon-map-png-0.png&f=1&nofb=1&ipt=4333bd363f067ba3748da65619d32091b80ad9d7a65e42afcea60f4542c5920d&ipo=images",
        screen:"MapScreen",
    },
    {
        id:"456",
        title:"Order Food",
        image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F02%2F21%2F08%2F49%2Ffood-2085075_960_720.png&f=1&nofb=1&ipt=5029575953653ead60b0e4f51e0ae0a47a84a04a801b49d2718df154bf1e154b&ipo=images",
        screen:"EatScreen",
    },
];

const navOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
  return (
    <FlatList
        data={data}
        keyExtractor={ (item) => item.id }
        horizontal
        renderItem={({item})=> (
            <TouchableOpacity 
            onPress={()=>navigation.navigate(item.screen)}
            style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            disabled={!origin}>
                <View style={tw`${!origin && "opacity-20"}`}>
                    <Image
                        style={{width:120, height:120, resizeMode: "contain" }}
                        source={{ uri: item.image }}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                    <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} name='arrowright' color='white' type='antdesign'/>
                </View>
            </TouchableOpacity>
        )}
    />
  );
};

export default navOptions;