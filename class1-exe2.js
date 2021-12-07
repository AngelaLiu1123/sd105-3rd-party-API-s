const weatherEle = document.getElementById('weather');

const request = new XMLHttpRequest();

request.open(
  'GET',
  'https://goweather.herokuapp.com/weather/Winnipeg'
  // 'https://cat-fact.herokuapp.com/facts'
  // 'https://jsonplaceholder.typicode.com/posts'
  );
request.send();

request.addEventListener('readystatechange', () => {
  // console.log(request.readyState);
  // console.log(request.status);
  if (request.readyState === 4 && request.status === 200) {
    // handle the event
    const data = JSON.parse(request.response);
    console.log(data);
    weatherEle.insertAdjacentHTML('afterbegin', 
    `<h1>Winnipeg's Weather</h1>
    <h4>temperature: ${data.temperature}</h4>
    <h4>wind: ${data.wind}</h4>
    <h4>description: ${data.description}</h4>
    <h4>forecast:</h4>
    <ul>
      <li>forecast day1: ${data.forecast[0].temperature}, ${data.forecast[0].wind}</li>
      <li>forecast day2: ${data.forecast[1].temperature}, ${data.forecast[1].wind}</li>
      <li>forecast day3: ${data.forecast[2].temperature}, ${data.forecast[2].wind}</li>
    </ul>
    `)
    // console.log(request.response);
    // for (const user of data) {
    //   console.log(`tittle: ${user.title}`);
    // }
  } else if (request.readyState === 4) {
    //request failed
    console.log(`${request.status}:request has failed.`);
  }
});