function calcoleTotale(){

	calcolaTOTScreening();
	calcolaTOTValutazioneGlobale();
	
	calcolaTOT();
}

function calcolaTOT(){
	var TOTScreening = $('#formCCE\\:SCTOTR01').val();
	var TOTValutazioneGlobale = $('#formCCE\\:VALGLOBTOTR01').val();

	var tot = 0.0;
	if (TOTScreening === undefined || TOTScreening === "" )
		TOTScreening = 0.0;
	if (TOTValutazioneGlobale === undefined || TOTValutazioneGlobale === "" )
		TOTValutazioneGlobale = 0.0;
	tot = tot + Number(TOTScreening) + Number(TOTValutazioneGlobale);
	
	$('#formCCE\\:TOT01R01').val(tot);

}

function onLoad(){
	calcolaBMI();
}


function calcolaBMI(){
	var peso = $('input[name=formCCE\\:BMI01R01]').val();
	var altezza = $('input[name=formCCE\\:BMI02R01]').val();
	
	var BMI = 0.0;
	if ($.isNumeric(peso) && $.isNumeric(altezza)) {
		var BMI = ((100*100*peso) / (altezza*altezza)).toFixed(2);
		$('#formCCE\\:BMI03R01').val(BMI);
	} else {
		$('#formCCE\\:BMI03R01').val(0);
	}
}


function calcolaTOTScreening(){
	
	var scr01 = $('input[name=formCCE\\:SC01]:checked').attr('id');
	var scr02 = $('input[name=formCCE\\:SC02]:checked').attr('id');
	var scr03 = $('input[name=formCCE\\:SC03]:checked').attr('id');
	var scr04 = $('input[name=formCCE\\:SC04]:checked').attr('id');
	var scr06 = $('input[name=formCCE\\:SC06]:checked').attr('id');
	var scr07 = $('input[name=formCCE\\:SC07]:checked').attr('id');

	if(scr01)
		scr01 = scr01.replace(":", "\\:");
	if(scr02)
		scr02 = scr02.replace(":", "\\:");
	if(scr03)
		scr03 = scr03.replace(":", "\\:");
	if(scr04)
		scr04 = scr04.replace(":", "\\:");
	if(scr06)
		scr06 = scr06.replace(":", "\\:");
	if(scr07)
		scr07 = scr07.replace(":", "\\:");

	var selected01Lbl = $("label[for='"+scr01+"']").text();
	var selected02Lbl = $("label[for='"+scr02+"']").text();
	var selected03Lbl = $("label[for='"+scr03+"']").text();
	var selected04Lbl = $("label[for='"+scr04+"']").text();
	var selected06Lbl = $("label[for='"+scr06+"']").text();
	var selected07Lbl = $("label[for='"+scr07+"']").text();
	
	var tot = 0.0;

	if(selected01Lbl && selected01Lbl=='Grave riduzione dell\u0027assunzione di cibo'){
		tot = tot +0;
	}

	
	if(selected01Lbl && selected01Lbl=='Moderata riduzione dell\u0027assunzione di cibo'){
		tot = tot +1;
	}
	if(selected01Lbl && selected01Lbl=='Nessuna riduzione dell\u0027assunzione di cibo'){
		tot = tot +2;
	}
	
	
	if(selected02Lbl && selected02Lbl=='Perdita di peso > 3 kg'){
		tot = tot +0;
	}
	if(selected02Lbl && selected02Lbl=='Non sa'){
		tot = tot +1;
	}
	if(selected02Lbl && selected02Lbl=='Perdita di peso tra 1 e 3 kg'){
		tot = tot +2;
	}
	if(selected02Lbl && selected02Lbl=='Nessuna perdita di peso'){
		tot = tot +3;
	}

	
	
	if(selected03Lbl && selected03Lbl=='Dal letto alla poltrona'){
		tot = tot +0;
	}
	if(selected03Lbl && selected03Lbl=='Autonomo a domicilio'){
		tot = tot +1;
	}
	if(selected03Lbl && selected03Lbl=='Esce di casa'){
		tot = tot +2;
	}

		
	
	if(selected04Lbl && selected04Lbl=='SI'){
		tot = tot +0;
	}
	if(selected04Lbl && selected04Lbl=='NO'){
		tot = tot +2;
	}

	
	
	if(selected06Lbl && selected06Lbl=='Demenza o depressione grave'){
		tot = tot +0;
	}
	if(selected06Lbl && selected06Lbl=='Demenza moderata'){
		tot = tot +1;
	}
	if(selected06Lbl && selected06Lbl=='Nessun problema psicologico'){
		tot = tot +2;
	}
	
	
	if(selected07Lbl && selected07Lbl=='MC < 19'){
		tot = tot +0;
	}
	if(selected07Lbl && selected07Lbl=='19 <= IMC <= 21'){
		tot = tot +1;
	}
	if(selected07Lbl && selected07Lbl=='21 <=D IMC <= 23'){
		tot = tot +2;
	}
	if(selected07Lbl && selected07Lbl=='IMC > 23'){
		tot = tot +3;
	}
	
	$('#formCCE\\:SCTOTR01').val(tot);
	calcolaTOT();
}


