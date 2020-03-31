<template>
  <div>
    <Banner/>
    <Categorylink/>
    <Discount/>
    <Popular/>
  </div>
</template>

<script>
import Banner from '../Banner'
import Categorylink from '../Categorylink'
import Discount from '../Discount'
import Popular from '../PopularSales'
export default {
  name: 'Home',
  components: {
    Banner,
    Categorylink,
    Discount,
    Popular,
  }
}
</script>