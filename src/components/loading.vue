<template>
    <div class="load">
        <div class="waviy">
            <span style="--i:1">P</span>
            <span style="--i:2">L</span>
            <span style="--i:3">E</span>
            <span style="--i:4">A</span>
            <span style="--i:5">S</span>
            <span style="--i:6">E</span>
            <span style="--i:7">-</span>
            <span style="--i:8">W</span>
            <span style="--i:9">A</span>
            <span style="--i:10">I</span>
            <span style="--i:10">T</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'loading'
}
</script>

<style scoped>
.load {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    color: #fff;
}
.waviy {
  position: relative;
  -webkit-box-reflect: below -20px linear-gradient(transparent, rgba(0,0,0,.2));
  font-size: 30px;
}
.waviy span {
  position: relative;
  display: inline-block;
  color: #fff;
  text-transform: uppercase;
  animation: waviy 1s infinite;
  animation-delay: calc(.1s * var(--i));
  
}
@keyframes waviy {
  0%,40%,100% {
    transform: translateY(0)
  }
  20% {
    transform: translateY(-20px)
  }
}
</style>