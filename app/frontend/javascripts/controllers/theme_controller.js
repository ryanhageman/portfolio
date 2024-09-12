import { Controller } from '@hotwired/stimulus'

const LIGHT_THEME = 'light'
const DARK_THEME = 'dark'

export default class extends Controller {
  static targets = ['toggleButton']
  static values = { mode: String }
  static classes = ['darkModeIcon']

  initialize() {
    this._useCurrentTheme()
  }

  toggleTheme() {
    if (this.modeValue === DARK_THEME) {
      this._useLightTheme()
      return
    }

    this._useDarkTheme()
  }

  // ── Private ─────────────────────────────────────────────────────────

  _useCurrentTheme() {
    if (this.isDarkThemeSet) {
      this._useDarkTheme()
      return
    }

    this._useLightTheme()
  }

  _useDarkTheme() {
    this.modeValue = DARK_THEME
    this.localStorageTheme = DARK_THEME
    this.toggleButtonTarget.classList.add(this.darkModeIconClass)
  }

  _useLightTheme() {
    this.modeValue = LIGHT_THEME
    this.localStorageTheme = LIGHT_THEME
    this.toggleButtonTarget.classList.remove(this.darkModeIconClass)
  }

  // ── Getters & Setters ───────────────────────────────────────────────

  set localStorageTheme(theme) {
    localStorage.themeMode = theme
  }

  get localStorageTheme() {
    return localStorage.themeMode
  }

  get isDarkThemeSet() {
    return this.isLocalStorageDark || this.isSystemPreferenceDark
  }

  get isLocalStorageDark() {
    return this.localStorageTheme === DARK_THEME
  }

  get isSystemPreferenceDark() {
    return window.matchMedia(`(prefers-color-scheme: dark)`).matches
  }
}
