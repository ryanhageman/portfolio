import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['hamburger', 'menu']

  toggleMenu() {
    this.hamburgerTarget.classList.toggle('is-open')
    this.menuTarget.classList.toggle('is-open')
    document.body.classList.toggle('c-navbar--is-open')
  }

}
