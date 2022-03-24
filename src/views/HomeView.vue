<template>
  <div class="row">
    <Dashboard />
    <p>------------------------------</p>
    <Dashboard1 />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard'
import Dashboard1 from '@/components/Dashboard1'
import Footer from '@/components/Footer'

export default {
  name: 'HomeView',
  components: {
    Dashboard,
    Dashboard1,
    Footer
  }
}
</script>
