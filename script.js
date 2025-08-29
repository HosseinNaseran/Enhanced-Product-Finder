// const container = document.querySelector(".container");
const search = document.querySelector("input");
const result = document.querySelector(".result");
// const body = document.querySelector("body");
const favorite = document.querySelector(".favorite");

document.querySelector("button").addEventListener("click", () => {
  if (search.value === "") {
    alert("چیزی وارد کن");
    return; 
  }

  const parsed = search.value.split(",").map((value, _) => {
    return value.trim();
  });

  for (const item of parsed) {
    fetch(`https://jsonplaceholder.typicode.com/posts?id=${item}`)
      .then((response) => response.json())
      .then((data) => {
        const value = Object.values(data[0]);
        const keys = Object.keys(data[0]);

        const post = document.createElement("div");
        post.className = "post";
        post.textContent =
          keys[0] +
          " : " +
          value[0] +
          "\n" +
          keys[1] +
          " : " +
          value[1] +
          "\n" +
          keys[2] +
          " : " +
          value[2] +
          "\n" +
          keys[3] +
          " : " +
          value[3];

        result.prepend(post);

        const a = document.createElement("a");
        result.prepend(a);
        a.textContent = "افزودن به علاقه مندی ها";
        a.onclick = () => {
          if (favorite.textContent.includes(value[1])) {
            alert("این محصول از قبل وجود دارد");
          } else {
            alert("افزوده شد");
            const favoritePost = document.createElement("div");

            favoritePost.textContent = keys[1] + " : " + value[1];
            favorite.prepend(favoritePost);
            favoritePost.className = "favorite-post";

            const close = document.createElement("span");
            close.className = "close";
            close.textContent = "\u2715";
            favoritePost.prepend(close);
            close.onclick = () => {
              favoritePost.remove();
            };
          }
        };
      })
      .catch((error) => console.error(error));
  }
});
