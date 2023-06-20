function initThemeSelector() {
  let themeSelect = document.getElementById("darkmode_btn");
  const themeStylesheetLink = document.getElementById("theme-link");
  const currentTheme = localStorage.getItem("theme") || "light";
  /*const themeName = document.getElementById("theme-select__option");*/
  const darkIcon =
    '<i class="fa-regular fa-moon" style="color:5D38A0;"></i> dark mode';
  const lightIcon =
    '<i class="fa-regular fa-sun" style="color:5D38A0;"></i> light mode';
  function activateTheme(themeName) {
    themeStylesheetLink.setAttribute("href", `./css/${themeName}.css`);
  }

  if (themeSelect) {
    themeSelect.addEventListener("click", () => {
      if (currentTheme === "light") {
        window.localStorage.setItem("theme", "dark");
        themeSelect.innerHTML = lightIcon;
        activateTheme(currentTheme);
      } else {
        window.localStorage.setItem("theme", "light");
        themeSelect.innerHTML = darkIcon;
        activateTheme(currentTheme);
      }
      initThemeSelector();
    });

    if (currentTheme === "light") {
      themeSelect.innerHTML = darkIcon;
    } else {
      themeSelect.innerHTML = lightIcon;
    }
  }

  //themeSelect.value = currentTheme;
  activateTheme(currentTheme);
}

initThemeSelector();

function initGoal(){
  let currentGoal= localStorage.getItem("dreamgoal") || ("what is your goal?");
  let goalText = document.querySelector('.goal__text');

  if(goalText){
    goalText.innerHTML = currentGoal;
  }
}
initGoal();