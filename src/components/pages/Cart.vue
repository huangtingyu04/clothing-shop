<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="cart-link">
        <router-link to="/" class="link">Home</router-link> >
        <span>Shoping Cart</span>
      </div>
      <div class="row">
        <div class="col-lg-10 col-xl-7">
          <table class="cart">
            <thead>
              <tr>
                <th>product</th>
                <th></th>
                <th>price</th>
                <th>quantity</th>
                <th>total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>Fresh Strawberries</td>
                <td>$36</td>
                <td>x1</td>
                <td>130</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-sm-10 col-lg-7 col-xl-5">
          <div class="total">
            <h5>cart totals</h5>
            <p>Total<span>$790</span></p>
            <input class="coupon">
            <button class="btn">apply coupon</button>
            <button class="btn">check</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      cart: {},
    }
  },
  methods: {
    getCart() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.cart = response.data.data;
        console.log(1,response);
        vm.isLoading = false;
      });
    },
  },
  created() {
    this.getCart();
  }

}
</script>
<style lang="scss" scoped>
.cart-link {
  margin-top: 120px;
  margin-bottom: 55px;
  font-size: 12px;
  color: #999;
  .link {
   color: #555;
   padding: 3px;
   text-decoration: none;
   transition: .4s;
   &:hover {
    color: #717fe0;
   }
  }
  span {
    padding-left: 3px;
  }
}

</style>