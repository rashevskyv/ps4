---
permalink: /get-started.html
title: Начнем
author_profile: true
---
{% include toc title="Разделы" %}

Выберите в таблице версию прошивки, соответствующую вашей. 
{: .notice--primary}

Версию прошивки можно посмотреть в меню "Настройка", "Система", "Информация о системе". 
{: .notice--success}

![]({{ base_path }}/images/screenshots/system-version.png) 
{: .text-center}

## Блокировка обновлений через интернет

Первым делом нам следует заблокировать обновления через интернет

1. Отключите приставку
1. Вытащите физически интернет-кабель из приставки, отключите WiFi-роутер, и только потом включайте консоль. Если в приводе есть диск - извлеките
1. Зайдите в настройки PS4 и перейдите в "Система" -> "Автоматические загрузки"
1. Снимите галочки с пунктов “Файлы обновлений системного программного обеспечения” и “Автоматическая установка”
1. Вернитесь в меню Настройки и перейдите в "Настройки энергосбережения" -> "Выбрать функции, доступные в режиме покоя"
1. Снимите галочку с пункта "Сохранить подключение к Интернету"

## Выберите прошивку

{: .ntice--info}

<table>
  <colgroup>
    <col span="1" style="width: 10%;">
    <col span="1" style="width: 10%;">
    <col span="1" style="width: 80%;">
  </colgroup>
  <thead>
    <tr>
      <th style="text-align: center">От</th>
      <th style="text-align: center">До</th>
      <th style="text-align: center">Способ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center; font-weight: bold;">1.01</td>
      <td style="text-align: center; font-weight: bold;">4.50</td>
      <td style="text-align: center; font-weight: bold;"><a href="usb-update">Обновление до {% include /vars/sys_version.txt %}</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">{% include /vars/sys_version.txt %}</td>
      <td style="text-align: center; font-weight: bold;"><a href="start-hen">Запуск Mira</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">5.50</td>
      <td style="text-align: center; font-weight: bold;">5.55</td>
      <td style="text-align: center; font-weight: bold;">Запуск эксплойта невозможен!</td>
    </tr>
  </tbody>
</table>