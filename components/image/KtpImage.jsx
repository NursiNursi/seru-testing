import { Image } from "react-native";
import styles from "./ktpimage.style";

const KtpImage = ({ uri }) => {
  return <Image source={{ uri }} style={styles.image} />;
};

export default KtpImage;
