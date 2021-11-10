<template>
  <div>{{ getText() }}</div>
</template>

<script>
export default {
  data() {
    return {
      aa: '111',
      mm: 'sss'
    }
  },
  methods: {
    getText() {
      return this.aa
    }
    getText1() {
      return this.aa
    }
  }
}
</script>

<style></style>
