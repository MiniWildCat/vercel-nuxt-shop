<template>
  <Nuxt />
</template>
<script>
import storage from "@/utils/storage";
import { getBaseSite } from "@/api/common.js";
export default {
  data(){
    return {
    }
  },
// 执行顺序created 子created 子mounted  mounted
created(){
  if(process.client){
    // // 可以获取window,this.$store
    // let token = localStorage.getItem("accessToken");
    // let token2 = this.$store.state.accessToken;
    // console.log("我是客户端最早的钩子",window, token, token2)
    // // 但不允许直接对state赋值，需要借助mutations
    // // this.$store.state.accessToken = '777'
    // this.$store.commit("SET_TOKEN","444")
    let category = JSON.parse(localStorage.getItem('category') || '[]')
    this.$store.commit('SET_CATEGORY',category)
  }
},
  mounted(){
    this.init();
  },
  methods:{
    init(){
      if(!storage.getItem("siteName")||!storage.getItem("logoImg")||!storage.getItem("sitelogo_expiration_time")) {
        this.getSite();
      }else{
        // 如果缓存过期，则获取最新的信息
        if (new Date() > storage.getItem("sitelogo_expiration_time")) {
          this.getSite();
          return;
        }else{
          // window.document.title = storage.getItem("siteName") + "666";
          //动态获取icon
          let link =document.querySelector("link[rel*='icon']") ||document.createElement("link");
            link.type = "image/x-icon";
            link.href = storage.getItem("siteIcon");
            link.rel = "shortcut icon";
            document.getElementsByTagName("head")[0].appendChild(link);
        }
      }

    },
    getSite(){
      console.log("变化")
      //获取基本站点信息
      getBaseSite().then((res) => {
        if (res.success && res.result.settingValue) {
          let data = JSON.parse(res.result.settingValue);
          // 过期时间
          var expirationTime = new Date().setHours(new Date().getHours() + 1);
          // 存放过期时间
          storage.setItem("sitelogo_expiration_time", expirationTime);
          // 存放信息
          storage.setItem('siteName', data.siteName);
          storage.setItem('logoImg', data.buyerSideLogo);
          storage.setItem("siteIcon",data.buyerSideIcon);
          // window.document.title = data.siteName;
          //动态获取icon
          let link =document.querySelector("link[rel*='icon']") ||document.createElement("link");
          link.type = "image/x-icon";
          link.href = data.buyerSideIcon;
          link.rel = "shortcut icon";
          document.getElementsByTagName("head")[0].appendChild(link);
        }
      });
    }
  }
}
</script>

<style lang="scss">
#__layout {
  @include background_color($light_background_color);
}
</style>
