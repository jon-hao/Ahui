import React, { useContext, useState } from "react";

type TChat = {
  lastMessage: string
  date: string
}

type TMessage = {
  message: string
  date: string
}

type TRunWorkProps = {}

type TRunWorkState = {
  loading: boolean;
  chatId: number | null;
  chatList: TChat[];
}

type TMainPanelProps = {
  chatList: TChat[]
}

const ChatContext = React.createContext({
  chat: {
    lastMessage: "hello jerry",
    date: new Date().getTime().toString()
  },
  setChat: (message: string) => null,
  messages: [] as TMessage[],
  setMessages: (message: string) => null,
});

const ChatProvider: React.FC = ({ children }) => {
  const [currentChat, setChat] = useState<TChat>({
    lastMessage: "hello jerry",
    date: new Date().getTime().toString()
  })
  const [currentMessages, setMessages] = useState<TMessage[]>([])

  return (
    <ChatContext.Provider
      value={{
        chat: currentChat,
        setChat: (message) => {
          setChat({
            lastMessage: message,
            date: new Date().getTime().toString()
          })
          return null
        },
        messages: currentMessages,
        setMessages: (message) => {
          setMessages([...currentMessages, {
            message,
            date: new Date().getTime().toString()
          }])
          return null
        }, }}
    >
      {children}
    </ChatContext.Provider>
  );
};

const useChatService = () => {
  const { chat, setChat, messages, setMessages } = useContext(ChatContext);
}

const getChatList = (): Promise<TChat[]> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([{
        avatar: "avatar",
        lastMessage: "hello jerry",
        date: new Date().getTime().toString()
      }])
    }, 3000)
  })
}

class Loading  extends React.Component {
  constructor(props: TTestProps) {
    super(props);
  }

  render() {
    return <div>loading...</div>
  }
}

class MainPanel  extends React.Component<TMainPanelProps> {
  constructor(props: TMainPanelProps) {
    super(props);
  }

  render() {
    return <div>{JSON.stringify(this.props.chatList)}</div>
  }
}

export class RunWork extends React.Component<TRunWorkProps, TRunWorkState> {
  constructor(props: TRunWorkProps) {
    super(props);
    this.state = {
      loading: true,
      chatId: null,
      chatList: []
    };
  }

  render() {
    return this.state.loading ? <Loading /> : <MainPanel chatList={this.state.chatList} />
  }

  async componentDidMount() {
    this.setState({ chatList: await getChatList(), loading: false })
  }

  async componentWillUpdate(nextProps: TRunWorkProps, nextState: TRunWorkState) {
    if (nextState.chatId !== this.state.chatId) {
      this.setState({ chatList: await getChatList() })
    }
  }
}
