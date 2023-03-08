"use strict";
const solicitudRedAsync = async () => {
    var _a;
    const resp = await fetch("https://api.github.com/users/mishelrodri");
    if (resp.ok) {
        const githubUser = await resp.json();
        console.log(githubUser);
        let img = document.createElement("img");
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        (_a = document.querySelector("#resultado")) === null || _a === void 0 ? void 0 : _a.appendChild(img);
        setTimeout(() => {
            img.remove();
        }, 4000);
    }
};
solicitudRedAsync();
