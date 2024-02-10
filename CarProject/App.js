import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaView className="p-4">
      {/* TOP SECTION STARTS */}
      <View className="flex-row justify-between gap-2 items-center">
        {/* CHILD ONE VIEW STARTS */}
        <View className="flex-row justify-between items-center gap-2">
          {/* ICON SECTION STARTS */}
          <View>
            <FontAwesome6 name="location-dot" size={24} color="black" />
          </View>
          {/* TEXT SECTION */}
          <View>
            <Text>Location</Text>
            <Text>Los Angelos,California</Text>
          </View>
        </View>
        {/* CHILD ONE ENDS */}
      </View>
    </SafeAreaView>
  );
}
