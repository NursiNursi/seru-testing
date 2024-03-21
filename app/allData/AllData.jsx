import { Text, TouchableOpacity, View } from "react-native";
import styles from "./alldata.style";
import KtpImage from "../../components/image/KtpImage";

const AllData = ({ firstName, lastName, biodata, image, nomorKtp }) => {
  const sendDataToAPI = async () => {
    try {
      const response = await fetch("https://example.com/api/endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          biodata: biodata,
          selected: selected,
          provinsi: provinsi,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response from API:", data);
      } else {
        console.error("Failed to send data to API");
      }
    } catch (error) {
      console.error("Error sending data to API:", error);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.ktpContainer}>
          <KtpImage uri={image} />
        </View>
        <View style={styles.row}>
          <Text style={styles.heading}>Nomor KTP</Text>
          <Text style={styles.body}>{nomorKtp}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.heading}>First Name</Text>
          <Text style={styles.body}>{firstName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.heading}>Last Name</Text>
          <Text style={styles.body}>{lastName}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.heading}>Biodata</Text>
          <Text style={styles.body}>{biodata}</Text>
        </View>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.saveBtn} onPress={sendDataToAPI}>
          <Text style={styles.saveBtnText}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AllData;
