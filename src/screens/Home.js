import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES } from "../constants/theme";
import { FontAwesome5 } from "@expo/vector-icons";

import { Button, Icon } from "react-native-elements";
import { PharmacyInfo } from "../components/modals/PharmacyInfo";

const Pharmacies = [
  {
    latitude: 32.301059896498586,
    latitudeDelta: 0.10873297010665084,
    longitude: -9.228742104023695,
    longitudeDelta: 0.06705556064844131,
    title: "Pharmacy atlas",
    description: "phamacy lana mano",
    address: "doans 1 rue kjd amalon",
    PhoneNumber: "06201167398",
    image:'https://images.pexels.com/photos/929245/pexels-photo-929245.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    latitude: 32.287007556829934,
    latitudeDelta: 0.037345906032861365,
    longitude: -9.237496498972178,
    longitudeDelta: 0.022088326513767242,
    title: "Pharmacy monani",
    description: "phamacy lana mano",
    address: "doans 1 rue kjd amalon",
    PhoneNumber: "06201167398",
    image:'https://images.pexels.com/photos/3652750/pexels-photo-3652750.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    latitude: 32.288006503907255,
    latitudeDelta: 0.029921235225572218,
    longitude: -9.230039287358522,
    longitudeDelta: 0.01769687980413437,
    title: "Pharmacy onay",
    description: "phamacy lana mano",
    address: "doans 1 rue kjd amalon",
    PhoneNumber: "06201167398",
    image:'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    latitude: 32.298664931655274,
    latitudeDelta: 0.009853544595614494,
    longitude: -9.242027755826713,
    longitudeDelta: 0.005828775465488434,
    title: "Pharmacy domas",
    description: "phamacy lana mano",
    address: "doans, 1 rue kjd amalon",
    PhoneNumber: "06201167398",
    image:'https://images.pexels.com/photos/8657375/pexels-photo-8657375.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
];
export default function Home() {
  const [InfoModalVisible, setInfoModalVisible] = useState(false);
  const [PharmacyInfos, SetPharmacyInfos] = useState({});
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: SIZES.width,
    height: SIZES.height,
  },
});
