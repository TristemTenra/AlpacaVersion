<template>
  <div class="topnav">
    <a class="active" href="#profile">Tristem</a>
    <a href="#exit">Выйти</a>
    <div class="search-container">
      <form action="/action_page.php">
        <button type="submit">ПОИСК</button>
        <input type="text" placeholder="найти альпаку/фермера..." name="search" autocomplete="off">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  props: {
    msg: String
  }
}
</script>

<style scoped>

.topnav {
overflow:hidden;
width:100%;
height:33px;
margin-top: 15px;
background-color: #9c8678;
border-radius: 5px;
border-width: 2px;
border-style: solid;
border-color: #ebe6de;
box-sizing: border-box;
min-width:652px;
}

.topnav a {
font-weight:200;
height: 29px;
padding: 6px 10px;
transition: 0.3s;
float: left;
display: block;
color: #fff;
text-align: center;
text-decoration: none;
font-size: 17px;
}

.topnav a:hover {
background-color:#7b695d;
}

.topnav a.active {
background-color: #5b544e;
color: white;
font-weight:400;
}

.topnav .search-container {
background: #ebe6de;
position: relative;
width: 330px;
height: 29px;
float: right;
}

.topnav input[type=text] {
display: block;
box-sizing: border-box;
padding: 5px 15px;
font-size: 17px;
height: 29px;
border: none;
background-color: #ebe6de;
position: relative;
}

.topnav .search-container button {
font-family: 'Montserrat', sans-serif;
height: 29px;
transition: 0.3s;
float: right;
padding: 6px 29px 6px 10px;
background-color: #5b544e;
background-image:url('~@/assets/search.png');
background-position:right;
background-repeat:no-repeat;
font-size: 11px;
border: none;
cursor: pointer;
color: #fff;
}

.topnav .search-container button:hover {
background-color:#2f2c29;
}

</style>
