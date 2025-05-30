import { GithubCard } from "./GithubCard";

const componentMap = {
    // weather: WeatherCard,
    github: GithubCard,
    // calenar: CalendarCard,
};

export const WidgetRenderer = ({ type, props }) => {
    const Component = componentMap[type];
    return Component ? <Component {...props}/> : null;
}