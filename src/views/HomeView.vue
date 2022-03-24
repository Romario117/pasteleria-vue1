<template>
  <div class="row">
    <Dashboard />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard'

export default {
  name: 'HomeView',
  components: {
    Dashboard
  }
}
</script>
