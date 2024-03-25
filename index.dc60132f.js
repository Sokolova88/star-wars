var darkTheme={accent:"#FFC700",mainText:"#fff",heroText:"#fff",sectionBg:"#222527",overlay:"rgb(239 236 236 / 90%)",mainBg:"#060803"},lightTheme={accent:"#4B526A",mainText:"#15141D",heroText:"#7a7982",sectionBg:"#EBEBEB",overlay:"rgb(21 20 29 / 90%)",mainBg:"#fff"},currentTheme="dark",element=document.documentElement,heroContainer=document.querySelector(".hero"),codexContainer=document.querySelector(".codex"),themeSwitch=document.querySelector(".theme-switch--js");function switchTheme(){"dark"===currentTheme?(element.style.setProperty("--theme-accent",lightTheme.accent),element.style.setProperty("--theme-mainText",lightTheme.mainText),element.style.setProperty("--theme-sectionBg",lightTheme.sectionBg),element.style.setProperty("--theme-overlay",lightTheme.overlay),element.style.setProperty("--theme-mainBg",lightTheme.mainBg),element.style.setProperty("--theme-heroText",lightTheme.heroText),heroContainer.classList.add("hero-section--light"),codexContainer.classList.add("codex-section--light"),currentTheme="light"):(element.style.setProperty("--theme-accent",darkTheme.accent),element.style.setProperty("--theme-mainText",darkTheme.mainText),element.style.setProperty("--theme-sectionBg",darkTheme.sectionBg),element.style.setProperty("--theme-overlay",darkTheme.overlay),element.style.setProperty("--theme-mainBg",darkTheme.mainBg),element.style.setProperty("--theme-heroText",darkTheme.heroText),heroContainer.classList.remove("hero-section--light"),codexContainer.classList.remove("codex-section--light"),currentTheme="dark")}themeSwitch.addEventListener("change",switchTheme);
//# sourceMappingURL=index.dc60132f.js.map
