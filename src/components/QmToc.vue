<template>
  <!-- We display the TOC only if it is not empty (v-if) and the screen is wide
  enough (class: gt-xs). We apply a medium margin: 'q-ma-md' -->
  <q-card
    v-if="tocTree.length"
    class="gt-xs float-right q-ma-md"
    flat
    bordered
  >
    <!-- We use the 'horizontal' prop to remove paddings -->
    <q-card-section horizontal>
      <!-- We use 'q-expansion-item' to enable toggling (hide/show) the TOC -->
      <q-expansion-item
        default-opened
        icon="toc"
        label="Table of contents"
      >
        <q-separator />
        <q-list>
          <!-- loop through items of tocTree -->
          <template v-for="item in tocTree">
            <!-- if the item does not have children we use 'q-item' -->
            <q-item
              v-if="!item.children.length"
              :key="item.id"
              :to="`#${item.id}`"
            >
              <q-item-section>{{ item.label }}</q-item-section>
            </q-item>
            <!-- if the item has children we use 'q-expansion-item' to enable
            toggling (hiding/showing) them -->
            <q-expansion-item
              v-else
              :key="item.id"
              default-opened
              :label="item.label"
              :to="`#${item.id}`"
            >
              <!-- children are displayed in a q-list below their parent -->
              <q-list>
                <!-- each child is indented a little (inset-level).
                Dense mode uses less space -->
                <q-item
                  v-for="childItem in item.children"
                  :key="childItem.id"
                  dense
                  :inset-level="0.2"
                  :to="`#${childItem.id}`"
                >
                  <q-item-section>{{ childItem.label }}</q-item-section>
                </q-item>
              </q-list>
            </q-expansion-item>
          </template>
        </q-list>
      </q-expansion-item>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    // 'tocTree' will be provided by the component using QmToc (vmd components)
    tocTree: {
      type: Array,
      default () { return [] }
    }
  }
}
</script>
