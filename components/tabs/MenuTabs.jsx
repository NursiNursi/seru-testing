import { FlatList, View } from "react-native";
import SlimCard from "../cards/SlimCard";
import styles from "./menutabs.style";

const MenuTabs = ({ menu, activeTab, setActiveTab }) => {
  return (
    <View style={styles.tabsContainer}>
      <FlatList
        data={menu}
        renderItem={({ item }) => (
          <SlimCard
            text={item.text}
            icon={item.icon}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item.text)}
          />
        )}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default MenuTabs;
