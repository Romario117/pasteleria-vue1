<template>
    <div class="col">
         <div class="row">
        <div class="col-3">
            <PerfilUsuario />
        </div>
        <div class="col-9">
            <div class="row">Pedidos</div>
            <div class="row">
                <table class="table table-hover">
                    <colgroup span="4" class="columns"></colgroup>
                    <tr>
                      <th>#. Pedido</th>
                      <th>Fecha de Orden</th>
                      <th>Producto</th>
                      <th>Fecha de Entrega</th>
                      <th>Adornos</th>
                      <th>Total</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>04/03/2022</td>
                      <td>Pastel de Queso</td>
                      <td>05/03/2022</td>
                      <td>Sin Adornos</td>
                      <td>$300.00</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>04/03/2022</td>
                        <td>Pastel de Queso</td>
                        <td>05/03/2022</td>
                        <td>Sin Adornos</td>
                        <td>$300.00</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>04/03/2022</td>
                        <td>Pastel de Queso</td>
                        <td>05/03/2022</td>
                        <td>Sin Adornos</td>
                        <td>$300.00</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>04/03/2022</td>
                        <td>Pastel de Queso</td>
                        <td>05/03/2022</td>
                        <td>Sin Adornos</td>
                        <td>$300.00</td>
                      </tr>
                  </table>
                          <div class="row">
            <button class="btn btn-secondary"> <router-link class="txt-white" to="/pedidos">Realizar  Nuevo Pedido</router-link></button>
        </div>
            </div>
        </div>

    </div>
    </div>
</template>


<script>
import PerfilUsuario from '@/components/PerfilUsuario'

export default {
    name: 'PanelUsuario',
    components:{
        PerfilUsuario
    }
}
</script>

<style>
    .txt-white{
        color: white;
    }
</style>