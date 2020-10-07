function fetchItem(id) {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((res) => res.json())
    .catch((er) => console.error(er))
}

function hydrateItems(items) {
  return Promise.all(items.map(fetchItem))
}

export function fetchMainStories(type) {
  return fetch(`https://hacker-news.firebaseio.com/v0/${type}stories.json`)
    .then((res) => res.json())
    .then((ids) => {
      if(!ids) throw new Error('There was an error fetching the posts.json')
      return ids.slice(0, 50)
    })
    .then((ids) => Promise.all(ids.map(fetchItem)))
    .then((posts) => posts.filter(({type}) => type === 'story'))
}

export function fetchStory(id) {
  return fetchItem(id)
    .then((story) => {
      if(story.kids) {
        return hydrateItems(story.kids)
        .then((comments) => ({...story, kids: comments.filter((item) => item.deleted !== true)}))
      }
      return story
    })
}

export function fetchUser(username) {
  return fetch(` https://hacker-news.firebaseio.com/v0/user/${username}.json`)
    .then((res) => res.json())
    .then((user) => {
      if(user.submitted) {
        return hydrateItems(user.submitted.slice(0, 30))
          .then((data) => ({
            ...user,
            submitted: data.filter((item) => item.type === 'story' && item.dead !== true)
          }))
      }
      return user
    })
    .catch((er) => console.error(er))
}