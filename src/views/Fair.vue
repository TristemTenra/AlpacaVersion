<template>
  <div id="fairbody">
    <TopNav />
    <BigSearch />
  </div>
</template>
<script>
import TopNav from '../components/TopNav.vue'
import BigSearch from '../components/BigSearch.vue'
export default {
  name: 'bigsearch',
    components:
    { TopNav,
      BigSearch
     }
}
</script>

<style>

#fairbody {
width: 100%;
}

</style>
