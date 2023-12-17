import { Link, useRouter } from "expo-router";
import { Button, Pressable, Text, View } from "react-native";

const Home = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Home Page</Text>
      <Link href="/users" asChild>
        <Button title="Go to user page" />
      </Link>
      <Link href="/users/dheeraj" asChild>
        <Button title="Go to Dheeraj" />
      </Link>
      <Pressable onPress={() => router.push("/users/kannan")}>
        <Text>Go to Kannan</Text>
      </Pressable>
    </View>
  );
};

export default Home;
