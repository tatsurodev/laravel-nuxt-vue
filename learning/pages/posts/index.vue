<template>
  <div>
    <div>
      <h2>Making API request - the Vue way</h2>
      <hr>
    </div>
    <div class="container">
      <!-- postsは非同期で取得されるため、読み込み時page sourceに表示されないことが難点 -->
      <h4 v-for="post in posts" :key="post.id">{{ post.title }}</h4>
    </div>
  </div>
</template>
<script>
export default {
  // 初めて読み込んだときはサーバーサイドで、それ以外のときはクライアントサイドで動作
  asyncData(context) {
    console.log(context);
  }
};
</script>

<!--
<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        console.log(response);
        this.posts = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
-->
