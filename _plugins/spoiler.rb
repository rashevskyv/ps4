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

      # Автоматично додаємо клас вкладеності до всіх заголовків всередині спойлера
      # ВАЖЛИВО: робимо gsub ДО того, як створюємо toc_header,
      # щоб заголовок-якір самого спойлера (.sr-only .toc-extra) НЕ отримав цей клас.
      marked_content = content.gsub(/^([ \t]*#+.*)$/, "\\1\n{: .toc-spoiler-inner}")

      # Заголовок самого спойлера для TOC (без класу вкладеності)
      toc_header = ""
      if @title != "Спойлер" && @title != "Відео-інструкція" && @title != "Відео"
        toc_header = "### #{@title}\n{: .sr-only .toc-extra}\n\n"
      end

      spoiler_id = "spoiler-#{SecureRandom.hex(4)}"
      close_footer_html = %Q|<div class="spoiler-close-footer" role="button" aria-label="Згорнути спойлер" tabindex="0">#{@title} <span class="close-icon" aria-hidden="true"></span></div>|

      <<~HTML
        <details class="spoiler" id="#{spoiler_id}">
          <summary>#{@title}</summary>
          <div class="spoiler-content" markdown="1">

        #{toc_header}#{marked_content}

          </div>
          #{close_footer_html}
        </details>
      HTML
    end
  end
end

Liquid::Template.register_tag('spoiler', Jekyll::SpoilerTag)