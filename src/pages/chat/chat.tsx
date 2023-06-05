import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";

export default function Chat() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="chat">
      <Text>Hello world!PuJunhao</Text>
    </View>
  );
}
