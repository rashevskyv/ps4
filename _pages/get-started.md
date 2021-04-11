---
permalink: /get-started.html
title: Начнём
author_profile: true
---
{% include toc title="Разделы**" %}

Выберите в таблице версию прошивки, соответствующую вашей. 
{: .notice--primary}

Версию прошивки можно посмотреть в меню "**Настройка**", "**Система**", "**Информация о системе**". 
{: .notice--success}

![]({{ base_path }}/images/screenshots/system-version.png) 
{: .text-center}
{: .notice--info}

## Настройка DNS

{% include /inc/set-up-dns.md %}

## Блокировка обновлений через интернет

{% spoiler Блокирование обновления %}

1. Зайдите в настройки PS4 и перейдите в "**Система**" -> "**Автоматические загрузки**"
1. Снимите галочки с пунктов “**Файлы обновлений системного программного обеспечения**” и “**Автоматическая установка**”
1. Вернитесь в меню **Настройки** и перейдите в "**Настройки энергосбережения**" -> "**Выбрать функции, доступные в режиме покоя**"
1. Снимите галочку с пункта "**Сохранить подключение к Интернету**"
1. Верните кабель в приставку\включите роутер
{% include inc/launch-exploit.md 

	fw='"**версия_вашей_прошивки**"'
	payload='"**версия_вашей_прошивки**" -> "**Disable Updates**"'

%}

Если не получается запустить эксплойт через установку DNS - пробуйте сделать это [через ваш ПК](payloads){:target="_blank"}
{: .notice--info}

Disable Updates достаточно запустить единожды. После перезагрузки приставки его запускать не нужно!
{: .notice--warning}


{% endspoiler %}

## Выберите прошивку

Хоть взлом для {{ include.version }} уже и есть в публичном доступе, мы не рекомендуем обновлять до этой версии системного ПО до тех пор, пока взлом не станет стабильным. Если у вас на приставке прошивка 7.00-{{ include.version }}, то вы можете смело использовать имеющийся для своей версии взлом, если же, 6.72 или ниже, то рекомендуется оставаться на 6.72 по крайней мере пока взлом {{ include.version }} не станет стабильным! 
{: .notice--warning}

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
      <td style="text-align: center; font-weight: bold;">6.71</td>
      <td style="text-align: center; font-weight: bold;"><a href="usb-update-672">Обновление до 6.72</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">6.72</td>
      <td style="text-align: center; font-weight: bold;"><a href="start-hen">Запуск взлома</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">7.00-{% include /vars/sys_version.txt %}</td>
      <td style="text-align: center; font-weight: bold;"><a href="start-hen-702">Запуск взлома</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">7.50-7.55</td>
      <td style="text-align: center; font-weight: bold;"><a href="usb-update-755">Обновление до 7.55</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">8.00</td>
      <td style="text-align: center; font-weight: bold;">и выше</td>
      <td style="text-align: center; font-weight: bold;">Запуск эксплойта невозможен!</td>
    </tr>
  </tbody>
</table>