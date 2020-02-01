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
      // fallback metas when not defined in child components.
      // notice also that we removed the 'title' and 'meta description' tags
      // from 'src/index.template.html' to avoid having duplicates
      title: 'Quasarmarkdown',
      description: { name: 'description', content: 'A Quasar Framework app' }
    }
  }
}
</script>
