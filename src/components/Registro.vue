<template>
    <div class="row">
        <div class="col-4"></div>
    <div class="col-4">
        <div class="row fs1-bold">
            Registrarse
        </div>
        <div class="row spacie-row-xsm fs2-normal">
            <label for="">Datos Personales :</label>
        </div>
        <div class="row">
            <label for="">Nombre</label>
        </div>
        <div class="row">
            <input type="text">
        </div>
        <div class="row">
            <div class="col-6">
                <div class="row">
                    <label for="">Apellido Paterno: </label>
                </div>
                <div class="row">
                    <input type="text">
                </div>
            </div>
            <div class="col-6">
                <div class="row">
                    <label for="">Apellido Materno</label>
                </div>
                <div class="row">
                    <input type="text">
                </div>
            </div>
        </div>

        <div class="row spacie-row-xsm fs2-normal">
            <label for="">Domicilio :</label>
        </div>
        <div class="row">
            <div class="col">
                <div class="row">
                    <label for="">Calle :</label>
                </div>
                <div class="row">
                    <input type="text">
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <label for=""> Numero Int. :</label>
                </div>
                <div class="row">
                    <input type="text">
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <label for=""> Numero Ext. :</label>
                </div>
                <div class="row">
                    <input type="text">
                </div>
            </div>
            
        </div>
        <div class="row">
            <div class="col">
                <div class="row">
                    <label for="">Colonia :</label>
                </div>
                <div class="row">
                    <input type="text">
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <label for="">Codigo Postal :</label>
                </div>
                <div class="row">
                    <input type="text">
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <label for="">Municipio :</label>
                </div>
                <div class="row">
                    <input type="text">
                </div>
            </div>
        </div>
        <div class="row spacie-row-xsm fs2-normal">
            <label for="">Contacto :</label>
        </div>
        <div class="row">
            <div class="col">
                <div class="row">
                    <label for="">Telefono Casa :</label>
                </div>
                <div class="row">
                    <input type="text">
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <label for="">Telefono Celular :</label>
                </div>
                <div class="row">
                    <input type="text">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="row">
                    <label for="">Correo Electronico :</label>
                </div>
                <div class="row">
                    <input type="email">
                </div>
            </div>
        </div>

        <div class="row spacie-row-xsm fs2-normal">
            <label for="">Seguridad :</label>
        </div>
        <div class="row">
            <div class="col">
                <div class="row">
                    <label for="">Contraseña</label>
                </div>
                <div class="row">
                    <input type="password">
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <label for=""> Repetir Contraseña </label>
                </div>
                <div class="row">
                    <input type="password">
                </div>
            </div>
        </div>
        <div class="row spacie-row-xsm">
            <a href="panelUsuario.html"><button class="button">Registrarse</button></a>
        </div>
    </div>
    <div class="col-4"></div>
    </div>
</template>

<script>
export default {
  name: 'Registro'
}
</script>