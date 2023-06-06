import { View } from "@tarojs/components";

const Chat = () => {
  const fetchChat = () => {
    console.log("fetchChat");
  };

  return (
    <View className="chat">
      <div onClick={fetchChat}>Hello world!PuJunhao</div>
    </View>
  );
};

export default Chat;
