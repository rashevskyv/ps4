---
permalink: /dns-payloads.html
title: Описание пейлоадов, доступных через DNS
author_profile: true
---

* [App2USB](https://github.com/stooged/AppToUsb-50X/releases/latest){:target="_blank"} - позволяет копировать игры из внутреннего HDD на внешний USB-носитель для того, чтобы играть потом используя внешний HDD и экономить место на внетреннем. Как пользоваться рассказано [здесь](https://vk.com/@slashgoresplatter-apptousb){:target="_blank"}
* [Backup](https://github.com/stooged/DB_SG_Backup-50X/releases/latest){:target="_blank"} - делает резервные копии сохранений и базы данных. 
	* Перед запуском подключите к консоли USB-накопитель в формате exFAT. После того, как на экране высветится надпись, что бекап закончем, можете вытаскивать носитель из консоли. Не раньше. 
	* Для восстановление базы данных, скопируйте на консоль с заменой содержимое папки `DB_Backup` по адресу `/system_data/priv/mms/` через [FTP-соединение](ftp){:target="_blank"}
	* Для восстановления сохранений, скопируйте на консоль с заменой содержимое папки `GameSaves` в корень диска консоли через [FTP-соединение](ftp){:target="_blank"}
* Disable Updates - блокирует скачивание файлов обновления прошивки консоли
	* нужно запускать всего раз
	* Чтобы отключить, удалите содержимое папки `update` через [FTP-соединение](ftp){:target="_blank"}
* Enable Updates - включает возможность получать обновления. Используйте только если хотите поставить прошивку выше, установленной. Помните, что в таком случае взлом будет невозможен!
* [Dumper](https://github.com/xvortex/ps4-dumper-vtx/releases/latest){:target="_blank"} - [дампит игры](game-dumps){:target="_blank"}
* [FTP](https://github.com/xvortex/ps4-ftp-vtx/releases/latest){:target="_blank"} - [FTP-сервер](ftp){:target="_blank"}
* [HEN](https://github.com/xvortex/ps4-hen-vtx/releases/latest){:target="_blank"} - Homebrew Enabler. Проще говоря, запустите его, чтобы пиратить
* [Linux Loader](https://github.com/valentinbreiz/PS4-Linux-Loader/tree/5.05){:target="_blank"} - необходим для запуска Linux
* Mira+HEN - то же, что и хен + функционал MiraCFW
* Original - оригинальная версия HEN без модификаций
* [reactPSPlus](https://github.com/Zer0xFF/reactPSPLUS/releases/latest){:target="_blank"} - позволяет снять замки с лицензионных игр, скачанных из PSN
	
___

Следующий шаг: [Установка игр](games) 
{: .notice--success}