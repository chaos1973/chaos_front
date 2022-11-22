<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <!-- <Upload></Upload> -->
  <SampleUpload></SampleUpload>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Upload from './components/upload/Upload.vue'
import SampleUpload from './components/upload/SampleUpload.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Upload,
    SampleUpload
  }
}
</script>
