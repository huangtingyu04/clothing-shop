<template>
  <div>
    <div class="discount">
      <div class="title animated">
        <h5>summer sale</h5>
      </div>
      <div class="txt1 animated">
        <p>首次購物結帳時輸入1234，享9折優惠! ! !</p>
      </div>
      <div class="txt2 animated">
        <p>當月壽星結帳時輸入5678，享8折優惠! ! !</p>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  created() {
    $(document).ready(function () {
      $(window).scroll(function() {
        let scrollPos = $(this).scrollTop()
        let windowHeight = $(this).height()
        $('.discount').each(function() {
          if ((scrollPos + windowHeight) > $('.discount > .title').offset().top) $('.discount > .title').addClass('rotateIn')  
          if ((scrollPos + windowHeight) > $('.discount > .txt1').offset().top) $('.discount > .txt1').addClass('rotateIn')
          if ((scrollPos + windowHeight) > $('.discount > .txt2').offset().top) $('.discount > .txt2').addClass('rotateIn')
        })
      })
    })
  }
}
</script>
<style lang="scss" scoped>
.discount {
  margin-bottom: 60px;
  width: 100%;
  height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../assets/images/discount.jpg') center top / cover no-repeat fixed ;
  display: flex;
  flex-direction: column;
  align-items: center;
  h5 {
    color: #fff44f;
    font-size: 45px;
    text-transform: uppercase;
    font-weight: 900;
    box-shadow: 0px 0px 10px #fff44f;
    margin: 110px 0 10px;
  }
  p {
    color: #fff;
    font-size: 28px;
    font-weight: 900;
    margin: 30px 0 -10px;
  }
  @media(max-width: 576px) {
    h5 {
      font-size: 40px;
      font-weight: 700;
    }
    p {
      font-size: 25px;
      font-weight: 700;
    }
  }
}
</style>