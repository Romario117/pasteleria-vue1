<template>
    <div class="row" style="margin-top:100px">
            Hola
            <Login />
    </div>
</template>

<script>
import Login from '@/components/IniciarSesion'

export default {
  name: 'LoginView',
  components: {
    Login
  }
}
</script>
