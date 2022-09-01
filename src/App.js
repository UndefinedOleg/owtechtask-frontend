import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

import './App.css';
import { apiSearch } from './service';

function App() {
  const [input, setInput] = useState('moscow');
  const [lastInput, setLastInput] = useState('');
  const [weather, setWeather] = useState();



  const clickHandler = async () => {
    const weatherData = await apiSearch(input);

    setLastInput(input);
    setWeather(weatherData);

  }

  return (
    <div className="App">
      <Box sx={{ mt: '20px' }}>
        <TextField value={input} onChange={(e) => setInput(e.target.value)} />
        <Button variant='contained' onClick={clickHandler} sx={{
          mt: '10px',
          ml: '10px'
        }}>Search</Button>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <Box sx={{ mt: '10px', textAlign: 'left' }}>
          {weather&&weather.body&&<Typography>City: {weather && weather.body && weather.body.city && weather.body.city}</Typography>}
          {weather&&weather.body&&<Typography>Temp: {weather && weather.body && weather.body.temperature}</Typography>}
          {weather&&weather.body&&<Typography>Condition: {weather && weather.body && weather.body.condition}</Typography>}
          {weather&&weather.body&&<Typography>Wind: {weather && weather.body && weather.body.wind}</Typography>}
          {weather&&weather.body&&<Typography>Pressure: {weather && weather.body && weather.body.pressure}</Typography>}
          {weather&&weather.body&&<Typography>Humidity: {weather && weather.body && weather.body.humidity}</Typography>}
          {weather&&!weather.body&&<Typography>City {lastInput} not found</Typography>}
        </Box>
      </Box>
    </div>
  );
}

export default App;
