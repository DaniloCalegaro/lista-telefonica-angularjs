angular.module('listaTelefonica').filter('name', function () {
    return function (input) {
        var listaDeNomes = input.split(' ');
        var listaDeNomesFormatada = listaDeNomes.map(nome => {
            if (/(da|de)/.test(nome)) return nome;
            return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
        });

        return listaDeNomesFormatada.join(' ');
    };
});
