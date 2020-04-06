<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="info col-lg-12">
        <ol class="list">
          <li><i class="fas fa-user"></i>收件人資料</li>
          <li class="active"><i class="fas fa-file-alt"></i>訂單確認</li>
          <li><i class="fas fa-check success"></i>成功下單</li>
        </ol>
      </div>
      <form class="col-md-6" @submit.prevent="payOrder">
        <table class="table">
          <thead>
            <th>PRODUCT</th>
            <th>QUANTITY	</th>
            <th>PRICE</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td class="align-middle">{{ item.product.title }}</td>
              <td class="align-middle">x {{ item.qty }}</td>
              <td class="align-middle">{{ item.final_total | currency }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-right">TOTAL</td>
              <td class="text-right">{{ order.total | currency }}</td>
            </tr>
          </tfoot>
        </table>

        <table class="table">
          <tbody>
            <tr>
              <th width="100">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-center" v-if="order.is_paid === false">
          <button class="btn">pay now</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.order = response.data.order;
        vm.isLoading = false;
      });
    },
    payOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.post(url).then((response) => {
        if (response.data.success) {
          vm.getOrder();
          vm.$bus.$emit('updateCart')
          vm.$router.push('/cart_finished')
          vm.isLoading = false;
        }
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
<style lang="scss" scoped>
.container{
  margin-top: 120px;
  margin-bottom: 60px;
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