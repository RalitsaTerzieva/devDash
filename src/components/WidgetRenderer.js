import CalendarCard from "./CalendarCard";
import { GithubCard } from "./GithubCard";
import WeatherCard from "./WeatherCard";

const componentMap = {
    weather: WeatherCard,
    github: GithubCard,
    calenar: CalendarCard,
};

export const WidgetRenderer = ({ type, props }) => {
    const Component = componentMap[type];
    return Component ? <Component {...props}/> : null;
}