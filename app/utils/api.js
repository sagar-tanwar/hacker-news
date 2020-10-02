function fetchItem(id) {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((res) => res.json())
    .then((post) => post)
    .catch((er) => console.error(er))
}

function hydrateItems(items) {
  return Promise.all(items.map((item, index) => {
    if(index < 50) {
      return fetchItem(item)
        .then((data) => data)
    }
  }))
}

export function fetchTopStories() {
  return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then((res) => res.json())
    .then((stories) => (
      hydrateItems(stories.slice(0, 50))
        .then((data) => data.filter((item) => item.type === 'story'))
    ))
}

export function fetchNewStories() {
  return fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
    .then((res) => res.json())
    .then((stories) => hydrateItems(stories.slice(0, 50)))
}

export function fetchStory(id) {
  return fetchItem(id)
    .then((story) => {
      if(story.kids) {
        return hydrateItems(story.kids)
          .then((comments) => ({...story, kids: comments}))
      }
      return story
    })
}