/* Afrikaans initialisation for the jQuery UI date picker plugin. */
/* Written by Renier Pretorius. */
jQuery(function($){
	$.datepicker.regional['af'] = {
		closeText: 'Selekteer',
		prevText: 'Vorige',
		nextText: 'Volgende',
		currentText: 'Vandag',
		monthNames: ['Januarie','Februarie','Maart','April','Mei','Junie',
		'Julie','Augustus','September','Oktober','November','Desember'],
		monthNamesShort: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun',
		'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
		dayNames: ['Sondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrydag', 'Saterdag'],
		dayNamesShort: ['Son', 'Maa', 'Din', 'Woe', 'Don', 'Vry', 'Sat'],
		dayNamesMin: ['So','Ma','Di','Wo','Do','Vr','Sa'],
		weekHeader: 'Wk',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['af']);
});
/* Algerian Arabic Translation for jQuery UI date picker plugin. (can be used for Tunisia)*/
/* Mohamed Cherif BOUCHELAGHEM -- cherifbouchelaghem@yahoo.fr */

jQuery(function($){
	$.datepicker.regional['ar-DZ'] = {
		closeText: '廿睾賱丕賯',
		prevText: '&#x3C;丕賱爻丕亘賯',
		nextText: '丕賱鬲丕賱賷&#x3E;',
		currentText: '丕賱賷賵賲',
		monthNames: ['噩丕賳賮賷', '賮賷賮乇賷', '賲丕乇爻', '兀賮乇賷賱', '賲丕賷', '噩賵丕賳',
		'噩賵賷賱賷丞', '兀賵鬲', '爻亘鬲賲亘乇','兀賰鬲賵亘乇', '賳賵賮賲亘乇', '丿賷爻賲亘乇'],
		monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
		dayNames: ['丕賱兀丨丿', '丕賱丕孬賳賷賳', '丕賱孬賱丕孬丕亍', '丕賱兀乇亘毓丕亍', '丕賱禺賲賷爻', '丕賱噩賲毓丞', '丕賱爻亘鬲'],
		dayNamesShort: ['丕賱兀丨丿', '丕賱丕孬賳賷賳', '丕賱孬賱丕孬丕亍', '丕賱兀乇亘毓丕亍', '丕賱禺賲賷爻', '丕賱噩賲毓丞', '丕賱爻亘鬲'],
		dayNamesMin: ['丕賱兀丨丿', '丕賱丕孬賳賷賳', '丕賱孬賱丕孬丕亍', '丕賱兀乇亘毓丕亍', '丕賱禺賲賷爻', '丕賱噩賲毓丞', '丕賱爻亘鬲'],
		weekHeader: '兀爻亘賵毓',
		dateFormat: 'dd/mm/yy',
		firstDay: 6,
  		isRTL: true,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ar-DZ']);
});
/* Arabic Translation for jQuery UI date picker plugin. */
/* Khaled Alhourani -- me@khaledalhourani.com */
/* NOTE: monthNames are the original months names and they are the Arabic names, not the new months name 賮亘乇丕賷乇 - 賷賳丕賷乇 and there isn't any Arabic roots for these months */
jQuery(function($){
	$.datepicker.regional['ar'] = {
		closeText: '廿睾賱丕賯',
		prevText: '&#x3C;丕賱爻丕亘賯',
		nextText: '丕賱鬲丕賱賷&#x3E;',
		currentText: '丕賱賷賵賲',
		monthNames: ['賰丕賳賵賳 丕賱孬丕賳賷', '卮亘丕胤', '丌匕丕乇', '賳賷爻丕賳', '賲丕賷賵', '丨夭賷乇丕賳',
		'鬲賲賵夭', '丌亘', '兀賷賱賵賱',	'鬲卮乇賷賳 丕賱兀賵賱', '鬲卮乇賷賳 丕賱孬丕賳賷', '賰丕賳賵賳 丕賱兀賵賱'],
		monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
		dayNames: ['丕賱兀丨丿', '丕賱丕孬賳賷賳', '丕賱孬賱丕孬丕亍', '丕賱兀乇亘毓丕亍', '丕賱禺賲賷爻', '丕賱噩賲毓丞', '丕賱爻亘鬲'],
		dayNamesShort: ['丕賱兀丨丿', '丕賱丕孬賳賷賳', '丕賱孬賱丕孬丕亍', '丕賱兀乇亘毓丕亍', '丕賱禺賲賷爻', '丕賱噩賲毓丞', '丕賱爻亘鬲'],
		dayNamesMin: ['丕賱兀丨丿', '丕賱丕孬賳賷賳', '丕賱孬賱丕孬丕亍', '丕賱兀乇亘毓丕亍', '丕賱禺賲賷爻', '丕賱噩賲毓丞', '丕賱爻亘鬲'],
		weekHeader: '兀爻亘賵毓',
		dateFormat: 'dd/mm/yy',
		firstDay: 6,
  		isRTL: true,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ar']);
});/* Azerbaijani (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Jamil Najafov (necefov33@gmail.com). */
jQuery(function($) {
	$.datepicker.regional['az'] = {
		closeText: 'Ba臒la',
		prevText: '&#x3C;Geri',
		nextText: '陌r蓹li&#x3E;',
		currentText: 'Bug眉n',
		monthNames: ['Yanvar','Fevral','Mart','Aprel','May','陌yun',
		'陌yul','Avqust','Sentyabr','Oktyabr','Noyabr','Dekabr'],
		monthNamesShort: ['Yan','Fev','Mar','Apr','May','陌yun',
		'陌yul','Avq','Sen','Okt','Noy','Dek'],
		dayNames: ['Bazar','Bazar ert蓹si','脟蓹r艧蓹nb蓹 ax艧am谋','脟蓹r艧蓹nb蓹','C眉m蓹 ax艧am谋','C眉m蓹','艦蓹nb蓹'],
		dayNamesShort: ['B','Be','脟a','脟','Ca','C','艦'],
		dayNamesMin: ['B','B','脟','小','脟','C','艦'],
		weekHeader: 'Hf',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['az']);
});/* Bulgarian initialisation for the jQuery UI date picker plugin. */
/* Written by Stoyan Kyosev (http://svest.org). */
jQuery(function($){
    $.datepicker.regional['bg'] = {
        closeText: '蟹邪褌胁芯褉懈',
        prevText: '&#x3C;薪邪蟹邪写',
        nextText: '薪邪锌褉械写&#x3E;',
		nextBigText: '&#x3E;&#x3E;',
        currentText: '写薪械褋',
        monthNames: ['携薪褍邪褉懈','肖械胁褉褍邪褉懈','袦邪褉褌','袗锌褉懈谢','袦邪泄','挟薪懈',
        '挟谢懈','袗胁谐褍褋褌','小械锌褌械屑胁褉懈','袨泻褌芯屑胁褉懈','袧芯械屑胁褉懈','袛械泻械屑胁褉懈'],
        monthNamesShort: ['携薪褍','肖械胁','袦邪褉','袗锌褉','袦邪泄','挟薪懈',
        '挟谢懈','袗胁谐','小械锌','袨泻褌','袧芯胁','袛械泻'],
        dayNames: ['袧械写械谢褟','袩芯薪械写械谢薪懈泻','袙褌芯褉薪懈泻','小褉褟写邪','效械褌胁褗褉褌褗泻','袩械褌褗泻','小褗斜芯褌邪'],
        dayNamesShort: ['袧械写','袩芯薪','袙褌芯','小褉褟','效械褌','袩械褌','小褗斜'],
        dayNamesMin: ['袧械','袩芯','袙褌','小褉','效械','袩械','小褗'],
		weekHeader: 'Wk',
        dateFormat: 'dd.mm.yy',
		firstDay: 1,
        isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['bg']);
});
/* Bosnian i18n for the jQuery UI date picker plugin. */
/* Written by Kenan Konjo. */
jQuery(function($){
	$.datepicker.regional['bs'] = {
		closeText: 'Zatvori', 
		prevText: '&#x3C;', 
		nextText: '&#x3E;', 
		currentText: 'Danas', 
		monthNames: ['Januar','Februar','Mart','April','Maj','Juni',
		'Juli','August','Septembar','Oktobar','Novembar','Decembar'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
		'Jul','Aug','Sep','Okt','Nov','Dec'],
		dayNames: ['Nedelja','Ponedeljak','Utorak','Srijeda','膶etvrtak','Petak','Subota'],
		dayNamesShort: ['Ned','Pon','Uto','Sri','膶et','Pet','Sub'],
		dayNamesMin: ['Ne','Po','Ut','Sr','膶e','Pe','Su'],
		weekHeader: 'Wk',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['bs']);
});/* Inicialitzaci贸 en catal脿 per a l'extenci贸 'calendar' per jQuery. */
/* Writers: (joan.leon@gmail.com). */
jQuery(function($){
	$.datepicker.regional['ca'] = {
		closeText: 'Tancar',
		prevText: '&#x3C;Ant',
		nextText: 'Seg&#x3E;',
		currentText: 'Avui',
		monthNames: ['Gener','Febrer','Mar&#xE7;','Abril','Maig','Juny',
		'Juliol','Agost','Setembre','Octubre','Novembre','Desembre'],
		monthNamesShort: ['Gen','Feb','Mar','Abr','Mai','Jun',
		'Jul','Ago','Set','Oct','Nov','Des'],
		dayNames: ['Diumenge','Dilluns','Dimarts','Dimecres','Dijous','Divendres','Dissabte'],
		dayNamesShort: ['Dug','Dln','Dmt','Dmc','Djs','Dvn','Dsb'],
		dayNamesMin: ['Dg','Dl','Dt','Dc','Dj','Dv','Ds'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ca']);
});/* Czech initialisation for the jQuery UI date picker plugin. */
/* Written by Tomas Muller (tomas@tomas-muller.net). */
jQuery(function($){
	$.datepicker.regional['cs'] = {
		closeText: 'Zav艡铆t',
		prevText: '&#x3C;D艡铆ve',
		nextText: 'Pozd臎ji&#x3E;',
		currentText: 'Nyn铆',
		monthNames: ['leden','煤nor','b艡ezen','duben','kv臎ten','膷erven',
        '膷ervenec','srpen','z谩艡铆','艡铆jen','listopad','prosinec'],
		monthNamesShort: ['led','煤no','b艡e','dub','kv臎','膷er',
		'膷vc','srp','z谩艡','艡铆j','lis','pro'],
		dayNames: ['ned臎le', 'pond臎l铆', '煤ter媒', 'st艡eda', '膷tvrtek', 'p谩tek', 'sobota'],
		dayNamesShort: ['ne', 'po', '煤t', 'st', '膷t', 'p谩', 'so'],
		dayNamesMin: ['ne','po','煤t','st','膷t','p谩','so'],
		weekHeader: 'T媒d',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['cs']);
});
/* Danish initialisation for the jQuery UI date picker plugin. */
/* Written by Jan Christensen ( deletestuff@gmail.com). */
jQuery(function($){
    $.datepicker.regional['da'] = {
		closeText: 'Luk',
        prevText: '&#x3C;Forrige',
		nextText: 'N忙ste&#x3E;',
		currentText: 'Idag',
        monthNames: ['Januar','Februar','Marts','April','Maj','Juni',
        'Juli','August','September','Oktober','November','December'],
        monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
        'Jul','Aug','Sep','Okt','Nov','Dec'],
		dayNames: ['S酶ndag','Mandag','Tirsdag','Onsdag','Torsdag','Fredag','L酶rdag'],
		dayNamesShort: ['S酶n','Man','Tir','Ons','Tor','Fre','L酶r'],
		dayNamesMin: ['S酶','Ma','Ti','On','To','Fr','L酶'],
		weekHeader: 'Uge',
        dateFormat: 'dd-mm-yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['da']);
});
/* German initialisation for the jQuery UI date picker plugin. */
/* Written by Milian Wolff (mail@milianw.de). */
jQuery(function($){
	$.datepicker.regional['de'] = {
		closeText: 'schlie脽en',
		prevText: '&#x3C;zur眉ck',
		nextText: 'Vor&#x3E;',
		currentText: 'heute',
		monthNames: ['Januar','Februar','M盲rz','April','Mai','Juni',
		'Juli','August','September','Oktober','November','Dezember'],
		monthNamesShort: ['Jan','Feb','M盲r','Apr','Mai','Jun',
		'Jul','Aug','Sep','Okt','Nov','Dez'],
		dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
		dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
		dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
		weekHeader: 'Wo',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['de']);
});
/* Greek (el) initialisation for the jQuery UI date picker plugin. */
/* Written by Alex Cicovic (http://www.alexcicovic.com) */
jQuery(function($){
	$.datepicker.regional['el'] = {
		closeText: '螝位蔚委蟽喂渭慰',
		prevText: '螤蟻慰畏纬慰蠉渭蔚谓慰蟼',
		nextText: '螘蟺蠈渭蔚谓慰蟼',
		currentText: '韦蟻苇蠂蠅谓 螠萎谓伪蟼',
		monthNames: ['螜伪谓慰蠀维蟻喂慰蟼','桅蔚尾蟻慰蠀维蟻喂慰蟼','螠维蟻蟿喂慰蟼','螒蟺蟻委位喂慰蟼','螠维喂慰蟼','螜慰蠉谓喂慰蟼',
		'螜慰蠉位喂慰蟼','螒蠉纬慰蠀蟽蟿慰蟼','危蔚蟺蟿苇渭尾蟻喂慰蟼','螣魏蟿蠋尾蟻喂慰蟼','螡慰苇渭尾蟻喂慰蟼','螖蔚魏苇渭尾蟻喂慰蟼'],
		monthNamesShort: ['螜伪谓','桅蔚尾','螠伪蟻','螒蟺蟻','螠伪喂','螜慰蠀谓',
		'螜慰蠀位','螒蠀纬','危蔚蟺','螣魏蟿','螡慰蔚','螖蔚魏'],
		dayNames: ['螝蠀蟻喂伪魏萎','螖蔚蠀蟿苇蟻伪','韦蟻委蟿畏','韦蔚蟿维蟻蟿畏','螤苇渭蟺蟿畏','螤伪蟻伪蟽魏蔚蠀萎','危维尾尾伪蟿慰'],
		dayNamesShort: ['螝蠀蟻','螖蔚蠀','韦蟻喂','韦蔚蟿','螤蔚渭','螤伪蟻','危伪尾'],
		dayNamesMin: ['螝蠀','螖蔚','韦蟻','韦蔚','螤蔚','螤伪','危伪'],
		weekHeader: '螘尾未',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['el']);
});/* English/Australia initialisation for the jQuery UI date picker plugin. */
/* Based on the en-GB initialisation. */
jQuery(function($){
	$.datepicker.regional['en-AU'] = {
		closeText: 'Done',
		prevText: 'Prev',
		nextText: 'Next',
		currentText: 'Today',
		monthNames: ['January','February','March','April','May','June',
		'July','August','September','October','November','December'],
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
		weekHeader: 'Wk',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['en-AU']);
});
/* English/UK initialisation for the jQuery UI date picker plugin. */
/* Written by Stuart. */
jQuery(function($){
	$.datepicker.regional['en-GB'] = {
		closeText: 'Done',
		prevText: 'Prev',
		nextText: 'Next',
		currentText: 'Today',
		monthNames: ['January','February','March','April','May','June',
		'July','August','September','October','November','December'],
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
		weekHeader: 'Wk',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['en-GB']);
});
/* English/New Zealand initialisation for the jQuery UI date picker plugin. */
/* Based on the en-GB initialisation. */
jQuery(function($){
	$.datepicker.regional['en-NZ'] = {
		closeText: 'Done',
		prevText: 'Prev',
		nextText: 'Next',
		currentText: 'Today',
		monthNames: ['January','February','March','April','May','June',
		'July','August','September','October','November','December'],
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
		weekHeader: 'Wk',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['en-NZ']);
});
/* Esperanto initialisation for the jQuery UI date picker plugin. */
/* Written by Olivier M. (olivierweb@ifrance.com). */
jQuery(function($){
	$.datepicker.regional['eo'] = {
		closeText: 'Fermi',
		prevText: '&#x3C;Anta',
		nextText: 'Sekv&#x3E;',
		currentText: 'Nuna',
		monthNames: ['Januaro','Februaro','Marto','Aprilo','Majo','Junio',
		'Julio','A怒gusto','Septembro','Oktobro','Novembro','Decembro'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
		'Jul','A怒g','Sep','Okt','Nov','Dec'],
		dayNames: ['Diman膲o','Lundo','Mardo','Merkredo','拇a怒do','Vendredo','Sabato'],
		dayNamesShort: ['Dim','Lun','Mar','Mer','拇a怒','Ven','Sab'],
		dayNamesMin: ['Di','Lu','Ma','Me','拇a','Ve','Sa'],
		weekHeader: 'Sb',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['eo']);
});
/* Inicializaci贸n en espa帽ol para la extensi贸n 'UI date picker' para jQuery. */
/* Traducido por Vester (xvester@gmail.com). */
jQuery(function($){
	$.datepicker.regional['es'] = {
		closeText: 'Cerrar',
		prevText: '&#x3C;Ant',
		nextText: 'Sig&#x3E;',
		currentText: 'Hoy',
		monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio',
		'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
		monthNamesShort: ['Ene','Feb','Mar','Abr','May','Jun',
		'Jul','Ago','Sep','Oct','Nov','Dic'],
		dayNames: ['Domingo','Lunes','Martes','Mi&#xE9;rcoles','Jueves','Viernes','S&#xE1;bado'],
		dayNamesShort: ['Dom','Lun','Mar','Mi&#xE9;','Juv','Vie','S&#xE1;b'],
		dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','S&#xE1;'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['es']);
});/* Estonian initialisation for the jQuery UI date picker plugin. */
/* Written by Mart S玫mermaa (mrts.pydev at gmail com). */
jQuery(function($){
	$.datepicker.regional['et'] = {
		closeText: 'Sulge',
		prevText: 'Eelnev',
		nextText: 'J盲rgnev',
		currentText: 'T盲na',
		monthNames: ['Jaanuar','Veebruar','M盲rts','Aprill','Mai','Juuni',
		'Juuli','August','September','Oktoober','November','Detsember'],
		monthNamesShort: ['Jaan', 'Veebr', 'M盲rts', 'Apr', 'Mai', 'Juuni',
		'Juuli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dets'],
		dayNames: ['P眉hap盲ev', 'Esmasp盲ev', 'Teisip盲ev', 'Kolmap盲ev', 'Neljap盲ev', 'Reede', 'Laup盲ev'],
		dayNamesShort: ['P眉hap', 'Esmasp', 'Teisip', 'Kolmap', 'Neljap', 'Reede', 'Laup'],
		dayNamesMin: ['P','E','T','K','N','R','L'],
		weekHeader: 'Sm',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['et']);
}); /* Euskarako oinarria 'UI date picker' jquery-ko extentsioarentzat */
/* Karrikas-ek itzulia (karrikas@karrikas.com) */
jQuery(function($){
	$.datepicker.regional['eu'] = {
		closeText: 'Egina',
		prevText: '&#x3C;Aur',
		nextText: 'Hur&#x3E;',
		currentText: 'Gaur',
		monthNames: ['Urtarrila','Otsaila','Martxoa','Apirila','Maiatza','Ekaina',
		'Uztaila','Abuztua','Iraila','Urria','Azaroa','Abendua'],
		monthNamesShort: ['Urt','Ots','Mar','Api','Mai','Eka',
		'Uzt','Abu','Ira','Urr','Aza','Abe'],
		dayNames: ['Igandea','Astelehena','Asteartea','Asteazkena','Osteguna','Ostirala','Larunbata'],
		dayNamesShort: ['Iga','Ast','Ast','Ast','Ost','Ost','Lar'],
		dayNamesMin: ['Ig','As','As','As','Os','Os','La'],
		weekHeader: 'Wk',
		dateFormat: 'yy/mm/dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['eu']);
});/* Persian (Farsi) Translation for the jQuery UI date picker plugin. */
/* Javad Mowlanezhad -- jmowla@gmail.com */
/* Jalali calendar should supported soon! (Its implemented but I have to test it) */
jQuery(function($) {
	$.datepicker.regional['fa'] = {
		closeText: '亘爻鬲賳',
		prevText: '&#x3C;賯亘賱賷',
		nextText: '亘毓丿賷&#x3E;',
		currentText: '丕賲乇賵夭',
		monthNames: ['賮乇賵乇丿賷賳','丕乇丿賷亘賴卮鬲','禺乇丿丕丿','鬲賷乇','賲乇丿丕丿','卮賴乇賷賵乇',
		'賲賴乇','丌亘丕賳','丌匕乇','丿賷','亘賴賲賳','丕爻賮賳丿'],
		monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
		dayNames: ['賷讴卮賳亘賴','丿賵卮賳亘賴','爻賴鈥屫促嗀ㄙ?,'趩賴丕乇卮賳亘賴','倬賳噩卮賳亘賴','噩賲毓賴','卮賳亘賴'],
		dayNamesShort: ['賷','丿','爻','趩','倬','噩', '卮'],
		dayNamesMin: ['賷','丿','爻','趩','倬','噩', '卮'],
		weekHeader: '賴賮',
		dateFormat: 'yy/mm/dd',
		firstDay: 6,
		isRTL: true,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['fa']);
});/* Finnish initialisation for the jQuery UI date picker plugin. */
/* Written by Harri Kilpi锟?(harrikilpio@gmail.com). */
jQuery(function($){
    $.datepicker.regional['fi'] = {
		closeText: 'Sulje',
		prevText: '&#xAB;Edellinen',
		nextText: 'Seuraava&#xBB;',
		currentText: 'T&#xE4;n&#xE4;&#xE4;n',
        monthNames: ['Tammikuu','Helmikuu','Maaliskuu','Huhtikuu','Toukokuu','Kes&#xE4;kuu',
        'Hein&#xE4;kuu','Elokuu','Syyskuu','Lokakuu','Marraskuu','Joulukuu'],
        monthNamesShort: ['Tammi','Helmi','Maalis','Huhti','Touko','Kes&#xE4;',
        'Hein&#xE4;','Elo','Syys','Loka','Marras','Joulu'],
		dayNamesShort: ['Su','Ma','Ti','Ke','To','Pe','Su'],
		dayNames: ['Sunnuntai','Maanantai','Tiistai','Keskiviikko','Torstai','Perjantai','Lauantai'],
		dayNamesMin: ['Su','Ma','Ti','Ke','To','Pe','La'],
		weekHeader: 'Vk',
        dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['fi']);
});
/* Faroese initialisation for the jQuery UI date picker plugin */
/* Written by Sverri Mohr Olsen, sverrimo@gmail.com */
jQuery(function($){
	$.datepicker.regional['fo'] = {
		closeText: 'Lat aftur',
		prevText: '&#x3C;Fyrra',
		nextText: 'N忙sta&#x3E;',
		currentText: '脥 dag',
		monthNames: ['Januar','Februar','Mars','Apr铆l','Mei','Juni',
		'Juli','August','September','Oktober','November','Desember'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Mei','Jun',
		'Jul','Aug','Sep','Okt','Nov','Des'],
		dayNames: ['Sunnudagur','M谩nadagur','T媒sdagur','Mikudagur','H贸sdagur','Fr铆ggjadagur','Leyardagur'],
		dayNamesShort: ['Sun','M谩n','T媒s','Mik','H贸s','Fr铆','Ley'],
		dayNamesMin: ['Su','M谩','T媒','Mi','H贸','Fr','Le'],
		weekHeader: 'Vk',
		dateFormat: 'dd-mm-yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['fo']);
});
/* Swiss-French initialisation for the jQuery UI date picker plugin. */
/* Written Martin Voelkle (martin.voelkle@e-tc.ch). */
jQuery(function($){
	$.datepicker.regional['fr-CH'] = {
		closeText: 'Fermer',
		prevText: '&#x3C;Pr茅c',
		nextText: 'Suiv&#x3E;',
		currentText: 'Courant',
		monthNames: ['Janvier','F茅vrier','Mars','Avril','Mai','Juin',
		'Juillet','Ao没t','Septembre','Octobre','Novembre','D茅cembre'],
		monthNamesShort: ['Jan','F茅v','Mar','Avr','Mai','Jun',
		'Jul','Ao没','Sep','Oct','Nov','D茅c'],
		dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
		dayNamesShort: ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],
		dayNamesMin: ['Di','Lu','Ma','Me','Je','Ve','Sa'],
		weekHeader: 'Sm',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['fr-CH']);
});/* French initialisation for the jQuery UI date picker plugin. */
/* Written by Keith Wood (kbwood{at}iinet.com.au),
              St茅phane Nahmani (sholby@sholby.net),
              St茅phane Raimbault <stephane.raimbault@gmail.com> */
jQuery(function($){
	$.datepicker.regional['fr'] = {
		closeText: 'Fermer',
		prevText: 'Pr茅c茅dent',
		nextText: 'Suivant',
		currentText: 'Aujourd\'hui',
		monthNames: ['Janvier','F茅vrier','Mars','Avril','Mai','Juin',
		'Juillet','Ao没t','Septembre','Octobre','Novembre','D茅cembre'],
		monthNamesShort: ['Janv.','F茅vr.','Mars','Avril','Mai','Juin',
		'Juil.','Ao没t','Sept.','Oct.','Nov.','D茅c.'],
		dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
		dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
		dayNamesMin: ['D','L','M','M','J','V','S'],
		weekHeader: 'Sem.',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['fr']);
});
/* Galician localization for 'UI date picker' jQuery extension. */
/* Translated by Jorge Barreiro <yortx.barry@gmail.com>. */
jQuery(function($){
	$.datepicker.regional['gl'] = {
		closeText: 'Pechar',
		prevText: '&#x3C;Ant',
		nextText: 'Seg&#x3E;',
		currentText: 'Hoxe',
		monthNames: ['Xaneiro','Febreiro','Marzo','Abril','Maio','Xu帽o',
		'Xullo','Agosto','Setembro','Outubro','Novembro','Decembro'],
		monthNamesShort: ['Xan','Feb','Mar','Abr','Mai','Xu帽',
		'Xul','Ago','Set','Out','Nov','Dec'],
		dayNames: ['Domingo','Luns','Martes','M&#xE9;rcores','Xoves','Venres','S&#xE1;bado'],
		dayNamesShort: ['Dom','Lun','Mar','M&#xE9;r','Xov','Ven','S&#xE1;b'],
		dayNamesMin: ['Do','Lu','Ma','M&#xE9;','Xo','Ve','S&#xE1;'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['gl']);
});/* Hebrew initialisation for the UI Datepicker extension. */
/* Written by Amir Hardon (ahardon at gmail dot com). */
jQuery(function($){
	$.datepicker.regional['he'] = {
		closeText: '住讙讜专',
		prevText: '&#x3C;讛拽讜讚诐',
		nextText: '讛讘讗&#x3E;',
		currentText: '讛讬讜诐',
		monthNames: ['讬谞讜讗专','驻讘专讜讗专','诪专抓','讗驻专讬诇','诪讗讬','讬讜谞讬',
		'讬讜诇讬','讗讜讙讜住讟','住驻讟诪讘专','讗讜拽讟讜讘专','谞讜讘诪讘专','讚爪诪讘专'],
		monthNamesShort: ['1','2','3','4','5','6',
		'7','8','9','10','11','12'],
		dayNames: ['专讗砖讜谉','砖谞讬','砖诇讬砖讬','专讘讬注讬','讞诪讬砖讬','砖讬砖讬','砖讘转'],
		dayNamesShort: ['讗\'','讘\'','讙\'','讚\'','讛\'','讜\'','砖讘转'],
		dayNamesMin: ['讗\'','讘\'','讙\'','讚\'','讛\'','讜\'','砖讘转'],
		weekHeader: 'Wk',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: true,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['he']);
});
/* Croatian i18n for the jQuery UI date picker plugin. */
/* Written by Vjekoslav Nesek. */
jQuery(function($){
	$.datepicker.regional['hr'] = {
		closeText: 'Zatvori',
		prevText: '&#x3C;',
		nextText: '&#x3E;',
		currentText: 'Danas',
		monthNames: ['Sije膷anj','Velja膷a','O啪ujak','Travanj','Svibanj','Lipanj',
		'Srpanj','Kolovoz','Rujan','Listopad','Studeni','Prosinac'],
		monthNamesShort: ['Sij','Velj','O啪u','Tra','Svi','Lip',
		'Srp','Kol','Ruj','Lis','Stu','Pro'],
		dayNames: ['Nedjelja','Ponedjeljak','Utorak','Srijeda','膶etvrtak','Petak','Subota'],
		dayNamesShort: ['Ned','Pon','Uto','Sri','膶et','Pet','Sub'],
		dayNamesMin: ['Ne','Po','Ut','Sr','膶e','Pe','Su'],
		weekHeader: 'Tje',
		dateFormat: 'dd.mm.yy.',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['hr']);
});/* Hungarian initialisation for the jQuery UI date picker plugin. */
/* Written by Istvan Karaszi (jquery@spam.raszi.hu). */
jQuery(function($){
	$.datepicker.regional['hu'] = {
		closeText: 'bez谩r',
		prevText: 'vissza',
		nextText: 'el艖re',
		currentText: 'ma',
		monthNames: ['Janu谩r', 'Febru谩r', 'M谩rcius', '脕prilis', 'M谩jus', 'J煤nius',
		'J煤lius', 'Augusztus', 'Szeptember', 'Okt贸ber', 'November', 'December'],
		monthNamesShort: ['Jan', 'Feb', 'M谩r', '脕pr', 'M谩j', 'J煤n',
		'J煤l', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
		dayNames: ['Vas谩rnap', 'H茅tf艖', 'Kedd', 'Szerda', 'Cs眉t枚rt枚k', 'P茅ntek', 'Szombat'],
		dayNamesShort: ['Vas', 'H茅t', 'Ked', 'Sze', 'Cs眉', 'P茅n', 'Szo'],
		dayNamesMin: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
		weekHeader: 'H茅t',
		dateFormat: 'yy.mm.dd.',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['hu']);
});
/* Armenian(UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Levon Zakaryan (levon.zakaryan@gmail.com)*/
jQuery(function($){
	$.datepicker.regional['hy'] = {
		closeText: '論铡寨榨宅',
		prevText: '&#x3C;諉铡窄.',
		nextText: '諃铡栈.&#x3E;',
		currentText: '员盏战謪謤',
		monthNames: ['諃崭謧斩站铡謤','論榨湛謤站铡謤','談铡謤湛','员蘸謤斋宅','談铡盏斋战','諃崭謧斩斋战',
		'諃崭謧宅斋战','諘眨崭战湛崭战','諐榨蘸湛榨沾闸榨謤','諃崭寨湛榨沾闸榨謤','諉崭盏榨沾闸榨謤','源榨寨湛榨沾闸榨謤'],
		monthNamesShort: ['諃崭謧斩站','論榨湛謤','談铡謤湛','员蘸謤','談铡盏斋战','諃崭謧斩斋战',
		'諃崭謧宅','諘眨战','諐榨蘸','諃崭寨','諉崭盏','源榨寨'],
		dayNames: ['寨斋謤铡寨斋','榨寨崭謧辗铡闸诈斋','榨謤榨謩辗铡闸诈斋','展崭謤榨謩辗铡闸诈斋','瞻斋斩眨辗铡闸诈斋','崭謧謤闸铡诈','辗铡闸铡诈'],
		dayNamesShort: ['寨斋謤','榨謤寨','榨謤謩','展謤謩','瞻斩眨','崭謧謤闸','辗闸诈'],
		dayNamesMin: ['寨斋謤','榨謤寨','榨謤謩','展謤謩','瞻斩眨','崭謧謤闸','辗闸诈'],
		weekHeader: '諊圆諒',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['hy']);
});/* Indonesian initialisation for the jQuery UI date picker plugin. */
/* Written by Deden Fathurahman (dedenf@gmail.com). */
jQuery(function($){
	$.datepicker.regional['id'] = {
		closeText: 'Tutup',
		prevText: '&#x3C;mundur',
		nextText: 'maju&#x3E;',
		currentText: 'hari ini',
		monthNames: ['Januari','Februari','Maret','April','Mei','Juni',
		'Juli','Agustus','September','Oktober','Nopember','Desember'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Mei','Jun',
		'Jul','Agus','Sep','Okt','Nop','Des'],
		dayNames: ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'],
		dayNamesShort: ['Min','Sen','Sel','Rab','kam','Jum','Sab'],
		dayNamesMin: ['Mg','Sn','Sl','Rb','Km','jm','Sb'],
		weekHeader: 'Mg',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['id']);
});/* Icelandic initialisation for the jQuery UI date picker plugin. */
/* Written by Haukur H. Thorsson (haukur@eskill.is). */
jQuery(function($){
	$.datepicker.regional['is'] = {
		closeText: 'Loka',
		prevText: '&#x3C; Fyrri',
		nextText: 'N&#xE6;sti &#x3E;',
		currentText: '&#xCD; dag',
		monthNames: ['Jan&#xFA;ar','Febr&#xFA;ar','Mars','Apr&#xED;l','Ma&iacute','J&#xFA;n&#xED;',
		'J&#xFA;l&#xED;','&#xC1;g&#xFA;st','September','Okt&#xF3;ber','N&#xF3;vember','Desember'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Ma&#xED;','J&#xFA;n',
		'J&#xFA;l','&#xC1;g&#xFA;','Sep','Okt','N&#xF3;v','Des'],
		dayNames: ['Sunnudagur','M&#xE1;nudagur','&#xDE;ri&#xF0;judagur','Mi&#xF0;vikudagur','Fimmtudagur','F&#xF6;studagur','Laugardagur'],
		dayNamesShort: ['Sun','M&#xE1;n','&#xDE;ri','Mi&#xF0;','Fim','F&#xF6;s','Lau'],
		dayNamesMin: ['Su','M&#xE1;','&#xDE;r','Mi','Fi','F&#xF6;','La'],
		weekHeader: 'Vika',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['is']);
});/* Italian initialisation for the jQuery UI date picker plugin. */
/* Written by Antonello Pasella (antonello.pasella@gmail.com). */
jQuery(function($){
	$.datepicker.regional['it'] = {
		closeText: 'Chiudi',
		prevText: '&#x3C;Prec',
		nextText: 'Succ&#x3E;',
		currentText: 'Oggi',
		monthNames: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
			'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
		monthNamesShort: ['Gen','Feb','Mar','Apr','Mag','Giu',
			'Lug','Ago','Set','Ott','Nov','Dic'],
		dayNames: ['Domenica','Luned&#xEC;','Marted&#xEC;','Mercoled&#xEC;','Gioved&#xEC;','Venerd&#xEC;','Sabato'],
		dayNamesShort: ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'],
		dayNamesMin: ['Do','Lu','Ma','Me','Gi','Ve','Sa'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['it']);
});
/* Japanese initialisation for the jQuery UI date picker plugin. */
/* Written by Kentaro SATO (kentaro@ranvis.com). */
jQuery(function($){
	$.datepicker.regional['ja'] = {
		closeText: '闁夈仒銈?,
		prevText: '&#x3C;鍓?,
		nextText: '娆?#x3E;',
		currentText: '浠婃棩',
		monthNames: ['1鏈?,'2鏈?,'3鏈?,'4鏈?,'5鏈?,'6鏈?,
		'7鏈?,'8鏈?,'9鏈?,'10鏈?,'11鏈?,'12鏈?],
		monthNamesShort: ['1鏈?,'2鏈?,'3鏈?,'4鏈?,'5鏈?,'6鏈?,
		'7鏈?,'8鏈?,'9鏈?,'10鏈?,'11鏈?,'12鏈?],
		dayNames: ['鏃ユ洔鏃?,'鏈堟洔鏃?,'鐏洔鏃?,'姘存洔鏃?,'鏈ㄦ洔鏃?,'閲戞洔鏃?,'鍦熸洔鏃?],
		dayNamesShort: ['鏃?,'鏈?,'鐏?,'姘?,'鏈?,'閲?,'鍦?],
		dayNamesMin: ['鏃?,'鏈?,'鐏?,'姘?,'鏈?,'閲?,'鍦?],
		weekHeader: '閫?,
		dateFormat: 'yy/mm/dd',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '骞?};
	$.datepicker.setDefaults($.datepicker.regional['ja']);
});/* Korean initialisation for the jQuery calendar extension. */
/* Written by DaeKwon Kang (ncrash.dk@gmail.com). */
jQuery(function($){
	$.datepicker.regional['ko'] = {
		closeText: '雼赴',
		prevText: '鞚挫爠雼?,
		nextText: '雼れ潓雼?,
		currentText: '鞓る姌',
		monthNames: ['1鞗?JAN)','2鞗?FEB)','3鞗?MAR)','4鞗?APR)','5鞗?MAY)','6鞗?JUN)',
		'7鞗?JUL)','8鞗?AUG)','9鞗?SEP)','10鞗?OCT)','11鞗?NOV)','12鞗?DEC)'],
		monthNamesShort: ['1鞗?JAN)','2鞗?FEB)','3鞗?MAR)','4鞗?APR)','5鞗?MAY)','6鞗?JUN)',
		'7鞗?JUL)','8鞗?AUG)','9鞗?SEP)','10鞗?OCT)','11鞗?NOV)','12鞗?DEC)'],
		dayNames: ['鞚?,'鞗?,'頇?,'靾?,'氇?,'旮?,'韱?],
		dayNamesShort: ['鞚?,'鞗?,'頇?,'靾?,'氇?,'旮?,'韱?],
		dayNamesMin: ['鞚?,'鞗?,'頇?,'靾?,'氇?,'旮?,'韱?],
		weekHeader: 'Wk',
		dateFormat: 'yy-mm-dd',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: '雲?};
	$.datepicker.setDefaults($.datepicker.regional['ko']);
});/* Kazakh (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Dmitriy Karasyov (dmitriy.karasyov@gmail.com). */
jQuery(function($){
	$.datepicker.regional['kz'] = {
		closeText: '袞邪斜褍',
		prevText: '&#x3C;袗谢写褘遥覔褘',
		nextText: '袣械谢械褋褨&#x3E;',
		currentText: '袘爷谐褨薪',
		monthNames: ['覛邪遥褌邪褉','袗覜锌邪薪','袧邪褍褉褘蟹','小訖褍褨褉','袦邪屑褘褉','袦邪褍褋褘屑',
		'楔褨谢写械','孝邪屑褘蟹','覛褘褉泻爷泄械泻','覛邪蟹邪薪','覛邪褉邪褕邪','袞械谢褌芯覜褋邪薪'],
		monthNamesShort: ['覛邪遥','袗覜锌','袧邪褍','小訖褍','袦邪屑','袦邪褍',
		'楔褨谢','孝邪屑','覛褘褉','覛邪蟹','覛邪褉','袞械谢'],
		dayNames: ['袞械泻褋械薪斜褨','袛爷泄褋械薪斜褨','小械泄褋械薪斜褨','小訖褉褋械薪斜褨','袘械泄褋械薪斜褨','袞冶屑邪','小械薪斜褨'],
		dayNamesShort: ['卸泻褋','写褋薪','褋褋薪','褋褉褋','斜褋薪','卸屑邪','褋薪斜'],
		dayNamesMin: ['袞泻','袛褋','小褋','小褉','袘褋','袞屑','小薪'],
		weekHeader: '袧械',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['kz']);
});
/* Lithuanian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* @author Arturas Paleicikas <arturas@avalon.lt> */
jQuery(function($){
	$.datepicker.regional['lt'] = {
		closeText: 'U啪daryti',
		prevText: '&#x3C;Atgal',
		nextText: 'Pirmyn&#x3E;',
		currentText: '艩iandien',
		monthNames: ['Sausis','Vasaris','Kovas','Balandis','Gegu啪臈','Bir啪elis',
		'Liepa','Rugpj奴tis','Rugs臈jis','Spalis','Lapkritis','Gruodis'],
		monthNamesShort: ['Sau','Vas','Kov','Bal','Geg','Bir',
		'Lie','Rugp','Rugs','Spa','Lap','Gru'],
		dayNames: ['sekmadienis','pirmadienis','antradienis','tre膷iadienis','ketvirtadienis','penktadienis','拧e拧tadienis'],
		dayNamesShort: ['sek','pir','ant','tre','ket','pen','拧e拧'],
		dayNamesMin: ['Se','Pr','An','Tr','Ke','Pe','艩e'],
		weekHeader: 'Wk',
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['lt']);
});/* Latvian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* @author Arturas Paleicikas <arturas.paleicikas@metasite.net> */
jQuery(function($){
	$.datepicker.regional['lv'] = {
		closeText: 'Aizv膿rt',
		prevText: 'Iepr',
		nextText: 'N膩ka',
		currentText: '艩odien',
		monthNames: ['Janv膩ris','Febru膩ris','Marts','Apr墨lis','Maijs','J奴nijs',
		'J奴lijs','Augusts','Septembris','Oktobris','Novembris','Decembris'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Mai','J奴n',
		'J奴l','Aug','Sep','Okt','Nov','Dec'],
		dayNames: ['sv膿tdiena','pirmdiena','otrdiena','tre拧diena','ceturtdiena','piektdiena','sestdiena'],
		dayNamesShort: ['svt','prm','otr','tre','ctr','pkt','sst'],
		dayNamesMin: ['Sv','Pr','Ot','Tr','Ct','Pk','Ss'],
		weekHeader: 'Nav',
		dateFormat: 'dd-mm-yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['lv']);
});/* Malayalam (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Saji Nediyanchath (saji89@gmail.com). */
jQuery(function($){
	$.datepicker.regional['ml'] = {
		closeText: '啻多窗啻?,
		prevText: '啻祦啻ㄠ祶啻ㄠ搐嗟嵿搐嗟?,  
		nextText: '啻呧礋嗟佮搐嗟嵿搐啻む祶 ',
		currentText: '啻囙川嗟嵿川嗟?,
		monthNames: ['啻溹川嗟佮吹啻班纯','啻祮啻祶啻班祦啻掂窗啻?,'啻淳啻班祶鈥嵿礆嗟嵿礆嗟?,'啻忇椽嗟嵿窗啻苦床嗟嶁€?,'啻祰啻祶','啻溹祩啻｀祶鈥?,
		'啻溹祩啻侧祱','啻嗋礂啻膏祶啻编祶啻编祶','啻膏祮啻祶啻编祶啻编磦啻窗嗟嶁€?,'啻掄磿嗟嵿礋嗟嬥船啻班祶鈥?,'啻ㄠ吹啻傕船啻班祶鈥?,'啻∴纯啻膏磦啻窗嗟嶁€?],
		monthNamesShort: ['啻溹川嗟?, '啻祮啻祶', '啻淳啻班祶鈥?, '啻忇椽嗟嵿窗啻?, '啻祰啻祶', '啻溹祩啻｀祶鈥?,
		'啻溹祩啻侧淳', '啻嗋礂', '啻膏祮啻祶', '啻掄磿嗟嵿礋嗟?, '啻ㄠ吹啻?, '啻∴纯啻?],
		dayNames: ['啻炧淳啻窗嗟嶁€?, '啻む纯啻權祶啻曕闯嗟嶁€?, '啻氞祳啻掂祶啻?, '啻祦啻о川嗟嶁€?, '啻掂祶啻淳啻脆磦', '啻掂祮啻赤祶啻赤纯', '啻多川啻?],
		dayNamesShort: ['啻炧淳啻?, '啻む纯啻權祶啻?, '啻氞祳啻掂祶啻?, '啻祦啻?, '啻掂祶啻淳啻脆磦', '啻掂祮啻赤祶啻赤纯', '啻多川啻?],
		dayNamesMin: ['啻炧淳','啻む纯','啻氞祳','啻祦','啻掂祶啻淳','啻掂祮','啻?],
		weekHeader: '啻?,
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ml']);
});
/* Malaysian initialisation for the jQuery UI date picker plugin. */
/* Written by Mohd Nawawi Mohamad Jamili (nawawi@ronggeng.net). */
jQuery(function($){
	$.datepicker.regional['ms'] = {
		closeText: 'Tutup',
		prevText: '&#x3C;Sebelum',
		nextText: 'Selepas&#x3E;',
		currentText: 'hari ini',
		monthNames: ['Januari','Februari','Mac','April','Mei','Jun',
		'Julai','Ogos','September','Oktober','November','Disember'],
		monthNamesShort: ['Jan','Feb','Mac','Apr','Mei','Jun',
		'Jul','Ogo','Sep','Okt','Nov','Dis'],
		dayNames: ['Ahad','Isnin','Selasa','Rabu','Khamis','Jumaat','Sabtu'],
		dayNamesShort: ['Aha','Isn','Sel','Rab','kha','Jum','Sab'],
		dayNamesMin: ['Ah','Is','Se','Ra','Kh','Ju','Sa'],
		weekHeader: 'Mg',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ms']);
});/* Dutch (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Mathias Bynens <http://mathiasbynens.be/> */
jQuery(function($){
	$.datepicker.regional.nl = {
		closeText: 'Sluiten',
		prevText: '鈫?,
		nextText: '鈫?,
		currentText: 'Vandaag',
		monthNames: ['januari', 'februari', 'maart', 'april', 'mei', 'juni',
		'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
		monthNamesShort: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun',
		'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
		dayNames: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
		dayNamesShort: ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
		dayNamesMin: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
		weekHeader: 'Wk',
		dateFormat: 'dd-mm-yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional.nl);
});/* Norwegian initialisation for the jQuery UI date picker plugin. */
/* Written by Naimdjon Takhirov (naimdjon@gmail.com). */

jQuery(function($){
  $.datepicker.regional['no'] = {
    closeText: 'Lukk',
    prevText: '&#xAB;Forrige',
    nextText: 'Neste&#xBB;',
    currentText: 'I dag',
    monthNames: ['januar','februar','mars','april','mai','juni','juli','august','september','oktober','november','desember'],
    monthNamesShort: ['jan','feb','mar','apr','mai','jun','jul','aug','sep','okt','nov','des'],
    dayNamesShort: ['s酶n','man','tir','ons','tor','fre','l酶r'],
    dayNames: ['s酶ndag','mandag','tirsdag','onsdag','torsdag','fredag','l酶rdag'],
    dayNamesMin: ['s酶','ma','ti','on','to','fr','l酶'],
    weekHeader: 'Uke',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['no']);
});
/* Polish initialisation for the jQuery UI date picker plugin. */
/* Written by Jacek Wysocki (jacek.wysocki@gmail.com). */
jQuery(function($){
	$.datepicker.regional['pl'] = {
		closeText: 'Zamknij',
		prevText: '&#x3C;Poprzedni',
		nextText: 'Nast臋pny&#x3E;',
		currentText: 'Dzi艣',
		monthNames: ['Stycze艅','Luty','Marzec','Kwiecie艅','Maj','Czerwiec',
		'Lipiec','Sierpie艅','Wrzesie艅','Pa藕dziernik','Listopad','Grudzie艅'],
		monthNamesShort: ['Sty','Lu','Mar','Kw','Maj','Cze',
		'Lip','Sie','Wrz','Pa','Lis','Gru'],
		dayNames: ['Niedziela','Poniedzia艂ek','Wtorek','艢roda','Czwartek','Pi膮tek','Sobota'],
		dayNamesShort: ['Nie','Pn','Wt','艢r','Czw','Pt','So'],
		dayNamesMin: ['N','Pn','Wt','艢r','Cz','Pt','So'],
		weekHeader: 'Tydz',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['pl']);
});
/* Brazilian initialisation for the jQuery UI date picker plugin. */
/* Written by Leonildo Costa Silva (leocsilva@gmail.com). */
jQuery(function($){
	$.datepicker.regional['pt-BR'] = {
		closeText: 'Fechar',
		prevText: '&#x3C;Anterior',
		nextText: 'Pr&#xF3;ximo&#x3E;',
		currentText: 'Hoje',
		monthNames: ['Janeiro','Fevereiro','Mar&#xE7;o','Abril','Maio','Junho',
		'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
		'Jul','Ago','Set','Out','Nov','Dez'],
		dayNames: ['Domingo','Segunda-feira','Ter&#xE7;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','S&#xE1;bado'],
		dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','S&#xE1;b'],
		dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','S&#xE1;b'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['pt-BR']);
});/* Portuguese initialisation for the jQuery UI date picker plugin. */
jQuery(function($){
	$.datepicker.regional['pt'] = {
		closeText: 'Fechar',
		prevText: '&#x3C;Anterior',
		nextText: 'Seguinte',
		currentText: 'Hoje',
		monthNames: ['Janeiro','Fevereiro','Mar&#xE7;o','Abril','Maio','Junho',
		'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
		monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
		'Jul','Ago','Set','Out','Nov','Dez'],
		dayNames: ['Domingo','Segunda-feira','Ter&#xE7;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','S&#xE1;bado'],
		dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','S&#xE1;b'],
		dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','S&#xE1;b'],
		weekHeader: 'Sem',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['pt']);
});/* Romansh initialisation for the jQuery UI date picker plugin. */
/* Written by Yvonne Gienal (yvonne.gienal@educa.ch). */
jQuery(function($){
	$.datepicker.regional['rm'] = {
		closeText: 'Serrar',
		prevText: '&#x3C;Suandant',
		nextText: 'Precedent&#x3E;',
		currentText: 'Actual',
		monthNames: ['Schaner','Favrer','Mars','Avrigl','Matg','Zercladur', 'Fanadur','Avust','Settember','October','November','December'],
		monthNamesShort: ['Scha','Fev','Mar','Avr','Matg','Zer', 'Fan','Avu','Sett','Oct','Nov','Dec'],
		dayNames: ['Dumengia','Glindesdi','Mardi','Mesemna','Gievgia','Venderdi','Sonda'],
		dayNamesShort: ['Dum','Gli','Mar','Mes','Gie','Ven','Som'],
		dayNamesMin: ['Du','Gl','Ma','Me','Gi','Ve','So'],
		weekHeader: 'emna',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['rm']);
});
/* Romanian initialisation for the jQuery UI date picker plugin.
 *
 * Written by Edmond L. (ll_edmond@walla.com)
 * and Ionut G. Stan (ionut.g.stan@gmail.com)
 */
jQuery(function($){
	$.datepicker.regional['ro'] = {
		closeText: '脦nchide',
		prevText: '&#xAB; Luna precedent膬',
		nextText: 'Luna urm膬toare &#xBB;',
		currentText: 'Azi',
		monthNames: ['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie',
		'Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie'],
		monthNamesShort: ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun',
		'Iul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		dayNames: ['Duminic膬', 'Luni', 'Mar牛i', 'Miercuri', 'Joi', 'Vineri', 'S芒mb膬t膬'],
		dayNamesShort: ['Dum', 'Lun', 'Mar', 'Mie', 'Joi', 'Vin', 'S芒m'],
		dayNamesMin: ['Du','Lu','Ma','Mi','Jo','Vi','S芒'],
		weekHeader: 'S膬pt',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ro']);
});
/* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Andrew Stromnov (stromnov@gmail.com). */
jQuery(function($){
	$.datepicker.regional['ru'] = {
		closeText: '袟邪泻褉褘褌褜',
		prevText: '&#x3C;袩褉械写',
		nextText: '小谢械写&#x3E;',
		currentText: '小械谐芯写薪褟',
		monthNames: ['携薪胁邪褉褜','肖械胁褉邪谢褜','袦邪褉褌','袗锌褉械谢褜','袦邪泄','袠褞薪褜',
		'袠褞谢褜','袗胁谐褍褋褌','小械薪褌褟斜褉褜','袨泻褌褟斜褉褜','袧芯褟斜褉褜','袛械泻邪斜褉褜'],
		monthNamesShort: ['携薪胁','肖械胁','袦邪褉','袗锌褉','袦邪泄','袠褞薪',
		'袠褞谢','袗胁谐','小械薪','袨泻褌','袧芯褟','袛械泻'],
		dayNames: ['胁芯褋泻褉械褋械薪褜械','锌芯薪械写械谢褜薪懈泻','胁褌芯褉薪懈泻','褋褉械写邪','褔械褌胁械褉谐','锌褟褌薪懈褑邪','褋褍斜斜芯褌邪'],
		dayNamesShort: ['胁褋泻','锌薪写','胁褌褉','褋褉写','褔褌胁','锌褌薪','褋斜褌'],
		dayNamesMin: ['袙褋','袩薪','袙褌','小褉','效褌','袩褌','小斜'],
		weekHeader: '袧械写',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
});/* Slovak initialisation for the jQuery UI date picker plugin. */
/* Written by Vojtech Rinik (vojto@hmm.sk). */
jQuery(function($){
	$.datepicker.regional['sk'] = {
		closeText: 'Zavrie钮',
		prevText: '&#x3C;Predch谩dzaj煤ci',
		nextText: 'Nasleduj煤ci&#x3E;',
		currentText: 'Dnes',
		monthNames: ['Janu谩r','Febru谩r','Marec','Apr铆l','M谩j','J煤n',
		'J煤l','August','September','Okt贸ber','November','December'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','M谩j','J煤n',
		'J煤l','Aug','Sep','Okt','Nov','Dec'],
		dayNames: ['Nede木a','Pondelok','Utorok','Streda','艩tvrtok','Piatok','Sobota'],
		dayNamesShort: ['Ned','Pon','Uto','Str','艩tv','Pia','Sob'],
		dayNamesMin: ['Ne','Po','Ut','St','艩t','Pia','So'],
		weekHeader: 'Ty',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['sk']);
});
/* Slovenian initialisation for the jQuery UI date picker plugin. */
/* Written by Jaka Jancar (jaka@kubje.org). */
/* c = &#x10D;, s = &#x161; z = &#x17E; C = &#x10C; S = &#x160; Z = &#x17D; */
jQuery(function($){
	$.datepicker.regional['sl'] = {
		closeText: 'Zapri',
		prevText: '&#x3C;Prej&#x161;nji',
		nextText: 'Naslednji&#x3E;',
		currentText: 'Trenutni',
		monthNames: ['Januar','Februar','Marec','April','Maj','Junij',
		'Julij','Avgust','September','Oktober','November','December'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
		'Jul','Avg','Sep','Okt','Nov','Dec'],
		dayNames: ['Nedelja','Ponedeljek','Torek','Sreda','&#x10C;etrtek','Petek','Sobota'],
		dayNamesShort: ['Ned','Pon','Tor','Sre','&#x10C;et','Pet','Sob'],
		dayNamesMin: ['Ne','Po','To','Sr','&#x10C;e','Pe','So'],
		weekHeader: 'Teden',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['sl']);
});
/* Albanian initialisation for the jQuery UI date picker plugin. */
/* Written by Flakron Bytyqi (flakron@gmail.com). */
jQuery(function($){
	$.datepicker.regional['sq'] = {
		closeText: 'mbylle',
		prevText: '&#x3C;mbrapa',
		nextText: 'P毛rpara&#x3E;',
		currentText: 'sot',
		monthNames: ['Janar','Shkurt','Mars','Prill','Maj','Qershor',
		'Korrik','Gusht','Shtator','Tetor','N毛ntor','Dhjetor'],
		monthNamesShort: ['Jan','Shk','Mar','Pri','Maj','Qer',
		'Kor','Gus','Sht','Tet','N毛n','Dhj'],
		dayNames: ['E Diel','E H毛n毛','E Mart毛','E M毛rkur毛','E Enjte','E Premte','E Shtune'],
		dayNamesShort: ['Di','H毛','Ma','M毛','En','Pr','Sh'],
		dayNamesMin: ['Di','H毛','Ma','M毛','En','Pr','Sh'],
		weekHeader: 'Ja',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['sq']);
});
/* Serbian i18n for the jQuery UI date picker plugin. */
/* Written by Dejan Dimi膰. */
jQuery(function($){
	$.datepicker.regional['sr-SR'] = {
		closeText: 'Zatvori',
		prevText: '&#x3C;',
		nextText: '&#x3E;',
		currentText: 'Danas',
		monthNames: ['Januar','Februar','Mart','April','Maj','Jun',
		'Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
		'Jul','Avg','Sep','Okt','Nov','Dec'],
		dayNames: ['Nedelja','Ponedeljak','Utorak','Sreda','膶etvrtak','Petak','Subota'],
		dayNamesShort: ['Ned','Pon','Uto','Sre','膶et','Pet','Sub'],
		dayNamesMin: ['Ne','Po','Ut','Sr','膶e','Pe','Su'],
		weekHeader: 'Sed',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['sr-SR']);
});
/* Serbian i18n for the jQuery UI date picker plugin. */
/* Written by Dejan Dimi膰. */
jQuery(function($){
	$.datepicker.regional['sr'] = {
		closeText: '袟邪褌胁芯褉懈',
		prevText: '&#x3C;',
		nextText: '&#x3E;',
		currentText: '袛邪薪邪褋',
		monthNames: ['袌邪薪褍邪褉','肖械斜褉褍邪褉','袦邪褉褌','袗锌褉懈谢','袦邪褬','袌褍薪',
		'袌褍谢','袗胁谐褍褋褌','小械锌褌械屑斜邪褉','袨泻褌芯斜邪褉','袧芯胁械屑斜邪褉','袛械褑械屑斜邪褉'],
		monthNamesShort: ['袌邪薪','肖械斜','袦邪褉','袗锌褉','袦邪褬','袌褍薪',
		'袌褍谢','袗胁谐','小械锌','袨泻褌','袧芯胁','袛械褑'],
		dayNames: ['袧械写械褭邪','袩芯薪械写械褭邪泻','校褌芯褉邪泻','小褉械写邪','效械褌胁褉褌邪泻','袩械褌邪泻','小褍斜芯褌邪'],
		dayNamesShort: ['袧械写','袩芯薪','校褌芯','小褉械','效械褌','袩械褌','小褍斜'],
		dayNamesMin: ['袧械','袩芯','校褌','小褉','效械','袩械','小褍'],
		weekHeader: '小械写',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['sr']);
});
/* Swedish initialisation for the jQuery UI date picker plugin. */
/* Written by Anders Ekdahl ( anders@nomadiz.se). */
jQuery(function($){
    $.datepicker.regional['sv'] = {
		closeText: 'St盲ng',
        prevText: '&#xAB;F枚rra',
		nextText: 'N盲sta&#xBB;',
		currentText: 'Idag',
        monthNames: ['Januari','Februari','Mars','April','Maj','Juni',
        'Juli','Augusti','September','Oktober','November','December'],
        monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
        'Jul','Aug','Sep','Okt','Nov','Dec'],
		dayNamesShort: ['S枚n','M氓n','Tis','Ons','Tor','Fre','L枚r'],
		dayNames: ['S枚ndag','M氓ndag','Tisdag','Onsdag','Torsdag','Fredag','L枚rdag'],
		dayNamesMin: ['S枚','M氓','Ti','On','To','Fr','L枚'],
		weekHeader: 'Ve',
        dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['sv']);
});
/* Tamil (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by S A Sureshkumar (saskumar@live.com). */
jQuery(function($){
	$.datepicker.regional['ta'] = {
		closeText: '喈瘋喈熰瘉',
		prevText: '喈瘉喈┼瘝喈┼瘓喈喁?,
		nextText: '喈呧疅喁佮喁嵿喈む瘉',
		currentText: '喈囙喁嵿喁?,
		monthNames: ['喈む瘓','喈喈氞','喈畽喁嵿畷喁佮喈?,'喈氞喈む瘝喈む喈班瘓','喈掂瘓喈曕喈氞','喈嗋喈?,
		'喈嗋疅喈?,'喈嗋喈｀','喈瘉喈班疅喁嵿疅喈距畾喈?,'喈愢喁嵿喈氞','喈曕喈班瘝喈む瘝喈む喈曕瘓','喈喈班瘝喈曕喈?],
		monthNamesShort: ['喈む瘓','喈喈氞','喈畽喁?,'喈氞喈む瘝','喈掂瘓喈曕','喈嗋喈?,
		'喈嗋疅喈?,'喈嗋','喈瘉喈?,'喈愢喁?,'喈曕喈班瘝','喈喈班瘝'],
		dayNames: ['喈炧喈喈编瘝喈编瘉喈曕瘝喈曕喈脆喁?,'喈む喈權瘝喈曕疅喁嵿畷喈苦喈瘓','喈氞瘑喈掂瘝喈掂喈瘝喈曕瘝喈曕喈脆喁?,'喈瘉喈む喁嵿畷喈苦喈瘓','喈掂喈喈脆畷喁嵿畷喈苦喈瘓','喈掂瘑喈赤瘝喈赤喈曕瘝喈曕喈脆喁?,'喈氞喈苦畷喁嵿畷喈苦喈瘓'],
		dayNamesShort: ['喈炧喈喈编瘉','喈む喈權瘝喈曕喁?,'喈氞瘑喈掂瘝喈掂喈瘝','喈瘉喈む喁?,'喈掂喈喈脆喁?,'喈掂瘑喈赤瘝喈赤','喈氞喈?],
		dayNamesMin: ['喈炧','喈む','喈氞瘑','喈瘉','喈掂','喈掂瘑','喈?],
		weekHeader: '袧械',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ta']);
});
/* Thai initialisation for the jQuery UI date picker plugin. */
/* Written by pipo (pipo@sixhead.com). */
jQuery(function($){
	$.datepicker.regional['th'] = {
		closeText: '喔涏复喔?,
		prevText: '&#xAB;&#xA0;喔⑧箟喔笝',
		nextText: '喔栢副喔斷箘喔?#xA0;&#xBB;',
		currentText: '喔о副喔權笝喔掂箟',
		monthNames: ['喔∴竵喔｀覆喔勦浮','喔佮父喔∴笭喔侧笧喔编笝喔樴箤','喔∴傅喔權覆喔勦浮','喙€喔∴俯喔侧涪喔?,'喔炧袱喔┼笭喔侧竸喔?,'喔∴复喔栢父喔權覆喔⑧笝',
		'喔佮福喔佮笌喔侧竸喔?,'喔复喔囙斧喔侧竸喔?,'喔佮副喔權涪喔侧涪喔?,'喔曕父喔ム覆喔勦浮','喔炧袱喔ㄠ笀喔脆竵喔侧涪喔?,'喔樴副喔權抚喔侧竸喔?],
		monthNamesShort: ['喔?喔?','喔?喔?','喔∴傅.喔?','喙€喔?喔?','喔?喔?','喔∴复.喔?',
		'喔?喔?','喔?喔?','喔?喔?','喔?喔?','喔?喔?','喔?喔?'],
		dayNames: ['喔覆喔椸复喔曕涪喙?,'喔堗副喔權笚喔｀箤','喔副喔囙竸喔侧福','喔炧父喔?,'喔炧袱喔副喔笟喔斷傅','喔ㄠ父喔佮福喙?,'喙€喔覆喔｀箤'],
		dayNamesShort: ['喔覆.','喔?','喔?','喔?','喔炧袱.','喔?','喔?'],
		dayNamesMin: ['喔覆.','喔?','喔?','喔?','喔炧袱.','喔?','喔?'],
		weekHeader: 'Wk',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['th']);
});/* Tajiki (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Abdurahmon Saidov (saidovab@gmail.com). */
jQuery(function($){
	$.datepicker.regional['tj'] = {
		closeText: '袠写芯屑邪',
		prevText: '&#x3c;覛邪褎芯',
		nextText: '袩械褕&#x3e;',
		currentText: '袠屑褉盈蟹',
		monthNames: ['携薪胁邪褉','肖械胁褉邪谢','袦邪褉褌','袗锌褉械谢','袦邪泄','袠褞薪',
		'袠褞谢','袗胁谐褍褋褌','小械薪褌褟斜褉','袨泻褌褟斜褉','袧芯褟斜褉','袛械泻邪斜褉'],
		monthNamesShort: ['携薪胁','肖械胁','袦邪褉','袗锌褉','袦邪泄','袠褞薪',
		'袠褞谢','袗胁谐','小械薪','袨泻褌','袧芯褟','袛械泻'],
		dayNames: ['褟泻褕邪薪斜械','写褍褕邪薪斜械','褋械褕邪薪斜械','褔芯褉褕邪薪斜械','锌邪薪曳褕邪薪斜械','曳褍屑褗邪','褕邪薪斜械'],
		dayNamesShort: ['褟泻褕','写褍褕','褋械褕','褔芯褉','锌邪薪','曳褍屑','褕邪薪'],
		dayNamesMin: ['携泻','袛褕','小褕','效褕','袩褕','叶屑','楔薪'],
		weekHeader: '啸褎',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['tj']);
});/* Turkish initialisation for the jQuery UI date picker plugin. */
/* Written by Izzet Emre Erkan (kara@karalamalar.net). */
jQuery(function($){
	$.datepicker.regional['tr'] = {
		closeText: 'kapat',
		prevText: '&#x3C;geri',
		nextText: 'ileri&#x3e',
		currentText: 'bug眉n',
		monthNames: ['Ocak','艦ubat','Mart','Nisan','May谋s','Haziran',
		'Temmuz','A臒ustos','Eyl眉l','Ekim','Kas谋m','Aral谋k'],
		monthNamesShort: ['Oca','艦ub','Mar','Nis','May','Haz',
		'Tem','A臒u','Eyl','Eki','Kas','Ara'],
		dayNames: ['Pazar','Pazartesi','Sal谋','脟ar艧amba','Per艧embe','Cuma','Cumartesi'],
		dayNamesShort: ['Pz','Pt','Sa','脟a','Pe','Cu','Ct'],
		dayNamesMin: ['Pz','Pt','Sa','脟a','Pe','Cu','Ct'],
		weekHeader: 'Hf',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['tr']);
});/* Ukrainian (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Maxim Drogobitskiy (maxdao@gmail.com). */
jQuery(function($){
	$.datepicker.regional['uk'] = {
		closeText: '袟邪泻褉懈褌懈',
		prevText: '&#x3C;',
		nextText: '&#x3E;',
		currentText: '小褜芯谐芯写薪褨',
		monthNames: ['小褨褔械薪褜','袥褞褌懈泄','袘械褉械蟹械薪褜','袣胁褨褌械薪褜','孝褉邪胁械薪褜','效械褉胁械薪褜',
		'袥懈锌械薪褜','小械褉锌械薪褜','袙械褉械褋械薪褜','袞芯胁褌械薪褜','袥懈褋褌芯锌邪写','袚褉褍写械薪褜'],
		monthNamesShort: ['小褨褔','袥褞褌','袘械褉','袣胁褨','孝褉邪','效械褉',
		'袥懈锌','小械褉','袙械褉','袞芯胁','袥懈褋','袚褉褍'],
		dayNames: ['薪械写褨谢褟','锌芯薪械写褨谢芯泻','胁褨胁褌芯褉芯泻','褋械褉械写邪','褔械褌胁械褉','锌鈥櫻徰傂叫秆喲?,'褋褍斜芯褌邪'],
		dayNamesShort: ['薪械写','锌薪写','胁褨胁','褋褉写','褔褌胁','锌褌薪','褋斜褌'],
		dayNamesMin: ['袧写','袩薪','袙褌','小褉','效褌','袩褌','小斜'],
		weekHeader: '袧械',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['uk']);
});/* Vietnamese initialisation for the jQuery UI date picker plugin. */
/* Translated by Le Thanh Huy (lthanhhuy@cit.ctu.edu.vn). */
jQuery(function($){
	$.datepicker.regional['vi'] = {
		closeText: '膼贸ng',
		prevText: '&#x3C;Tr瓢峄沜',
		nextText: 'Ti岷縫&#x3E;',
		currentText: 'H么m nay',
		monthNames: ['Th谩ng M峄檛', 'Th谩ng Hai', 'Th谩ng Ba', 'Th谩ng T瓢', 'Th谩ng N膬m', 'Th谩ng S谩u',
		'Th谩ng B岷', 'Th谩ng T谩m', 'Th谩ng Ch铆n', 'Th谩ng M瓢峄漣', 'Th谩ng M瓢峄漣 M峄檛', 'Th谩ng M瓢峄漣 Hai'],
		monthNamesShort: ['Th谩ng 1', 'Th谩ng 2', 'Th谩ng 3', 'Th谩ng 4', 'Th谩ng 5', 'Th谩ng 6',
		'Th谩ng 7', 'Th谩ng 8', 'Th谩ng 9', 'Th谩ng 10', 'Th谩ng 11', 'Th谩ng 12'],
		dayNames: ['Ch峄?Nh岷璽', 'Th峄?Hai', 'Th峄?Ba', 'Th峄?T瓢', 'Th峄?N膬m', 'Th峄?S谩u', 'Th峄?B岷'],
		dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
		dayNamesMin: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
		weekHeader: 'Tu',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['vi']);
});
/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by Cloudream (cloudream@gmail.com). */
jQuery(function($){
	$.datepicker.regional['zh-CN'] = {
		closeText: '鍏抽棴',
		prevText: '&#x3C;涓婃湀',
		nextText: '涓嬫湀&#x3E;',
		currentText: '浠婂ぉ',
		monthNames: ['涓€鏈?,'浜屾湀','涓夋湀','鍥涙湀','浜旀湀','鍏湀',
		'涓冩湀','鍏湀','涔濇湀','鍗佹湀','鍗佷竴鏈?,'鍗佷簩鏈?],
		monthNamesShort: ['涓€','浜?,'涓?,'鍥?,'浜?,'鍏?,
		'涓?,'鍏?,'涔?,'鍗?,'鍗佷竴','鍗佷簩'],
		dayNames: ['鏄熸湡鏃?,'鏄熸湡涓€','鏄熸湡浜?,'鏄熸湡涓?,'鏄熸湡鍥?,'鏄熸湡浜?,'鏄熸湡鍏?],
		dayNamesShort: ['鍛ㄦ棩','鍛ㄤ竴','鍛ㄤ簩','鍛ㄤ笁','鍛ㄥ洓','鍛ㄤ簲','鍛ㄥ叚'],
		dayNamesMin: ['鏃?,'涓€','浜?,'涓?,'鍥?,'浜?,'鍏?],
		weekHeader: '鍛?,
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '骞?};
	$.datepicker.setDefaults($.datepicker.regional['zh-CN']);
});
/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by SCCY (samuelcychan@gmail.com). */
jQuery(function($){
	$.datepicker.regional['zh-HK'] = {
		closeText: '闂滈枆',
		prevText: '&#x3C;涓婃湀',
		nextText: '涓嬫湀&#x3E;',
		currentText: '浠婂ぉ',
		monthNames: ['涓€鏈?,'浜屾湀','涓夋湀','鍥涙湀','浜旀湀','鍏湀',
		'涓冩湀','鍏湀','涔濇湀','鍗佹湀','鍗佷竴鏈?,'鍗佷簩鏈?],
		monthNamesShort: ['涓€','浜?,'涓?,'鍥?,'浜?,'鍏?,
		'涓?,'鍏?,'涔?,'鍗?,'鍗佷竴','鍗佷簩'],
		dayNames: ['鏄熸湡鏃?,'鏄熸湡涓€','鏄熸湡浜?,'鏄熸湡涓?,'鏄熸湡鍥?,'鏄熸湡浜?,'鏄熸湡鍏?],
		dayNamesShort: ['鍛ㄦ棩','鍛ㄤ竴','鍛ㄤ簩','鍛ㄤ笁','鍛ㄥ洓','鍛ㄤ簲','鍛ㄥ叚'],
		dayNamesMin: ['鏃?,'涓€','浜?,'涓?,'鍥?,'浜?,'鍏?],
		weekHeader: '鍛?,
		dateFormat: 'dd-mm-yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '骞?};
	$.datepicker.setDefaults($.datepicker.regional['zh-HK']);
});
/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by Ressol (ressol@gmail.com). */
jQuery(function($){
	$.datepicker.regional['zh-TW'] = {
		closeText: '闂滈枆',
		prevText: '&#x3C;涓婃湀',
		nextText: '涓嬫湀&#x3E;',
		currentText: '浠婂ぉ',
		monthNames: ['涓€鏈?,'浜屾湀','涓夋湀','鍥涙湀','浜旀湀','鍏湀',
		'涓冩湀','鍏湀','涔濇湀','鍗佹湀','鍗佷竴鏈?,'鍗佷簩鏈?],
		monthNamesShort: ['涓€','浜?,'涓?,'鍥?,'浜?,'鍏?,
		'涓?,'鍏?,'涔?,'鍗?,'鍗佷竴','鍗佷簩'],
		dayNames: ['鏄熸湡鏃?,'鏄熸湡涓€','鏄熸湡浜?,'鏄熸湡涓?,'鏄熸湡鍥?,'鏄熸湡浜?,'鏄熸湡鍏?],
		dayNamesShort: ['鍛ㄦ棩','鍛ㄤ竴','鍛ㄤ簩','鍛ㄤ笁','鍛ㄥ洓','鍛ㄤ簲','鍛ㄥ叚'],
		dayNamesMin: ['鏃?,'涓€','浜?,'涓?,'鍥?,'浜?,'鍏?],
		weekHeader: '鍛?,
		dateFormat: 'yy/mm/dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '骞?};
	$.datepicker.setDefaults($.datepicker.regional['zh-TW']);
});
