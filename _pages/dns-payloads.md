---
permalink: /dns-payloads.html
title: Описание пейлоадов, доступных через DNS
author_profile: true
---

Описание актуально на 26.06.2020 года. 
{: .notice--warning}

{% spoiler 5.05 %}

* [Mira](https://github.com/OpenOrbis/mira-project){:target="_blank"} - MiraCFW
* [Infinix](https://github.com/LightningMods/infinix-Package-Installer-Payload){:target="_blank"} - позволяет передавать игры через [Store remote tool](https://github.com/LightningMods/Store-Remote-Tool){:target="_blank"}
* [Linux](https://github.com/valentinbreiz/PS4-Linux-Loader){:target="_blank"} - необходим для запуска Linux

{% endspoiler %}

{% spoiler 6.72 / 7.05 / 7.55 %}

Содержит в себе пойлоады для 6.72 / 7.05 / 7.55

* [App2USB](https://github.com/stooged/AppToUsb-50X/releases/latest){:target="_blank"} - позволяет копировать игры из внутреннего HDD на внешний USB-носитель для того, чтобы играть потом используя внешний HDD и экономить место на внутреннем. Как пользоваться рассказано [здесь](https://vk.com/@slashgoresplatter-apptousb){:target="_blank"}
* [Backup](https://github.com/stooged/DB_SG_Backup-50X/releases/latest){:target="_blank"} - [делает резервные копии](backup){:target="_blank"} сохранений и базы данных. 
* [Bin Loader](https://github.com/Cryptogenic/PS4-5.05-Kernel-Exploit){:target="_blank"} - слушает порт 9020 и ожидает загрузку пейлоада
* **Disable Updates** - отключает возможность получать обновления. Удаляет существующее загруженное обновление и блокирует последующую загрузку
* [Dumper](https://github.com/xvortex/ps4-dumper-vtx/releases/latest){:target="_blank"} - [дампит игры](game-dumps){:target="_blank"}
* **Enable Updates** - включает возможность получать обновления. Используйте только если хотите поставить прошивку выше, установленной. Помните, что в таком случае взлом будет невозможен!
* [FTP](https://github.com/xvortex/ps4-ftp-vtx/releases/latest){:target="_blank"} - [FTP-сервер](ftp){:target="_blank"}
* [History Blocker](https://github.com/stooged/History-Blocker){:target="_blank"} - Запрещает браузеру приставки запоминать последнюю открытую страницу. Браузер запускается со стартовой страницы. Для отключения, запустите ещё раз
* [Kernel Dumper](https://github.com/VV1LD/PS4-KernelDumper){:target="_blank"} - дампит ядро прошивки на USB-накопитель
* [Mira](https://github.com/OpenOrbis/mira-project){:target="_blank"} - MiraCFW, содержит HEN. Именно её нужно запускать для взлома
* [Mira (Unofficial)](https://github.com/OpenOrbis/mira-project){:target="_blank"} - Альтернативная MiraCFW.
* [Restore](https://github.com/stooged/Db_Restore){:target="_blank"} - восстанавливает данные, сохранённые пейлоадом **Backup**. Подробнее [делает резервные копии](backup){:target="_blank"}

{% endspoiler %}

{% spoiler PS4 %}

Содержит в себе пойлоады для 5.05

* [App2USB](https://github.com/stooged/AppToUsb-50X/releases/latest){:target="_blank"} - позволяет копировать игры из внутреннего HDD на внешний USB-носитель для того, чтобы играть потом используя внешний HDD и экономить место на внутреннем. Как пользоваться рассказано [здесь](https://vk.com/@slashgoresplatter-apptousb){:target="_blank"}
* [Backup](https://github.com/stooged/DB_SG_Backup-50X/releases/latest){:target="_blank"} - [делает резервные копии](backup){:target="_blank"} сохранений и базы данных. 
* [Bin Loader](https://github.com/Cryptogenic/PS4-5.05-Kernel-Exploit){:target="_blank"} - слушает порт 9020 и ожидает загрузку пейлоада
* **Disable Updates** - отключает возможность получать обновления. Удаляет существующее загруженное обновление и блокирует последующую загрузку
* [Dumper](https://github.com/xvortex/ps4-dumper-vtx/releases/latest){:target="_blank"} - [дампит игры](game-dumps){:target="_blank"}
* [Enable Browser](){:target="_blank"} - 	
* **Enable Updates** - включает возможность получать обновления. Используйте только если хотите поставить прошивку выше, установленной. Помните, что в таком случае взлом будет невозможен!
* [FTP](https://github.com/xvortex/ps4-ftp-vtx/releases/latest){:target="_blank"} - [FTP-сервер](ftp){:target="_blank"}
* **Fan Threshold** - пейлоад для управлением максимальной скорости вращения турбины в приставке
* [HEN](https://github.com/xvortex/ps4-hen-vtx/releases/latest){:target="_blank"} - Homebrew Enabler. Именно его нужно запускать для взлома. Содержит в себе спуфер прошивки
* [History Blocker](https://github.com/stooged/History-Blocker){:target="_blank"} - Запрещает браузеру приставки запоминать последнюю открытую страницу. Браузер запускается со стартовой страницы. Для отключения, запустите ещё раз
* [Kernel Clock](https://github.com/Scene-Collective/ps4-kernel-clock){:target="_blank"} - не знаю что делает
* [Kernel Dumper](https://github.com/VV1LD/PS4-KernelDumper){:target="_blank"} - дампит ядро прошивки на USB-накопитель
* [REN](https://github.com/xvortex/ps4-hen-vtx/releases/latest){:target="_blank"} - Remote Play Enabler. Нужно запустить для активации возможности добавить Remote Play-устройство в консоль. Заменяет телодвижения через IDU-mode или Orbis
* **RIF Renamer** - переименовывает 'фейковые' RIF-файлы в 'свободные' RIF-файлы для лучшей совместимости с HEN. Используйте если вы устанавливали PKG через Mira+HEN, а сейчас используете просто HEN
* [Restore](https://github.com/stooged/Db_Restore){:target="_blank"} - восстанавливает данные, сохранённые пейлоадом **Backup**. Подробнее [делает резервные копии](backup){:target="_blank"}

{% endspoiler %}
	
___

Следующий шаг: [Установка игр](games) 
{: .notice--success}