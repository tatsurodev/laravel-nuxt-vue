<template>
  <div>
    <div>
      <h2>Making API request - the Vue way</h2>
      <hr>
    </div>
    <div class="container row">
      <!-- vue的手法で取得されるpostsは非同期で取得されるため、読み込み時page sourceに表示されないことが難点 -->
      <!-- nuxtのasyncDataでreturnしたdataは同期されるため、レンダリング前にサーバー側で用意されpage sourceにも表示される -->
      <Card class="ml-auto mr-auto" v-for="post in posts" :key="post.id" :post="post"/>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Card from "@/components/Card";

export default {
  components: {
    Card
  },
  data() {
    return {
      posts: ""
    };
  },
  // 初めて読み込んだときはサーバーサイドで、それ以外のときはクライアントサイドで動作
  async asyncData({ store }) {
    // console.log(context);
    // asyncDataで返されたdataは同期される
    // awaitでpromiseが返されるまで待機、responseを分割代入
    let { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    // return { posts: data };
    store.dispatch("setPosts", data);
  },
  // タイトルをoverwrite
  head: {
    title: "List of Posts"
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
