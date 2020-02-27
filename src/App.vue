<template>
  <div id="app">
    <app-login/>
    <router-view/>
  </div>
</template>

<script>
import loginPage from '@/components/loginPage.vue'
export default {
  'app-login': loginPage
}
</script>

<style>
#app{
  margin: -10px;
  background: #E5E5E5;
}
#nav{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.rout{
  color: white;
  padding: 8px 25px;
  background-color: black;
  border-radius: 10px !important;
  text-decoration: none;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
