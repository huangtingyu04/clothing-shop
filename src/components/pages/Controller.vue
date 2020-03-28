<template>
  <div class="logIn">
    <Header></Header>
      <form class="logIn-form" @submit.prevent="signin">
        <h3>Administrator Only</h3>
        <input class="formInput" type="email" id="inputEmail" placeholder="Email address" required v-model="user.username">
        <input class="formInput" type="password" id="inputPassword" placeholder="Password" required v-model="user.password">
        <div class="checkbox my-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn" type="submit">Sign in</button>
      </form>
  </div>
</template>
<script>
import Header from '../Header'
export default {
  components: {
    Header,
  },
  data() {
    return {
      user: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    signin() {
      const api = `${process.env.APIPATH}/admin/signin`;
      const vm = this;
      this.$http.post(api, vm.user).then((response) => {
        console.log(response.data);
        if (response.data.success) {
          vm.$router.push('/admin/products');//如果登入成功，路徑轉去products
        } else {
          alert('Login fail! Please log in again.')
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.logIn {
  color: #fff;
  width: 100%;
  height: 100vh;
  background: url('../../assets/images/controller.jpg') center center / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .logIn-form {
    max-width: 350px;
    background: rgba(0, 0, 0, 0.8);
    padding: 40px 30px 30px 30px;
    margin-top: 70px;
    box-sizing: border-box;
    text-align: center;
    h3 {
      font-size: 26px;
      margin-bottom: 40px;
    }
    .formInput {
      width: 100%;
      color: #fff;
      border: 1px solid red;
      line-height: 2;
      padding-bottom: 3px;
      margin-bottom: 30px;
      background: transparent;
      border: none;
      outline: none;
      border-bottom: 1px solid #fff;
    } 
    .btn {
      color: #fff;
      margin-bottom: 10px;
      background: #717fe0;
      border-radius: 23px;
      min-width: 200px;
      height: 46px;
      box-shadow: none;
      text-transform: uppercase;
    }
  }
}
</style>