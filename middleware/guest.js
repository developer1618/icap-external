export default async function ({ $auth, redirect }) {
    switch ($auth?.user?.type) {
      case 0:
        redirect("/main/");
        break;
      case 1:
        redirect("/main/");
        break;
    }
   
  }