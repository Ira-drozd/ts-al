const defaultTitle = document.title;
const titles = ["Зимние сады", "Террасы", "Навесы", "Безрамное остекление"];
let titleCounter = 0;
let setTitle;

const changeTitle = () => {
  setTitle = setInterval(function () {
    titleCounter++;
    if (titleCounter === titles.length) {
      titleCounter = 0;
    }
    document.title = titles[titleCounter];
  }, 2000);
};

window.addEventListener("focus", function () {
  clearInterval(setTitle);
  document.title = defaultTitle;
});

window.addEventListener("blur", changeTitle);
