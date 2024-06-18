import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {NAVIGATOR_MAIN_PAGE2} from "../utils/screens";
import { StackScreenProps } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
// import { GPT_API } from '@env';

let GPT_API = ""

type Message = {
    text: string;
    from: 'user' | 'bot';
};

let expression = ["/Volumes/드라이브/coding/App/gf/src/assets/none.png", "angry", "upset", "laugh", "glad", "beck", "surprised", "sad"]

type Props = StackScreenProps<ParamListBase, "Landing Stack"	>;

const ChatScreen:React.FC<Props> = ({navigation}) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState('');
    const scrollViewRef = useRef<ScrollView>(null);
    const fakeMessages = [
		"토끼와 대화를 시작하세요!"
    ];
    let i = 0;

    let prompt_text = `` // 안에 프롬프트 적기
    // 내용으로는 글에서의 감정 분류, 대답만 나오게, -> 유도

    const testTurbo = async (question: any) => {
        const data = JSON.stringify({
            "model" : "gpt-3.5-turbo-1106",
            "temperature": 0.8,
            "messages": [
                {"role": "system", "content": "psychological counselor"}, // 이거는 심리 치료사 ? 테라피스트 같은거 넣으면 될듯
                {"role": "user", "content": question + prompt_text}
            ],
        });
    
        try {
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                  Authorization : 'Bearer '+GPT_API,
                    'content-type': 'application/json',
                },
                body: data,
            });
    
            if (!response.ok) {
              console.log(response)
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const result = await response.json();
            return result;
        } catch (error: any) {
            console.error('Error:', error.message);
            throw error;
        }
    };


    const handleSendMessage = () => {
        if (inputText.trim()) {
            console.log(inputText)
            const newMessage: Message = { text: inputText, from: 'user' };
            setMessages(prevMessages => [...prevMessages, newMessage]);
            setInputText('');

            testTurbo(inputText).then((response) => {
                const newMessage: Message = { text: response.choices[0].message.content, from: 'bot' };
                setMessages(prevMessages => [...prevMessages, newMessage]);
            })
        }
    };

    const sendFakeMessage = () => { 
        if (i < fakeMessages.length) {
            const newMessage: Message = { text: fakeMessages[i], from: 'bot' };
            setMessages(prevMessages => [...prevMessages, newMessage]);
        }
    };

    useEffect(() => {
        sendFakeMessage();
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.replace(NAVIGATOR_MAIN_PAGE2)} style={styles.changeRoom} />
            <Image source={require("../assets/none.png")} style={styles.rabbit_logo} />
            <ScrollView
                ref={scrollViewRef}
                style={styles.messagesContainer}
                onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
            >
                {messages.map((message, index) => (
                    <View key={index} style={message.from === 'user' ? styles.userMessage : styles.botMessage}>
                        <Text style={styles.messageText}>{message.text}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={inputText}
                    onChangeText={setInputText}
                    placeholder="Type message..."
                    onSubmitEditing={handleSendMessage}
                />
                <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    messagesContainer: {
        flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 20,
		marginTop: 200
    },
    messageText: {
        color: '#fff'
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#0078fe',
        borderRadius: 20,
        padding: 10,
        marginVertical: 5
    },
    botMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#e5e5ea',
        borderRadius: 20,
        padding: 10,
        marginVertical: 5
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
		marginBottom: 20
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginRight: 10,
        height: 40
    },
    sendButton: {
        justifyContent: 'center',
        backgroundColor: '#0078fe',
        borderRadius: 20,
        padding: 10
    },
    sendButtonText: {
        color: '#fff'
    },
    changeRoom: {
		position: 'absolute',
		top: 30,
		right: 30,
		width: '20%',
		height: '10%',
        zIndex: 1,
		// backgroundColor: "white",
	},
    rabbit_logo: {
        position: 'absolute',
        top: 30,
        left: 30,
        // width: '10%',
        // height: '10%',
        zIndex: 10,
        // backgroundColor: "white",
    }
});

export default ChatScreen;