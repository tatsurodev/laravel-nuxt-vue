<template>
  <div>
    <h1>hello users</h1>
    <input type="text" v-model="id">
    <button @click="loadUser">Load user</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: ""
    };
  },
  methods: {
    loadUser() {
      // ${this.id}は、'/users/'+this.idと同義
      this.$router.push(`/users/${this.id}`);
    }
  }
};
</script>
