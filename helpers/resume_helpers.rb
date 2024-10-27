module ResumeHelpers
  def tech_summary_group_list(items)
    items.map { |item| tech_summary_entry(item) }.join(", ")
  end

  def tech_summary_element(item)
    content_tag(:span,
      item.name,
      class: "c-resume__tech-summary-element",
      data: {action: "click->resume-filter#show",
             resume_filter_target: "link",
             resume_filter_tag_value: item.tag})
  end

  private

  def tech_summary_entry(item)
    entry = []
    entry << tech_summary_element(item)
    entry << tech_summary_frameworks(item)
    entry.join
  end

  def tech_summary_frameworks(language)
    return if language.frameworks.blank?

    items = language.frameworks.map do |framework|
      tech_summary_element(framework)
    end

    " (#{items.join(", ")})"
  end
end
