<template>
    <h1>News</h1>
    <div class="news">
        <div class="newUl">
            <div v-for="item in news" :key="item.id" class="newsItem">
                <img class="back" :src="item.main_image" :alt="item.id" />
                <div class="itemContent">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.short_description }}</p>
                    <!-- <routerLink :to="item.article_url">Read More</routerLink> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue'

export default {
    name: 'News',

    setup() {
        const news = ref([])

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f6dd938eacmsh0d384b1080b54fbp10dd7cjsn5485a7bd7a65',
                'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
            }
        };
        
        onBeforeMount(() => {
            fetch('https://mmo-games.p.rapidapi.com/latestnews', options)
            .then(response => response.json())
            .then(data => {
                news.value = data
                // console.log(news.value)
            })
        })
        return {
            news
        }
    }
}


</script>

<style>
.news {
    max-width: 100rem;
    margin-inline: auto;
    padding-inline: 2rem;
}
.newUl {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
}
.newsItem {
    /* border: 2px solid red; */
    position: relative;
    aspect-ratio: 1/1.5;
}

.newUl img {
    max-width: 100%;
    width: 100%;
    display: block;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 5px;
}
.itemContent {
    text-align: left;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0.5rem 0.5rem 2rem;
    padding: 0.5rem;
    box-shadow: 0.25rem 1rem rgb(255 255 255/0.1);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3));
}
.itemContent h3 {
    font-size: 18px;
    color: rgb(255, 255, 255);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
            line-clamp: 3; 
    -webkit-box-orient: vertical;
}
.itemContent p {
    font-size: 14px;
    color: rgb(199, 199, 199);
}

@media(min-width: 40rem) {
    .newsItem:nth-child(1), .newsItem:nth-child(11), .newsItem:nth-child(35), .newsItem:nth-child(20) {
        grid-row: span 2;
        grid-column: span 2;
    }
    .newsItem:nth-child(1) img, .newsItem:nth-child(11) img, .newsItem:nth-child(35) img, .newsItem:nth-child(20) img {
        aspect-ratio: 1/1.25;
    }
}

</style>