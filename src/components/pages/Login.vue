<template>
  <div class="logIn">
    <Header></Header>
    <div class="wrap">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" 
          id="home-tab" 
          data-toggle="tab" 
          href="#signIn" 
          role="tab"
          > 
            <i class="fas fa-sign-in-alt mr-1"></i>
              Member SignIn
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" 
          id="profile-tab" 
          data-toggle="tab"
          href="#register" 
          role="tab" 
          >
            <i class="fas fa-user-plus mr-1"></i>
              Register
          </a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="signIn" role="tabpanel" aria-labelledby="home-tab">
          <input class="formInput" type="email" id="inputEmail" placeholder="Email address" required>
          <input class="formInput" type="password" id="inputPassword" placeholder="Password" required>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"> Remember me
            </label>
          </div>
          <button class="btn" type="submit">Sign in</button>
        </div>
        <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="profile-tab">
         <input class="formInput" type="email" id="inputEmail" placeholder="Email address" required>
          <input class="formInput" type="password" id="inputPassword" placeholder="Password" required>
           <input class="formInput mb-5" type="password" id="inputPassword" placeholder="Confirm password again" required>
          <button class="btn" type="submit">Register</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../Header'
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.logIn {
  color: #fff;
  width: 100%;
  height: 100vh;
  background: url('../../assets/images/login.jpg') center center / cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrap {
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.8);
    margin-top: 70px;
    max-width: 350px;
  }
  .nav-tabs {
    border: none;
  }
  .nav-item {
    width: 50%;
  }
  .nav-link {
    color: #fff;
    text-align: center;
    padding: 20px 10px;
    border: 1px solid  #fff;
    border-radius: 0;
    font-weight: 500;
    transition: .5s;
    &:hover {
      color: #717fe0;
    }
  }
  .nav-link.active {
    color: #111;
    &:hover {
      color:  #111; 
    }
  }
  .tab-pane {
    padding: 60px 30px 30px 30px;
    box-sizing: border-box;
    text-align: center;
    .formInput {
      width: 100%;
      color: #fff;
      border: 1px solid red;
      line-height: 2;
      padding-bottom: 3px;
      margin-bottom: 40px;
      background: transparent;
      border: none;
      outline: none;
      border-bottom: 1px solid #fff; 
    }
    .btn {
      color: #fff;
      margin-bottom: 10px;
      background: #717fe0;
      border-radius: 23px;
      min-width: 200px;
      height: 46px;
      box-shadow: none;
      text-transform: uppercase;
    }
  }
}
</style>