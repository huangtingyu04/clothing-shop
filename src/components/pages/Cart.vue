<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="wrap container">
      <div class="cart-link">
        <router-link to="/" class="link">Home</router-link> >
        <span>Shoping Cart</span>
      </div>
      <div class="row" v-if="cart.carts != 0">
        <div class="col-xl-7 cart-container">
          <table class="cart">
            <thead>
              <tr>
                <th>product</th>
                <th></th>
                <th>price</th>
                <th>quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <img :src="item.product.imageUrl" class="img-fluid">
                </td>
                <td> {{ item.product.title }}</td>
                <td>{{ item.product.origin_price | currency }}</td>
                <td class="text-center">x 1</td>
                <td>
                  <button class="btn" @click="removeCardItem(item.id)">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-sm-10 col-xl-5">
          <div class="total">
            <h5>cart totals</h5>
            <p>Subtotal:<span>{{ cart.total | currency }}</span></p>
            <p>Total:<span>{{ cart.final_total | currency }}</span></p>
            <div class="coupon-wrap">
              <input class="coupon-input" v-model="coupon_code" placeholder="Coupon Code">
              <button class="btn coupon-btn" @click="addCouponCode">apply coupon</button>
            </div>
            <div>
              <button class="btn check-btn">Proceed to Checkout</button>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div class="empty-cart-wrap" v-if="cart.carts == 0">
          <div class="empty-cart container">
            <p class="text-center">
              尚未有商品加入購物車 
              <router-link class="link" to="/list">繼續購物</router-link>
            </p>
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
      coupon_code: '',
    }
  },
  methods: {
    getCart() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        vm.cart = response.data.data;
        console.log(1,response.data.data);
        vm.isLoading = false;
      });
    },
    removeCardItem(id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      vm.isLoading = true;
      this.$http.delete(url).then((response) => {
        vm.isLoading = false;
        vm.$bus.$emit('updateCart')
        vm.$bus.$emit('messsage:push', "已刪除商品", 'danger')
        vm.getCart() 
      });
    },
    addCouponCode() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      }
      vm.isLoading = true;
      this.$http.post(url, { data: coupon }).then((response) => {
        vm.isLoading = false;
        if (response.data.success) {
          vm.$bus.$emit('messsage:push', response.data.message, 'success')
          vm.getCart()
        } else {
          vm.$bus.$emit('messsage:push', response.data.message, 'danger')
        }
      })
    }
  },
  created() {
    this.getCart();
  }

}
</script>
<style lang="scss" scoped>
.wrap {
  margin-bottom: 50px;
}
.cart-link {
  margin-top: 100px;
  margin-bottom: 30px;
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
.cart-container {
  height: 400px;
  overflow-y: auto;
}
.cart {
  border: 1px solid #e6e6e6;
  height: 100%;
  th {
    text-transform: uppercase;
    font-size: 13px;
    color: #555;
    padding: 15px;
    border-bottom: 1px solid #e6e6e6;
  }
  td {
    padding: 15px;
    border-bottom: 1px solid #e6e6e6;
    &:first-child {
      width: 100px;
      img {
        width: 100%;
      }
    }
  }
  .btn {
    box-shadow: none;
  }
}
.total {
  padding: 30px 40px;
  border: 1px solid #e6e6e6;
  color: #333;
  h5 {
    font-size: 20px;
    text-transform: uppercase;
    padding-bottom: 20px;
    font-weight: 700;
    border-bottom: 1px dashed #e6e6e6;
    margin-bottom: 30px;
  }
  p {
    font-size: 15px;
    span {
      font-size: 18px;
      padding-left: 15px;
    }
  }
  .coupon-wrap { 
    margin-top: 30px; 
    .coupon-input {
      border: 1px solid #e6e6e6;
      border-radius: 22px;
      width: 200px;
      height: 45px;
      font-size: 14px;
      color: #333;
      padding-left: 15px;
      &:focus {
        outline: none;
        border: 1px solid #fdb813;
      }
    }
    .coupon-btn {
      margin-left: 5px;
      border: 1px solid #e6e6e6;
      border-radius: 22px;
      background-color: #f3f3f3;
      min-width: 140px;
      height: 45px;
      font-size: 15px;
      text-transform: uppercase;
      color: #333;
      font-weight: 500;
      transition: all 0.4s;
      &:focus {
        box-shadow: none;
      }
      &:hover {
        border-color: #717fe0;
        background-color: #717fe0;
        color: #fff;
      }
    }
  }
  .check-btn {
    margin-top: 30px;
    border: 1px solid #222;
    border-radius: 25px;
    background-color: #222;
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
      border-color: #717fe0;
      background-color: #717fe0;
      color: #fff;
    }
  }
}
.empty-cart-wrap {
  padding: 50px 0 35px;
  background: #eee;
  .empty-cart {
  p {
    font-weight: 700;
    font-size: 35px;
  }
  @media (max-width: 576px) {
    p {
      font-size: 20px;
    }
  }
 }
}

</style>