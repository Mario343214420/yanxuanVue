<template>
  <div class="m-siteMain">
    <div class="m-top m-mainPart">
      <Banner/>
      <MainText/>

      <div class="goodsItem">

      </div>
    </div>
    <div class="mid m-mainPart"></div>
    <div class="bot m-mainPart"></div>
  </div>
</template>

<script>
  import Banner from '../../components/Main/Banner/Banner.vue'
  import MainText from '../../components/Main/MainText/MainText.vue'
  export default {
    components: {

      Banner,
      MainText,

    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'



</style>
