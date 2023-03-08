const solicitudRed = () => {
  //hacer solicitud
  fetch("https://api.github.com/users/mishelrodri")
    .then((res) => res.json())
    .then(
      (githubUser) =>
        new Promise((resolve, reject) => {
          let img = document.createElement("img");
          img.src = githubUser.avatar_url;
          img.className = "promise-avatar-example";
          document.querySelector("#resultado")?.appendChild(img);
          setTimeout(() => {
            img.remove();
            resolve(githubUser);
          }, 4000); // motrar imagen por 4 seg
        })
    )
    .then((githubUser: any) => {
      console.log(`Termino de mostarr ${githubUser.name}`);
    });
};
solicitudRed();
