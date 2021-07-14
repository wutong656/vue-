<template>
  <div>
    <van-nav-bar title="夏日粥品" left-text="返回" left-arrow
      @click-left="onClickLeft"
    />
    <van-form @submit="onSubmit">
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
      <van-field v-model="password" type="password" label="密码" />
      <van-field v-model="repassword" type="password" label="确认密码" />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      password: '',
      repassword: '',
    };
  },
  methods: {
    onClickLeft () {
      this.$router.push('/login')
    },
    onSubmit(values) {
      console.log('submit', values);
    },
  }
}
</script>
