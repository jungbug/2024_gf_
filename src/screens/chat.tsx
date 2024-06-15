import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { GPT_API } from '@env';

type Message = {
    text: string;
    from: 'user' | 'bot';
};

const ChatScreen: React.FC = (navigation) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState('');
    const scrollViewRef = useRef<ScrollView>(null);
    const fakeMessages = [
		"ㅎㅇ"
    ];
    let i = 0;

    let prompt_text = `` // 안에 프롬프트 적기
    // 내용으로는 글에서의 감정 분류, 대답만 나오게, -> 유도

    const testTurbo = async (question: any) => {
        const data = JSON.stringify({
            "model" : "gpt-3.5-turbo",
            "temperature": 0.8,
            "messages": [
                // {"role": "system", "content": ""}, # 이거는 심리 치료사 ? 테라피스트 같은거 넣으면 될듯
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
            const newMessage: Message = { text: inputText, from: 'user' };
            setMessages(prevMessages => [...prevMessages, newMessage]);
            setInputText('');
            setTimeout(() => {
                sendFakeMessage(); // 여기서 보냄
            }, 1000 + Math.random() * 1000);
        }
    };

    const sendFakeMessage = () => { // 이게 메시지 보내는 코드
        if (i < fakeMessages.length) {
            const newMessage: Message = { text: fakeMessages[i], from: 'bot' };
            setMessages(prevMessages => [...prevMessages, newMessage]);
            i++;
        }
    };

    useEffect(() => {
        sendFakeMessage();
    }, []);

    return (
        <View style={styles.container}>
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
		marginTop: 50
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
    }
});

export default ChatScreen;