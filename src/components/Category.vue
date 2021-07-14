<template>
  <div>
    <Tab></Tab>
    <van-tree-select :items="items" :main-active-index.sync="active">
      <template #content>
        <div v-if="active === 0">
          <router-link to="/detail">
            <div class="swl">
              <img src="../assets/image/sel-1.png" alt="">
            </div>
            <div class="fr">
              <h3>皮蛋瘦肉粥</h3>
              <span>￥ 24</span>
            </div>
          </router-link>
        </div>
        <div v-if="active === 1">
          <router-link to="/detail">
            
          </router-link>
        </div>
      </template>
    </van-tree-select>
  </div>
</template>
<script>
import Tab from '../components/Tab'
export default {
   data() {
    return {
      items:  [
        { text: '单人特色套餐' }, { text: '特色粥品' }, {text: '精选热菜'}, {text: '爽口凉菜'}
      ],
      active: 0,
    };
  },
  components: {
    Tab,
  },
}
</script>
<style scoped>
  .swl {
    float: left;
  }
  .swl img {
    width: 100px;
    height: 80px;
  }
  .fr {
    float: left;
    margin-left: 5px;
    color: black;
  }
  .fr span {
    color: red;
    font-weight: 700;
    font-size: 20px;
  }
</style>
