import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "darkblue",
    borderRadius: 16,
    height: 450,
  },
  ktpContainer: {
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#EEF0F9",
    width: "100%",
    height: 220,
    borderRadius: 16,
  },
  btnContainer: {
    bottom: 0,
    padding: 6,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 60,
    width: "auto",
    margin: 20,
  },
  saveBtn: {
    flex: 1,
    backgroundColor: "darkblue",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  saveBtnText: {
    color: "white",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  heading: {
    width: 124,
    fontSize: 14,
    color: "#4B5CA0",
    fontWeight: "bold",
    marginBottom: 4,
  },
  body: {
    fontSize: 14,
    width: 180,
  },
});

export default styles;
