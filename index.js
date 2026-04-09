const express = require("express");
const app = express();
const port = 4000;

const githubData={
  "login": "Dhruv0250",
  "id": 228776991,
  "node_id": "U_kgDODaLcHw",
  "avatar_url": "https://avatars.githubusercontent.com/u/228776991?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Dhruv0250",
  "html_url": "https://github.com/Dhruv0250",
  "followers_url": "https://api.github.com/users/Dhruv0250/followers",
  "following_url": "https://api.github.com/users/Dhruv0250/following{/other_user}",
  "gists_url": "https://api.github.com/users/Dhruv0250/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Dhruv0250/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Dhruv0250/subscriptions",
  "organizations_url": "https://api.github.com/users/Dhruv0250/orgs",
  "repos_url": "https://api.github.com/users/Dhruv0250/repos",
  "events_url": "https://api.github.com/users/Dhruv0250/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Dhruv0250/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Dhruv",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2025-08-26T17:19:40Z",
  "updated_at": "2026-04-09T12:52:33Z"
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter",(req,res)=>{
  res.send("welcome to twitter")
})

app.get("/youtube",(req , res)=>{
res.send("<h1>welcome to youtube</h1>")
})

app.get("/github",(req,res)=>{
  res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
