import QmToc from 'components/QmToc'

export default {
  components: {
    QmToc
  },

  // computed property 'tocTree' will be used by component 'QmToc' to build the
  // table of contents
  computed: {
    tocTree: function () {
      // initially 'this.$refs.markdown' is 'undefined', so we make sure it gets
      // defined before calling its function 'makeTree' which builds a
      // hierarchical tree of the table of contents
      const tree = this.$refs.markdown
        ? this.$refs.markdown.makeTree(this.tocData)
        : this.tocData

      // usually the first item in the tree is the article title written in 'h1'
      // heading, in most cases we don't want to display the article title, so
      // to start from another level we normally use property 'toc-start',
      // however due to a bug using 'toc-start' property, we do it manually here
      return tree.length && tree[0].children.length
        ? tree[0].children
        : tree
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
