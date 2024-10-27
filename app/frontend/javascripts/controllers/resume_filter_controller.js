import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['link']

  show(event) {
    const element = event.currentTarget

    this.highlightItem(element)
  }

  highlightItem(item) {
    this.linkTargets.forEach((element) => {
      element.classList.remove('is-highlighted')
    })

    item.classList.add('is-highlighted')
  }

  // private

  _tagValueOf(element) {
    return element.dataset.resumeFilterTagValue
  }
}
