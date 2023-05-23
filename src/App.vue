<template>
  <div class="top">
    <router-link class="homeLink" to="/"> <img src="../public/game.png" /> Games4Gamers</router-link>
    <nav class="bigNav">
      <router-link to="/">Home</router-link>
      <router-link to="/PCGames">PC Games</router-link>
      <router-link to="/BrowserGames">Browser Games</router-link>
      <router-link to="/News">News</router-link>
      <router-link to="/GiveAways">Give Aways</router-link>
    </nav>
    <div class="menu">
      <fa icon="bars" class="pull" @click="isSMenu = !isSMenu" v-show="!isSMenu" />
      <fa icon="xmark" class="pull" @click="isSMenu = !isSMenu" v-show="isSMenu" />
    </div>
    <nav class="smallNav" v-show="isSMenu" @click="isSMenu = !isSMenu">
      <router-link to="/" class="subClose">Home</router-link>
      <router-link to="/PCGames">PC Games</router-link>
      <router-link to="/BrowserGames">Browser Games</router-link>
      <router-link to="/News">News</router-link>
      <router-link to="/GiveAways">Give Aways</router-link>
      <span @click="isSMenu = !isSMenu">close</span>
    </nav>
    
  </div>
  <ScrollTop />
  <router-view/>
  <Footer />
</template>

<script>
import Footer from '@/components/MainFooter'
import ScrollTop from '@/components/ScrollToTop'

export default {
  components: {
    Footer,
    ScrollTop
  },
  data() {
    return {
      isSMenu: false
    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'poppins', sans-serif;
  /* outline: 1px solid red; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 1400px;
  width: 100%;
}
body {
  color: #ffffff;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
}
.top .homeLink {
  padding: 10px 15px;
  text-decoration: none;
  color: #fff;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.top .homeLink:hover {
  color: #ff0000;
}
.top .homeLink img {
  margin: 10px;
  background: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
nav {
  padding: 30px 0px;
}

nav a {
  font-weight: bold;
  color: #e4e4e4;
  text-decoration: none;
  margin: 5px 10px;
  transition: 0.4s all ease-in-out;
}
nav a:hover {
  color: #ff0000;
}
nav a.router-link-exact-active {
  color: #ff0000;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(235, 235, 235, 0);
}
::-webkit-scrollbar-thumb {
  background: #6b0000;
  cursor: pointer;
  border: 3px solid rgba(0, 0, 0, 0, 0);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #c90000; 
}
.smallNav, .menu {
  display: none;
}

@media(max-width: 800px) {
  .bigNav {
    display: none;
  }
  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .smallNav {
    display: flex;
    flex-direction: column;
    max-width: 230px;
    width: 100%;
    background-color: #000;
    color: #fff;
    margin: 1rem;
    padding: 10px;
    border-radius: 10px;
    position: fixed;
    top: 2rem;
    right: 0;
    z-index: 10;
    
  }
  .smallNav a {
    padding: 0.5rem 0.7rem;
    text-decoration: none;
    color: #fff;
    text-align: left;
    border-radius: 10px;
  }
  .smallNav span {
    background: #fff;
    color: #000;
    padding: .3rem .5rem;
    border-radius: 10px;
    width: fit-content;
    margin: 10px 5px 5px 15px;
  }
  .pull {
    font-size: 30px;
    padding-right: 1rem;
    margin-left: 10px;
  }
  .pull:hover {
    color: #ff0000;
  }

}
</style>
