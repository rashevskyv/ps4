---
permalink: /get-started.html
title: Почнемо
author_profile: true
---
{% include toc title="Розділи" %}

Виберіть у таблиці версію прошивки, що відповідає вашій. 

Вважається, що стабільніше за все експлойт працює на прошивках 9.00, 9.60 та 12.02 і саме в такому порядку. За можливістю гайд буде притримуватися цих прошивок. Якщо бути об'єктивним, все це доволі індивідуально і змінюється швидше, ніж я планую доповнювати цей гайд. Джерело інформації - https://consolemods.org/wiki/PS4:Exploit_Chart
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
    <col span="1" style="width: 80%;">
  </colgroup>
  <thead>
    <tr>
      <th style="text-align: center">Від</th>
      <th style="text-align: center">До</th>
      <th style="text-align: center">Спосіб</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center; font-weight: bold;">1.01</td>
      <td style="text-align: center; font-weight: bold;">8.52</td>
      <td style="text-align: center; font-weight: bold;"><a href="usb-update-900">Оновлення до 9.00</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">9.00</td>
      <td style="text-align: center; font-weight: bold;"><a href="start-hen-browser">Запуск зламу через браузер</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">9.03</td>
      <td style="text-align: center; font-weight: bold;">9.51</td>
      <td style="text-align: center; font-weight: bold;"><a href="usb-update-960">Оновлення до 9.60</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">9.60</td>
      <td style="text-align: center; font-weight: bold;"><a href="start-hen-browser">Запуск зламу через браузер</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">10.00</td>
      <td style="text-align: center; font-weight: bold;">12.00</td>
      <td style="text-align: center; font-weight: bold;"><a href="usb-update-1202">Оновлення до 12.02</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">12.02</td>
      <td style="text-align: center; font-weight: bold;">{% include /vars/sys_version.txt %}</td>
      <td style="text-align: center; font-weight: bold;"><a href="start-hen-vue">Запуск зламу через VUE After Free</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">Вище за {% include /vars/sys_version.txt %}</td>
      <td style="text-align: center; font-weight: bold; color: #cc0000;">Запуск експлойта неможливий!</td>
    </tr>
  </tbody>
</table>