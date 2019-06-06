<template>
  <div>
    <Nav/>
    <nuxt/>
  </div>
</template>
<script>
import Nav from "@/components/Nav";

export default {
  components: {
    Nav
  }
};
</script>

<style>
body {
  background-color: azure;
}
</style>
