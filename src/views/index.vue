<template>
  <div class="selectWrapper">
    <div class="colorWrapper" v-for="(item, index) in spec" :key="index">
      <div class="title">{{ item.name }}：</div>
      <div class="colorBox" @click="choice(dataItem, index)" v-for="(dataItem, itemIndex) in item.child" :key="itemIndex">{{ dataItem.name }}</div>
    </div>

    <div class="colorWrapper">
      <div class="title">价格：</div>
      <span class="price">{{ price }}</span>
    </div>
    <router-link to="/transfer">下一页</router-link>
  </div>
</template>

<script>
	export default {
		data () {
		  return {
        spec:[
          {
            name:"颜色",
            child:[
              {
                name:"红",
                key:1
              },
              {
                name:"黄",
                key:2
              },
              {
                name:"绿",
                key:3
              }
            ]
          },
          {
            name:"尺寸",
            child:[
              {
                name:"L",
                key:4
              },
              {
                name:"M",
                key:5
              },
              {
                name:"S",
                key:6
              }
            ]
          }
        ],
        specValue:{
          '1_4':{
            name:"红色L号",
            id:7,
            price:"12.00"
          },
          '1_5':{
            name:"红色M号",
            id:8,
            price:"22.00"
          },
          '1_6':{
            name:"红色S号",
            id:9,
            price:"23.00"
          },
          '2_4':{
            name:"黄色L号",
            id:7,
            price:"12.00"
          },
          '2_5':{
            name:"黄色M号",
            id:8,
            price:"22.00"
          },
          '2_6':{
            name:"黄色S号",
            id:9,
            price:"23.00"
          },
          '3_4':{
            name:"绿色L号",
            id:7,
            price:"12.00"
          },
          '3_5':{
            name:"绿色M号",
            id:8,
            price:"22.00"
          },
          '3_6':{
            name:"绿色S号",
            id:9,
            price:"23.00"
          }
        },
        active: false,
        newArry: [],
        key: '',
        price: '',
        oldArry: []
      }
    },
    mounted () {
      this.defa()
    },
    methods: {
		  defa () {
		    this.oldArry = this.spec[0].child[0].key + '_' + this.spec[1].child[0].key

        console.log(this.oldArry)
        if (this.oldArry) {
          this.price = this.specValue[this.oldArry].price
        }
      },
      choice (item, index) {
        if (this.newArry[0] && this.newArry[1]) {
          this.newArry = []
        }
        this.newArry[index] = item.key
        this.key = this.newArry[0] + '_' + this.newArry[1]

        console.log(this.newArry)

        if (this.newArry[0] && this.newArry[1]) {
          this.price = this.specValue[this.key].price
        }

      }
    }
	}
</script>

<style scoped lang="less">
  .colorWrapper {
    margin-bottom: 40px;
    .title {
      color: #444444;
      font-size: 32px;
      margin-bottom: 20px;
    }
    .colorBox {
      width: 100px;
      height: 54px;
      color: #FFFFFF;
      font-size: 24px;
      line-height: 54px;
      text-align: center;
      border-radius: 100px;
      background: #03AEF9;
      display: inline-block;
      margin-right: 10px;
      &.active {
        background: #2f6992;
      }
    }
    .price {
      color: red;
      font-size: 40px;
    }
  }
  .sele {
    height: 300px;
    background: pink;
  }
</style>
