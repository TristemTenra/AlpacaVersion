<template>
  <div id="bigsearch">
    <form name="genres" method="post" action="">
      <button type="submit">ПОИСК ПО ЖАНРАМ</button>
      <p>
        <b>ЖАНР :</b>
        <select name="select">
          <option>Фэнтези</option>
          <option>Фантастика</option>
          <option>Психология</option>
          <option>Ужасы</option>
          <option>Драма</option>
          <option>Комедия</option>
          <option>Романтика</option>
        </select>
      </p>
      <p>
        <b>РАЗМЕР :</b>
        <select name="select">
          <option>Мин</option>
          <option>Мид</option>
          <option>Биг</option>
          <option>Гиг</option>
        </select>
      </p>
      <p>
        <b>ПОРЯДОК :</b>
        <select name="select">
          <option>Рейтинг &#9650;</option>
          <option>Рейтинг &#9660;</option>
          <option>Новые</option>
          <option>Старые</option>
          <option>Алфавит &#9650;</option>
          <option>Алфавит &#9660;</option>
        </select>
      </p>
    </form>
  </div>
</template>

<style scoped>

#bigsearch {
overflow: hidden;
width: 100%;
height: 27px;
margin-top: 10px;
background-color: #cbc0aa;
border-radius: 5px;
border-width: 2px;
border-style: solid;
border-color: #ebe6de;
box-sizing: border-box;
min-width: 652px;
}

#bigsearch p

{
float:left;
padding:0px 0px 0px 10px;
}

#bigsearch p b

{
font-weight:700;
font-size:10px;
color:#5b544e;
}

#bigsearch p select

{
font-weight: 400;
font-size: 12px;
margin-left: 5px;
height: 24px!important;
border: 0px;
background-color: #9c8678;
color: #e0d8bd;
}

#bigsearch button {
font-family: 'Montserrat', sans-serif;
height: 23px;
transition: 0.3s;
float: right;
padding: 0px 23px 0px 10px;
background-color: #5b544e;
background-position:right;
background-repeat:no-repeat;
background-image:url('~@/assets/searchbig.png');
font-size: 11px;
border: none;
cursor: pointer;
color: #e0d8bd;
}

#bigsearch button:hover {
background-color:#2f2c29;
}
</style>
