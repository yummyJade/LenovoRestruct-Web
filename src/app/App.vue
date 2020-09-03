<template>
  <div id="app">
      <Nav></Nav>
      <div>

      </div>
      <router-view></router-view>
  </div>
</template>

<script>
    import nav from '../common/components/nav/nav'

    export default {
        name: "App",
        components: {
            'Nav': nav
        }
    }

</script>