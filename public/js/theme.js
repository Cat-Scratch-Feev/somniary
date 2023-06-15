function initThemeSelector() {
    let themeSelect = document.getElementById("darkmode_btn");
    const themeStylesheetLink = document.getElementById("theme-link");
    const currentTheme = localStorage.getItem("theme"); //|| "light";
    /*const themeName = document.getElementById("theme-select__option");*/
    const darkIcon='<i class="fa-regular fa-moon" style="color:5D38A0;"></i> dark mode';
    const lightIcon='<i class="fa-regular fa-sun" style="color:5D38A0;"></i> light mode';
    function activateTheme(themeName) {
      themeStylesheetLink.setAttribute(
        "href",
        `./css/${themeName}.css`
      );
    }
  console.log('test init');
  if(themeSelect){
    themeSelect.addEventListener("click", () => {
      console.log('button working');
      //activateTheme(themeSelect.value);
      //localStorage.setItem("theme", themeSelect.value);
      if (currentTheme === 'light') {
        window.localStorage.setItem('theme', 'dark');
        themeSelect.innerHTML= lightIcon;
        activateTheme(currentTheme);
      } else {
        window.localStorage.setItem('theme', 'light');
        themeSelect.innerHTML= darkIcon;
        activateTheme(currentTheme);
    }
    initThemeSelector();

    });
    
    console.log(currentTheme);
    if(currentTheme==='light'){
        themeSelect.innerHTML = darkIcon;
    } else {
        themeSelect.innerHTML = lightIcon;
    }
    
  }
    
    
    //themeSelect.value = currentTheme;
    activateTheme(currentTheme);
  }
  
  initThemeSelector();
  /*
  function initThemeSelector() {
  const themeSelect = document.getElementById("theme-select");
  const themeStylesheetLink = document.getElementById("theme-link");
  const currentTheme = localStorage.getItem("theme") || "berry";
  /*const themeName = document.getElementById("theme-select__option");

  function activateTheme(themeName) {
    themeStylesheetLink.setAttribute(
      "href",
      `./assets/css/themes/${themeName}.css`
    );
  }

  themeSelect.addEventListener("change", () => {
    activateTheme(themeSelect.value);
    localStorage.setItem("theme", themeSelect.value);
  });*/