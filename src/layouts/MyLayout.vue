<template>
  <q-layout
    view="lHh Lpr lFf"
    :style="layoutStyles"
  >
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasarmarkdown
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item
          clickable
          to="/"
          exact
        >
          <q-item-section avatar>
            <q-icon name="library_books" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          to="/demo"
          exact
        >
          <q-item-section avatar>
            <q-icon name="ondemand_video" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Demo</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      layoutStyles: {}
    }
  },

  mounted () {
    // get header element
    const header = document.querySelector('header.q-header')
    // define a css variable that contains the header height
    this.layoutStyles['--header-height'] = header
      ? `${header.offsetHeight}px`
      : 0
  }
}
</script>

<style lang="sass">
// When directly navigating to a url with an anchor, for example:
// http://example.com/contact#Email, and to avoid that the anchor element gets
// hidden by the page header we use the header height to set 'scroll-margin-top'
//  in all anchor elements inside our page (elements with the 'id' attribute).
.q-page-container [id]
  scroll-margin-top: var(--header-height)
</style>
