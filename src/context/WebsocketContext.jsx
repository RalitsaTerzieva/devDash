import React, { createContext, useState, useEffect } from "react";

export const WebSocketContext = createContext(null);

export function WebSocketProvider({ children }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.addEventListener("open", () => {
      console.log("WebSocket connected.");
    });

    socket.addEventListener("message", (event) => {
      setMessages((prev) => [...prev, event.data]);
    });

    socket.addEventListener("close", () => {
      console.log("WebSocket disconnected.");
    });

    return () => socket.close();
  }, []);

  return (
    <WebSocketContext.Provider value={{ messages }}>
      {children}
    </WebSocketContext.Provider>
  );
}
