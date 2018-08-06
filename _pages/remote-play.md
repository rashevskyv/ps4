---
title: "Активация Remote Play" #
sitemap: false
permalink: /remote-play.html
author_profile: true
---

Если приставка никогда не входила в PSN, то Remote Play невозможен, однако теперь есть способ активации его без подключения к сети и активации приставки

1. Заранее подготовьте устройство, которое планируете использовать для Remote Play 
1. Вытащите все USB-устройства из приставки 
1. [Закешируйте эксплойт](start-hen#%D1%87%D0%B0%D1%81%D1%82%D1%8C-iv---%D0%BA%D0%B5%D1%88%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%8D%D0%BA%D1%81%D0%BF%D0%BB%D0%BE%D0%B9%D1%82%D0%B0){:target="_blank"}, если ещё не сделали этого
1. Выйдите в главное меню консоли и нажмите (ВВЕРХ), выберите "Профиль" -> "Сменить пользователя"
1. В поле "Название" смените имя вашего пользователя на User1 
	* Это необходимо сделать для того, чтобы не потерять данные вашей учётной записи
1. Запустите "Настройки" -> "Сеть", снимите галочку с пункта "Подключить к Интернету"
1. [Запустите HEN](start-hen#%D1%87%D0%B0%D1%81%D1%82%D1%8C-iii---%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA-%D1%8D%D0%BA%D1%81%D0%BF%D0%BB%D0%BE%D0%B9%D1%82%D0%B0){:target="_blank"}, если ещё не сделали этого
1. Перейдите в "Настройки" -> "Debug Settings" -> "System" -> "IDU mode", выберите "On"
1. Нажмите "OK" для перезагрузки
1. Дождитесь в верхнем правом углу надписи "Provide unit with a valid network connection or insert IDU update disc"
1. Зажмите (R1) + (R2) + (L1) + (L2) + (Option) + (ВВЕРХ) и удерживайте, пока не перейдёте в Staff Mode
	* Убедитесь, что включили контроллер
1. Перейдите в "Настройки" -> "Настройки соединения дистанционного воспроизведения" и выберите "Прямое подключение к системе PS Vita/PS TV" -> "Добавить устройство"
1. Введите появившийся код на устройстве, с которого планируете запускать Remote Play 
	* В этот момент появится новая учётная запись User2
	* Помните, что вы будете использовать только прямое подключение. Подключение через Интернет работать не будет
1. [Запустите HEN](start-hen#%D1%87%D0%B0%D1%81%D1%82%D1%8C-iii---%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA-%D1%8D%D0%BA%D1%81%D0%BF%D0%BB%D0%BE%D0%B9%D1%82%D0%B0){:target="_blank"}, если ещё не сделали этого
1. Перейдите в "Настройки" -> "Debug Settings" -> "System" -> "IDU mode", выберите "Off"
1. Нажмите "OK" для перезагрузки

Не удаляйте учётную запись User2, иначе Remote Play перестанет работать! 
{: .notice--danger}