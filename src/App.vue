<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-nav">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">
    <img src="assets/LogoPasteleria.png">
    Pastelerias PanCake</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/inicio">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/pasteles">Pasteles</router-link>
        </li>
        <li class="nav-item">
         <router-link class="nav-link" to="/galletas">Galletas</router-link>
        </li>
                <li class="nav-item">
         <router-link class="nav-link" to="/especialidades">Especialidades</router-link>
        </li>
                       
      </ul>
       <ul class="d-flex">
         <router-link class="nav-link" to="/login">Iniciar Sesion</router-link>
        </ul>
    </div>
  </div>
</nav>




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
.bg-nav {
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
  background-color: rgb(250, 246, 246);
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
