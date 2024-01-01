import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const DeleteButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.deleteContainer}>
        <Icon name="trash" size={30} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deleteContainer: {
    backgroundColor: "red",
    flex: 1,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
