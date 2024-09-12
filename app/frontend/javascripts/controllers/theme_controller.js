import { Controller } from '@hotwired/stimulus'

const LIGHT_THEME = 'light'
const DARK_THEME = 'dark'

export default class extends Controller {
  static targets = ['toggleButton']
  static values = { mode: String }
  static classes = ['darkModeIcon']

  initialize() {
    this._useChosenTheme()
  }

  toggleTheme() {
    if (this.isDarkThemeChosen) {
      this._useLightTheme()
      return
    }

    this._useDarkTheme()
  }

  // ── Private ─────────────────────────────────────────────────────────

  _useChosenTheme() {
    if (
      this.isDarkThemeChosen ||
      (this.isSystemPreferenceDark && !this.isLightThemeChosen)
    ) {
      this._useDarkTheme()
      return
    }

    this._useLightTheme()
  }

  _useDarkTheme() {
    this.modeValue = DARK_THEME
    this.savedTheme = DARK_THEME
    this.toggleButtonTarget.classList.add(this.darkModeIconClass)
  }

  _useLightTheme() {
    this.modeValue = LIGHT_THEME
    this.savedTheme = LIGHT_THEME
    this.toggleButtonTarget.classList.remove(this.darkModeIconClass)
  }

  // ── Getters & Setters ───────────────────────────────────────────────

  set savedTheme(theme) {
    localStorage.themeMode = theme
  }

  get savedTheme() {
    return localStorage.themeMode
  }

  get isDarkThemeChosen() {
    return this.isSavedThemeDark || this.modeValue === DARK_THEME
  }

  get isLightThemeChosen() {
    return this.isSavedThemeLight || this.modeValue === LIGHT_THEME
  }

  get isSavedThemeLight() {
    return this.savedTheme === LIGHT_THEME
  }

  get isSavedThemeDark() {
    return this.savedTheme === DARK_THEME
  }

  get isSystemPreferenceDark() {
    return window.matchMedia(`(prefers-color-scheme: dark)`).matches
  }
}
