<template>
  <nav class="primary">
    <div class="row">
      <div class="col-11">
        <ul class="fs3-normal center">
          <li><img src="assets/logo.png" width="85px" height="75px" alt=""></li>
          <li><router-link to="/inicio">Inicio</router-link></li>
          <li><router-link to="/pasteles">Pasteles</router-link></li>
          <li><router-link to="/galletas">Galletas</router-link></li>
          <li>
            <router-link to="/especialidades"> Especialidades</router-link>
          </li>
        </ul>
      </div>
      <div class="col-1 center button-primary">
        <ul>
          <li><router-link to="/login">Iniciar Sesion</router-link></li>
        </ul>
      </div>
    </div>
  </nav>


<div class="footer primary">
    Patelerias PanCake.  Tula de Allende,Hidalgo. CP. 42800. Tel: 777-77-777-77
</div>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,900&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.primary {
  background-color: #fd7e14;
  color: black;
}
.row {
  display: flex;
  width: 100%;
}

.row::after {
  clear: both;
  content: "";
}
nav {
  height: auto;
  width: 100%;
  position: relative;
  margin-top: -8px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: flex;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  height: 75px;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}

div {
  font-family: "Roboto", sans-serif;
  text-align: justify;
  overflow-wrap: break-word;
}

th {
  width: 300px;
  text-align: justify;
  padding-right: 1%;
  border-style: dotted;
}

.col-11 {
  width: 91.66%;
}

  .footer {
    position: fixed;
    padding: 0px 0px 0px 0px;
    bottom: 0;
    width: 100%;
    /* Height of the footer*/ 
    height: 40px;
}
</style>
