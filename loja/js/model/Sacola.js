function Sacola() {
	"use strict";

	var total = 0;
	this.obterTotal = function() {

		return total;
	};
	this.incrementarTotal = function() {
		total++;
	};
	this.obterTotal2 = function() {
		if(total == 0){
		return "NÃO tem produto";
		} else if (total == 1){

		return "tem UM produto";
		} else {
		return "tem "+total+" produtos";
		}
	};
}

