<template>
  <div class="container">
    <div class="category-wrap">
      <div class="row">
        <div class="col-md-6">
          <div class="item">
            <img src="../assets/images/banner-04.jpg" class="img-fluid">
            <router-link  class="category-link" to="/list">
              <div class="item-category">
                <h5>Women</h5>
                <span>New Trend</span>
              </div>
              <div class="item-txt">
               <div class="item-txt2">
                  shop now
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-6">
          <div class="item">
            <img src="../assets/images/banner-05.jpg" class="img-fluid">
            <router-link  class="category-link" to="/list">
              <div class="item-category">
                <h5>Men</h5>
                <span>New Trend</span>
              </div>
              <div class="item-txt">
                <div class="item-txt2">
                  shop now
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="item">
            <img src="../assets/images/banner-06.jpg" class="img-fluid">
            <router-link  class="category-link" to="/list">
              <div class="item-category">
                <h5>Watches</h5>
                <span>Summer 2020</span>
              </div>
              <div class="item-txt">
                <div class="item-txt2">
                  <div class="item-txt2">
                    shop now
                </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="item">
            <img src="../assets/images/banner-07.jpg" class="img-fluid">
            <router-link  class="category-link" to="/list">
              <div class="item-category">
                <h5>Bags</h5>
                <span>Summer 2020</span>
              </div>
              <div class="item-txt">
                <div class="item-txt2">
                  shop now
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="item">
            <img src="../assets/images/banner-08.jpg" class="img-fluid">
            <router-link  class="category-link" to="/list">
              <div class="item-category">
                <h5>Accessories</h5>
                <span>Summer 2020</span>
              </div>
              <div class="item-txt">
                <div class="item-txt2">
                  shop now
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-wrap {
  margin: 80px 0 40px;
}
.item {
  position: relative;
  border: 1px solid #e6e6e6;
  margin-bottom: 30px;
  .category-link {
    text-decoration: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 35px;
    transition: .4s;
    &:hover {
      background: rgba(103,117,214,0.8);
      h5 {
        color: #fff;
      }
      span {
        color: #fff;
      }
      .item-txt {
        transform: scaleX(1);
      }
      .item-txt2 {
        transform: translateY(0%);
      }
    }
    h5 {
      color: #333;
      font-size: 28px;
      font-weight: 700;
    }
    span {
     color: #555;
     font-size: 14px;
    }
    .item-txt {
      text-transform: uppercase;
      color: #fff;
      font-size: 15px;
      border-bottom: 2px solid #fff;
      padding-bottom: 4px;
      transition: .5s;
      transform: scaleX(0);
      overflow: hidden;
    }
    .item-txt2 {
      transition: .9s;
      transform: translateY(250%);
    }
  }
}
</style>
<script>
export default {
  
}
</script>
