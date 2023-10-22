import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from "@env";
import { SECRET_KEY } from '../secret';
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
    const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.similarpng.com%2Fthumbnail%2F2020%2F09%2FYellow-taxi-sign-on-transparent-background-PNG.png&f=1&nofb=1&ipt=aab9bb39dc64cfde5bb0af001ee3519cb998b983ef2497079a6d2ed30a3d25c9&ipo=images",
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            // console.log(data);
            // console.log(details);
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))
            dispatch(setDestination(null));
          }}
          fetchDetails={true} //details include geog. coordinates etc.
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: SECRET_KEY, //env was not working so this way 🥵
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlaceSearch" //search in google's list of stored places
          debounce={400} //search only after user has stopped typing for 400ms
          onFail={(error) => console.error(error)}
        />

        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen