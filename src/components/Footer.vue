<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-lg-3 item">
          <h4>categories</h4>
          <ul>
            <li><router-link class="link" to="/list">Women</router-link></li>
            <li><router-link class="link" to="/list">Men</router-link></li>
            <li><router-link class="link" to="/list">Watches</router-link></li>
            <li><router-link class="link" to="/list">Bags</router-link></li>
            <li><router-link class="link" to="/list">Accessories</router-link></li>
          </ul>
        </div>
        <div class="col-sm-6 col-lg-3 item">
          <h4>help</h4>
          <ul>
            <li><a class="link" href="#">Track Order</a></li>
            <li><a class="link" href="#">Returns</a></li>
            <li><a class="link" href="#">Shipping</a></li>
            <li><a class="link" href="#">FAQs</a></li>
          </ul>
        </div>
        <div class="col-sm-6 col-lg-3 item">
          <h4>get in touch</h4>
          <p>Any questions? Let us know in store in Pingtung.
          Any questions? Let us know in store in Pingtung.
          </p>
          <div class="social-media-icon">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-pinterest-p"></i>
          </div>
        
        </div>
        <div class="col-sm-6 col-lg-3 item">
          <h4>newsletter</h4>
          <input type="text" placeholder="email@example.com">
          <div class="focus-input"></div>
          <div>
            <button class="btn">subscribe</button>
          </div>
        </div>
      </div>
      <div class="copyright text-center"> Copyright 2020 &copy; Store Shop．僅做為個人學習使用，非商業用途．
      <a class="link" href="">
        <i class="fab fa-github"></i>
      </a> ‧ <a class="link" href="">repo</a>。
    </div>
    </div>
  </div>


</template>

<style lang="scss" scoped>
.footer {
  .link {
    text-decoration: none;
  }
  padding: 75px 0 32px 0;
  color: #b2b2b2;
  background: #222222;
  .item {
    padding: 0 15px 50px;
  }
  h4 {
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    padding-bottom: 30px;
  }
  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul {
    li {
      padding-bottom: 10px;
      .link {
        color: #b2b2b2;
        font-size: 13px;
        transition: .4s;
        &:hover {
          color: #717fe0; 
        }
      }
    }
  }
  p {
    font-size: 13px;
    line-height: 1.923;
  }
  .social-media-icon {
    i {
      margin: 20px 20px 0 0;
      font-size: 18px;
      transition: .4s;
      cursor: pointer;
      &:hover {
        color: #717fe0; 
      }
    }
  }
  input {
    position: relative;
    width: 100%;
    border: none;
    border-bottom: 2px solid rgba(204,204,204, 0.1);
    background: transparent;
    line-height: 1.923;
    &:focus {
      outline: none;
      + .focus-input {
        width: 100%;
      }
    } 
  }
  .focus-input {
    position: relative;
    top: 0;
    left: 0;
    width: 0%;
    border-bottom: 2px solid #717fe0;
    transition: .4s;
  }

  .btn {
    font-size: 15px;
    color: #fff;
    margin-top: 18px;
    text-transform: uppercase;
    background: #717fe0;
    border-radius: 23px;
    min-width: 179px;
    height: 46px;
    box-shadow: none;
  }
}



</style>