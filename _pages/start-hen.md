---
permalink: /start-hen.html
title: Запуск PS4HEN
author_profile: true
---
{% include toc title="Разделы" %}

# Что понадобится

* Свежая версия [ps4-exploit-host](https://github.com/Al-Azif/ps4-exploit-host/releases){:target="_blank"}
* [BlockerV2.bin](https://github.com/LightningMods/PS4-HEN-Update-Blocker-Payload/blob/master/BlockerV2.bin?raw=true)


# Инструкция

## Часть I - Подготовительные работы 

{% include /inc/set-up-dns.txt %}
1. Поместите пейлоад `BlockerV2.bin` в папку `ps4-exploit-host\payloads`

## Часть II - Запуск эксплойта

{% include inc/launch-exploit.txt 

	exploit="`specter`"

	payload='"*BlockerV2.bin*"'

	key="число, соответствующее строке с названием этого пейлоада" 
%}

Если вы не планируете ничего, кроме установки и запуска игр на своей приставке, вы можете упростить процедуру запуска эксплойта, [восстановив работоспособность браузера и запуская PS4HEN через него](start-hen-browser). 

___

Следующий шаг: [Установка PKG](games) 
{: .notice--success}