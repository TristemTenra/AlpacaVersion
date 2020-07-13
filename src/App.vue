<template>
  <div id="alpaca">
    <MainMenu/>
    <div id="rightfield">
      <div id="slogan"><p>АЛЬПАКА - АВТОРСКОЕ ЛИТЕРАТУРНОЕ ПРОИЗВЕДЕНИЕ</p></div>
      <transition :name="PageSlide">
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

html {
	background: rgba(72,144,71,1);
	background: -moz-linear-gradient(top, rgba(72,144,71,1) 0%, rgba(0,87,70,1) 100%);
	background: -webkit-linear-gradient(top, rgba(72,144,71,1) 0%, rgba(0,87,70,1) 100%);
	background: -o-linear-gradient(top, rgba(72,144,71,1) 0%, rgba(0,87,70,1) 100%);
	background: -ms-linear-gradient(top, rgba(72,144,71,1) 0%, rgba(0,87,70,1) 100%);
	background: linear-gradient(to bottom, rgba(72,144,71,1) 0%, rgba(0,87,70,1) 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#489047', endColorstr='#005746', GradientType=0 );
	min-width:1024px;
	min-height:768px;
	width:100%;
	height:100%;
	padding: 0;
	margin: 0;
  }

body {
	background-image:url('~@/assets/bg1.png');
	font-family: 'Montserrat', sans-serif;
	height:100%;
	width:100%;
	min-width:1024px;
	min-height:768px;
  }

  #rightfield {
  min-height:768px;
  min-width:682px;
  border-width: 0px 5px;
  border-style: solid;
  border-color: rgba(91, 84, 78, 0.24);
  right: 5%;
  padding: 15px 10px;
  background-color: #e0d8bd;
  position: absolute;
  display: block;
  height: 100%;
  overflow:auto;
  box-sizing: border-box;
  left: calc(5% + 240px);
  }

  #slogan {
  text-align: center;
  }

  #slogan p {
  font-weight: 200;
  font-size: 20px;
  display: inline;
  border-bottom: 5px dotted #cbc0aa;
  color: #746358;
  }
</style>
