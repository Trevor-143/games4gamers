<template>
    <section class="firstTop">
        <img src="@/assets/pcwallpaper.jpg" />
        <div class="topInfo">
            <h3>All Pc Games</h3>
            <p>The game4gamers database offers a 
                wealth of information on all the greatest PC games, including 
                detailed descriptions of the game, creation and launch date. </p>
        </div>
    </section>
    <section class="allTheGames">
        <h2>All Pc Games</h2>
        <ul class="gameList">
            <li v-for="game in pcGameList" :key="game.id" class="gameListLi">
                <img :src="game.thumbnail" :alt="game.title" />
                <router-link :to="'/game/'+game.id">
                    <div class="gameListInfo">
                        <h3 class="gameTitle">{{ game.title }}</h3>
                        <h3>{{ game.developer }}</h3>
                    </div>
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
import { ref, onBeforeMount } from 'vue'

export default {
    name: 'ForPc',
    setup() {
        const pcGameList = ref([])
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f6dd938eacmsh0d384b1080b54fbp10dd7cjsn5485a7bd7a65',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
            }
        };

        onBeforeMount(() => {
            fetch('https://mmo-games.p.rapidapi.com/games?platform=pc', options)
            .then(response => response.json())
            .then(data => {
                pcGameList.value = data
            })
        })
        return {
            pcGameList
        }
    }    
}
</script>

<style>
    .allTheGames {
        padding: 0 5px;
    }
    .allTheGames h2 {
        width: fit-content;
    }
    
    .gameList {
        display: grid;
        gap: .5rem;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    }
    .gameListLi {
        aspect-ratio: 1/.5;
        position: relative;
        list-style: none;
    }
    .gameListLi a {
        text-decoration: none;
        color: #fff;
    }
    .gameListLi img {
        width: 100%;
        height: auto;
        border-radius: 5px;
        aspect-ratio: 1/.5;
        object-fit: cover;
    }
    .gameListInfo {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.7);
        font-size: 13px;
        opacity: 0;
        transition: all 0.4s ease-in-out;
    }
    .gameListLi:hover .gameListInfo {
        opacity: 1;
    }
</style>