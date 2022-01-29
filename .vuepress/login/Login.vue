<template>
  <div class="login-form">
    <div class="form-header">Siapa ini?</div>
    <div>
      <input type="text" class="form-control" v-model="donnimsifa">
    </div>
    <div class="btn-row">
      <button class="btn" @click="login">
        Buka Dokumen
      </button>
    </div>
    <div class="form-bottom">Dokumen Rahasia <br> <a href="https://instagram.com/donnimsifa">&copy;2022 oleh donnimsifa</a></div>
  </div>

</template>

<script>
import { STORAGE_KEY } from './helper'

export default {
  data () {
    return {
      donnimsifa: ''
    }
  },
  methods: {
    login () 
    {
      var var1 = { 'Donni':'','donnimsifa':''}
      var var2 = { 'Nisa':'','Agus':''}
      if (this.donnimsifa) 
      {
        var var3 = false
        for(var var4 in var2 || var4 in var1)
        {
           var var5 = var4;
           if((this.donnimsifa) === var5)
           {
              var3 = true
              break;
           }
        }

        if(var3)
        {
            const data = JSON.stringify({
              name: this.donnimsifa,
              time: new Date().getTime()
            })
            window.localStorage.setItem(STORAGE_KEY, data)
            this.$emit('close', true)
        }
        else{
            this.$dlg.alert('Maaf, gaboleh masuk selain @donnimsifa', {
          messageType: 'warning'
        })
        }
      } 
    }
  }
}
</script>
