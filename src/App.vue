<template>
  <div id="alpaca">
    <MainMenu/>
    <div id="rightfield">
      <div class="topblock"></div>
      <transition mode="out-in" name="fade">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'

export default {
  name: 'mainmenu',
  components: {
    MainMenu
    }
}
</script>

<style>

* {box-sizing: border-box;}

*:focus {
    outline: none;
}

html {
background: rgb(0 107 73);
background: radial-gradient(at center, #daff00, #007359);
width:100%;
height:100%;
padding: 0;
margin: 0;
font-size: 1vw;
}

body {
background-image:url('~@/assets/bg1.png');
font-family: 'Montserrat', sans-serif;
height:100%;
width:100%;
min-height: 40vw;
}

#rightfield {
right: 5%;
padding: 0 1.5vw;
background-color: #e0d8bd;
position: absolute;
box-shadow: 0 0 1vw rgba(0, 0, 0, .5),
            0 0 1vw rgba(255, 255, 255, .4) inset;
display: block;
height: 100%;
overflow:auto;
box-sizing: border-box;
left:20%;
min-height: 40vw;
}

input {outline:none;}
textarea:focus, input:focus{
    outline: none;
}

select {
background-color: white;
border: thin solid blue;
border-radius: 4px;
display: inline-block;
font: inherit;
line-height: 1.5em;
padding: 0.5em 3.5em 0.5em 1em;

margin: 0;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
-webkit-appearance: none;
-moz-appearance: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.topblock
{
position: relative;
height: 1vw;
top:0;
width: 100%;
}
</style>
