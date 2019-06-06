<template>
  <div>
    <div>
      <h2>Making API request - the Vue way</h2>
      <hr>
    </div>
    <div class="container">
      <!-- vue的手法で取得されるpostsは非同期で取得されるため、読み込み時page sourceに表示されないことが難点 -->
      <!-- nuxtのasyncDataでreturnしたdataは同期されるため、レンダリング前にサーバー側で用意されpage sourceにも表示される -->
      <h4 v-for="post in posts" :key="post.id">{{ post.title }}</h4>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: ""
    };
  },
  // 初めて読み込んだときはサーバーサイドで、それ以外のときはクライアントサイドで動作
  asyncData() {
    // console.log(context);
    // asyncDataで返されたdataは同期される
    return axios.get("https://jsonplaceholder.typicode.com/todos").then(res => {
      // console.log(res);
      // 同期するデータ名と値のオブジェクトをreturn
      return { posts: res.data };
    });
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
