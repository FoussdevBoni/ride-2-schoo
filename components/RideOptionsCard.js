import { View, Text, FlatList, Image, SafeAreaView } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

import 'intl'
import "intl/locale-data/jsonp/en";

const data = [
  {
    id: "Taxi-X-123",
    title: "Mini",
    multiplier: 1,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.sEwMHjO3RG9O4ulc00P4GAHaHa%26pid%3DApi&f=1&ipt=cc119484227012b666c7f91f0a07f3cf68cc6fea0b734beb3513428dc26539b0&ipo=images",
  },
  {
    id: "Taxi-XL-456",
    title: "Standard",
    multiplier: 1.2,
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clker.com%2Fcliparts%2Fv%2Fd%2Fw%2FD%2FI%2FR%2Fgreen-sports-car-hi.png&f=1&nofb=1&ipt=6eab1da78774d9c95cf1b7f39a49b7ca8cc544285e2b3418ab549fb8eb19b625&ipo=images",
  },
  {
    id: "Taxi-LUX-789",
    title: "Large",
    multiplier: 1.75,
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2F4c9%2FEAM%2F4c9EAMMcE.jpeg&f=1&nofb=1&ipt=b7d1e8b6e5e62f6c2982bcebfffc5939f6fab73e1b4b2a89d86b3ac01da9d023&ipo=images",
  },
];

//If currently cars are overwhelmed with users then we increase the prices in rush-hours
const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 z-50 left-5 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-10 ${
              item.id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{
                width: 80,
                height: 80,
                resizeMode: "contain",
              }}
              source={{ uri: item.image }}
            />
            <View style={tw`-ml-1`}>
              <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
              <Text>{travelTimeInformation?.duration?.text}</Text>
            </View>
            <Text style={tw`text-xl`}>
                {new Intl.NumberFormat('en-gb', {
                    style:'currency',
                    currency: 'INR'
                }).format(
                    (travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * item.multiplier) / 8
                )}
                {/* {`${(travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100}`} */}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}>
            <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
