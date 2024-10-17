import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['foldable', 'foldToggle']
  static values = { folded: String }

  connect (  ) {
    if (this.foldedValue === "true") this.toggleFold()
  }

  toggleFold() {
    this.foldToggleTarget.classList.toggle('is-closed')
    this.foldableTarget.classList.toggle('is-closed')
  }
}
