export default async function ({ $auth, redirect }) {
  switch ($auth?.user?.type) {
    case 0:
      redirect('/admin/');
      break;
    case 1:
      redirect('/admin/');
      break;
  }
}
