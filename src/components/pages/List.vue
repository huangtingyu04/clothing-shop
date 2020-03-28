<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="container mb-5">
      <div class="products-navbar">
        <ul class="nav">
          <a href="#" class="nav-link" 
            :class="{'active' : listProduct === ''}"
            @click.prevent="listProduct = ''">
              All Products
          </a>
          <a href="#" class="nav-link" 
            :class="{'active' : listProduct === 'Women'}"
            @click.prevent= "listProduct = 'Women'">
              Women
          </a>
          <a href="#" class="nav-link" 
            :class="{'active' : listProduct === 'Men'}"
            @click.prevent= "listProduct = 'Men'">
              Men
          </a>
          <a href="#" class="nav-link" 
            :class="{'active' : listProduct === 'Bag'}"
            @click.prevent= "listProduct = 'Bag'">
              Bag
          </a>
          <a href="#" class="nav-link" 
            :class="{'active' : listProduct === 'Watches'}"
            @click.prevent="listProduct = 'Watches'">
              Watches
          </a>
          <a href="#" class="nav-link" 
            :class="{'active' : listProduct === 'Accessories'}"
            @click.prevent= "listProduct = 'Accessories'">
              Accessories
          </a>
        </ul>
      </div>
      <div class="products-display">
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-3 mb-4" 
          v-for="(product) in filterProducts" :key="product.id">
            <div class="wrap">
              <div class="product-picture-outer" style="height: 340px;">
                <div class="product-picture" :style="{ backgroundImage: `url(${product.imageUrl})` }" style="width: 100%; height: 100%; background-size: cover; background-position: center;">
                </div>
                <button type="button" class="btn" @click="getProduct(false, product.id)">
                  Quick View
                </button>
              </div>
              <div class="product-content">
                <h5 class="product-title"
                @click="getProduct(true, product.id)">
                {{ product.title }}</h5>
                <span class="product-price">{{ product.origin_price | currency }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content p-2">
            <div class="modal-body">
              <Productdetail 
              :product-item = "product" />
            </div>
          </div>
        </div>
      </div>
      <Pagination 
        :childPagination="pagination" 
        @changeCurrentPage="getProducts" 
        v-if="listProduct === ''">
      </Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from '../Pagination'
import Productdetail from '../Product_detail_template'
import $ from 'jquery'
export default {
  data() {
    return {
      products: [],
      allproducts: [],
      product: {},
      pagination: {},
      listProduct: '',
      isLoading: false,
    }
  },
  components: {
    Pagination,
    Productdetail
  },
  methods: {
    getProducts(page = 1) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`
      vm.isLoading = true
      this.$http.get(url).then((response) => {
        console.log(response.data)
        vm.products = response.data.products
        vm.pagination = response.data.pagination
        vm.isLoading = false
      })
    },
    getAllProducts() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`
      vm.isLoading = true
      this.$http.get(url).then((response) => {
        console.log(response.data.products)
        vm.allproducts = response.data.products
        vm.isLoading = false
      })
    }, 
    getProduct(isChangedPage, id) {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`
      vm.isLoading = true
      this.$http.get(url).then((response) => {
        vm.product = response.data.product
        // vm.$set(vm.product, 'number', 1)
        vm.product.num = 1
        console.log(response.data.product)
        if (isChangedPage) vm.$router.push(`product_detail/${id}`)
        else $('#productModal').modal('show')
        vm.isLoading = false
      })
    }
  },
  computed: {
    filterProducts() {
      const vm = this
      if (vm.listProduct === '') return vm.products  
      return vm.allproducts.filter((item) => {
        return vm.listProduct === item.category
      })
    }
  },
  created() {
    this.getAllProducts()
    this.getProducts()
  }
}
</script>
<style lang="scss" scoped>
.products-navbar {
  margin-top: 100px;
  padding-bottom: 40px;
  .nav {
    margin-left: -15px;
  }
  .nav-link {
    color: #888;
    font-size: 15px;
    transition: .4s;
    &.active {
      color: #333;
    }
    &:hover {
      color: #333;  
    }
    &.active:after {
      content: '';
      display: block;
      border-bottom: 1px solid #797979;
    }
    &:hover:after {
      content: '';
      display: block;
      border-bottom: 1px solid #797979;
    }
  }
}
.products-display {
  .product-picture-outer {
    overflow: hidden;
    position: relative;
    cursor: pointer;
    &:hover {
      .product-picture {
        transform: scale(1.1);
      }
      .btn {
        bottom: 30px;
      }
    }
    .product-picture {
      transition: .9s ease;
    }
    .btn {
      font-size: 15px;
      position: absolute;
      border-radius: 20px;
      background-color: #fff;
      min-width: 139px;
      height: 40px;
      color: #333;
      box-shadow: none;
      left: 50%;
      bottom: -100px;
      transform: translateX(-50%);
      transition: .4s;
      &:hover {
        color: #fff;
        background-color: #222;
      }
    }
  }

  .product-content {
    padding: 15px 0 6px 0 ;
    .product-title {
      font-size: 14px;
      font-weight: 400;
      color: #999;
      transition: .4s;
      cursor: pointer;
      &:hover {
        color: #717fe0;
      }
    }
    .product-price {
      font-size: 14px;
      color: #666;
      letter-spacing: 1px;
    }
  }
}
</style>