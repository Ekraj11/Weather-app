const fetchForecast = async (city) => {
    const url = `https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?city=${city}&units=metric&lang=en`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '2c0eafc3camsha304c728d1e0cb1p122a2ajsne975e364ce0a',
        'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result
    } catch (error) {
      console.error(error);
    }
  }

  export {fetchForecast}