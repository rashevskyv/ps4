---
permalink: /start-hen.html
title: Запуск експлойта
author_profile: true
---
{% include toc title="Розділи" %}

### Способи запуску експлойту

Експлойт можна запускати двома основними методами, залежно від ваших потреб та конфігурації консолі:

1.  **[Через веб-браузер](start-hen-browser.html)**: стандартний спосіб, що передбачає введення адреси хосту безпосередньо в браузері консолі. Підходить для приставок с прошивкою до 9.60 включно.
2.  **[Через VUE After Free](start-hen-vue.html)**: єдиний доступний метод, якщо версія вашої прошивки вища за 9.60. Запуск відбувається через встановлену програму Vue After Free.

<script>
  (function() {
    const referrer = document.referrer;

    // Масиви сторінок для різних сценаріїв
    const browserRedirectSources = [
      'usb-update-900',
      'usb-update-960',
      'web-exploit-manual'
    ];

    const mguRedirectSources = [
      'usb-update-1202',
      'mgu-setup-guide'
    ];

    // Перевірка джерела переходу
    const shouldRedirectToBrowser = browserRedirectSources.some(src => referrer.includes(src));
    const shouldRedirectToMgu = mguRedirectSources.some(src => referrer.includes(src));

    if (shouldRedirectToBrowser) {
      window.location.href = 'start-hen-browser.html';
    } else if (shouldRedirectToMgu) {
      window.location.href = 'start-hen-vue.html';
    }
  })();
</script>
