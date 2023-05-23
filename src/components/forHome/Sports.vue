<template>
    <section class="showing">
      <h2>Sports Games 
        <span>
          <fa class="fa" icon="circle-chevron-left" @click="scroll_left"/>
          <fa class="fa" icon="circle-chevron-right" @click="scroll_right"/>
        </span>
      </h2>
      <ul class="allHomeGames sports">
        <li v-for="game in gameList" :key="game.id" class="allHomeGamesLi">
          <img :src="game.thumbnail" :alt="game.title" />
          <router-link :to="'/game/'+game.id">
            <div class="someInfo">
              <h3 class="title">{{ game.title }}</h3>
              <div class="line"></div>
              <h3>{{ game.developer }}</h3>
              <h3>{{ game.release_date }}</h3>
              <h3>{{ game.platform }}</h3>
            </div>
          </router-link>
        </li>
      </ul>
    </section>
  </template>
  
  <script>
  import { ref, onBeforeMount } from 'vue'
  
  export default {
    name: 'Sports',
  
    setup() {
      const gameList = ref([])
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'f6dd938eacmsh0d384b1080b54fbp10dd7cjsn5485a7bd7a65',
          'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
        }
      }
      const scroll_left = () => {
        let content = document.querySelector(".sports");
        content.scrollLeft -= 500;
      }
      const scroll_right = () => {
        let content = document.querySelector(".sports");
        content.scrollLeft += 400;
      }
      onBeforeMount(() => {
        fetch('https://mmo-games.p.rapidapi.com/games?category=sports', options)
        .then(response => response.json())
        .then(data => {
          gameList.value = data
          // console.log(gameList.value)
        })
      })
      return {
        gameList,
        scroll_left,
        scroll_right
      }
    }
  }
  </script>