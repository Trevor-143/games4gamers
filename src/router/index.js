import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GiveAways from '../views/GiveAways.vue'
import PCGames from '../views/PCGames.vue'
import News from '../views/News.vue'
import BrowserGames from '../views/BrowserGames.vue'
import GameDetails from '../views/GameDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/BrowserGames',
    name: 'BrowserGames',
    component: BrowserGames
  },
  {
    path: '/PCGames',
    name: 'PCGames',
    component: PCGames
  },
  {
    path: '/GiveAways',
    name: 'GiveAways',
    component: GiveAways
  },
  {
    path: '/News',
    name: 'News',
    component: News
  },
  {
    path: '/game/:id',
    name: 'GameDetails',
    component: GameDetails
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
