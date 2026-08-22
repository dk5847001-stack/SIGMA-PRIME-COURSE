import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox() {

    let [input, setInput] = useState({
        value: "",
        isFilled: false,
        isClick: false
    });

    let [saveInput, setSaveInput] = useState("");
    let [info, setInfo] = useState({});

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "738e561665f566cf8f90d5ab30958c0e";

    const getWeatherInfo = async (city) => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=matric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            name: jsonResponse.name,
            feels_like: jsonResponse.main.feels_like,
            grnd_level: jsonResponse.main.grnd_level,
            humidity: jsonResponse.main.humidity,
            pressure: jsonResponse.main.pressure,
            sea_level: jsonResponse.main.sea_level,
            temp: jsonResponse.main.temp,
            temp_max: jsonResponse.main.temp_max,
            temp_min: jsonResponse.main.temp_min,
            country: jsonResponse.sys.country,
            sunrise: jsonResponse.sys.sunrise,
            sunset: jsonResponse.sys.sunset,
            weather: jsonResponse.weather[0].description
        }
        setInfo(result)
        console.log(result)
    };

    let handleInput = (event) => {
        let currVal = event.target.value;

        setInput({
            value: currVal,
            isFilled: currVal.trim() !== "",
            isClick: false
        });
    };

    let handleButtonClick = (event) => {

        event.preventDefault();

        console.log(input.value);
        console.log(input.isFilled);

        let city = input.value;

        setSaveInput(city);

        getWeatherInfo(city);

        setInput({
            value: "",
            isFilled: false,
            isClick: true
        });
    };

    return (
        <div className="SearchBox">

            <form onSubmit={handleButtonClick}>

                <TextField
                    error={!input.isFilled}
                    id="city"
                    label="City Name"
                    required
                    value={input.value}
                    variant="outlined"
                    onChange={handleInput}
                    helperText={!input.isFilled && "Enter city name"}
                />

                <Button
                    id="btn"
                    type="submit"
                    variant="outlined"
                    endIcon={<SearchIcon />}
                    size="large"
                >
                    Search
                </Button>

                <br />

                <p>
                    {input.isClick && (
                        <>
                            I am searching for <b>{saveInput}</b><br />
                            <ul>
                                <li>Country : {info.country}</li>
                                <li>City : {info.name}</li>
                                <li>Temprature : {info.temp}</li>
                                <li>Pressure : {info.pressure}</li>
                                <li>Max Temprature : {info.temp_max}</li>
                                <li>Min Temprature : {info.temp_min}</li>
                                <li>Description : {info.weather}</li>
                            </ul>
                        </>
                    )}
                </p>

            </form>

        </div>
    );
}