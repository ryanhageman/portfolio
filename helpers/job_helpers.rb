module JobHelpers
  def dates_at(job)
    start_date = formatted_date(job.start_date)
    end_date = formatted_date(job.end_date)

    "#{start_date} - #{end_date}"
  end

  def time_worked_at(job)
    start_date = date_from(job.start_date)
    end_date = date_from(job.end_date)

    distance_of_time_in_words(start_date, end_date)
  end

  def formatted_date(date_string)
    return "Present" if no_date?(date_string)

    Date.iso8601(date_string).strftime("%B %Y")
  end

  def tech_list_for(job)
    "[ #{job.stack.join(", ")} ]"
  end

  def long_name?(job)
    job.job_title.length > 30 ||
      job.company.length > 30 ||
      job.job_title.length + job.company.length > 60
  end

  def resume_link_to(client)
    company = data.clients[client]

    if company.website
      link_to company.name, company.website
    else
      company.name
    end
  end

  def resume_logo_for(job)
    return if job.logo.blank?
    return logo_link_for(job) if job.website

    logo_for(job)
  end

  private

  def date_from(string)
    return Date.today if no_date?(string)

    Date.iso8601(string)
  end

  def no_date?(date)
    date.nil? || date == 0 || date == "0"
  end

  def logo_for(job)
    image_tag "client-logos/#{job.logo}",
      alt: "#{job.company} Logo",
      class: "c-job-card__logo"
  end

  def logo_link_for(job)
    link_to job.website do
      logo_for(job)
    end
  end
end
