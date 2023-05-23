<template>
  <section class="showing">
    <h2>Shooting Games 
      <span>
        <fa class="fa" icon="circle-chevron-left" @click="scroll_left"/>
        <fa class="fa" icon="circle-chevron-right" @click="scroll_right"/>
      </span>
    </h2>
    <ul class="allHomeGames shooter">
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
  name: 'HelloWorld',

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
      let content = document.querySelector(".shooter");
      content.scrollLeft -= 500;
    }
    const scroll_right = () => {
      let content = document.querySelector(".shooter");
      content.scrollLeft += 400;
    }
    onBeforeMount(() => {
      fetch('https://mmo-games.p.rapidapi.com/games?category=shooter', options)
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

<style>
@media(max-width:500px) {
  .showing h2 {
    font-size: 15px;
  }
}
h2 span .fa {
  margin: 0 10px;
  cursor: pointer;
}
.allHomeGames {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-behavior: smooth;
}
.allHomeGames::-webkit-scrollbar {
  display: none;
}
section h2 {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}
.allHomeGamesLi {
  list-style: none;
  margin: 5px;
  position: relative;
  border-radius: 10px;
  width: 280px;
}
.allHomeGamesLi img {
  border-radius: 10px;
  width: 280px;
}
.allHomeGamesLi .someInfo {
  position: absolute;
  bottom: 0;
  left: 0;
  top: 0;
  text-align: left;
  padding:5px;
  width: 100%;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) );
  color: #cecece;
  font-size: 12px;
  opacity: 0;
  transition: all 0.4s ease-in-out;
}
.allHomeGamesLi:hover .someInfo {
  opacity: 1;
}
.title {
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #ffffff;
}
.line {
  width: 65px;
  border-radius: 99px;
  height: 3px;
  background-color: #fff;
  margin-bottom: 10px;
}
</style>
