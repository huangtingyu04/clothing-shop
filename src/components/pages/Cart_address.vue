<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="info col-lg-12">
        <ol class="list">
          <li class="active"><i class="fas fa-user"></i>收件人資料</li>
          <li><i class="fas fa-file-alt"></i>訂單確認</li>
          <li><i class="fas fa-check success"></i>成功下單</li>
        </ol>
      </div>
      <form class="col-md-6" @submit.prevent="createOrder">
        <div class="form-group">
          <label for="useremail">Email</label>
          <input type="email" class="form-control" name="email" id="useremail" :class="{'is-invalid':errors.has('email')}"
          v-model="form.user.email" placeholder="請輸入 Email" v-validate="'required|email'">
          <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span>
        </div>  

        <div class="form-group">
          <label for="username">收件人姓名</label>
          <input type="text" class="form-control" name="name" id="username"
            :class="{'is-invalid': errors.has('name')}"
            v-model="form.user.name" v-validate="'required'" placeholder="輸入姓名">
          <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
        </div>

        <div class="form-group">
          <label for="usertel">收件人電話</label>
          <input type="tel" class="form-control" id="usertel"
            v-model="form.user.tel" placeholder="請輸入電話">
        </div>

        <div class="form-group">
          <label for="useraddress">收件人地址</label>
          <input type="text" class="form-control" name="address"  :class="{'is-invalid': errors.has('address')}"
            id="useraddress" v-model="form.user.address" v-validate="'required'"
            placeholder="請輸入地址">
          <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
        </div>

        <div class="form-group">
          <label for="useraddress">留言</label>
          <textarea name="" id="" class="form-control" cols="10" rows="5"
            v-model="form.message"></textarea>
        </div>
        <div class="text-center">
          <button class="btn">order now</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';

export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
      message: '',
    },
    }
  },
  methods: {
    createOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const order = vm.form;
      // vm.isLoading = true;//會影響到畫面
      this.$validator.validate().then((result) => {
        if (result) {
          this.$http.post(url, { data: order }).then((response) => {
            console.log('訂單已建立', response);
            if (response.data.success) {
              vm.$router.push(`/cart_pay/${response.data.orderId}`);
            }
            vm.isLoading = false;
          });
        } else {
          alert('欄位不完整');
        }
      });
    },
  },
}
</script>
<style lang="scss" scoped>
.container {
  margin-top: 120px;
  margin-bottom: 60px;
}
.form-control {
  box-shadow: none;
}
.form-control:focus {
  border: 1px solid #fdb813; 
}
.btn {
  margin-top: 20px;
  border: 2px solid #717fe0;
  border-radius: 25px;
  background-color: #717fe0;
  width: 100%;
  height: 50px;
  font-size: 15px;
  text-transform: uppercase;
  color: #fff;
  font-weight: 500;
  transition: all 0.4s;
  &:focus {
    box-shadow: none;
  }
  &:hover {
    background-color: #fff;
    color:  #717fe0;
  }
}
</style>