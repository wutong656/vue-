<template>
  <div class="home">
    <!-- 顶部导航 -->
    <!-- <van-nav-bar title="夏日粥品" left-text="北京 [切换]" right-text="登录"  
      @click-left="onClickLeft" @click-right="onClickRight" fixed/> -->

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="orange" :style="{height: h}">
      <van-swipe-item>
        <img src="../assets/swipe-1.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/swipe-2.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/swipe-3.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/swipe-4.jpg" alt="">
      </van-swipe-item>
    </van-swipe>


    <!-- 标签页 -->
      <van-tabs v-model="active">
        <van-tab title="推荐"></van-tab>
        <van-tab title="热门"></van-tab>
        <van-tab title="精品"></van-tab>
        <van-tab title="套餐"></van-tab>
      </van-tabs>

    <!-- 内容面板 -->
    <div >
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了"
        >
      <div>
        <router-link to="/category">
          <div>
            <img src="" alt="">
          </div>
          <div></div>
        </router-link>
      </div>
      <van-cell title="1" />
      <van-cell title="1" />
      <van-cell title="1" />
      <van-cell title="1" />
      <van-cell title="1" />
      <van-cell title="1" />
      <van-cell title="1" />
      <van-cell title="1" />
      <van-cell title="1" />
      <van-cell title="1" />
      <van-cell title="1" />
      <van-cell title="1" />
      <van-cell title="1" />
      <van-cell title="1" />
      <van-cell title="1" />
    </van-list>
    </div>
  
    <!-- 底部栏 -->
    <!-- <van-tabbar route fixed>
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item replace to="/order" icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/me" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar> -->
    <nav>
      <ul>
        <router-link to="/">首页</router-link>
        <router-link to="/">分类</router-link>
        <router-link to="/">购物车</router-link>
        <router-link to="/">我的</router-link>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data () {
    return {
      h: '500px',
      active: 0,
      list: [],
      loading: false,
      finished: true,
    }
  },
  methods: {
    onClickLeft () {
      this.$router.push('/city')
    },
    onClickRight () {
      this.$router.push('/login')
    },
    /** 初始化轮播图 */
    initSwipe(){
      let picWidth = 650; // 图片宽
      let picHeight = 400; // 图片高
      let screenWidth = window.screen.width; // 屏幕宽
      let swipeHeight = 
          Math.floor((picHeight*screenWidth)/picWidth)+"px";
      this.h = swipeHeight;
    },
    //  onLoad() {
    //   // 异步更新数据
    //   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1);
    //     }

    //     // 加载状态结束
    //     this.loading = false;

    //     // 数据全部加载完成
    //     if (this.list.length >= 40) {
    //       this.finished = true;
    //     }
    //   }, 1000);
    // },
  
  },
  mounted () {
    this.initSwipe();
  }
}
</script>

<style>
  .my-swipe img {
    width: 100%;
  }
  .vtabs {
    position: fixed;
    margin-top: 46px;
  }
</style>