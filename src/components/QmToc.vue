<template>
  <q-card
    flat
    bordered
  >
    <q-card-actions>
      <q-btn
        flat
        class="full-width"
        dense
        no-caps
        :icon="tocToggleIcon"
        label="Table of contents"
        @click="tocToggle"
      />
    </q-card-actions>
    <q-separator />
    <q-card-section v-show="!tocCollapsed">
      <q-list>
        <q-item
          v-for="toc in tocData"
          :key="toc.id"
          clickable="clickable"
          dense
          :to="`#${toc.id}`"
        >
          <q-item-section>{{ toc.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    tocData: {
      type: Array,
      default () { return [] }
    }
  },

  data () {
    return {
      tocCollapsed: false,
      tocToggleIcon: 'arrow_drop_up'
    }
  },

  methods: {
    tocToggle: function () {
      this.tocCollapsed = !this.tocCollapsed
      this.tocToggleIcon = this.tocCollapsed ? 'arrow_drop_down' : 'arrow_drop_up'
    }
  }
}
</script>
