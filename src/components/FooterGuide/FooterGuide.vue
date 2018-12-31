<template>
    <footer class="m-tabBar" >
      <a href="javascript:;" class="item" :class="{on: $route.path==='/msite'}" @click="goTo('/msite')">
        <i class="iconfont icon-shouye2"></i>
        <span class="txt">首页</span>
      </a>
      <a href="javascript:;" class="item" :class="{on: $route.path==='/classify'}" @click="goTo('/classify')">
        <i class="iconfont icon-fangkuai"></i>
        <span class="txt">分类</span>
      </a>
      <a href="javascript:;" class="item" :class="{on: $route.path==='/recommend'}" @click="goTo('/recommend')">
        <i class="iconfont icon-fenlei"></i>
        <span class="txt">识物</span>
      </a>
      <a href="javascript:;" class="item" :class="{on: $route.path==='/cart'}" @click="goTo('/cart')">
        <i class="iconfont icon-gouwuchekong"></i>
        <span class="txt">购物车</span>
      </a>
      <a href="javascript:;" class="item" :class="{on: $route.path==='/personal'}" @click="goTo('/personal')">
        <i class="iconfont icon-personal"></i>
        <span class="txt">个人</span>
      </a>

    </footer>
</template>

<script>
  export default {
    methods: {
      goTo (path) {
        // 编程式导航
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/stylus/mixins.styl'
footer
  display flex
  flex-flow row nowrap
  align-items center
  justify-content space-around
  position fixed
  z-index 5
  left 0
  right 0
  bottom 0
  width 100%
  background-color: #fff;
  height px2rem(100)
  a
    color #666
    text-align center
    cursor pointer
    >i
      font-size px2rem(42)
      display block
    >span
      font-size px2rem(24)
      width 100%
    &.active
      color $mainColor
</style>
