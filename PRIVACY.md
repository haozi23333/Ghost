
version 0.1.0

ghost version 0.11.7  
:star: 有人要换友链么 :star:
___

如果有什么想要的功能可以载我的博客下面评论。  
下面所有的完成的地方都将记录在我的博客的[博客魔改计划](https://haozi.moe/tag/blog/)  

todo list:

 - [X] [点击图片显示大图](https://haozi.moe/11/)
 - [X] [table的滋瓷](https://haozi.moe/13/)
 - [ ] [图片做CDN存储]()


# Quick Start Install

Make sure you've installed Node.js - We recommend the latest **Node v4 LTS** release. For other versions [click here](http://support.ghost.org/supported-node-versions/). May contain nuts.

1. Download the [latest release](https://ghost.org/developers/) of Ghost
1. Unzip in the location you want to install
1. Fire up a terminal
1. `npm install --production`
1. Start Ghost!
    - Local environment: `npm start`
    - On a server: `npm start --production`
1. `http://localhost:2368/ghost` :tada:

More [install docs](http://support.ghost.org/installation/) here in case you got stuck.

<a name="getting-started"></a>
# Developer Install (from git)

Install Node.js. (See [Supported Node.js versions](http://support.ghost.org/supported-node-versions/))

```bash
# Node v4.2+ LTS - recommended
# Node v0.10.x and v0.12.x - supported
#
# Choose wisely
```

Clone :ghost:

```bash
git clone git://github.com/tryghost/ghost.git
cd ghost
```

Install grunt. No prizes here.

```bash
npm install -g grunt-cli
```

Install Ghost. If you're running locally, use [master](https://github.com/TryGhost/Ghost/tree/master). For production, use [stable](https://github.com/TryGhost/Ghost/tree/stable). :no_entry_sign::rocket::microscope:

```bash
npm install
```

Build the things!

```bash
grunt init
```

Minify that shit for production?

```bash
grunt prod
```

Start your engines.

```bash
npm start

## running production? Add --production
```

Congrats! You made it. BTW you can also just `npm install ghost` if you're into that sort of thing. NPM aficionados can also read up on using [Ghost as an NPM module](https://github.com/TryGhost/Ghost/wiki/Using-Ghost-as-an-npm-module).

More general [install docs](http://support.ghost.org/installation/) here in case you got stuck.


# Deploying Ghost

![Ghost(Pro) + DigitalOcean](https://cloud.githubusercontent.com/assets/120485/8180331/d6674e32-1414-11e5-8ce4-2250e9994906.png)

Save yourself time and headaches with our fully managed **[Ghost(Pro)](https://ghost.org/pricing/)** service. Deploy a new instance of Ghost in a couple of clicks running on [DigitalOcean](https://digitalocean.com)’s rock solid infrastructure, with a worldwide CDN thrown in at no extra charge.

All revenue from **Ghost(Pro)** goes to the Ghost Foundation, the non-profit org which funds the maintenance and further development of Ghost.

[Other options](http://support.ghost.org/deploying-ghost/) are also available if you prefer playing around with servers by yourself.



# Copyright & License

Copyright (c) 2013-2017 Ghost Foundation - Released under the [MIT license](LICENSE).

