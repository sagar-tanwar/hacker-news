export function getTopPosts() {
  return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then((res) => res.json())
    .then((posts) => posts)
}