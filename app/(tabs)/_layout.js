import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerTitle: "HOme" }} />
      <Tabs.Screen
        name="users/[id]"
        options={{ headerTitle: "Single User Page" }}
      />
      <Tabs.Screen name="users/index" options={{ headerTitle: "Index" }} />
    </Tabs>
  );
};

export default TabsLayout;
