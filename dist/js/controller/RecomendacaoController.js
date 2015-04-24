function RecomendacaoController($scope, $http) {

	executa();
	setInterval(function() {
		executa();
	}, 5000);


	function executa(){
		 $http
		  .jsonp("http://mirrorfashion.caelum.com.br/produtos?callback=JSON_CALLBACK")
  		  .success(function(retorno) {
		    $scope.produtos = retorno.produtos;
		  });
	}
}