function calcolaTOTValutazioneGlobale(){
	
	var vgl01 = $('input[name=formCCE\\:VALGLOB01]:checked').attr('id');
	var vgl02 = $('input[name=formCCE\\:VALGLOB02]:checked').attr('id');
	var vgl03 = $('input[name=formCCE\\:VALGLOB03]:checked').attr('id');
	var vgl04 = $('input[name=formCCE\\:VALGLOB04]:checked').attr('id');
	var vgl05 = $('input[name=formCCE\\:VALGLOB05]:checked').attr('id');
	var vgl06 = $('input[name=formCCE\\:VALGLOB06]:checked').attr('id');
	var vgl07 = $('input[name=formCCE\\:VALGLOB07]:checked').attr('id');
	var vgl08 = $('input[name=formCCE\\:VALGLOB08]:checked').attr('id');
	var vgl09 = $('input[name=formCCE\\:VALGLOB09]:checked').attr('id');
	var vgl10 = $('input[name=formCCE\\:VALGLOB10]:checked').attr('id');
	var vgl11 = $('input[name=formCCE\\:VALGLOB11]:checked').attr('id');
	var vgl12 = $('input[name=formCCE\\:VALGLOB12]:checked').attr('id');
	var vgl13 = $('input[name=formCCE\\:VALGLOB13]:checked').attr('id');
	var vgl14 = $('input[name=formCCE\\:VALGLOB14]:checked').attr('id');
	var vgl15 = $('input[name=formCCE\\:VALGLOB15]:checked').attr('id');

	if(vgl01)
		vgl01 = vgl01.replace(":", "\\:");
	if(vgl02)
		vgl02 = vgl02.replace(":", "\\:");
	if(vgl03)
		vgl03 = vgl03.replace(":", "\\:");
	if(vgl04)
		vgl04 = vgl04.replace(":", "\\:");
	if(vgl05)
		vgl05 = vgl05.replace(":", "\\:");

	if(vgl06)
		vgl06 = vgl06.replace(":", "\\:");
	if(vgl07)
		vgl07 = vgl07.replace(":", "\\:");
	if(vgl08)
		vgl08 = vgl08.replace(":", "\\:");
	if(vgl09)
		vgl09 = vgl09.replace(":", "\\:");
	if(vgl10)
		vgl10 = vgl10.replace(":", "\\:");

	if(vgl11)
		vgl11 = vgl11.replace(":", "\\:");
	if(vgl12)
		vgl12 = vgl12.replace(":", "\\:");
	if(vgl13)
		vgl13 = vgl13.replace(":", "\\:");
	if(vgl14)
		vgl14 = vgl14.replace(":", "\\:");
	if(vgl15)
		vgl15 = vgl15.replace(":", "\\:");

	var selected01Lbl = $("label[for='"+vgl01+"']").text();
	var selected02Lbl = $("label[for='"+vgl02+"']").text();
	var selected03Lbl = $("label[for='"+vgl03+"']").text();
	var selected04Lbl = $("label[for='"+vgl04+"']").text();
	var selected05Lbl = $("label[for='"+vgl05+"']").text();

	var selected06Lbl = $("label[for='"+vgl06+"']").text();
	var selected07Lbl = $("label[for='"+vgl07+"']").text();
	var selected08Lbl = $("label[for='"+vgl08+"']").text();
	var selected09Lbl = $("label[for='"+vgl09+"']").text();
	var selected10Lbl = $("label[for='"+vgl10+"']").text();
	
	var selected11Lbl = $("label[for='"+vgl11+"']").text();
	var selected12Lbl = $("label[for='"+vgl12+"']").text();
	var selected13Lbl = $("label[for='"+vgl13+"']").text();
	var selected14Lbl = $("label[for='"+vgl14+"']").text();
	var selected15Lbl = $("label[for='"+vgl15+"']").text();
	
	var tot = 0.0;


	if(selected01Lbl && selected01Lbl=='SI'){
		tot = tot +1;
	}
	if(selected01Lbl && selected01Lbl=='NO'){
		tot = tot +0;
	}

	
	if(selected02Lbl && selected02Lbl=='SI'){
		tot = tot +0;
	}
	if(selected02Lbl && selected02Lbl=='NO'){
		tot = tot +1;
	}
	
	if(selected03Lbl && selected03Lbl=='SI'){
		tot = tot +0;
	}
	if(selected03Lbl && selected03Lbl=='NO'){
		tot = tot +1;
	}
	

	if(selected04Lbl && selected04Lbl=='1 Pasto'){
		tot = tot +0;
	}
	if(selected04Lbl && selected04Lbl=='2 Pasti'){
		tot = tot +1;
	}
	if(selected04Lbl && selected04Lbl=='3 Pasti'){
		tot = tot +2;
	}

	
	
	if(selected09Lbl && selected09Lbl=='SI'){
		tot = tot +0;
	}
	if(selected09Lbl && selected09Lbl=='NO'){
		tot = tot +1;
	}
	
	
	
	if(selected10Lbl && selected10Lbl=='Meno di 3 bicchieri'){
		tot = tot +0;
	}
	if(selected10Lbl && selected10Lbl=='Da 3 a 5 bicchieri'){
		tot = tot +1;
	}
	if(selected10Lbl && selected10Lbl=='Pi\U00F9 di 5 bicchieri'){
		tot = tot +2;
	}

	

	if(selected11Lbl && selected11Lbl=='Necessita di assistenza'){
		tot = tot +0;
	}
	if(selected11Lbl && selected11Lbl=='Autonomamente con difficolt\U00E0'){
		tot = tot +1;
	}
	if(selected11Lbl && selected11Lbl=='Autonomamente senza difficolt\U00E0'){
		tot = tot +2;
	}

	
	if(selected12Lbl && selected12Lbl=='Malnutrizione grave'){
		tot = tot +0;
	}
	if(selected12Lbl && selected12Lbl=='Malnutrizione moderata o non sa'){
		tot = tot +1;
	}
	if(selected12Lbl && selected12Lbl=='Nessun problema nutrizionale'){
		tot = tot +2;
	}

	if(selected13Lbl && selected13Lbl=='Meno buono'){
		tot = tot +0;
	}
	if(selected13Lbl && selected13Lbl=='Non sa'){
		tot = tot +0.5;
	}
	if(selected13Lbl && selected13Lbl=='Uguale'){
		tot = tot +1;
	}
	if(selected13Lbl && selected13Lbl=='Migliore'){
		tot = tot +2;
	}

	
	if(selected14Lbl && selected14Lbl=='CB < 21'){
		tot = tot +0;
	}
	if(selected14Lbl && selected14Lbl=='CB <= 21 CB <= 22'){
		tot = tot +0.5;
	}
	if(selected14Lbl && selected14Lbl=='CB >22'){
		tot = tot +1;
	}

		
	if(selected15Lbl && selected15Lbl=='CB < 31'){
		tot = tot +0;
	}
	if(selected15Lbl && selected15Lbl=='CB >= 31'){
		tot = tot +1;
	}

	
	 $('#formCCE\\:VALGLOBTOTR01').val(tot);
	calcolaTOT();
}