<template>
  <div class="container">
    <h1>{{ post.title }}</h1>
    <pre>{{ post.body }}</pre>
    <nuxt-link to="/posts">Back to posts</nuxt-link>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      post: ""
    };
  },
  // asyncDataはサーバーサイド、クライアントサイド両方で動作するため、thisキーワードは使えないので引数contextを使用
  async asyncData({ params }) {
    let { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    return { post: data };
  },
  // タイトルをoverwrite、postは非同期で得られるので、headプロパティでなく、コールバックファンクションhead()で指定する
  head() {
    return { title: this.post.title };
  }
};
</script>
