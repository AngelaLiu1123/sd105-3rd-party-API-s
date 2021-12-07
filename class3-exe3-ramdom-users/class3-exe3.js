const getData = (url) => {
  return new Promise((resolve, reject) => {
    const userRequest = new XMLHttpRequest();
    userRequest.addEventListener('readystatechange', () => {
      if (userRequest.readyState === 4 && userRequest.status === 200) {
        resolve(JSON.parse(userRequest.responseText));
      } else if (userRequest.readyState === 4) {
        reject('something went wrong');
      }
    });
    userRequest.open('GET', url);
    userRequest.send();
  });
};


getData('https://randomuser.me/api/?results=10')
  .then(data => render(data))
  .catch(err => console.log(err));


function render(data) {
  const users = data.results;
  console.log(users);
  const userEle = document.querySelector('.main');
  users.forEach(user => {
    userEle.insertAdjacentHTML('beforeend', `
  <li>
      <div class="photo-container">
        <div class="photo">
          <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last} headshot">
        </div>
      </div>

      <ul class="info">
        <li class="name">
          <div>Hi, my name is</div>
          <h4>${user.name.first} ${user.name.last}</h4>
        </li>
        <li class="email">
          <div>My email is</div>
          <h4>${user.email}</h4>
        </li>
        <li class="birthday">
          <div>My birthday is</div>
          <h4>${new Date(user.dob.date).toLocaleDateString("en-CA")}</h4>
        </li>
        <li class="address">
          <div>My address is</div>
          <h4>${user.location.street.number} ${user.location.street.name}</h4>
        </li>
        <li class="phone">
          <div>My phone number is</div>
          <h4>${user.phone}</h4>
        </li>
        <li class="password">
          <div>My password is</div>
          <h4>${user.login.password}</h4>
        </li>
      </ul>
    </li>
  `);
  });

}
