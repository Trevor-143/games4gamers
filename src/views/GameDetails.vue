<template>
  <div class="about">

    <div class="gameIntro">
      <div class="topIntro">
        <img :src="fullGame.thumbnail" :alt="fullGame.title" />
        <div class="introInfo">
          <h3>{{ fullGame.title }}</h3>
          <p>{{ fullGame.short_description }}</p>
          <ul class="miniDesc" >
            <li>{{ fullGame.genre }}</li>
            <li>{{ fullGame.developer }}</li>
            <li>{{ fullGame.status }}</li>
            <li>{{ fullGame.publisher }}</li>
            <li>{{ fullGame.platform }}</li>
          </ul>
        </div>
      </div>
      
    </div>

    <div class="description">
      <h3>Full description</h3>
      <div v-html="fullGame.description"></div>
    </div>

    <div class="gamePlay">
      <h3>Screenshots</h3>
      <div class=imgViews>
        <div v-for="shot in screenshots" :key="shot.id" class="views">
          <img :src="shot.image" />
        </div>
      </div>
    </div>

    <div class="requirements" id="requirements">
      <h3>System Requirements</h3>
      <ul class="needs">
        <li> <fa icon="desktop" class=sIcons /> {{ minimum_system_requirements.os }}</li>
        <li> <fa icon="genderless" class=sIcons /> {{ minimum_system_requirements.graphics }}</li>
        <li> <fa icon="memory" class=sIcons /> {{ minimum_system_requirements.memory }}</li>
        <li> <fa icon="microchip" class=sIcons /> {{ minimum_system_requirements.processor }}</li>
        <li> <fa icon="database" class=sIcons /> {{ minimum_system_requirements.storage }}</li>
      </ul>
    </div>
  </div>
  
  <section class="sameGenre">
    <h2>Same Genre 
      <span>
        <fa class="fa" icon="circle-chevron-left" @click="genreleft"/>
        <fa class="fa" icon="circle-chevron-right" @click="genreright"/>
      </span>
    </h2>
    <ul class="allHomeGames like">
      <li v-for="game in maybe" :key="game.id" class="allHomeGamesLi">
        <img :src="game.thumbnail" :alt="game.title" />
        <a :href ="'/game/'+game.id">
          <div class="someInfo">
            <h3 class="title">{{ game.title }}</h3>
            <div class="line"></div>
            <h3>{{ game.developer }}</h3>
            <h3>{{ game.release_date }}</h3>
            <h3>{{ game.platform }}</h3>
          </div>
        </a>
      </li>
    </ul>
  </section>

</template>

<script>
import { ref, onBeforeMount, onMounted } from 'vue'
import { useRoute } from "vue-router";

export default {
  name: 'GameDetails',

  methods: {
    getAnother() {
      window.location.reload()
    }
  },

  setup() {
    const fullGame = ref([])
    const route = useRoute()
    const minimum_system_requirements = ref([])
    const screenshots = ref([])
    const maybe = ref([])
    const genre = ref('')

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f6dd938eacmsh0d384b1080b54fbp10dd7cjsn5485a7bd7a65',
        'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
      }
    }

    const genreleft = () => {
      let content = document.querySelector(".like");
      content.scrollLeft -= 500;
    }
    const genreright = () => {
      let content = document.querySelector(".like");
      content.scrollLeft += 400;
    }


    onBeforeMount(() => {
      fetch(`https://mmo-games.p.rapidapi.com/game?id=${route.params.id}`, options)
      .then(reply => reply.json())
      .then(data => {
        genre.value = data.genre.split(/\s+/).slice(0, 1).join(" ")
        fullGame.value = data

        if (data.minimum_system_requirements !== undefined) {
          minimum_system_requirements.value = data.minimum_system_requirements
        }
        if (data.screenshots !== undefined) {
          screenshots.value = data.screenshots
        }
        console.log(fullGame.value)


        fetch(`https://mmo-games.p.rapidapi.com/games?category=${genre.value}`, options)
        .then(resp => resp.json())
        .then(likes => {
          console.log(likes)
          maybe.value = likes
        })

      })
    })

    return {
      fullGame,
      route,
      screenshots,
      minimum_system_requirements,
      maybe,
      genreleft,
      genreright,
      genre
    }
  }
}
</script>

<style scoped>

.about {
  margin: 10px 20px;
}

.gameIntro {
  display: flex;
  align-items: center;
}
.sameGenre {
  margin: 15px;
}
.sameGenre h2 {
  font-size: 20px;
  margin-left: 10px;
}
.gameIntro img {
  border-radius: 10px;
  margin: 10px;
  min-width: 230px;
  max-width: 350px;
  width: 100%;
}
.introInfo {
  margin: auto 10px;
  text-align: left;
  width: 100%;
}
.introInfo h3 {
  margin-bottom: 10px;
}
.topIntro {
  display: flex;
  align-items: center;
  width: 100%;
}
.miniDesc {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow:scroll;
}
.miniDesc::-webkit-scrollbar {
  display: none;
}
.miniDesc li {
  list-style: none;
  width: fit-content;
  margin: 5px;
  padding: 5px 10px;
  background-color: #fff;
  color: #000;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.description {
  margin-top: 2rem;
  margin-bottom: 1rem;
  background-color: #1d1d1d;
  padding: 1rem;
  border-radius: 10px;
}
.description h3 {
  text-align: left;
}
.gamePlay h3 {
  text-align: left;
  padding-left: 1rem;
  margin-top: 1rem;
  margin-bottom: .5rem;
}
.imgViews {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
}
.views {
  /* outline: 1px solid red; */
  width: fit-content;
  border-radius: 10px;
}
.views img {
  width: 100%;
  border-radius: 10px;
}
.requirements {
  text-align: left;
  margin-top: 1rem;
}
.requirements h3 {
  padding-left: 1rem;
  margin-bottom: .5rem;
}
.needs {
  display: grid;
  gap: 1.3rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
}
.needs li {
  list-style: none;
  display: flex;
  align-items: center;
}
.sIcons {
  width: 20px;
  height: 20px;
  font-size: 10px;
  background-color: #fff;
  padding: 15px;
  border-radius: 50%;
  color: #000;
  margin: 10px;
}

@media (max-width:800px) {
  .topIntro {
    flex-direction: column;
  }
}
</style>