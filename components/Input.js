import { TextInput, View } from "react-native";

export default function Input({ placeholder, handleChangeText, keyboardType }) {
  return (
    <View>
      <TextInput
        style={{
          width: 248,
          height: 50,
          borderColor: "#000",
          borderWidth: 1,
          padding: 16,
          margin: 10,
          borderRadius: 8,
        }}
        keyboardType={keyboardType}
        placeholder={`${placeholder}`}
        onChangeText={handleChangeText}
      />
    </View>
  );
}
