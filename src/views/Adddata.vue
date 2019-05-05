<template>
  <div>
    <div v-for="(item, index) in newArr" :key="index">
      {{ item }}
    </div>
    <button @click="addnewArr">添加</button>
    <!--clipboard-->
    <router-link to="/clipboard">下一页</router-link>
  </div>
</template>

<script>
	export default {
	  data () {
	    return {
	      newArr: {
	        a: '132'
        }
      }
    },
    mounted () {
	    // delete 只是被删除的元素变成了empty/undefined其他的元素的键值还是不变
      // vue.delete直接删除了数组  改变了数组的键值
	    var a = [1, 2, 3, 4]
      var b = [33, 44, 55, 66, 77]
      delete a[1]
      console.log(a)
      this.$delete(b, 1)
      console.log(b)
    },
    methods: {
      addnewArr () {
        // this.newArr.b = '哈哈哈' //向对象里面添加一个新的属性，点击添加不会刷新视图，是因为vue实例创建的时候newArr.b并没有声明因此就没有被Vue转换为响应式的属性，自然就不会触发视图的更新，这时就需要使用Vue的全局api $set()：

        // $set方法相当于手动的去把newArr.b处理成一个响应式的属性，此时视图也会跟着改变了
        // 如果更改对象 里面的 某个值。并且想让他响应到视图上。
        this.$set(this.newArr, 'b', '哈哈哈123')
        console.log(this.newArr)
      }
    }
	}
</script>

<style scoped>

</style>
