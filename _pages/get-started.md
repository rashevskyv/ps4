---
permalink: /get-started.html
title: Почнемо
author_profile: true
---
{% include toc title="Розділи" %}

Виберіть у таблиці версію прошивки, що відповідає вашій. 

Для використання Vue портрібно буде відновлювати бекап системи з встановленим експлойтом. Ця діє призведе до втрати акаунтів та даних. Однак, якщо ви вже маєте приставку з прошивкою 9.60, або нижче, то ми можемо встановити Vue без встрати даних. У випадку, коли дані на приставці не важливі, то метод, через який дані втрачаються, є оптимальним, як простіший та швидший.
{: .notice--info}

Версію прошивки можна подивитися в меню "**Налаштування**" > "**Система**" > "**Інформація про систему**". 
{: .notice--success}

![]({{ base_path }}/assets/images/screenshots/system-version.png) 
{: .text-center}
{: .notice--info}

## Виберіть прошивку

<style>
  .table-empty {
    background: repeating-linear-gradient(
      45deg,
      #f9f9f9,
      #f9f9f9 7px,
      #e0e0e0 7px,
      #e0e0e0 8px
    ) !important;
    cursor: not-allowed;
    position: relative;
  }
  .table-empty::after {
    content: "—";
    color: #999;
    font-weight: normal;
  }
</style>

<table>
  <colgroup>
    <col span="1" style="width: 10%;">
    <col span="1" style="width: 10%;">
    <col span="1" style="width: 40%;">
    <col span="1" style="width: 40%;">
  </colgroup>
  <thead>
    <tr>
      <th style="text-align: center">Від</th>
      <th style="text-align: center">До</th>
      <th style="text-align: center">Зберігаємо акаунти та дані</th>
      <th style="text-align: center">Акаунти та дані буде втрачено</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center; font-weight: bold;">1.01</td>
      <td style="text-align: center; font-weight: bold;">9.51</td>
      <td style="text-align: center; font-weight: bold;"><a href="usb-update-900">Оновлення до 9.60</a></td>
      <td style="text-align: center; font-weight: bold;" rowspan="3"><a href="start-hen-vue">Запуск зламу через Vue</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">9.60</td>
      <td style="text-align: center; font-weight: bold;"><a href="start-hen-browser">Запуск зламу через браузер</a></td>
      <!-- <td style="text-align: center; font-weight: bold;"><a href="start-hen-vue">Запуск зламу через Vue</a></td> -->
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">10.00</td>
      <td style="text-align: center; font-weight: bold;">{% include /vars/sys_version.txt %}</td>
      <td style="text-align: center; font-weight: bold;" class="table-empty"></td>
      <!-- <td style="text-align: center; font-weight: bold;"><a href="start-hen-vue">Запуск зламу через Vue</a></td> -->
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">Вище за {% include /vars/sys_version.txt %}</td>
      <td style="text-align: center; font-weight: bold; color: #cc0000;" colspan="2">Запуск експлойта неможливий!</td>
    </tr>
  </tbody>
</table>