<template>
  <div class="product-detail">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <img :src="productItem.imageUrl" class="img-fluid" style="object-fit: cover; object-position: center">
        </div>
        <div class="col-lg-7 pl-4">
          <h4>{{ productItem.title }}</h4>
          <span>{{ productItem.origin_price | currency }}</span>
          <p> 
            Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
          </p>
          <div class="qty-wrap">
            <div class="qty-adjust" @click="productItem.num <= 1 ? 1 : productItem.num--">
              <i class="fas fa-minus"></i>
            </div>
            <input 
            type="number" v-model="productItem.num"
            >
            <div class="qty-adjust" @click="productItem.num++">
              <i class="fas fa-plus"></i>
            </div>
          </div>
          <button class="btn" @click="addtoCard(productItem.id, productItem.num)">Add to cart</button>
          <div class="social-icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-google-plus-g"></i>
          </div>
          <div class="product-notice">
            <p>付款後，備貨到寄出商品為 3~6 個工作天。(不包含假日)</p>
            <p>統一發票中獎另會通知並寄送紙本發票</p>
          </div> 
          <div class="product-sales">
            <p> 
              <i class="far fa-grin-alt"></i>
              首次購物結帳時享95折優惠! ! !
            </p>
            <p>
              <i class="far fa-grin-alt"></i>
              當月壽星結帳時立即折 $50 元
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  props: ['productItem'],
  methods: {
    addtoCard(id, qty = 1) {
      const vm = this
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      // vm.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty,
      };
      this.$http.post(url, { data: cart }).then((response) => {
        console.log(response);
        // vm.status.loadingItem = '';
        $('#productModal').modal('hide');
      });
    }
  }
}
</script>
<style lang="scss" scoped>
.product-detail {
  h4 {
    font-size: 24px;
    line-height: 1.5;
    color: #333;
    font-weight: 500;
    margin-top: 20px;
  }
  span {
    color: #333;
    font-size: 18px;
    font-weight: bold;
  }
  p {
    font-size: 14px;
    line-height: 1.7;
    color: #666;
    margin-top: 20px;
  }
  .product-notice, .product-sales  {
    margin-top: 45px;
    p {
      margin-bottom: -10px;
    }
  }
  .qty-wrap {
    display: flex;
    text-align: center;
    line-height: 45px;
    width: 140px;
    height: 45px;
    border: 1px solid #e6e6e6;
    margin: 45px 0 45px 10px;
    input {
      width: calc(100% - 90px);
      height: 100%;
      border-top: 1px solid #e6e6e6;
      border-left: 1px solid #e6e6e6;
      background-color: #f7f7f7;
      text-align: center;
      font-size: 16px;
      color: #666;
      &:focus {
        outline: none;
      }
    }
    input[type="number"] {
      -webkit-appearance: textfield;
      -moz-appearance: textfield;
      appearance: textfield;
    }
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none;
    }
    .qty-adjust {
      width: 45px;
      height: 100%;
      transition: .4s;
      cursor: pointer;  
      &:hover {
        border-color: #717fe0;
        background-color: #717fe0;
        i {
          color: #fff;
        }
      }
      i {
       color: #666;
       font-size: 10px;
      }
    }
  }
  .btn {
    border-radius: 23px;
    background-color: #717fe0;
    min-width: 161px;
    height: 46px;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 45px;
    transition: .4s;
    &:hover {
      border-color: #222;
      background-color: #222;
    }
  }
  .social-icons {
    width: 140px;
    display: flex;
    justify-content: center;
    margin-left: 20px;
    margin-bottom: 30px;
    i {
      color: #666;
      transition: .4s;
      padding-right: 20px;
      cursor: pointer;  
      &:hover {
        color: #717fe0;
      }
    }
  }
}
</style>