import CalendarCard from "./CalendarCard/CalendarCard";
import { GithubCard } from "./GithubCard/GithubCard";
import WeatherCard from "./WeatherCard/WeatherCard";

const componentMap = {
    weather: WeatherCard,
    github: GithubCard,
    calenar: CalendarCard,
};

export const WidgetRenderer = ({ type, props }) => {
    const Component = componentMap[type];
    return Component ? <Component {...props}/> : null;
}