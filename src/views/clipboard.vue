<template>
  <div>

    <div class="read" @click="copy" data-clipboard-text="link">复制的clipboard</div>

  </div>
</template>

<script>
  import Clipboard from 'clipboard'
	export default {
    data () {
      return {
        link: 'http://localhost:8080/#/clipboard'
      }
    },
    methods: {
      copy () {
        var clipboard = new Clipboard('.read');
        clipboard.on('success', e => {
          console.log('复制成功')
          clipboard.destroy()
        })
        clipboard.on('error', e => {
          console.log('该浏览器不支持自动复制')
          clipboard.destroy()
        })
      }
    }
	}
</script>

<style scoped>

</style>
