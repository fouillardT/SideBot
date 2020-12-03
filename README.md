# SideBot

This is a discord bot that will basically do coin flips.
The main goal was to help players choose side in games such as LoL, Chess, CSGO etc.

# How to run

## Using node

Install dependencies with :

    npm install

Create a file nammed `.env` and put your Discord token like this :


    DISCORD_TOKEN=YOUR_DISCORD_TOKEN

(Change YOUR_DISCORD_TOKEN by your)

Run it with :

    npm start

## Using Docker

Build the docker image :

    docker build --tag sidebot:latest .

Run the Docker image :

    docker run -d --env DISCORD_TOKEN=YOUR_DISCORD_TOKEN --name sidebot sidebot

Docker Compose exemple :

```
sidebot:
    image: sidebot
    container_name: sidebot
    environment:
      - DISCORD_TOKEN=YOUR_DISCORD_TOKEN
    restart: unless-stopped
```

(Change YOUR_DISCORD_TOKEN by your)

# Needs

To make it work you'll need a token and some other things. 
The best I can do is to put the link of the video I began with : https://www.youtube.com/watch?v=j_sD9udZnCk 
From now it's all about reading discord.js documentation.
Good luck and have fun tossing coins.