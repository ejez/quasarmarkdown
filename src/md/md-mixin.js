import QmToc from 'components/QmToc'

export default {
  components: {
    QmToc
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
