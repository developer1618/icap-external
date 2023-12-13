export default async function ({ store, route, redirect }) {
  // If the user is not authenticated

  return redirect("main");


  // If the user is authenticated and has admin access
  //   return redirect("/admin");
}
