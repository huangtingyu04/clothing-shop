<template>
  <div>
    <div class="scroll-up">
      <i class="fas fa-angle-up"></i>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  created() {
    $(function(){
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('.scroll-up').fadeIn()
        } else {
          $('.scroll-up').fadeOut()
        }
      })
      $('.scroll-up').click(function() {
        $('html, body').animate({scrollTop : 0}, 1000)
      })
    })
  }
}
</script>
<style lang="scss" scoped>
  .scroll-up {
    position: fixed;
    width: 40px;
    height: 38px;
    bottom: 0;
    right: 40px;
    background: #717fe0;
    opacity: 0.5;
    z-index: 1;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .4s;
    i {
      color: white;
      font-size: 18px;
    }
    &:hover {
      opacity: 1;
    }
  }
</style>