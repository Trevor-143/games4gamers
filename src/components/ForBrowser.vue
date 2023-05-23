<template>
    <section class="firstTop">
        <img src="@/assets/browsergames.jpg" />
        <div class="topInfo">
            <h3>Browser Games</h3>
            <p>Are you a fan of browser games, Our database is the ultimate resource for all 
                 things browser gaming, providing detailed information on gameplay 
                 screenshots, game genres, and much more. </p>
        </div>
    </section>
    <section class="allTheGames">
        <h2>All Browser Games</h2>
        <ul class="gameList">
            <li v-for="game in browserGameList" :key="game.id" class="gameListLi">
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
    name: 'ForBrowser',
    setup() {
        const browserGameList = ref([])
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f6dd938eacmsh0d384b1080b54fbp10dd7cjsn5485a7bd7a65',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
            }
        };

        onBeforeMount(() => {
            fetch('https://mmo-games.p.rapidapi.com/games?platform=browser', options)
            .then(response => response.json())
            .then(data => {
                browserGameList.value = data
            })
        })
        return {
            browserGameList
        }
    }    
}
</script>