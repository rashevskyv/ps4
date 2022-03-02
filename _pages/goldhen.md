---
title: "GoldHEN" 
permalink: /goldhen.html
author_profile: true
---

{% include toc title="Разделы" %}

{% spoiler Обзор эксплойта %}

{% include youtube_clean.html id="mFVGJqPdbc0" %}
{: .text-center}
{: .notice--info}

{% endspoiler %}

GoldHEN сейчас является наиболее продвинутым эксплойтом и именно он рекомендуется к использованию.
{: .notice--info}

## Особенности GoldHEN

* Homebrew Enabler. Благодаря ему можно запускать Homebrew и пиратку 
* Debug Settings - меню разработчика. С помощью него, а конкретно, через утилиту **Package Installer**, и устанавливаются игры
* Встроенное меню в настройках приставки
* Поддержка спуфа прошивки для VR-шлемов 
* Поддержка режима сна 
* Поддержка установки игр на внешний USB, как через app2hdd, так и официальным способом 
* Исправления ошибок с трофеями
* Встроенный спуф 
* Поддержка UART 
* Устранение ограничений на снятие скриншотов
* Активация Remote Play
* Блокировка обновления прошивки
* Встроенный FTP-сервер на порту 2121
* Встроенный BinLoader на порту 9090
* Исправление ошибки CE-30391-6, связанной с батарейкой консоли 

## Работа с GoldHEN 

GoldHEN сейчас встроен практически во все хосты с пейлоадами и работает на любой версии системного ПО. Как его запустить описано [здесь](start-hen){:target="_blank"}

После запуска GoldHEN можно перейти в **Настройки** приставки -> **GoldHEN**: 
* **Enable FTP Server** - запустит встроенный FTP-сервер, который будет доступен по порту 2121. После запуска сервера вы увидите IP вашей консоли во всплывающем сообщении
* **Enable BinLoader Server** - запустит встроенный BinLoader-сервер, который будет доступен по порту 9090. Вы сможете пробросить пейлоад через [Android](https://4pda.to/forum/index.php?showtopic=885825&view=findpost&p=70298081){:target="_blank"}, [iOS](https://www.psxhax.com/threads/how-to-host-ps4hen-for-airdisk-ios-iphone-guide-by-leslie84.4383/){:target="_blank"} или [ПК](payloads){:target="_blank"}
* **Package Installer** - меню с помощью которого происходит установка игр на приставку с внешнего USB-носителя. Дублирует такой же пункт из **Debug Settings**
* **About** - информация о разработчиках и крутое кректро 

___

[Закрыть страницу](javascript:window.close();)
{: .notice--success}