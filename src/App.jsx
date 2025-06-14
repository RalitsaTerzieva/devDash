import WeatherCard from "./components/WeatherCard/WeatherCard";
import CalendarCard from "./components/CalendarCard/CalendarCard";
import { GithubCard } from "./components/GithubCard/GithubCard";
import './App.css'; 
import RandomNumberDisplay from "./components/RandomNumberDisplay";
import { WebSocketProvider } from "./context/WebsocketContext";

function AppContent() {
  return (
    <div className="app">
      <WeatherCard city="London" />
      <CalendarCard />
      <GithubCard username="getify" />
      <RandomNumberDisplay />
    </div>
  )
}

export default function App(){
  return (
    <WebSocketProvider>
      <AppContent />
    </WebSocketProvider>
  )
}
