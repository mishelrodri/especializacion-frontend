const solicitudRedAsync = async () => {
  //hacer solicitud
  const resp = await fetch("https://api.github.com/users/mishelrodri");
  //   console.log(resp);
  if (resp.ok) {
    const githubUser = await resp.json();
    console.log(githubUser);
    let img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.querySelector("#resultado")?.appendChild(img);
    setTimeout(() => {
      img.remove();
    }, 4000); // motrar imagen por 4 seg
  }
};

//   .then((res) => res.json())
//   .then(
//     (githubUser) =>
//       new Promise((resolve, reject) => {
//         let img = document.createElement("img");
//         img.src = githubUser.avatar_url;
//         img.className = "promise-avatar-example";
//         document.querySelector("#resultado")?.appendChild(img);
//         setTimeout(() => {
//           img.remove();
//           resolve(githubUser);
//         }, 4000); // motrar imagen por 4 seg
//       })
//   )
//   .then((githubUser: any) => {
//     console.log(`Termino de mostarr ${githubUser.name}`);
//   });

solicitudRedAsync();
