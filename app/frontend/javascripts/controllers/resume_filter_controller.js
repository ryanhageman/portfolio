import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  show(event) {
    const element = event.currentTarget

    console.log(`you clicked`, element.dataset.resumeFilterTagValue)
  }
}
