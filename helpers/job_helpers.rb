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

  private

  def date_from(string)
    return Date.today if no_date?(string)

    Date.iso8601(string)
  end

  def no_date?(date)
    date.nil? || date == 0 || date == "0"
  end
end
