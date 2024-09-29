<template>
  <div>
     test2 {{ $store.state.logoImg }}
     <nuxt-link to='/hello'>跳转</nuxt-link>
     <button @click="handleClick">查看</button>
     <button @click="handleClick2">变更</button>
     <a href="/test2" target="_self">详情</a>
     <Button type="error">确认</Button>
     <el-button type="primary" @click="finished">确定</el-button>
     <el-button type="primary" @click="handleClick0">handleClick0</el-button>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    // async fetch({$axios}){
    //   console.log('最早')
    //   // let res = await $axios.get("xxxx");
    //   // this.list2 = res.data;
    //   await new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //       console.log("看看是什么")
    //       resolve("11")
    //     },1000)
    //   })
    // },
    beforeCreate(){
      console.log("beforeCreate")
    },
    async created(){
      console.log("created")
    },
    mounted(){
      console.log("mounted")
      // console.log("mounted",storage.getItem("cartNum"))
      // this.$hello();
    },
    methods: {
      handleClick0(){
        hello4();
      },
      handleClick(){
        // this.$store.commit("SET_CARTNUM",1)
        // this.$cookies.cartNum = 666
        // console.log("数据",this.$cookies.cartNum)
      },
      async handleClick2(){
        // // let res = await this.$cookies.get("cartNum2");
        // let res2 = await this.$cookies.setAll([
        //   { name:"cartNum2",value: {name:2}}
        // ]);
        // this.handleClick()
      }
    }
  }
</script>

<style scoped>

</style>
