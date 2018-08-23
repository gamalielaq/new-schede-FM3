function calcoleTotale(){

	var dom01 = $('input[name=formCCE\\:DOM01]:checked').attr('id');
	var dom02 = $('input[name=formCCE\\:DOM02]:checked').attr('id');
	var dom03 = $('input[name=formCCE\\:DOM03]:checked').attr('id');
	var dom04 = $('input[name=formCCE\\:DOM04]:checked').attr('id');
	var dom05 = $('input[name=formCCE\\:DOM05]:checked').attr('id');
	var dom06 = $('input[name=formCCE\\:DOM06]:checked').attr('id');




	if(dom01)
		dom01 = dom01.replace(":", "\\:");
	if(dom02)
		dom02 = dom02.replace(":", "\\:");
	if(dom03)
		dom03 = dom03.replace(":", "\\:");
	if(dom04)
		dom04 = dom04.replace(":", "\\:");
	if(dom05)
		dom05 = dom05.replace(":", "\\:");
	if(dom06)
		dom06 = dom06.replace(":", "\\:");
	

	var selected01Lbl = $("label[for='"+dom01+"']").text();
	var selected02Lbl = $("label[for='"+dom02+"']").text();
	var selected03Lbl = $("label[for='"+dom03+"']").text();
	var selected04Lbl = $("label[for='"+dom04+"']").text(); 
	var selected05Lbl = $("label[for='"+dom05+"']").text();
	var selected06Lbl = $("label[for='"+dom06+"']").text();

	var tot = 0.0;

	if(selected01Lbl && selected01Lbl=='Non limitata'){
		tot = tot +1;
	}
	if(selected01Lbl && selected01Lbl=='Molto limitata'){
		tot = tot +2;
	}
	if(selected01Lbl && selected01Lbl=='Leggermente limitata'){
		tot = tot +3;
	}
	if(selected01Lbl && selected01Lbl=='Nessuna limitazione'){
		tot = tot +4;
	}

	
	
	if(selected02Lbl && selected02Lbl=='Costantemente Umida'){
		tot = tot +1;
	}
	if(selected02Lbl && selected02Lbl=='Molto umida'){
		tot = tot +2;
	}
	if(selected02Lbl && selected02Lbl=='Occasionalmente umida'){
		tot = tot +3;
	}
	if(selected02Lbl && selected02Lbl=='Raramente umida'){
		tot = tot +4;
	}
	
	
	
	if(selected03Lbl && selected03Lbl=='Allettato'){
		tot = tot +1;
	}
	if(selected03Lbl && selected03Lbl=='In poltrona'){
		tot = tot +2;
	}
	if(selected03Lbl && selected03Lbl=='Cammina Occasionalmente'){
		tot = tot +3;
	}
	if(selected03Lbl && selected03Lbl=='Cammina di Frequente'){
		tot = tot +4;
	}
	
	
	
	if(selected04Lbl && selected04Lbl=='Completamente Immobile'){
		tot = tot +1;
	}
	if(selected04Lbl && selected04Lbl=='Molto limitata'){
		tot = tot +2;
	}
	if(selected04Lbl && selected04Lbl=='Parzialmente limitata'){
		tot = tot +3;
	}
	if(selected04Lbl && selected04Lbl=='Limitazioni assenti'){
		tot = tot +4;
	}
	
	
	
	if(selected05Lbl && selected05Lbl=='Molto Povera'){
		tot = tot +1;
	}
	if(selected05Lbl && selected05Lbl=='Probabilmente Inadeguata'){
		tot = tot +2;
	}
	if(selected05Lbl && selected05Lbl=='Adeguata'){
		tot = tot +3;
	}
	if(selected05Lbl && selected05Lbl=='Eccellente'){
		tot = tot +4;
	}

		
	
	
	if(selected06Lbl && selected06Lbl=='Problema'){
		tot = tot +1;
	}
	if(selected06Lbl && selected06Lbl=='Problema Potenziale'){
		tot = tot +2;
	}
	if(selected06Lbl && selected06Lbl=='Senza problemi apparenti'){
		tot = tot +3;
	}

	
	$('#formCCE\\:TOT01R01').val(tot);

}
