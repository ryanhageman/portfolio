require "slim"

# ────────────────────────────── Extensions ──────────────────────────────

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :livereload

# ─────────────────────────────── Layouts ─────────────────────────────

# Per-page layout changes
page "/*.xml", layout: false
page "/*.json", layout: false
page "/*.txt", layout: false

# ──────────────────────────────── Build ──────────────────────────────

# configure :build do
#   activate :minify_css
#   activate :minify_javascript, compressor: Terser.new
# end
