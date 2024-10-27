import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['link', 'job']

  filter(event) {
    const item = event.currentTarget

    if (this._isAlreadyHighlighted(item)) {
      this._clearAllFilters()
      return
    }

    this._highlight(item)
    this._showFilteredJobs(item)
  }

  // private

  // ── highlights ──────────────────────────────────────────────────────

  _highlight(item) {
    this._clearAllHighlights()
    item.classList.add('is-highlighted')
  }

  _clearHighlight(item) {
    item.classList.remove('is-highlighted')
  }

  _clearAllHighlights() {
    this.linkTargets.forEach((item) => this._clearHighlight(item))
  }

  _isAlreadyHighlighted(item) {
    return item.classList.contains('is-highlighted')
  }

  // ── filters ─────────────────────────────────────────────────────────

  _showFilteredJobs(item) {
    this._hideAllTheJobs()

    this.jobTargets.forEach((job) => {
      if (this._jobHasMatchingTag(job, item)) {
        this._showJob(job)
      }
    })
  }

  _clearAllFilters() {
    this._clearAllHighlights()
    this._showAllTheJobs()
  }

  _jobHasMatchingTag(job, item) {
    return this._tagsFor(job).includes(this._tagValueOf(item))
  }

  // ── visibility ──────────────────────────────────────────────────────

  _showAllTheJobs() {
    this.jobTargets.forEach((job) => {
      this._showJob(job)
    })
  }

  _showJob(job) {
    job.classList.remove('is-hidden')
  }

  _hideAllTheJobs() {
    this.jobTargets.forEach((job) => {
      job.classList.add('is-hidden')
    })
  }

  // ── getters ─────────────────────────────────────────────────────────

  _tagValueOf(item) {
    return item.dataset.resumeFilterTagValue
  }

  _tagsFor(job) {
    const tagString = job.dataset.tags
    const tagArray = tagString.replace(/[\[\]]/g, "").split(", ")

    return tagArray
  }
}
