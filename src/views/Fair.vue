<template>
  <div id="fairbody">
    <BigSearch />
    <div id="searchresult">
      <div class="alpacasearchblock"></div>
      <div class="alpacasearchblock"></div>
      <div class="alpacasearchblock"></div>
      <div class="alpacasearchblock"></div>
      <div class="alpacasearchblock"></div>
    </div>
  </div>
</template>
<script>
import BigSearch from '../components/BigSearch.vue'
export default {
  name: 'bigsearch',
    components:
    {
      BigSearch
     }
}
</script>

<style>

#fairbody {
width: 100%;
top:0;
bottom: 0;
}

#searchresult {
position: absolute;
left: 1.5vw;
top: 4vw;
bottom: 1.5vw;
right: 1.5vw;
padding: 1.5vw;
background-color: #ebe6de;
border-radius: 0 0 0.5vw 0.5vw;
border-width: 0;
}

.alpacasearchblock
{
width: 100%;
height: 5vw;
padding: 1.5vw 1vw;
background-color: #e4dfd7;
background-image:url('~@/assets/bg3.png');
border-radius: 0.5vw;
border-width: 0;
margin-bottom: 1vw;
}

</style>
