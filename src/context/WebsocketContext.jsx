import React, { createContext, useState, useEffect, useRef } from "react";

export const WebSocketContext = createContext(null);

export function WebSocketProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = new WebSocket("ws://localhost:8080");

    socketRef.current.addEventListener("open", () => {
      console.log("WebSocket connected.");
    });

    socketRef.current.addEventListener("message", (event) => {
      setMessages((prev) => [...prev, event.data]);
    });

    socketRef.current.addEventListener("close", () => {
      console.log("WebSocket disconnected.");
    });

    return () => {
      socketRef.current.close();
    };
  }, []);

  // Function to send a message via websocket
  const sendMessage = (msg) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(msg);
    } else {
      console.warn("WebSocket is not open");
    }
  };

  return (
    <WebSocketContext.Provider value={{ messages, sendMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
}
