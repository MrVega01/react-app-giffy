export default function getTheme(){
    const themes = ["day", "night", "games", "love", "light", "snow", "forest", "anime", "dogs", "cats", "slime"];
    const rand = Math.floor(Math.random()*themes.length+0.99);
    const theme = themes[rand];
    return theme;
}