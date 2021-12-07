const userListEl = document.getElementById('users');
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


getData('https://jsonplaceholder.typicode.com/users').then((users) =>
  users.forEach((user) => {
    userListEl.insertAdjacentHTML(
      'beforeend',
      `
    <li data-id=${user.id}>${user.name}</li>`
    );
  })
);

function createUserTodoList(toDos) {
  const todoList =document.createElement('UL');
  todoList.classList.add('open');
  toDos.forEach(toDo => {
    todoList.insertAdjacentHTML(
      'beforeend', 
      `
      <li>${toDo.id}</li>
      <li>${toDo.title}</li>
      <li>${toDo.completed}</li>
    `);
  });
  return todoList;
}

function closeLists() {
  document.querySelectorAll('.open').forEach(element => {
    element.innerHTML = '';
    element.classList.remove('open');
  })
}

function handleUserClick(e) {
  // use getData to get the todo items for the correct user
  // insert the appropriate HTML into the userList
  // console.log(e.target.dataset.id);
  if (e.target.nodeName === 'LI') {
    closeLists();
    getData(`https://jsonplaceholder.typicode.com/todos?userId=${e.target.dataset.id}`).then((toDos) => {
    console.log(toDos);
    e.target.appendChild(createUserTodoList(toDos));;
  });
  }
}
userListEl.addEventListener('click', handleUserClick);