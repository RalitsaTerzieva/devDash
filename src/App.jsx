import WeatherCard from "./components/WeatherCard";
import CalendarCard from "./components/CalendarCard";
import { GithubCard } from "./components/GithubCard";

function App() {

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '2rem'}}>
      <WeatherCard city="London" />
      <CalendarCard />
      <GithubCard />
    </div>
  )
}

export default App
