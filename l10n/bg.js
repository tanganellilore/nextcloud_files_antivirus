OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Почистване",
    "Infected" : "Заразен",
    "Unchecked" : "Непроверен",
    "Scanner exit status" : "Състояние на изход на скенера",
    "Scanner output" : "Изход на скенера",
    "Saving…" : "Запазване",
    "Antivirus" : "Антивирус",
    "File {file} is infected with {virus}" : "Файл {file} е инфектиран с {virus}",
    "The file has been removed" : "Файлъте премахнат",
    "File containing {virus} detected" : "Открит е файл, съдържащ {вирус}",
    "Antivirus detected a virus" : "Антивирусът е открил вирус",
    "Virus %s is detected in the file. Upload cannot be completed." : "Във файла е открит вирус%s. Качването не може да бъде завършено.",
    "Saved" : "Запазено",
    "Antivirus for files" : "Антивирус за файлове",
    "An antivirus app for Nextcloud" : "Антивирусно приложение за Nextcloud",
    "Antivirus for files is an antivirus app for Nextcloud.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n* ❓ Use ClamAV (open source) or Kaspersky Scan Engine\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application. Alternatively, a Kaspersky Scan Engine can be configured, which has to run on a separate server.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Антивирусът за файлове е антивирусно приложение за Nextcloud.\n\n* 🕵️‍♂️ Когато потребителят качи файл, той се проверява\n* ☢️ Качените и заразени файлове ще бъдат изтрити и ще бъде показано  известие и / или изпратено по имейл\n* 🔎 Фонова задач за сканиране на всички файлове\n* ❓ Използва ClamAV (с отворен код) или Kaspersky Scan Engine\n\nТова приложение проверява файловете, които са качени в Nextcloud за вируси, преди да бъдат записани в хранилището на Nextcloud. Ако даден файл е идентифициран като вирус, той или се регистрира, или не се качва на сървъра. Приложението разчита на основния механизъм за сканиране на вируси ClamAV, към който администраторът посочва Nextcloud, когато конфигурира приложението. Като алтернатива може да бъде конфигуриран Kaspersky Scan Engine, който трябва да работи на отделен сървър.\nЗа да бъде ефективно това приложение, дефинициите на вируса ClamAV трябва да се актуализират. Също така имайте предвид, че активирането на това приложение ще повлияе на производителността на системата, тъй като за всяко качване е необходима допълнителна обработка. Повече информация можете да намерите в антивирусната документация.",
    "Greetings {user}," : "Привет {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "За съжаление, във файл, който се опитахте да качите, беше открит злонамерен софтуер и той трябваше да бъде изтрит.",
    "This email is a notification from {host}. Please, do not reply." : "Имейлът е известие от {host}. Моля, не отговаряйте.",
    "File uploaded: {file}" : "Качен файл: {файл}",
    "Antivirus for Files" : "Антивирус за Файлове",
    "Mode" : "Режим",
    "ClamAV Executable" : "Изпълним ClamAV",
    "ClamAV Daemon" : "ClamAV  Демон",
    "ClamAV Daemon (Socket)" : "ClamAV  Демон (Гнездо)",
    "Kaspersky Daemon" : "Kaspersky Демон",
    "Socket" : "Гнездо",
    "ClamAV Socket." : "ClamAV  Гнездо",
    "Not required in Executable Mode." : "Не е нужно в Изпълним Режим.",
    "Host" : "Хост",
    "Address of Antivirus Host." : "Адрес на антивирусен хост.",
    "Port" : "Порт",
    "Port number of Antivirus Host." : "Номер на порта на Антивирусния Хост.",
    "Stream Length" : "Дължина на потока",
    "ClamAV StreamMaxLength value in bytes." : "Стойност на ClamAV StreamMaxLength в байтове.",
    "bytes" : "байта",
    "Path to clamscan" : "Път до clamscan",
    "Path to clamscan executable." : "Път до clamscan е изпълним",
    "Not required in Daemon Mode." : "Не е нужно в Демон Режим.",
    "Extra command line options (comma-separated)" : "Допълнителни опции на командния ред (разделени със запетая)",
    "File size limit for periodic background scans and chunked uploads, -1 means no limit" : "Ограничение за размера на файла за периодични фонови сканирания и качвания на блокове, -1 означава без ограничение",
    "Background scan and chunked upload file size limit in bytes, -1 means no limit" : "Ограничение на размера на файла за фоново сканиране и качване на блокове в байтове, -1 означава, че няма ограничение",
    "When infected files are found during a background scan" : "Когато заразени файлове бъдат намерени по време на фоново сканиране",
    "Only log" : "Само регистриране",
    "Delete file" : "Изтриване на файл",
    "Save" : "Запиши",
    "Advanced" : "Допълнителни",
    "Rules" : "Правила",
    "Clear All" : "Изчисти всички",
    "Reset to defaults" : "Настройки по подразбиране",
    "Match by" : "Съвпадение по",
    "Scanner exit status or signature to search" : "Състояние на изход на скенера или подпис за търсене",
    "Description" : "Описание",
    "Mark as" : "Означи като",
    "Add a rule" : "Добави правило"
},
"nplurals=2; plural=(n != 1);");
