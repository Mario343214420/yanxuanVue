<template>
  <div class="m-textWrap">
    <ul>
      <li><i class="iconfont icon-yuanquan"></i>网络自营品牌</li>
      <li><i class="iconfont icon-yuanquan"></i>30天无忧退货</li>
      <li><i class="iconfont icon-yuanquan"></i>48小时快速退款吧</li>
    </ul>
  </div>
</template>
<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
.m-textWrap
  display flex
  flex-flow row nowrap
  align-items center
  justify-content space-around
  height px2rem(56)
  ul
    padding 0 px2rem(5)
    li
      margin-left px2rem(30)
      float left
      flex 1
      display: list-item;
      font-size px2rem(25)
      color #B4282D
      i
        margin-right px2rem(5)
</style>
