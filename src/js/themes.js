const themesBtn = document.querySelector('#theme-btn')
const moonIcon = document.querySelector('.bi-moon-fill')
const sunIcon = document.querySelector('.bi-brightness-high-fill')
const themes = {
  light: {
    primary: '#ffffff',
    secondary: '#444f5a',
    accent: '#0564bd',
    primaryRGB: '255, 255, 255',
    secondaryRGB: '68, 79, 90',
  },

  dark: {
    primary: '#ffff38  ',
    secondary: '#eb5c15',
    accent: '#bd05b7',
    primaryRGB: '34, 34, 43',
    secondaryRGB: '138, 45, 45',
  },
}
let isLight = true

themesBtn.addEventListener('click', toggleThemes)

function applyTheme(theme) {
  document.documentElement.style.setProperty('--bs-primary', theme.primary)
  document.documentElement.style.setProperty('--bs-secondary', theme.secondary)
  document.documentElement.style.setProperty('--bs-accent', theme.accent)
  document.documentElement.style.setProperty(
    '--bs-primary-rgb',
    theme.primaryRGB
  )
  document.documentElement.style.setProperty(
    '--bs-secondary-rgb',
    theme.secondaryRGB
  )
}

function toggleThemes() {
  if (isLight) {
    applyTheme(themes.dark)
    moonIcon.style.display = 'none'
    sunIcon.style.display = 'block'
    isLight = false
  } else {
    applyTheme(themes.light)
    moonIcon.style.display = 'block'
    sunIcon.style.display = 'none'
    isLight = true
  }
}
