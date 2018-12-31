<template>
  <nav>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javascript:" class="link_to_food">
            <img src="./images/b1.jpg">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:" class="link_to_food">
            <img src="./images/b2.jpg">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:" class="link_to_food">
            <img src="./images/b3.jpg">
          </a>
        </div>

      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </nav>

</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    mounted() {
      new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
    },

  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../../common/stylus/mixins.styl'
  .swiper-container
    width 100%

    .swiper-wrapper
      width 100%
      height auto
      .swiper-slide
        a
          display block
          height px2rem(400)
          img
            width 100%
            height 100%

    &.swiper-pagination-bullet
      width px2rem(40)
      height px2rem(8)
      background #ffffff
      opacity .4
      border-radius 0
    .swiper-pagination-bullet-active
      opacity 1
</style>
