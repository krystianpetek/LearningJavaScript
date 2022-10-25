import { IWeather } from './App';

interface IResultProps {
    weather: IWeather | null,
    error: boolean,
    errorMessage: string
}

const Result = (props: IResultProps): JSX.Element => {
    const { error, errorMessage, weather } = props;

    return (

        error ?
            (<h3>{errorMessage}</h3>) :
            (<div>
                <div>City: {weather?.city}</div>
                <div>Country: {weather?.country}</div>
                <div>Date: {weather?.date}</div>
                <div>Sunrise: {weather?.sunrise}</div>
                <div>Sunset: {weather?.sunset}</div>
                <div>Temperature: {weather?.temp}</div>
                <div>Pressure: {weather?.pressure}</div>
                <div>Wind: {weather?.wind}</div>
            </div >)
    )
}

export default Result;