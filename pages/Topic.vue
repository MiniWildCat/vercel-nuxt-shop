<template>
  <div v-if="pageData">
    <Index :page-data="pageData" />
  </div>
</template>

<script>
import Index from '@/pages/Index.vue'
import { getTopicData } from '@/api/index'
export default {
  data() {
    return {
      pageData: ""
    }
  },
  components: { Index },
  mounted() {
    // 接收id进行查询
    const id = this.$route.query.id
    this.init(id)
  },
  methods: {
    async init(id) {
      const res = await getTopicData(id)
      if (res.success) {
        console.log(res.result)
        // 直接复用首页就行
        if (res.result?.pageData && typeof res.result?.pageData == 'string') {
          this.pageData = JSON.parse(res.result?.pageData)
        }
        console.log("数据11是",res.result)
        this.pageData = {list:[]}
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
