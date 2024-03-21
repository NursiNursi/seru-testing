import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 100,
  },
  container: {
    borderRadius: 10,
    marginLeft: 20,
    paddingBottom: 16,
  },
  tab: (text, activeTab) => ({
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderLeftWidth: 8,
    borderLeftColor: text === activeTab ? "#304491" : "#7FC669",
    borderRadius: 10,
    alignItems: "center",
    width: 250,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 6,
  }),
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  btnImgContainer: {
    backgroundColor: "#EEF0F9",
    marginRight: 20,
  },
  btnImg: {
    marginHorizontal: 20,
    marginVertical: 14,
    width: 40,
    height: 40,
  },
});

export default styles;
