import { Stack } from "expo-router";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import SlimCard from "../components/cards/SlimCard";
import icons from "../constants/icons";
import { useState } from "react";
import MenuTabs from "../components/tabs/MenuTabs";
import Formulir from "./formulir/Formulir";
import FotoKtp from "./fotoKtp/FotoKtp";
import AllData from "./allData/AllData";

const menu = [
  { text: "Formulir Klaim", icon: icons.form },
  { text: "Foto Sim & STNK", icon: icons.idCard },
  { text: "Klaim Kerusakan", icon: icons.idCard },
];

const provinsi = [
  { key: "1", value: "Jawa Barat" },
  { key: "2", value: "Jawa Tengah" },
  { key: "3", value: "Jawa Timur" },
];

const Form = () => {
  const [activeTab, setActiveTab] = useState(menu[0].text);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [biodata, setBiodata] = useState("");
  const [selected, setSelected] = useState("");
  const [nomorKtp, setNomorKtp] = useState();
  const [image, setImage] = useState(null);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Formulir Klaim":
        return (
          <Formulir
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            biodata={biodata}
            setBiodata={setBiodata}
            selected={selected}
            setSelected={setSelected}
            provinsi={provinsi}
          />
        );
      case "Foto Sim & STNK":
        return (
          <FotoKtp
            image={image}
            setImage={setImage}
            nomorKtp={nomorKtp}
            setNomorKtp={setNomorKtp}
          />
        );
      case "Klaim Kerusakan":
        return (
          <AllData
            firstName={firstName}
            lastName={lastName}
            biodata={biodata}
            image={image}
            setImage={setImage}
            nomorKtp={nomorKtp}
          />
        );
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: "Registrasi Klaim",
        }}
      />
      <>
        <ScrollView>
          <MenuTabs
            menu={menu}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <View>{displayTabContent()}</View>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default Form;
