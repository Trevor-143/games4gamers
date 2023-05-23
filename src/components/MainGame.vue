<template>
    <section class="firstTop">
        <img src="@/assets/gaming.jpg" />
        <div class="topInfo">
            <h3>Games4Gamers</h3>
            <p>A database for gamers of all levels, 
                providing detailed information on the most you need to 
                know about your favorite game. our database has you covered. </p>
        </div>
    </section>
    <div class="headerImage">
        <router-link :to="'/game/'+game.id">
            <img :src="game.thumbnail" :alt="game.title" />
        </router-link>
        <div class="mainInfo">
            <div class="mainInfoText">
                <h3>{{ game.title }}</h3>
                <p>{{ game.short_description }}</p>
            </div>
            <div class="textTags">
                <h4>{{ game.platform }}</h4>
                <h4>{{ game.genre }}</h4>
                <h4>{{ game.release_date }}</h4>
                <h4>{{ game.developer }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'

export default {

    name: 'MainGame',

    setup() {
        const game = ref([])
        const randomGame = ref([])
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f6dd938eacmsh0d384b1080b54fbp10dd7cjsn5485a7bd7a65',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
            }
        }

        onBeforeMount(() => {
            fetch('https://mmo-games.p.rapidapi.com/games', options)
            .then(resp =>resp.json())
            .then(data => {
                randomGame.value = Math.floor(Math.random() * (data.length))
                game.value = data[randomGame.value]
                // console.log(game.value)
            })
        })

        setInterval(function() {
            fetch('https://mmo-games.p.rapidapi.com/games?category=shooter', options)
            .then(resp =>resp.json())
            .then(data => {
                randomGame.value = Math.floor(Math.random() * (data.length))
                game.value = data[randomGame.value]
                // console.log(game.value)
            })
        },10000);

        return {
            game
        }
    }
}

</script>

<style>

.headerImage {
    display: flex;
    flex-direction: row;
    padding: 10px 15px;
}
@media(max-width: 800px) {
    .headerImage {
        flex-direction: column;
    }
}
.headerImage img {
    border-radius: 10px;
    max-width: 350px;
    width: 100%;
    /* height: 200px; */
    object-fit: cover;
    margin: auto 0px;
}
.mainInfo {
    text-align: left;
    padding: 15px;

}
.mainInfoText p {
    font-size: 15px;
    color: #dadada;
    margin-top: 10px;
    margin-bottom: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
            line-clamp: 2; 
    -webkit-box-orient: vertical;
    max-width: 700px;
}
.textTags {
    display: flex;
    flex-direction: row;
    overflow: auto;
}
.textTags h4 {
    padding: 7px 10px;
    margin: 5px;
    color: #000;
    background-color: #ffffff;
    border-radius: 10px;
    min-width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.textTags::-webkit-scrollbar {
    display: none;
}
.firstTop {
    position: relative;
    margin: 10px;
    height: 300px;
}
.firstTop img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}
.topInfo {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 20px;
}
.topInfo h3 {
    font-size: 25px;
    color: #ff0000;
    text-align: left;
}
.topInfo p {
    max-width: 700px;
    text-align: left;
}

</style>