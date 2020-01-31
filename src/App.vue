<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',

  meta () {
    return {
      // fallback metas when not defined elsewhere
      title: 'Quasarmarkdown',
      description: { name: 'description', content: 'A Quasar Framework app' }
    }
  }
}
</script>
