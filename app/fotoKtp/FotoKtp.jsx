import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import icons from "../../constants/icons";
import styles from "./fotoktp.style";
import KtpImage from "../../components/image/KtpImage";

const FotoKtp = ({ nomorKtp, setNomorKtp, image, setImage }) => {
  const uploadImage = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.back,
        allowsEditing: true,
        aspect: [3, 2],
        quality: 1,
      });

      if (!result.canceled) {
        await saveImage(result.assets[0].uri);
      }
    } catch (error) {
      alert("Error uploading imageL " + error.message);
    }
  };

  const saveImage = async (image) => {
    try {
      setImage(image);
    } catch (error) {
      throw error;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Foto KTP</Text>
      <TouchableOpacity onPress={() => uploadImage()}>
        <View style={styles.ktpContainer}>
          {!image ? (
            <Image source={icons.add} style={styles.btnImg} />
          ) : (
            <KtpImage uri={image} />
          )}
        </View>
      </TouchableOpacity>
      <Text style={styles.label}>Nomor KTP</Text>
      <TextInput
        style={styles.input}
        onChangeText={setNomorKtp}
        value={nomorKtp}
        keyboardType="numeric"
        placeholder="Masukan Nomor KTP"
      />
    </View>
  );
};

export default FotoKtp;
