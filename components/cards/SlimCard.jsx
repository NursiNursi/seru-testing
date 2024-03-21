import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./slimcard.style";

const SlimCard = ({ text, icon, activeTab, onHandleSearchType }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tab(text, activeTab)}
        onPress={onHandleSearchType}
      >
        <View style={styles.btnImgContainer}>
          <Image source={icon} style={styles.btnImg} />
        </View>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SlimCard;
