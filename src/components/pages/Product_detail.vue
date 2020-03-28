<template>
  <div class="mb-5">
    <loading :active.sync="isLoading"></loading>
    <div class="container product-link">
      <router-link to="/" class="link">Home</router-link> >
      <router-link to="/list" class="link">All Products</router-link> >
      <span>{{ product.title }}</span>
    </div>
    <Productdetail :product-item = "product"  />
  </div>
</template>
<script>
import Productdetail from '../Product_detail_template'
export default {
  components: {
    Productdetail,
  },
  data() {
    return {
      product: {},
      productID: '',
      isLoading: false,
    }
  },
  methods: {
    getProduct(id) {
      const vm = this;
      vm.isLoading = true
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`
      this.$http.get(url).then((response) => {
        vm.product = response.data.product
        // vm.$set(vm.product, 'number', 1)
        vm.product.num = 1
        vm.isLoading = false
      })
    }
  },
  created() {
    this.productID = this.$route.params.id // id 要跟路由(product_detail/:id)設置同個名稱
    this.getProduct(this.productID)
  }
}
</script>
<style lang="scss" scoped>
.product-link {
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