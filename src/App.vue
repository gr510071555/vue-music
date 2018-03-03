<template>
  <div id="app">
      <m-header/>
      <tab/>
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
      <player></player> 
  </div>
</template>
<script type="text/ecmascript-6">
    import MHeader from 'components/m-header/m-header'
    import Tab from 'components/tab/tab'
    import Player from 'components/player/player'
    export default {
        components: {
            'm-header': MHeader,
            'tab': Tab,
            'player': Player
        }
    }
</script>
<style lang="stylus" scoped>
   
</style>
  
