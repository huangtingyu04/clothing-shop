<template>
  <div>
    <header class="fixed-top">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <div class="logo">
            <router-link to="/">
              <a class="logo2">
              </a>
            </router-link>
          </div>
          <button 
          class="navbar-toggler custom-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNav" 
          >
            <span class="navbar-toggler-icon"><i class="fas fa-bars" style="color: #111; font-size:30px;"></i></span>
          </button>
          <div class="collapse navbar-collapse hamburger" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item m-1">
                <router-link to="/admin/products" class="nav-link">
                 Product list
                </router-link>
              </li>
              <li class="nav-item m-1">
                <router-link to="/admin/orders" class="nav-link">
                 Order list
                </router-link>
              </li>
              <li class="nav-item m-1">
                <router-link to="/admin/coupons" class="nav-link">
                  Coupon
                </router-link>
              </li>
              <li class="nav-item m-1">
                <a class="nav-link" href="#" @click.prevent="signout">Sign out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>
<script> 
export default {
  methods: {
      signout() {
        const vm = this
        const url = `${process.env.APIPATH}/logout`;
        this.$http.post(url).then((response) => {
          if (response.data.success) {
            vm.$router.push('/controller')
          }
        })
      }
    }
 
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 70px;
  background: #212529;
  .logo2 {
    width: 200px;
    height: 70px;
    display: block;
    background: url('../assets/images/logo.png') no-repeat center center;
  }
  .nav-link {
   font-size: 16px;
   font-weight: 500;
   color: #fff;
   transition: .4s;
   text-decoration: none;
   &:hover, 
   &.router-link-exact-active {
     color: #717fe0;
   }
 }
 i {
   font-size: 18px;
 }
 .badge {
   font-size: 14px;
 }
}

 @media (max-width: 992px) {
  .navbar {
    background: #fff;
    position: relative;
    .logo {
      margin: 0 auto;
    }
    .logo2 {
      height: 55px;
      background: url('../assets/images/logo2.png') no-repeat center center
    }
    .custom-toggler.navbar-toggler { 
      border-color: #eee; 
    } 
    .navbar-toggler:focus {
      outline: none;     
    }
    .hamburger {
      width: 100%;
      padding: 10px 0;
      position: absolute; 
      top: 100%;
      left: 0;
      background: #717FE0;
      li {
        padding: 0 15px;
        .nav-link {
          transition: .4s;
          &:hover,
          &.router-link-exact-active  {
            color: #F74877;
          }
        }
        i {
          font-size: 16px;
        }
      }
    }
  }
 }  

 @media (max-width: 992px) {
  .navbar.color-nav {
    .nav-link {
      color: #fff;
    }
  }  
 }
</style>