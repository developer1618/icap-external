// export default function ({ $axios }) {
//     $axios.onError((error) => {
//       if (
//         error.error === "Unauthenticated." ||
//         error.message === "Unauthenticated."
//       ) {
//         this.$router.push("/");
//       }
//       return false;
//     });
//   }