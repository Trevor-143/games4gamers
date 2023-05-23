<template>
    <div class="toTop" v-if="showTop" @click="toTop">
        <fa class="fa" icon="circle-chevron-up" />
    </div>
</template>

<script>
import { onMounted } from 'vue';

export default {
    name: 'scrollTop',
    data() {
        return {
            showTop: true
        }
    },
    methods: {
        toTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }
}
</script>

<style scoped>

.toTop {
    position: fixed;
    z-index: 10;
    bottom: 10px;
    left: 10px;
    width: 45px;
    height: 45px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    opacity: 0.4;
    cursor: pointer;
}
.toTop:hover {
    opacity: 1;
}
.fa {
    width: 40px;
    height: auto;
    color: #ffffff;
    transition: 0.4s all ease-in-out;
}
.fa:hover {
    width: 50px;
}

</style>