import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['foldable', 'foldToggle']

  toggleFold () {
    this.foldToggleTarget.classList.toggle('is-closed')
    this.foldableTarget.classList.toggle('is-closed')
  }
}
