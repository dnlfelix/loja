var formatadorMoeda = (function(){
"use strict"
	var _simbolo = "R$ ";


	return {
	
		numberParaReal : function(numero){
			return _simbolo + numero.toFixed(2).replace(".", ",");
		},
		realParaNumber : function(texto){
			return parseFloat(texto.replace(_simbolo, "").replace(",", "."));
	
		}

	
	};
})();
