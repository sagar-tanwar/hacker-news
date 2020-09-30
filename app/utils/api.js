function fetchStory(id) {
  // Return the story
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((res) => res.json())
    .then((post) => post)
    .catch((er) => console.error(er))
}

function hydrateStories(posts) {
  return Promise.all(posts.map((id, index) => {
    if(index < 50) {
      return fetchStory(id)
        .then((stories) => stories)
    }
  }))
}

export function fetchTopStories() {
  // Return Array of top stories IDs
  return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then((res) => res.json())
    .then((data) => (
      hydrateStories(data.slice(0, 50))
        .then((data) => data.filter((item) => item.type === 'story'))
    ))
  

}