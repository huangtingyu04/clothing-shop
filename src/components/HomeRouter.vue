<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <ScrollUp/>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header';
import Footer from './Footer'
import ScrollUp from './ScrollUp'
export default {
  components: {
    Header,
    ScrollUp,
    Footer
  },
}
</script>