angular
    .module('listaTelefonica')
    .controller('listaTelefonicaController', function ($scope) {
        $scope.app = 'Lista Telefonica'
        $scope.contatos = [
        { nome: 'Pedro', telefone: '99988898', cor: 'gray' },
        { nome: 'Ana', telefone: '99964598' },
        { nome: 'Maria', telefone: '99933333', cor: 'green' }
        ]
        $scope.operadoras = [
        { nome: 'Oi', codigo: 14, categoria: 'Celular' },
        { nome: 'Tim', codigo: 15, categoria: 'Celular' },
        { nome: 'Vivo', codigo: 41, categoria: 'Celular' },
        { nome: 'GVT', codigo: 25, categoria: 'Fixo' },
        { nome: 'Embratel', codigo: 21, categoria: 'Fixo' }
        ]
        $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato))
        delete $scope.contato
        $scope.contatoForm.$setPristine()
        // $setPristine depois de adicionado e remove os alertas para posição inicial
        console.log($scope.contato)
        }
        $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(contato => {
            if (!contato.selecionado) return contato
        })
        console.log($scope.contatos)
        }
        $scope.isContatoSelecionado = function (contatos) {
        return (isContatoSelecionado = contatos.some(
            contato => contato.selecionado
        ))
        }
        $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao
        }
    })