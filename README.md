# Usage
## Installation
```
$ sudo npm install -g hexo-cli
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
Noew you can add the data like this:
```
title: 'Schwarzerblitz'	
tags: [free, 3D fighter, PC, crazy]
price: Free	
img: https://i.imgur.com/zXjYucj.jpg
link: https://store.steampowered.com/app/1287800/Schwarzerblitz/	
discord: http://discord.gg/vXKrvpV	
twitter: https://twitter.com/AndreaDProjects
```

## Deploy
```
$ ./push-and-deploy.sh "<My comment>"
```

