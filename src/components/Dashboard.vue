<template>
  <div>
    <BackHeader />
    <Alert></Alert>
    <div class="container">
      <div class="px-5 mx-auto">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import BackHeader from './BackHeader'
import Alert from './AlertMessage'

export default {
  components: {
    BackHeader,
    Alert
  } 
}

</script>