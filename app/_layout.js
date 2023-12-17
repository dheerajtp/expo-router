import { Stack } from "expo-router";
import { Button } from "react-native";

const Layout = () => {
  return (
    <Stack>
      {/* <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerStyle: { backgroundColor: "black", },
          headerTintColor: "white",
          headerRight: () => <Button title="Click Here" />,
          headerLeft: () => <Button title="Left" />,
        }}
      />
      <Stack.Screen name="users/index" options={{ headerTitle: "Users" }} />
      <Stack.Screen
        name="users/[id]"
        options={{ headerTitle: "User Profile Page" }}
      /> */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
