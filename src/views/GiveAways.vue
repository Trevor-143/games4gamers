<template>
    <section class="firstTop">
        <img src="@/assets/giveaways.jpg" />
        <div class="topInfo">
            <h3>Game Pack Giveaways</h3>
            <p>Are you a fan of browser games, but tired of scouring the internet
                 for information on your favorites? Look no further than our browser 
                 game info database! Our database is the ultimate resource for all 
                 things browser gaming, providing detailed information on gameplay 
                 screenshots, characters, and much more. </p>
        </div>
    </section>
    <div class="free">
        <div class="giveAways">
            <div class="giveAwaysItems" v-for="item in gaways" :key="item.id">
                <img :src="item.main_image" :alt="item.title" />
                <div class="sInfo">
                    <h3>{{ item.title }}</h3>
                    <h3>{{ item.keys_left }}</h3>
                    <p>{{ item.short_description }}</p>
                    <a :href="item.giveaway_url">Read More</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";

export default {
    name: 'GiveAways',
    setup() {
        const gaways =ref([])
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f6dd938eacmsh0d384b1080b54fbp10dd7cjsn5485a7bd7a65',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
            }
        }

        onBeforeMount(() => {
            fetch('https://mmo-games.p.rapidapi.com/giveaways', options)
            .then(response => response.json())
            .then(data => {
                gaways.value = data
                console.log(gaways.value)
            })
        })
        return {
            gaways
        }
    }
}

</script>

<style>
.free {
    max-width: 100rem;
    margin-inline: auto;
    padding-inline: 2rem;
}
.giveAways {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
}
.giveAwaysItems {
    display: grid;
    box-shadow: 4px 6px 3px 0px rgba(255,255,255,0.14);
    -webkit-box-shadow: 4px 6px 3px 0px rgba(255,255,255,0.14);
    -moz-box-shadow: 4px 6px 3px 0px rgba(255,255,255,0.14);
    border-radius: 10px;
}
.sInfo {
    text-align: left;
    padding: 1rem 2rem;
    display: grid;
    gap: 1rem;
}
.sInfo a {
    /* margin: 1rem; */
    text-decoration: none;
    color: #000;
    background: #fff;
    padding: 0.5rem;
    border-radius: 10px;
    width: fit-content;
    transition: 0.4s ease-in-out;
}
.sInfo a:hover {
    color: #fff;
    background: #000;
}
</style>