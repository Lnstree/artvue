<template>
  <div id="inner-content">
    <p>{{ company_name }}</p>
    <p>Add:{{ company_addr }}</p>
    <p>Zip code:{{ company_zip }}</p>
    <p>
      <i class="fa fa-phone-square fa-lg" aria-hidden="true"> </i>
      {{ company_mob }}
    </p>
    <p><i class="fa fa-tty fa-lg" aria-hidden="true"></i> {{ company_tel }}</p>
    <p>
      <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
      <a v-bind:href="mailto">{{ mail }}</a>
    </p>
  </div>
</template>


<script>
import GLOBAL from '@/config/global_var.js'
var info = GLOBAL.BB_Info
export default {
  data () {
    return {
      company_name: info.company_name,
      company_addr: info.company_addr,
      company_zip:  info.company_zip,
      company_tel:  info.company_tel,
      company_mob:  info.company_mob,
      mail: info.mail,
      mailto: info.mailto,
    }
  },

  created(){
  },
}
</script>