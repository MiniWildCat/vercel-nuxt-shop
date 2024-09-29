import storage from '@/utils/storage'

export default {

  // 全局的第一个服务端生命周期,所有客户端都会运行
  nuxtServerInit(store, context){
    let storageObj = this.$cookies.getAll() || {}
    const cartNum = storageObj['cartNum'] || 0
    const logoImg = storageObj['logoImg'] || require('@/assets/images/logo2.png')
    const siteName = storageObj['siteName'] || 'lilishop_nuxt_init'
    const hotWordsList = storageObj['hotWordsList'] || []
    // const category = storageObj['category'] || []
    store.commit("SET_CARTNUM",cartNum)
    store.commit("SET_LOGOIMG",logoImg)
    store.commit("SET_SITENAME",siteName)
    store.commit("SET_HOTWORDS",hotWordsList)
    // store.commit("SET_CATEGORY",category)
  },
}
