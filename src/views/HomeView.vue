<template>
  <MainGame />
  <HelloWorld />
  <Anime />
  <Card />
  <Social />
  <Action />
  <Battle_Royale />
  <Fantasy />
  <Fighting />
  <Fiction />
  <Sports />
  <Racing />
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MainGame from '@/components/MainGame.vue'
import Action from '@/components/forHome/Action.vue'
import Card from '@/components/forHome/Card.vue'
import Battle_Royale from '@/components/forHome/Battle_Royal.vue'
import Social from '@/components/forHome/Social.vue'
import Fantasy from '@/components/forHome/Fantasy.vue'
import Fighting from '@/components/forHome/Fighting.vue'
import Fiction from '@/components/forHome/Sci_fi.vue'
import Sports from '@/components/forHome/Sports.vue'
import Racing from '@/components/forHome/Racing.vue'
import Anime from '@/components/forHome/Anime.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MainGame,
    Action,
    Card,
    Battle_Royale,
    Social,
    Fantasy,
    Fighting,
    Fiction,
    Sports,
    Racing,
    Anime
  }
}
</script>

<style>

</style>