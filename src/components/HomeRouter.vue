<template>
  <div>
    <Header></Header>
    <Alert />
    <Alertcart />
    <router-view></router-view>
    <ScrollUp/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header';
import Alert from './AlertMessage';
import Alertcart from './AlertCartMessage';
import Footer from './Footer'
import ScrollUp from './ScrollUp'
export default {
  components: {
    Header,
    Alert,
    Alertcart,
    ScrollUp,
    Footer
  },
}
</script>