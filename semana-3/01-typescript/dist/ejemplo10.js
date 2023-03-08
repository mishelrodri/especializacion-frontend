"use strict";
const solicitudRed = () => {
    fetch("https://api.github.com/users/mishelrodri")
        .then((res) => res.json())
        .then((githubUser) => new Promise((resolve, reject) => {
        var _a;
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        (_a = document.querySelector("#resultado")) === null || _a === void 0 ? void 0 : _a.appendChild(img);
        setTimeout(() => {
            img.remove();
            resolve(githubUser);
        }, 4000);
    }))
        .then((githubUser) => {
        console.log(`Termino de mostarr ${githubUser.name}`);
    });
};
solicitudRed();
