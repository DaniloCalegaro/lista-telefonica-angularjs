angular
    .module('listaTelefonica')
    .controller('listaTelefonicaController', function ($scope, contatosAPI, operadorasAPI, serialGenerator) {
        $scope.app = 'Lista Telefonica';
        $scope.contatos = [];
        $scope.operadoras = [];

        var carregarContatos = function () {
            contatosAPI.getContatos().then(function (response, status) {
                $scope.contatos = response.data;
            });
        };

        var carregarOperadoras = function () {
            operadorasAPI.getOperadoras().then(function (response) {
                $scope.operadoras = response.data;
            });
        };

        // $scope.adicionarContato = function (contato) {
        //     contato.data = new Date();
        //     contatosAPI.saveContato(contato).then(function (data) {
        //         delete $scope.contato;
        //     $scope.contatoForm.$setPristine();
        //     console.log($scope.contato);
        //     });
        // };

        $scope.adicionarContato = function (contato) {
            contato.serial = serialGenerator.generate();
            contato.data = new Date();

            $scope.contatos.push(angular.copy(contato));
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            // $setPristine depois de adicionado e remove os alertas para posição inicial
            console.log($scope.contato);
        };
        $scope.apagarContatos = function (contatos) {
            $scope.contatos = contatos.filter(contato => {
                if (!contato.selecionado) return contato;
            });
            console.log($scope.contatos);
        };
        $scope.isContatoSelecionado = function (contatos) {
            return (isContatoSelecionado = contatos.some(contato => contato.selecionado));
        };
        $scope.ordenarPor = function (campo) {
            $scope.criterioDeOrdenacao = campo;
            $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
        };

        carregarContatos();
        carregarOperadoras();
    });
