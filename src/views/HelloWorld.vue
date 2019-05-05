<template>
  <div class="checkBoxWrapper">
    <div class="checkList">
      <div class="frist" v-for="(item, index) in list" :key="index">
        <i :class="item.type ? 'active':''" @click="childrenList(item)"></i> <span @click="check(item)">{{ item.name }}</span>
        <div class="childrenWrapper" v-if="item.child">
          <div class="children" v-for="(children, childrenIndex) in item.children" :key="childrenIndex">
            <i :class="children.type ? 'active':''" @click="childrenList(children)"></i> <span>{{ children.name }}</span>
          </div>
        </div>
      </div>
    </div>


    <div></div>
    <router-link to="index">
      返回
    </router-link>
  </div>
</template>

<script>
import { checkBox } from '../util/select'
export default {
  data () {
    return {
      list: [
        {
          type: 0,
          name: '上海',
          children: [
            {
              type: 0,
              name: '黄埔'
            },
            {
              type: 0,
              name: '宝山'
            },
            {
              type: 0,
              name: '虹口'
            }
          ]
        },
        {
          type: 0,
          name: '北京'
        },
        {
          type: 0,
          name: '广州'
        }
      ],
      active: false,
      child: false,
      text: '主要负责公司的 小程序、app、H5、pc网站的功能模块开发。包括了评论，发表动态、发表评论、删除评论等其他方面的一些功能。'
    }
  },
  mounted () {
    console.log(this.text.length + '长度')
  },
  methods: {
    check (item) {
      this.$set(item, 'child', item.child ? !item.child : true)
    },
    childrenList (item) {
      item.type ? '0':'1'
      // this.$set(item, 'active', item.active ? !item.active : true)
    },
  }
}
</script>

<style scoped lang="less">
  .checkBoxWrapper {
    .checkList {
      .frist {
        color: red;
        margin: 10px 0;
        line-height: 16px;
        span {
          position: relative;
          top: -3px;
        }
        i {
          width: 16px;
          height: 16px;
          border-radius: 2px;
          border: 1px solid red;
          display: inline-block;
          &.active {
            background: pink;
          }
        }
      }
      .childrenWrapper {
        position: relative;
        left: 10px;
        color: green;
        .children {
          margin: 10px 0;
        }
        i {
          border-color: green;
        }
      }
    }
  }
</style>
