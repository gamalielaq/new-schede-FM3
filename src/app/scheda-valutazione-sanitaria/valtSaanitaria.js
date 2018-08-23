function calcoleTotale(){

	var dom06 = $('input[name=formCCE\\:D06]:checked').attr('id');
	var dom07 = $('input[name=formCCE\\:D07]:checked').attr('id');
	var dom08 = $('input[name=formCCE\\:D08]:checked').attr('id');
	var dom09 = $('input[name=formCCE\\:D09]:checked').attr('id');
	
	var dom10 = $('input[name=formCCE\\:D10]:checked').attr('id');
	var dom11 = $('input[name=formCCE\\:D11]:checked').attr('id'); 
	var dom12 = $('input[name=formCCE\\:D12]:checked').attr('id');

	var dom13 = $('input[name=formCCE\\:D13]:checked').attr('id');
	var dom14 = $('input[name=formCCE\\:D14]:checked').attr('id');
	var dom15 = $('input[name=formCCE\\:D15]:checked').attr('id');
	var dom16 = $('input[name=formCCE\\:D16]:checked').attr('id');


	if(dom06)
		dom06 = dom06.replace(":", "\\:");
	if(dom07)
		dom07 = dom07.replace(":", "\\:");
	if(dom08)
		dom08 = dom08.replace(":", "\\:");
	if(dom09)
		dom09 = dom09.replace(":", "\\:");
	if(dom10)
		dom10 = dom10.replace(":", "\\:");
	
	if(dom11)
		dom11 = dom11.replace(":", "\\:");
	if(dom12)
		dom12 = dom12.replace(":", "\\:");
	if(dom13)
		dom13 = dom13.replace(":", "\\:");
	if(dom14)
		dom14 = dom14.replace(":", "\\:");
	if(dom15)
		dom15 = dom15.replace(":", "\\:");
	if(dom16)
		dom16 = dom16.replace(":", "\\:");


	var selected06Lbl = $("label[for='"+dom06+"']").text();

	var selected07Lbl = $("label[for='"+dom07+"']").text(); 
	var selected08Lbl = $("label[for='"+dom08+"']").text();
	var selected09Lbl = $("label[for='"+dom09+"']").text();

	var selected10Lbl = $("label[for='"+dom10+"']").text(); 

	var selected11Lbl = $("label[for='"+dom11+"']").text(); 
	var selected12Lbl = $("label[for='"+dom12+"']").text(); 
	var selected13Lbl = $("label[for='"+dom13+"']").text(); 

	var selected14Lbl = $("label[for='"+dom14+"']").text(); 
	var selected15Lbl = $("label[for='"+dom15+"']").text(); 
	var selected16Lbl = $("label[for='"+dom16+"']").text(); 


	var tot = 0.0;
	


	if(selected06Lbl && selected06Lbl=='SI'){
		tot = tot +5;
	}
	
	if(selected07Lbl && selected07Lbl=='SI'){
		tot = tot +10;
	}
	
	if(selected08Lbl && selected08Lbl=='SI'){
		tot = tot +10;
	}
	
	if(selected09Lbl && selected09Lbl=='SI'){
		tot = tot +5;
	}
	
	
	if(selected10Lbl && selected10Lbl=='SI'){
		tot = tot +5;
	}
	if(selected11Lbl && selected11Lbl=='SI'){
		tot = tot +10;
	}
	if(selected12Lbl && selected12Lbl=='SI'){
		tot = tot +10;
	}
	
	
	if(selected13Lbl && selected13Lbl=='SI'){
		tot = tot +5;
	}
	if(selected14Lbl && selected14Lbl=='SI'){
		tot = tot +5;
	}
	if(selected15Lbl && selected15Lbl=='SI'){
		tot = tot +10;
	}
	if(selected16Lbl && selected16Lbl=='SI'){
		tot = tot +5;
	}
	//var tot =(selected1Id && selected2Id && selected3Id)
	$('#formCCE\\:A685').val(tot);		
	
}


