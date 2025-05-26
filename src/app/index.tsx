import { Link } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";
import { globalStyles } from "../shared/styles/global";

export default function Index() {
  return (
    <SafeAreaView style={globalStyles.safeArea} >
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className={`text-[red]`} >Edit app/index.tsx to edit this screen.</Text>
      <Link className={`underline text-[blue]`} href={'/games'}> Go to games screen</Link>
    </View>
    </SafeAreaView>
  );
}
