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

1. Вытащите физически интернет-кабель из приставки, отключите WiFi-роутер, и только потом включайте консоль. Если в приводе есть диск - извлеките
1. Зайдите в настройки PS4 и перейдите в "Система" -> "Автоматические загрузки"
1. Снимите галочки с пунктов “Файлы обновлений системного программного обеспечения” и “Автоматическая установка”
1. Вернитесь в меню Настройки и перейдите в "Настройки энергосбережения" -> "Выбрать функции, доступные в режиме покоя"
1. Снимите галочку с пункта "Сохранить подключение к Интернету"
1. Включите роутер и заблокируйте на нем следующие адреса (как это сделать ищите в [google](http://google.com){:target="_blank"} применимо к модели вашего роутера): 

{% highlight html %}

post.net.playstation.net 
get.net.playstation.net 
fus01.ps4.update.playstation.net 
feu01.ps4.update.playstation.net 
deu01.ps4.update.playstation.net 
ps4updptl.eu.np.community.playstation.net 
tmdb.np.dl.playstation.net 
themis.dl.playstation.net 
sf.api.np.km.playstation.net 
asm.np.community.playstation.net 
artcdnsecure.ribob01.net 
api-p014.ribob01.net 
apicdn-p014.ribob01.net 
t-prof.np.community.playstation.net 
ps4.updptl.sp-int.community.playstation.net 
ps4updptl.jp.sp-int.community.playstation.net 
ps4-eb.ww.np.dl.playstation.net 
dus01.ps4.update.playstation.net 
ps4.updptl.np.community.playstation.net 
ps4updptl.jp.np.community.playstation.net 
djp01.ps4.update.playstation.net 
fjp01.ps4.update.playstation.net 
fru01.ps4.update.playstation.n777et 
ps4updptl.ru.np.community.playstation.net 
ps4.updptl.np.community.playstation.net 
fuk01.ps4.update.playstation.net 
duk01.ps4.update.playstation.net 
al02.cdn.update.playstation.net 
a01.cdn.update.playstation.org.edgesuite.net 
playstation.sony.akadns.net 
a192.d.akamai.net 
ps4.update.playstation.net 
artcdnsecure.ribob01.netapi-p014.ribob01.net 
dru01.ps4.update.playstation.net 
us.np.stun.playstation.net

{% endhighlight %}


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
      <td style="text-align: center; font-weight: bold;">4.01</td>
      <td style="text-align: center; font-weight: bold;"><a href="usb-update">Обновление до 4.05</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;" colspan="2">4.05</td>
      <td style="text-align: center; font-weight: bold;"><a href="start-hen">Запуск PS4HEN</a></td>
    </tr>
    <tr>
      <td style="text-align: center; font-weight: bold;">4.06</td>
      <td style="text-align: center; font-weight: bold;">5.05</td>
      <td style="text-align: center; font-weight: bold;">Запуск эксплойта невозможен!</td>
    </tr>
  </tbody>
</table>