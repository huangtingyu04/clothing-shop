<template>
  <div>
    <header class="fixed-top">
      <nav class="navbar navbar-expand-lg" :class="{'narbar-color' : isNavbarChange, 'color-nav' : $route.path !== '/'}">
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
                <router-link to="/" class="nav-link">
                  <a>Home</a>
                </router-link>
              </li>
              <li class="nav-item m-1">
                <router-link to="/list" class="nav-link"> 
                  <a>Shop</a>
                </router-link>
              </li>
              <li class="nav-item m-1">
                <router-link to="/login" class="nav-link">
                  <a>SignIn</a>
                </router-link>
              </li>
              <li class="nav-item ml-1 my-1">
                <router-link to="/cart" class="nav-link">
                  <i class="fas fa-shopping-cart"></i>
                  <span class="badge badge-pill badge-danger">50</span>
                </router-link>
              </li>
              <li class="nav-item m-1">
                <router-link to="/controller" class="nav-link">
                  <a>
                    <i class="fas fa-cog"></i>
                  </a>
                </router-link>
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
  name: 'Header',
  data() {
    return {
      scrollY: false,
      widthX: false,
      isNavbarChange: false,
      isShow: false,
    }
  },
  methods: {
    handleView () {
      this.scrollY = window.pageYOffset <= 50
      this.widthX = window.innerWidth >= 992
      this.isNavbarChange = this.scrollY && this.widthX
    },
  },
  created () {
    this.handleView()
    window.addEventListener('scroll', this.handleView)
    window.addEventListener('resize', this.handleView)
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
}
.navbar.narbar-color {
  height: 84px;
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  // rgba(255, 255, 255, 0.1)
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
 .navbar.color-nav, .navbar.narbar-color.color-nav {
   height: 70px;
   background: #fff;
 }
 .navbar.color-nav {
  box-shadow: 0 0px 3px 0px rgba(0,0,0,0.2);
  .logo2 {
    background: url('../assets/images/logo2.png') no-repeat center center;
  }
  .nav-link {
   color: #111;
    &:hover,
    &.router-link-exact-active {
    color: #717fe0;
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
