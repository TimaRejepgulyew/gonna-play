import { useState } from "react";
import { View, TextInput } from "react-native";
import { Text } from 'react-native-rapi-ui';



export default function SearchUsers() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View>
      <TextInput
        className="h-10 border border-gray-500 rounded-lg px-2 mb-4"
        placeholder="Search games..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <Text>Type User Name</Text>
    </View>
  );
}
