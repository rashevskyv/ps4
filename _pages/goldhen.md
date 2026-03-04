---
title: "GoldHEN" 
permalink: /goldhen.html
author_profile: true
---

{% include toc title="Розділи" %}

GoldHEN — це основний пейлоад (payload), який дозволяє встановлювати та запускати домашній софт (homebrew) на зламаних консолях PS4. На відміну від MiraCFW — орієнтованого на розробників — GoldHEN створений для звичайних користувачів, має додаткові покращення інтерфейсу та нові функції.
{: .notice--info}

Останні версії GoldHEN можна завантажити на [сторінці SiSTRo на Ko-Fi](https://ko-fi.com/sistro).

Якщо експлойт запущено успішно, то у верхній панелі, де знаходяться налаштування та виводяться системні повідомлення, має з'явитися значок GoldHEN.
{: .notice--info}

{% spoiler Огляд GoldHEN %}

{% include youtube_clean.html id="mFVGJqPdbc0" %}
{: .text-center}
{: .notice--info}

{% endspoiler %}

## Налаштування GoldHEN

Після запуску GoldHEN ви можете перейти в **Налаштування** приставки -> **GoldHEN**:

### Debug Settings (Налаштування налагодження)

*   **Package Installer**: дозволяє встановлювати `.pkg` файли з підключеного USB-накопичувача (ExFAT або FAT32) або з внутрішньої пам'яті за шляхом `/data/pkg`. Опція **Install all** дозволяє встановити всі доступні пакети одночасно.
*   **Package Source**: вибір папок для пошуку пакетів:
    *   **Usb [usb:/]**: шлях підключеного USB-накопичувача (за замовчуванням).
    *   **Hdd [hdd:/data/pkg/]**: внутрішня пам'ять у папці `/data/pkg`.
    *   **All**: пошук у всіх доступних місцях.
*   **Enable Search Directories**: дозволяє шукати пакети у підпапках. Папки, що починаються з крапки (наприклад, `.test`) або містять файл `.ignore`, будуть проігноровані.
*   **Enable Background Installation**: дозволяє встановлювати пакети у фоновому режимі. Увімкнення цієї опції вимикає функцію "Install all".
*   **Show Package Info**: показує метадані файлу.
*   **Show Package Path**: показує повний шлях до файлу на внутрішньому чи зовнішньому носії.
*   **Enable Debug Settings**: вмикає стандартне меню **Debug Settings** у системних налаштуваннях.
*   **Enable Game Debug Settings**: вмикає ігрові налаштування налагодження при натисканні кнопки **Options** на іконці гри.

### Cheat Settings (Налаштування чітів)

*   **Enable Cheat Menu**: вмикає меню чітів.
*   **Cheat Menu Combo**: встановлює комбінацію кнопок для виклику меню чітів у грі (традиційно це затискання кнопки Share).
*   **Show Cheat Menu on Game Options**: показує меню чітів у опціях гри (у розробці).
*   **Enable Auto-Apply on Game Start**: автоматично застосовує раніше активовані чіти при запуску гри.
*   **Show TitleID**: показує TitleID та/або версію гри (Off, Only TitleID, Only AppVer, TitleID & AppVer).
*   **Update Cheat Archive**: дозволяє оновити базу чітів з обраного репозиторію.
*   **Cheat Source**: джерело для завантаження чітів (GitHub, USB, HDD).
*   **Cheat Selection**: вибір між встановленням усіх чітів або лише для наявних ігор.

### Plugin Settings (Налаштування плагінів)

*   **Enable Plugin Loader**: вмикає завантажувач плагінів. Має бути активним для використання плагінів та патчів ігор.
*   **Enable Game Patch Plugin**: вмикає підтримку патчів для ігор.

### Game Overlay (Ігровий оверлей)

Відображає оверлей з показником FPS та іншими даними поверх гри.

### Server Settings (Налаштування серверів)

*   **Enable FTP Server**: запускає FTP-сервер на порту **2121**. Потрібне мережеве з'єднання.
*   **Enable BinLoader Server**: запускає BinLoader-сервер на порту **9090**. Дозволяє відправляти пейлоади на консоль.

### Klog

Надсилання журналів ядра (Kernel Logging) на порт **3232**. Потрібні Telnet, Netcat або TCP.

### Settings (Загальні налаштування)

*   **Enable Rest Mode Support**: дозволяє GoldHEN залишатися активним після виходу з режиму спокою.
*   **Enable PPPoE Patch**: запобігає проблемам з виявленням GoldHEN при використанні PPPoE для експлойту PPPwn.

### About

Інформація про розробників та проект.

## Можливості GoldHEN

| Функція | Версія | Опис |
| :--- | :--- | :--- |
| **Homebrew Enabler** | 1.0 | Дозволяє встановлення та запуск fpkg ігор, програм та тем. |
| **Debug Settings** | 1.0 / 2.2.3 | Вмикає меню налаштувань для розробників. |
| **Rest Mode Support** | 1.0 | Підтримка режиму спокою без пошкодження даних. |
| **External HDD Support** | 1.0 | Підтримка зовнішніх дисків (exFAT/FAT32) та розширеного сховища. |
| **Remote Package Install** | 1.0 | Можливість віддаленого надсилання пакетів з ПК чи телефону. |
| **Firmware Update Blocker** | 1.0 | Блокування серверів оновлення Sony. |
| **Persistent FTP** | 1.0 | FTP-сервер на порту 2121 з підтримкою режиму спокою. |
| **Remote Play Enabler** | 1.0 | Підтримка Remote Play (тільки локальна мережа). |
| **Debug Trophies Support** | 1.0 | Підтримка налагоджувальних трофеїв для fpkg ігор. |
| **VR Support** | 1.0 | Підміна версії прошивки PSVR для роботи на зламаній консолі. |
| **UART Enabler** | 1.0 | Увімкнення UART для діагностики помилок (наприклад, BLOD). |
| **Screenshot Enabler** | 1.0 | Зняття обмежень на скріншоти в будь-який момент гри. |
| **Bin Loader** | 2.0 | Сервер на порту 9090 для прийому пейлоадів. |
| **UI Menu** | 2.0 | Власне меню ★ GoldHEN ★ у системних налаштуваннях. |
| **Klog Server** | 2.1 / 2.2.3 | Сервер для журналювання ядра (Kernel Logging). |
| **Cheat Menu** | 2.2 / 2.3 | Меню чітів (json, shn, mc4, PS2 чіти). |
| **Southbridge Info** | 2.2.3 | Відображення кодової назви Southbridge (потрібно для Linux). |
| **GoldHEN Shortcut** | 2.2.3 | Швидкий доступ до GoldHEN замість іконки PS Plus. |
| **FPS Counter** | 2.3 | Лічильник кадрів у секунду під час гри. |
| **Plugins** | 2.3 | Підтримка сторонніх плагінів та патчів ігор. |
| **TitleID Labels** | 2.3 | Відображення TitleID та версії на іконках ігор. |
| **Scanlines Overlay** | 2.3 | Ефект сканування (CRT) поверх зображення. |
| **Internal PKG Install** | 2.3 | Встановлення пакетів прямо з внутрішнього HDD (`/data/pkg`). |
| **Subdirectories Search**| 2.4b13| Пошук пакетів у підпапках. |
| **Background Install** | 2.4b14| Фонове встановлення пакетів. |
| **Package Info** | 2.4b14| Відображення метаданих пакета в інсталяторі. |

## Джерела та посилання

1. [GoldHEN GitHub Repository](https://github.com/GoldHEN/GoldHEN)
2. [GoldHEN Plugins Repository](https://github.com/GoldHEN/GoldHEN_Plugins_Repository)
3. [PS4 UART Guide](https://repair.wiki/w/PS4_UART_Guide)

___

[Закрити сторінку](javascript:window.close();)
{: .notice--success}

