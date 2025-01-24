const express = require('express')
require('dotenv').config()

// import express from "express"
const app = express()
const port = 3000

const githubData = {
  "login": "Shristi-Roy",
  "id": 122510934,
  "node_id": "U_kgDOB01eVg",
  "avatar_url": "https://avatars.githubusercontent.com/u/122510934?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Shristi-Roy",
  "html_url": "https://github.com/Shristi-Roy",
  "followers_url": "https://api.github.com/users/Shristi-Roy/followers",
  "following_url": "https://api.github.com/users/Shristi-Roy/following{/other_user}",
  "gists_url": "https://api.github.com/users/Shristi-Roy/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Shristi-Roy/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Shristi-Roy/subscriptions",
  "organizations_url": "https://api.github.com/users/Shristi-Roy/orgs",
  "repos_url": "https://api.github.com/users/Shristi-Roy/repos",
  "events_url": "https://api.github.com/users/Shristi-Roy/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Shristi-Roy/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Shristi Roy",
  "company": null,
  "blog": "",
  "location": "Bangalore",
  "email": null,
  "hireable": null,
  "bio": "👩‍💻 Frontend Developer\r\n🌐 HTML | CSS | JavaScript | React.js \r\n💡 Learning DSA to improve problem-solving\r\n🚀 Exploring Responsive Design and unique projects",
  "twitter_username": null,
  "public_repos": 72,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2023-01-12T05:33:45Z",
  "updated_at": "2025-01-16T17:18:01Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
    res.send('shristiroy')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login first</h1>')
})

app.get('/youtube',(req, res) => {
    res.send('<h2>Namaste Backend</h2>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
