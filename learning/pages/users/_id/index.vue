<template>
  <div>
    <!-- $route.params.param_nameでルートパラメータにアクセス -->
    <h2>This is user's id {{ $route.params.id }}</h2>
  </div>
</template>
<script>
export default {
  /*
  validate(context) {
    // 正規表現.testメソッドでバリデーション対象を指定
    return /^\d+$/.test(context.params.id);
  }
  */
  // オブジェクトの分割代入、Destructuring assignment
  validate({ params }) {
    return /^\d+$/.test(params.id);
  }
};
</script>
