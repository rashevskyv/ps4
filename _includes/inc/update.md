Пользователи, с нерабочим приводом могут иметь проблемы при обновлении, если вы из таких, воспользуйтесь [этой инструкцией](https://4pda.to/forum/index.php?showtopic=885825&st=10500#entry90456806){:target="_blank"}
{: .notice--info}

## Что понадобится

* [Файл системного обновления]({{ include.link }}){:target="_blank"} ([зеркало]({{ include.link_mirror }}){:target="_blank"}) для Playstation 4 версии **{{ include.version }}**
	* Если вы хотите сменить жесткий диск на приставке, либо у вас уже скачалось обновление на последнюю невзламываемую версию ПО, то качайте [версию для рекавери]({{ include.link_recovery }}){:target="_blank"} ([зеркало]({{ include.link_recovery_mirror }}){:target="_blank"}), она весит в районе 900Мб
* USB-накопитель

## Инструкция

### Часть I - Подготовительные работы

1. Отформатируйте USB-флешку в **exFAT**
1. В корне USB-флешки создайте папку `PS4`, а в ней папку `UPDATE`
1. Перенесите скачанный файл обновления в папку `PS4/UPDATE` и переименуйте его в `PS4UPDATE.PUP`

### Часть II - Обновление прошивки PS4

#### Обычное обновление через USB

1. Вставьте USB-накопитель с файлами прошивки в USB-порт приставки
1. Откройте Настройки, перейдите в "**Обновление системного программного обеспечения**"
1. Приставка напишет, что найдено обновление и укажет его номер

	**ВНИМАТЕЛЬНО УБЕДИТЕСЬ, ЧТО ОБНОВЛЯЕТЕСЬ НА ВЕРСИЮ {{ include.version }}**
    {: .notice--warning}

1. Закончите установку обновления следуя инструкциям на экране
	* Если возникли проблемы, попробуйте шить через рекавери

#### Обновление через рекавери

1. Выключите систему PS4, нажав кнопку питания на передней панели. Индикатор питания несколько раз мигнёт и погаснет
1. Выключив систему PS4, снова нажмите и удерживайте кнопку питания. Отпустите её, услышав второй звуковой сигнал: один звуковой сигнал прозвучит при нажатии на кнопку питания, а второй – ещё через несколько секунд
1. Подключите контроллер DUALSHOCK 4 с помощью кабеля USB и нажмите кнопку PS на контроллере
1. Выберите пункт "**Обновить системное программное обеспечение**"
1. Выберите пункт "**Обновить из накопителя USB**" и нажмите ОК
1. Приставка напишет, что найдено обновление и укажет его номер

	**ВНИМАТЕЛЬНО УБЕДИТЕСЬ, ЧТО ОБНОВЛЯЕТЕСЬ НА ВЕРСИЮ {{ include.version }}**
    {: .notice--warning}

1. Закончите установку обновления следуя инструкциям на экране

Если возникает ошибка **на прошитой приставке** (например **CE-30778-5** или **SU-30634-6**), [подключитесь к приставке по FTP](ftp), первым делом убедитесь, что файл обновления назван `PS4UPDATE.PUP`, не помогло - удалите содержимое папки `update`, либо [воспользуйтесь пейлоадером](payloads){:target="_blank"} update-enabler (есть по-умолчанию в составе ps4-exploit-host)
{: .notice--warning}

Если возникает ошибка на **не прошитой** приставке, первым делом убедитесь, что файл обновления назван `PS4UPDATE.PUP`, пробуйте шить с другим USB-накопителем, попробуйте перекачать файл обновления, попробуйте сделать полную инициализацию приставки.
{: .notice--warning}

Для замены жёсткого диска используйте системное [обновление для рекавери](#%D0%9E%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D1%87%D0%B5%D1%80%D0%B5%D0%B7-%D1%80%D0%B5%D0%BA%D0%B0%D0%B2%D0%B5%D1%80%D0%B8){:target="_blank"}. Вставьте новый диск и установите это обновление. Приставка сама подготовит диск к работе
{: .notice--info}

___

## Следующий шаг: [Запуск взлома](start-hen) 
{: .notice--success}