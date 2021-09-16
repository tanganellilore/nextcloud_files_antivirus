OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "Καθαρό",
    "Infected" : "Μολυσμένα",
    "Unchecked" : "Δεν έχει ελεγχθεί",
    "Scanner exit status" : "Κατάσταση αποτελεσμάτων σάρωσης",
    "Scanner output" : "Αποτέλεσμα σάρωσης",
    "Saving…" : "Γίνεται αποθήκευση…",
    "Antivirus" : "Antivirus",
    "File {file} is infected with {virus}" : "Το αρχείο {file} είναι μολυσμένο με τον ιο {virus}",
    "The file has been removed" : "Το αρχείο αφαιρέθηκε",
    "File containing {virus} detected" : "Εντοπίστηκε αρχείο που περιέχει {virus}",
    "Antivirus detected a virus" : "Το Antivirus εντόπισε ιό",
    "Virus %s is detected in the file. Upload cannot be completed." : "Εντοπίστηκε ιός %s σε αρχείο. Η μεταφόρτωση δεν μπορεί να ολοκληρωθεί.",
    "Saved" : "Αποθηκεύτηκε",
    "Antivirus for files" : "Antivirus για τα αρχεία",
    "An antivirus app for Nextcloud" : "Μια εφαρμογή προστασίας από ιούς για το Nextcloud",
    "Antivirus for files is an antivirus app for Nextcloud.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n* ❓ Use ClamAV (open source) or Kaspersky Scan Engine\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application. Alternatively, a Kaspersky Scan Engine can be configured, which has to run on a separate server.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "Το Antivirus για αρχεία είναι μια εφαρμογή προστασίας από ιούς για το Nextcloud.\n\n* 🕵️‍♂️ Όταν ο χρήστης μεταφορτώνει ένα αρχείο, αυτό ελέγχεται\n* ☢️Αρχεία που έχουν μεταφορτωθεί και έχουν μολυνθεί θα διαγράφονται και μια ειδοποίηση θα παρουσιάζεται και/ ή θα στέλνεται με ηλεκτρονικό ταχυδρομείο\n* 🔎 Εργασία στο παρασκήνιο για σάρωση όλων των αρχείων\n* ❓Χρησιμοποιήστε το ClamAV (ανοιχτού κώδικα) ή το Kaspersky Scan Engine\n\nΑυτή η εφαρμογή επιθεωρεί αρχεία που μεταφορτώνονται στο Nextcloud για ιούς προτού εγγραφούν στο χώρο αποθήκευσης Nextcloud. Εάν ένα αρχείο αναγνωρίζεται ως ιός, είτε καταγράφεται είτε δεν μεταφορτώνεται στον διακομιστή. Η εφαρμογή βασίζεται στην υποκείμενη μηχανή σάρωσης ιών ClamAV, στην οποία ο διαχειριστής δείχνει το Nextcloud κατά τη διαμόρφωση της εφαρμογής. Εναλλακτικά, μπορεί να διαμορφωθεί μια μηχανή σάρωσης Kaspersky, η οποία πρέπει να εκτελείται σε ξεχωριστό διακομιστή.\nΓια να είναι αποτελεσματική αυτή η εφαρμογή, οι ορισμοί των ιών ClamAV θα πρέπει να ενημερώνονται. Σημειώστε επίσης ότι η ενεργοποίηση αυτής της εφαρμογής θα επηρεάσει την απόδοση του συστήματος, καθώς απαιτείται επιπλέον επεξεργασία για κάθε μεταφόρτωση. Περισσότερες πληροφορίες διατίθενται στην τεκμηρίωση του Antivirus.",
    "Greetings {user}," : "Καλωήρθες {user},",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "Συγνώμη, άλλα εντοπίστηκε malware στο αρχείο που προσπαθείτε να μεταφορτώσετε και πρέπει να διαγραφεί.",
    "This email is a notification from {host}. Please, do not reply." : "Email ειδοποίησης από {host}. Παρακαλώ, μην απαντάτε.",
    "File uploaded: {file}" : "Αρχείο μεταφόρτωσης: {file}",
    "Antivirus for Files" : "Antivirus για τα αρχεία",
    "Mode" : "Κατάσταση",
    "ClamAV Executable" : "Εκτελέσιμο ClamAV",
    "ClamAV Daemon" : "Υπηρεσία ClamAV",
    "ClamAV Daemon (Socket)" : "Υπηρεσία ClamAV (υποδοχή)",
    "Kaspersky Daemon" : "Υπηρεσία Kaspersky",
    "Socket" : "Υποδοχή",
    "ClamAV Socket." : "Υποδοχή ClamAV.",
    "Not required in Executable Mode." : "Δεν απαιτείται σε Κατάσταση Εντολών.",
    "Host" : "Διακομιστής",
    "Address of Antivirus Host." : "Διεύθυνση Υπολογιστή Antivirus.",
    "Port" : "Θύρα",
    "Port number of Antivirus Host." : "Αριθμός πόρτας Υπολογιστή Antivirus.",
    "Stream Length" : "Διάρκεια Ροής",
    "ClamAV StreamMaxLength value in bytes." : "Τιμή ClamAV StreamMaxLength σε bytes.",
    "bytes" : "bytes",
    "Path to clamscan" : "Διαδρομή για το clamscan",
    "Path to clamscan executable." : "Διαδρομή για το εκτελέσιμο clamscan.",
    "Not required in Daemon Mode." : "Δεν απαιτείται σε Κατάσταση Daemon.",
    "Extra command line options (comma-separated)" : "Επιπλέον επιλογές γραμμής εντολών (διαχωρισμένα με-κόμμα)",
    "File size limit for periodic background scans and chunked uploads, -1 means no limit" : "Όριο μεγέθους αρχείου για περιοδικές σαρώσεις στο παρασκήνιο και τεμαχισμένες μεταφορτώσεις, -1 σημαίνει ότι δεν υπάρχει όριο",
    "Background scan and chunked upload file size limit in bytes, -1 means no limit" : "Σάρωση στο παρασκήνιο και τεμαχισμός αρχείου με όριο μεγέθους σε byte, -1 σημαίνει ότι δεν υπάρχει όριο",
    "When infected files are found during a background scan" : "Όταν βρεθούν μολυσμένα αρχεία κατά τη διάρκεια σάρωσης στο παρασκήνιο",
    "Only log" : "Μόνο αρχείο καταγραφής",
    "Delete file" : "Διαγραφή αρχείου",
    "Save" : "Αποθήκευση",
    "Advanced" : "Προχωρημένοι",
    "Rules" : "Κανόνες",
    "Clear All" : "Εκκαθάριση όλων",
    "Reset to defaults" : "Επαναφορά στις προεπιλογές",
    "Match by" : "Ταίριασμα με",
    "Scanner exit status or signature to search" : "Κατάσταση εξόδου ή υπογραφή εξόδου σαρωτή για αναζήτηση",
    "Description" : "Περιγραφή",
    "Mark as" : "Σήμανση ως",
    "Add a rule" : "Προσθήκη κανόνα"
},
"nplurals=2; plural=(n != 1);");
