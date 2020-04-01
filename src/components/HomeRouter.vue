<template>
  <div>
    <Header></Header>
    <Alertcart />
    <router-view></router-view>
    <ScrollUp/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header';
import Alertcart from './AlertCartMessage';
import Footer from './Footer'
import ScrollUp from './ScrollUp'
export default {
  components: {
    Header,
    Alertcart,
    ScrollUp,
    Footer
  },
}
</script>