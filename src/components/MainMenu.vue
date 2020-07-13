<template>
  <div id="nav">
    <div id="logo"></div>
    <router-link to="/">ЯРМАРКА</router-link>
    <router-link to="/farm">ФЕРМА</router-link>
    <router-link to="/faq">FAQ</router-link>
    <router-link to="/alcove">БЕСЕДКА</router-link>
    <div id="copyright"><p>&#169; 2020 Tristem Tenra</p></div>
  </div>
</template>

<style scoped>

#nav {
left:5%;
padding: 15px 10px;
border-width: 0px 5px;
border-style: dotted;
border-color: rgba(255, 253, 218, 0.4);
background-color: #cbc0aa;
position: fixed;
display: block;
width: 230px;
height: 100%;
min-height:768px;
text-align: center;
box-sizing: border-box;
}

#logo {
background-repeat: no-repeat;
background-position: bottom;
position:relative;
height:198px;
width:200px;
background-image:url('~@/assets/logo.png');
margin-bottom: 24px;
}

#nav a {
display: block;
letter-spacing: 2px;
transition: 0.3s;
padding-top: 8px;
padding-left: 2px;
border-radius: 5px;
border-width: 2px;
border-style: solid;
border-color: #ebe6de;
box-sizing: border-box;
margin-top: 12px;
font-size: 16px;
font-weight: 300;
position: relative;
background-color: #9c8678;
height: 33px;
width: 200px;
color: #fff;
}

#nav a:hover {
background-color:#7b695d;
}

#nav a.router-link-exact-active {
font-weight:700;
background-color:#5b544e;
color:#fff;
}

#nav a.router-link-exact-active:hover {
background-color:#2f2c29;
}

#copyright {
position: absolute;
bottom: 0;
width:200px;
margin-bottom: 15px;
font-size:16px;
color:#9c8678;
cursor:default;
}

</style>
