import { ScrollView, TextInput } from "react-native";
import styles from "./formulir.style";
import { SelectList } from "react-native-dropdown-select-list";

const Formulir = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  biodata,
  setBiodata,
  setSelected,
  provinsi,
}) => {
  const kota = [
    { key: "1", value: "Bandung" },
    { key: "2", value: "Bekasi" },
    { key: "3", value: "Depok" },
  ];

  const kecamatan = [
    { key: "1", value: "Lembang" },
    { key: "2", value: "Jayagiri" },
    { key: "3", value: "Cibogo" },
  ];

  const kelurahan = [
    { key: "1", value: "Barulaksana" },
    { key: "2", value: "Sespim" },
    { key: "3", value: "Repelita" },
  ];

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setFirstName}
        placeholder="First Name"
        value={firstName}
      />
      <TextInput
        style={styles.input}
        onChangeText={setLastName}
        value={lastName}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.inputTextArea}
        onChangeText={setBiodata}
        value={biodata}
        multiline={true}
        numberOfLines={4}
        placeholder="Biodata"
      />
      <SelectList
        boxStyles={{ marginBottom: 12 }}
        search={false}
        setSelected={(val) => setSelected(val)}
        data={provinsi}
        save="value"
        placeholder="Pilih Provinsi"
      />
      <SelectList
        boxStyles={{ marginBottom: 12 }}
        search={false}
        setSelected={(val) => setSelected(val)}
        data={kota}
        save="value"
        placeholder="Pilih Kota"
      />
      <SelectList
        boxStyles={{ marginBottom: 12 }}
        search={false}
        setSelected={(val) => setSelected(val)}
        data={kecamatan}
        save="value"
        placeholder="Pilih Kecamatan"
      />
      <SelectList
        boxStyles={{ marginBottom: 12 }}
        search={false}
        setSelected={(val) => setSelected(val)}
        data={kelurahan}
        save="value"
        placeholder="Pilih Kelurahan"
      />
    </ScrollView>
  );
};

export default Formulir;
