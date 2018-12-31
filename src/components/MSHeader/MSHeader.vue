<template>
  <div class="m-siteHeader">
    <div class="headerMain">

      <a class="logo" href="/">
        <img src="./images/ms-logo.png" alt="">
      </a>
      <div class="search" href="/">
        <i class="icon"></i>
        <span class="m-siteSearch">
            <i>搜索商品, 共19966款好物</i>
          </span>

      </div>

      <mt-button type="primary" plain class="ms-loginBtn" style="color: #b4282d;border-color:#b4282d;font-size:24px">
        登录
      </mt-button>

    </div>

    <div class="m-siteNav">
      <div class="wrapper" ref="wrapper">
        <ul class="ms-navLeftList">
          <li v-for="(name, index) in navlist" :key="index" :class="{'active':current === index}"
              @click="currentIndex(index)">
            <span>{{name}}</span>
          </li>
        </ul>
      </div>
      <span class="ms-navRight">

        </span>
    </div>
  </div>
</template>

<script>

    import BScorll from 'better-scroll'
    export default {
      data () {
        return {
          navlist: ['推荐', '居家', '鞋包配件', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
          current: 0
        }
      },
      mounted () {
        this.$nextTick(() => {
          this.scroll = new BScorll(this.$refs.wrapper, {
            scrollX: true, scrollY: false,
            click: true
          })
        })
      },
      methods: {
        currentIndex (index) {
          this.current = index
        }
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'

  .m-siteHeader
    height px2rem(150)
    .headerMain
      display flex
      flex-flow row nowrap
      align-items center
      justify-content space-around
      padding px2rem(16) px2rem(30)
      .logo
        display inline-block
        height px2rem(40)
        width px2rem(140)
        margin-right px2rem(20)
      .search

        margin-right px2rem(20)
        height px2rem(56)
        line-height px2rem(56)
        display flex
        flex-grow: 1
        flex-flow: row nowrap
        align-items: center
        box-align: center
        justify-content: center
        border-radius px2rem(5);
        background-color: #ededed
        vertical-align text-bottom
        .icon
          display inline-block
          background: url(./images/search.png) no-repeat center
          height px2rem(28)
          width px2rem(28)
          margin px2rem(5) px2rem(10) 0 0
        .m-siteSearch
          display inline-block
          line-height px2rem(28)

          > i
            display inline-block
            font-size px2rem(28)
            color #666666
            font-style normal

    .m-siteNav
      height px2rem(60)
      padding 0 0 0 px2rem(30)
      line-height px2rem(60)
      float lefts
      .wrapper
        width px2rem(620)
        height px2rem(60)
        overflow hidden
        display inline-block
        line-height px2rem(60)
        .ms-navLeftList
          height px2rem(60)
          line-height px2rem(60)
          white-space nowrap
          display inline-block

          > li
            display inline-block
            width auto
            vertical-align text-bottom
            line-height px2rem(60)
            padding 0 px2rem(26)
            font-size px2rem(28)
            font-weight 0
            &.active
            span
              color $main
              position relative
              &:after{
                content ''
                left 0
                bottom 0
                position absolute
                width 100%
                height px2rem(4)
                background-color $main
              }

      .ms-navRight
        display inline-block
        width px2rem(100)
        height px2rem(60)
        float right
        background url(./images/arrow-down.png) no-repeat center


</style>
