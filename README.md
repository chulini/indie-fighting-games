# Usage
## Installation
```
$ sudo npm install -g hexo-cli
$ cd indie-fighting-games
$ npm install
```
## Run localhost
```
$ hexo s
```
Will serve
```
http://localhost:4000
```

## Create a new game
```
$ hexo new name-of-the-game
```
Will create `source\_posts\name-of-the-game.md`
Now, you can modify that file and add the game data like this:
```

---
title: 'Schwarzerblitz'	
tags: [free, 3D fighter, PC, crazy]
price: Free	
img: https://i.imgur.com/zXjYucj.jpg
link: https://store.steampowered.com/app/1287800/Schwarzerblitz/	
discord: http://discord.gg/vXKrvpV	
twitter: https://twitter.com/AndreaDProjects
---

```
Please note that tags are case sensitive so, search before how they are written before add them.

## Deploy
```
$ ./push-and-deploy.sh "<My comment>"
```

