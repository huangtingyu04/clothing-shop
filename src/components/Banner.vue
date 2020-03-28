<template>
  <div class="swiper-box" style="height: 100vh">
    <!-- swiper -->
    <swiper :options="swiperOption" class="wrapper" ref="mySwiper">
      <swiper-slide class="slide-1">
        <div class="item">
          <h2 class="ani"
          swiper-animate-effect="fadeInDown"
          swiper-animate-duration="1.5s"
          swiper-animate-delay="0s"
          >Women Collection 2020</h2>
          <p class="ani"
          swiper-animate-effect="fadeInUp"
          swiper-animate-duration="1.5s"
          swiper-animate-delay="0.8s"
          >new arrivals</p>
          <button class="btn ani"
          swiper-animate-effect="zoomIn"
          swiper-animate-duration="1.5s"
          swiper-animate-delay="1.6s"
          >shop now</button>
        </div>
      </swiper-slide>
      <swiper-slide class="slide-2">
        <div class="item">
          <h2 class="ani"
          swiper-animate-effect="rollIn"
          swiper-animate-duration="1.5s"
          swiper-animate-delay="0s"
          >Men New-Season</h2>
          <p class="ani"
          swiper-animate-effect="lightSpeedIn"
          swiper-animate-duration="1.5s"
          swiper-animate-delay="0.8s">Jackets & Coats</p>
          <button class="btn ani"
          swiper-animate-effect="slideInUp"
          swiper-animate-duration="1.5s"
          swiper-animate-delay="1.6s">shop now</button>
        </div>
      </swiper-slide>
      <swiper-slide class="slide-3">
        <div class="item">
          <h2 class="ani"
          swiper-animate-effect="rotateInDownLeft"
          swiper-animate-duration="1.5s"
          swiper-animate-delay="0s">Men Collection 2020</h2>
          <p class="ani"
          swiper-animate-effect="rotateInUpRight"
          swiper-animate-duration="1.5s"
          swiper-animate-delay="0.8s">new season</p>
          <button class="btn ani"
          swiper-animate-effect="rotateIn"
          swiper-animate-duration="1.5s"
          swiper-animate-delay="1.6s">shop now</button>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
  </div> 
</template>

<script>
// import * as swiperAni from '../../static/js/swiper.animate.min.js'
  export default {
    data() {
      let vm = this
      return {
        swiperOption: {
          autoplay:true,
          autoplay: {
            delay: 6000,
          },
          speed: 1000,
          loop: true,
          spaceBetween: 0,
          effect: 'fade',
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          on: {
            init: function () {
                vm.$swiperAnimateCache(this);
                vm.$swiperAnimate(this);
              },
              slideChange: function () {
                vm.$swiperAnimate(this);
              }
          }
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
    }
  }
  }
</script>

<style lang="scss" scoped>

  .wrapper {
    width: 100%;
    height: 100%;
  }
  .swiper-box {
      .item {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #fff;
      h2 {
        font-family: 'Playfair Display SC', serif;
        margin-bottom: 40px;
      }
      p {
        font-size: 60px;
        text-transform: uppercase;
        font-weight: bold;
      }
      .btn {
       min-width: 161px;
       height: 46px;
       color: #fff;
       text-transform: uppercase;
       font-size: 15px;
       font-weight: 700;
       border-radius: 23px;
       padding: 0 15px;
       background-color: #717fe0;
       box-shadow: none;
       transition: .4s;
       margin: 50px 0 -110px;
       &:hover {
         color: #717fe0;
         background-color: #fff;
       }
      }
      @media (max-width: 576px) {
        h2 {
          font-size: 20px;
        }
        p {
          font-size: 40px;
        }
      }
    }
  }
  .swiper-slide {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    &.slide-1 {
      background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('../assets/images/slide-05.jpg')
    }
    &.slide-2 {
      background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('../assets/images/slide-06.jpg')
    }
    &.slide-3 {
      background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url('../assets/images/slide-07.jpg')
    }
  }
  .swiper-button-prev, .swiper-button-next {
    width: 30px;
    height: 30px;
    opacity: 0;
    transition: .5s;
  }
  .swiper-button-prev {
    margin-left: 30px;
  }
  .swiper-button-next {
    margin-right: 30px;
  }
  .swiper-box {
    &:hover .swiper-button-prev, {
      opacity: 1;
    }
    &:hover .swiper-button-next, {
      opacity: 1;
    }
  }
  
  @media (max-width: 992px) {
   .swiper-slide {
     margin-top: 70px;
    }
  }
  @media (max-width: 576px) {
    .swiper-button-prev {
      margin-left: 0;
    }
    .swiper-button-next {
      margin-right: 0;
    }
  }
</style>

