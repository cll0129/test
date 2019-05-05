<template>
  <div>
    <div class="fristWrapper">
      <div class="title">列表1</div>
      <div class="listWrapper">
        <div class="list" v-for="(item, fristIndex) in frist" :key="fristIndex">{{ item.name }}</div>
      </div>
    </div>

    <div class="add">
      <div class="addleft">添加到左边</div>
      <div class="addleft">添加到右边</div>
    </div>

    <div class="fristWrapper">
      <div class="title">列表1</div>
      <div class="listWrapper">
        <div class="list" v-for="(item, secondIndex) in second" :key="secondIndex">{{ item.name }}</div>
      </div>
    </div>
    <router-link to="/adddata">下一页</router-link>
  </div>
</template>

<script>
	export default {
	  data () {
	    return {
	      frist: [
          {
            id: 1,
            name: "黄浦区"
          },
          {
            id: 2,
            name: "宝山区"
          },
          {
            id: 3,
            name: "虹口区"
          }
        ],
        second: [
          {
            id: 4,
            name: "淞南五村"
          },
          {
            id: 5,
            name: "淞南七寸"
          },
          {
            id: 6,
            name: "淞南石村"
          },
        ],
        _inter: ''
      }
    },
    created(){
    },
    methods: {
    },
    mounted() {
	    // this.timeDown()
    }
	}
</script>

<style scoped lang="less">
  .fristWrapper {
    width: 200px;
    display: inline-block;
    border-radius: 4px;
    border: 1px solid darkmagenta;
    .title {
      padding: 0 10px;
      line-height: 44px;
      background: #f5f7fa;
      color: #ccc;
    }
    .listWrapper {
      padding: 0 10px;
      .list {
        color: #444;
        line-height: 40px;
      }
    }
  }
  .add {
    vertical-align: top;
    display: inline-block;
    .addleft {
      width: 100px;
      height: 30px;
      background: green;
      color: #FFF;
      text-align: center;
      line-height: 30px;
      border-radius: 100px;
      margin: 5px;
    }
  }
</style>
