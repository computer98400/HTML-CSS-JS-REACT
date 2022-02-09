import React, { useEffect, useState } from 'React';
import * as StompJs from "@stomp/stompjs";
import * as SockJS from "sockjs-client";

export default function Messanger() {
    const client = useRef({}); 

    const [cahtMessages, setChatMessages] = useState([]);
    const [message, setMessage] = useState("");

    const connect = () => {
        client.current = new StompJs.Client({
            webSocketFactory: () => new SockJS("/ws-stomp"),
            connectHeaders: { 
                "auth-token": "spring-chat-auth-token",
            },
            debug: function (str) {
                console.log(str);
            },
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
            onConnect: () => {
                subscribe();
            },
            onStompError: (frame) => {
                console.error(frame);
            },
        });

        client.current.activate();
    }

    useEffect(() => {
        connect();
        return () => disconnect();
    }, [])

    const disconnect = () => { 
        client.current.deactivate();
    }

    const subscribe = () => {
        client.current.subscribe(`/sub/chat/${1}`, ({ body }) => {
            setChatMessages((_chatMessage) => [..._chatMessage, JSON.parse(body)]);
        });
    };

    const publish = (message) => {
        if (!client.current.connected) {
            return;
        }

        client.current.publish({
            destination: "/pub/chat",
            body: JSON.stringify({ roomSeq: 1, message }),
        });

        setMessage("");
    }

    return (
        <>
        
        </>


    )


}