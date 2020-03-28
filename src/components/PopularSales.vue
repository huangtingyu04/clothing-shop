<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="products-display container mb-5">
      <div class="text-center">
        <h5 class="swiper-title">popular sales</h5>
      </div>
      <swiper :options="swiperOption" ref="mySwiper" v-if="allproducts.length > 0">
        <swiper-slide
        v-for="(product) in popularProducts" :key="product.id">
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
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content p-2">
          <div class="modal-body">
            <Productdetail :product-item = "product"/>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import Productdetail from './Product_detail_template'
import $ from 'jquery'
export default {
  data() {
    return {
      swiperOption: {
        grabCursor: true,
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
        loop: true,
        autoplayDisableOnInteraction: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        
          bulletClass : 'my-bullet'
        },
        breakpoints: {
          544: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 2,
          },
        },
      },
      allproducts: [],
      product: {},
      isLoading: false,
    }
  },
  components: {
    Productdetail
  },
  methods: {
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
        if (isChangedPage) vm.$router.push(`product_detail/${id}`)
        else $('#productModal').modal('show')
        vm.isLoading = false
      })
    }
  },
  computed: {
    popularProducts() {  
      const vm = this
      return vm.allproducts.filter((item) => {
        return item.description === 'Popular'
      })
    },
    swiper() {
        return this.$refs.mySwiper.swiper
    }
  },
  created() {
    this.getAllProducts()
  }
}
</script>
<style lang="scss" scoped>
.products-display {
  position: relative;
  padding-bottom: 80px;
  border: 1px solid red;
  .swiper-title {
    color: #333;
    font-size: 30px;
    text-transform: uppercase;
    display: inline-block;
    border-bottom: 3px solid #717fe0;
    padding-bottom: 3px;
    margin-bottom: 40px;
  }
  .swiper-pagination {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    border: 1px solid blue;
    .my-bullet {
      border: 1px solid red;
      width: 16px;
      height: 16px;
      background-color: #c1170c;
      margin-left: 8px;
      margin-right: 8px;
      @media (max-width: 767px) {
        margin-left: 4px;
        margin-right: 4px;
      }
    }
  }
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