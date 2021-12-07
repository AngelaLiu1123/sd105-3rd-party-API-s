function getPosts(url, callback) {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.response);
      callback(data, undefined);
    } else if (request.readyState === 4) {
      callback(`${request.status}: something goes wrong`, undefined);
    }
  });
  request.open('GET', url);
  request.send();
}

// getPosts('https://jsonplaceholder.typicode.com/posts', (data, error) => {
getPosts('data/posts.json', (data, error) => {
  if (data !== undefined) {
    // console.log(data);
    handlePosts(data);
  }

  if (error !== undefined) {
    console.log(error);
  }
});

function handlePosts(posts) {
  const postsEle = document.getElementById('posts');
  for (const post of posts) {
    postsEle.insertAdjacentHTML(
      'beforeend',
      `<li>${post.title}</li>`);
  }
}