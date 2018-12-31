<template>
  <div class="m-siteMain">
    <div class="m-top m-mainPart">
      <Banner/>
      <MainText/>
      <GoodsItem/>
    </div>

    <div class="mid m-mainPart">
      <NewUser/>
    </div>
    <div class="bot m-mainPart"></div>
  </div>
</template>

<script>
  import Banner from './Banner/Banner.vue'
  import MainText from './MainText/MainText.vue'
  import GoodsItem from './GoodsItem/GoodsItem.vue'
  import NewUser from './NewUser/NewUser.vue'

  export default {
    components: {

      Banner,
      MainText,
      GoodsItem,
      NewUser,

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>




</style>
