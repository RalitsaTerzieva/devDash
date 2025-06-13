import WeatherCard from "./components/WeatherCard/WeatherCard";
import CalendarCard from "./components/CalendarCard/CalendarCard";
import { GithubCard } from "./components/GithubCard/GithubCard";
import './App.css'; 

function App() {

  return (
    <div className="app">
      <WeatherCard city="London" />
      <CalendarCard />
      <GithubCard username="getify"/>
    </div>
  )
}

export default App
