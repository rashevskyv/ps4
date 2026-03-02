require 'kramdown'
require 'securerandom'

module Jekyll
  class SpoilerTag < Liquid::Block
    def initialize(tag_name, title, tokens)
      super
      @title = title.strip
      @title = "Спойлер" if @title.empty?
    end
    def render(context)
      content = super.strip
      
      # Додаємо прихований заголовок для TOC, якщо назва спойлера не стандартна
      toc_header = ""
      if @title != "Спойлер" && @title != "Відео-інструкція" && @title != "Відео"
        # Використовуємо h3 для TOC з IAL для приховування
        toc_header = "### #{@title}\n{: .sr-only .toc-extra}\n\n"
      end

      spoiler_id = "spoiler-#{SecureRandom.hex(4)}"

      # --- JavaScript для закриття та скролу ---
      close_footer_html = %Q|<div class="spoiler-close-footer" role="button" aria-label="Згорнути спойлер" tabindex="0">#{@title} <span class="close-icon" aria-hidden="true"></span></div>|

      # Фінальний HTML-Markdown мікс
      # Використовуємо markdown="1" щоб Jekyll обробив вміст
      output = <<~HTML
        <details class="spoiler" id="#{spoiler_id}">
          <summary>#{@title}</summary>
          <div class="spoiler-content" markdown="1">

        #{toc_header}#{content}

          </div>
          #{close_footer_html}
        </details>
      HTML

      output
    end
  end
end

Liquid::Template.register_tag('spoiler', Jekyll::SpoilerTag)