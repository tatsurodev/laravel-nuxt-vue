export default function ({
  store,
  redirect
}) {
  // auth userであればprofile pageにリダイレクト
  if (store.getters['auth/authenticated']) {
    return redirect("/profile")
  }
}
