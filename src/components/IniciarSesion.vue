<template>
<div>
   <div class="row">
        <div class="col-4"></div>
        <div class="col-4 ">
            <div class="row spacie-row-xg">
            </div>
            <div class="row center-element">Iniciar Sesión</div>
            <div class="row center-element spacie-row-md">
                <form action="">
                    <div class="row">
                        <label>Usuario :</LAbel>
                    </div>
                    <div class="row">
                        <input type="email" placeholder="correo electronico">
                    </div>
                    <div class="row spacie-row-md">
                        <label for="">Contraseña</label>
                    </div>
                    <div class="row">
                        <input type="password" name="" id="" placeholder="Contraseña">
                    </div>
                    <div class="row fs5-normal ">
                        ¿Olvidaste tu contraseña?
                    </div>
                    <div class="row fs5-normal">
                        <router-link to="/registro">Registrarse</router-link>
                    </div>
                </form>
            </div>
            <div class="row spacie-row-xsm center-element">
                <a href="panelUsuario.html"><button class="button">Registrarse</button></a>
            </div>
        </div>
        <div class="col-4"></div>
    </div>

</div>
</template>