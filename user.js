//VELOCIZZARE (consigliate)//

//Disabilitare tutte le animazioni
user_pref("browser.tabs.animate", false);
user_pref("browser.fullscreen.animate", false);

//Disabilitare la funzione prefetch//
user_pref("network.prefetch-next", false);

//OTTIMIZZARE(consigliate)//

//Diminuire il consumo di RAM
user_pref("browser.sessionhistory.max_total_viewers", 6);

//Limitare il numero di pagine memorizzate nella cronologia
user_pref("browser.sessionhistory.max_entries", 20);

//Disabilitare IPV6
user_pref("network.dns.disableIPv6", false);

//Funzione di ripristino sessione
user_pref("browser.sessionstore.interval", 300000);
user_pref("browser.sessionstore.max_tabs_undo", 5);

//Velocizzare il boot di Firefox
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.samples", 0);

//Abilitare i video html5 720p/1080p
user_pref("media.mediasource.webm.enabled", true);

//PRIVACY (consigliate)//

//Connessioni speculative
user_pref("network.http.speculative-parallel-limit", 0);

//Web beacons
user_pref("beacon.enabled", false);

//Disabilitare il messaggio di avvertimento su siti http non sicuri che chiedono login e password agli utenti
user_pref("security.insecure_field_warning.contextual.enabled", false);
user_pref("signon.autofillForms.http", true);

//WebRTC
user_pref("media.peerconnection.enabled", false);

//UTILITÀ (facoltative)//

//Disabilitare Pocket
user_pref("extensions.pocket.enabled", false);

//MULTIPROCESSO
user_pref("browser.tabs.remote.autostart", true);
user_pref("browser.tabs.remote.autostart2", true);
user_pref("extensions.e10sBlocksEnabling", false);

//SCROLLING
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 250);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 250);

//SICUREZZA
user_pref("webgl.disabled", true);
