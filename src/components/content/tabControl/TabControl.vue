<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for = "(item,index) in titles" :class = "{active: index === currentIndex}" @click="itemclick(index)"><span>{{item}}</span></div>
  </div>
</template>

<script>
export default {
  name:"TabControl",
  props:{
    titles:{
      type:Array,
      default:{
        retur:[]
      }
    }
  },
  data(){
    return{
      currentIndex: 0
    }
  },
  methods:{
    itemclick(index){
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    background: #fff;
    
  }
  .tab-control .tab-control-item{
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
  }
  .active span{
    color: red;
    border-bottom: solid 2px red;
    padding: 5px;
  }
</style>