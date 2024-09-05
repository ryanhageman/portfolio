require "slim"
require "vite_ruby"
require "vite_padrino/tag_helpers"

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

# ─────────────────────────────── Helpers ─────────────────────────────

helpers VitePadrino::TagHelpers

# ───────────────────────────── Development ───────────────────────────

configure :development do
  use ViteRuby::DevServerProxy, ssl_verify_none: true
end

# ──────────────────────────────── Build ──────────────────────────────

configure :build do
  set :build_dir, "docs" # GitHub Pages publishes this folder

  # Compile for publication
  activate :relative_assets
  set :relative_links, true

  activate :minify_css
  activate :minify_javascript, compressor: Terser.new
end
