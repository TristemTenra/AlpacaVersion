<template>
  <div id="bigsearch">
    <form name="genres" method="post" action="">
      <button type="submit">ПОИСК</button>
      <p>
        <b>Жaнр :</b>
        <select name="select">
          <option>Все</option>
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
        <b>Размер :</b>
        <select name="select">
          <option>Любой</option>
          <option>Мин</option>
          <option>Мид</option>
          <option>Биг</option>
          <option>Гиг</option>
        </select>
      </p>
      <p>
        <b>Порядок :</b>
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
display: block;
transition: 0.3s;
padding: 0.6vw 1.5vw;
height: 3vw;
border-radius: 0.5vw 0.5vw 0 0;
border-width: 0;
box-sizing: border-box;
background-color: #cbc0aa;
background-image:url('~@/assets/bg3.png');
}

#bigsearch p
{
float:left;
margin-right: 1.5vw;
}

#bigsearch p b
{
padding:0.4vw 0 0 0;
color: #5b544e;
letter-spacing: 0.07vw;
font-weight: 400;
font-size: 1vw;
display: block;
float: left;
}

#bigsearch p select
{
width: 8vw;
letter-spacing: 0.07vw;
font-weight: 400;
font-size: 1vw;
margin-left: 0.5vw;
float: left;
height: 1.8vw;
display: block;
border: 0px;
background-color: #ebe6de;
color: #757575;
border-radius: 0.5vw;
border-width: 0;
padding: 0.2vw 0.5vw;
}

#bigsearch select.minimal {
  background:none;
}


#bigsearch button {
font-family: 'Montserrat', sans-serif;
height: 1.8vw;
transition: 0.3s;
float: right;
padding: 0.2vw 1.5vw;
border-radius: 0.5vw;
border-width: 0.1vw;
border-style: solid;
border-color: #ebe6de;
box-sizing: border-box;
background-color:#9c5c5a;
background-image:url('~@/assets/bg2.png');
font-size: 1vw;
font-weight: 700;
cursor: pointer;
color: #fff;
letter-spacing: 0.15vw;
}

#bigsearch button:hover {
background-color:#6f403f;
}
</style>
