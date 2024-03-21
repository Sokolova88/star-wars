const darkTheme = {
  accent: '#FFC700',
  mainText: '#fff',
  heroText: '#fff',
  sectionBg: '#222527',
  overlay: 'rgb(239 236 236 / 90%)',
  mainBg: '#060803',
};

const lightTheme = {
  accent: '#4B526A',
  mainText: '#15141D',
  heroText: '#7a7982',
  sectionBg: '#EBEBEB',
  overlay: 'rgb(21 20 29 / 90%)',
  mainBg: '#fff',
};

let currentTheme = 'dark';
const element = document.documentElement;

const heroContainer = document.querySelector('.hero');
const codexContainer = document.querySelector('.codex');
const themeSwitch = document.querySelector('.theme-switch--js');

themeSwitch.addEventListener('change', switchTheme);

function switchTheme() {
  if (currentTheme === 'dark') {
    element.style.setProperty('--theme-accent', lightTheme.accent);
    element.style.setProperty('--theme-mainText', lightTheme.mainText);
    element.style.setProperty('--theme-sectionBg', lightTheme.sectionBg);
    element.style.setProperty('--theme-overlay', lightTheme.overlay);
    element.style.setProperty('--theme-mainBg', lightTheme.mainBg);
    element.style.setProperty('--theme-heroText', lightTheme.heroText);

    heroContainer.classList.add('hero-section--light');
    codexContainer.classList.add('codex-section--light');

    currentTheme = 'light';
  } else {
    element.style.setProperty('--theme-accent', darkTheme.accent);
    element.style.setProperty('--theme-mainText', darkTheme.mainText);
    element.style.setProperty('--theme-sectionBg', darkTheme.sectionBg);
    element.style.setProperty('--theme-overlay', darkTheme.overlay);
    element.style.setProperty('--theme-mainBg', darkTheme.mainBg);
    element.style.setProperty('--theme-heroText', darkTheme.heroText);

    heroContainer.classList.remove('hero-section--light');
    codexContainer.classList.remove('codex-section--light');

    currentTheme = 'dark';
  }
}
