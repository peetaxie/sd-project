<template>
<GmapMap
  v-bind:center="{lat:10, lng:10}"
  v-bind:zoom="7"
  style="height: 600px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    v-bind:position="m.position"
    v-bind:clickable="true"
  />
</GmapMap>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>


<style scoped>

</style>
