import { useContext } from "react";
import { WebSocketContext } from "../context/WebsocketContext";


export function useWebSocket() {
  return useContext(WebSocketContext);
}
