import QmToc from 'components/QmToc'
import { QPage } from 'quasar'

export default {
  components: {
    QmToc,
    QPage
  },

  // computed property 'tocTree' will be used by component 'QmToc' to build the
  // table of contents
  computed: {
    tocTree: function () {
      // initially 'this.$refs.markdown' is 'undefined', so we make sure it gets
      // defined before calling its function 'makeTree' which builds a
      // hierarchical tree of the table of contents
      return this.$refs.markdown
        ? this.$refs.markdown.makeTree(this.tocData)
        : this.tocData
    }
  },

  methods: {
    onToc (toc) {
      this.tocData = toc
    }
  },

  meta () {
    return {
      // extract metas from frontMatter defined at the top of the vmd file
      title: this.frontMatter.title,
      meta: {
        description: { name: 'description', content: this.frontMatter.desc }
      }
    }
  }
}
