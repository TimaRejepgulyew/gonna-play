import { useState } from "react";
import { View } from "react-native";

import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";

export default function SearchUsers() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View>
      <Input
        className="h-10 border border-gray-500 rounded-lg px-2 mb-4"
        placeholder="Search games..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <Text>Type User Name</Text>
    </View>
  );
}
