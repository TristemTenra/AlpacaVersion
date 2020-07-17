<template>
  <div id="nav">
    <div id="userplank">
      <router-link id="fermer" to="/farm/user">SirTristem</router-link>
      <router-link id="door" to="/gate"></router-link>
    </div>
    <div id="logo"></div>
    <p id="logoText">
      <b>А</b>вторское<br/><b>Л</b>итературное<br/><b>П</b>роизведение
    </p>
    <router-link class="nava" to="/">ЯРМАРКА</router-link>
    <router-link class="nava" to="/farm">ФЕРМА</router-link>
    <router-link class="nava" to="/faq">FAQ</router-link>
    <form id="menusearch" action="/searh">
      <input type="search" name="q" placeholder="Поиск..." autocomplete="off">
      <input type="submit" value="">
    </form>
    <div id="copyright">&#169; 2020 Tristem Tenra</div>
  </div>
</template>

<style scoped>

#nav {
overflow: hidden;
left:5%;
padding: 1.5vw;
background-color: #cbc0aa;
position: absolute;
width: 14%;
top: 1vw;
bottom: 1vw;
text-align: center;
box-sizing: border-box;
box-shadow: 0 0 1vw rgba(0, 0, 0, .5),
            0 0 1vw rgba(255, 255, 255, .4) inset;
border-width: 0;
border-radius: 0.5vw;
background-image:url('~@/assets/bg3.png');
min-height: 38vw;

}

#userplank {
position: absolute;
top:0;
right:0;
left: 0;
height: 3vw;
background-color: #e0d8bd;
background-image:url('~@/assets/bg3.png');
box-shadow: 0 0 1vw rgba(255, 255, 255, .4) inset;
}

#fermer{
font-size: 1vw;
text-align: left;
color: #5b544e;
float: left;
margin-top: 1vw;
margin-left: 1.5vw;
padding-bottom: 0.1vw;
border-style: solid;
border-bottom-width: 0.1vw;
border-bottom-color: #d49290;
}

#door {
position: absolute;
height: 1.1vw;
width: 1.1vw;
right: 1.5vw;
top: 1vw;
background-image:url('~@/assets/exit.svg');
background-size: 100%;
background-repeat: no-repeat;
transition: 0.3s;
}

#door:hover {
opacity: 0.5;
}

#logo {
background-repeat: no-repeat;
background-size: 98% 98%;
position:relative;
margin-top: 3vw;
height:11vw;
width:100%;
background-image:url('~@/assets/logo.png');
}

#logoText {
font-size: 1em;
font-weight: 400;
color: #5b544e;
letter-spacing: 0.07vw;
line-height: 1.3vw;
margin-top: 0.8vw;
text-align: left;
}

#logoText b{
font-weight: 700;
}

.nava {
display: block;
letter-spacing: 0.15vw;
transition: 0.3s;
padding: 0.55vw 0 0 0.15vw;
height: 2.35vw;
border-radius: 0.5vw;
border-width: 0.1vw;
border-style: solid;
border-color: #ebe6de;
box-sizing: border-box;
margin-top: 1vw;
font-size: 1.1em;
font-weight: 300;
position: relative;
background-color: #9c8678;
background-image:url('~@/assets/bg2.png');
width: 100%;
color: #fff;
}

.nava:hover {
background-color:#7b695d;
}

#nav > a.router-link-active:not(:first-of-type) {
font-weight:700;
background-color:#9c5c5a;
color:#fff;
}

#nav > a.router-link-active:not(:first-of-type):hover {
background-color:#6f403f;
}

#nav > a.router-link-exact-active:first-of-type {
font-weight:700;
background-color:#9c5c5a;
color:#fff;
}

#nav > a.router-link-exact-active:first-of-type:hover {
background-color:#6f403f;
}

#menusearch {
width: 100%;
height: 2.35vw;
border-radius: 0.5vw;
border-width: 0px;
overflow: hidden;
margin-top: 1vw;
background-color: #ebe6de;
}

#menusearch input[type="search"] {
position: relative;
display: block;
border: none;
outline: none;
-webkit-appearance: none;
width: 75%;
vertical-align: middle;
height: 100%;
font-size: 1vw;
padding-left: 1vw;
float: left;
background-color: rgba(255, 255, 255, 0);
}

#menusearch input[type="submit"] {
position: relative;
display: block;
width: 25%;
height: 100%;
border: none;
float: right;
background-color: rgba(255, 255, 255, 0);
background-image:url('~@/assets/search.svg');
background-size: 50% 50%;
background-position: center;
background-repeat:no-repeat;
transition: 0.3s;

}

#menusearch input[type="submit"]:hover {
background-color: rgba(255, 255, 255, 0.5);
cursor: pointer;
}

#copyright {
position: absolute;
bottom: 0;
width: 79%;
margin-bottom: 1.5vw;
font-size: 0.97vw;
color: #5b544e;
cursor: default;
}

</style>
