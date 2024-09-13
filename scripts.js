document.getElementById('form-assistencia').addEventListener('submit', function(event) {
    event.preventDefault();

    var tipoServico = document.getElementById('tipo-servico').value;
    var localizacao = document.getElementById('localizacao').value;
    var modelo = document.getElementById('modelo').value;
    var destino = document.getElementById('destino').value;
    var problema = document.getElementById('problema').value;
    var nome = document.getElementById('nome').value;

    var mensagem = `Solicitação de Assistência:
Tipo de Serviço: ${tipoServico}
Localização Atual: ${localizacao}
Modelo do Veículo: ${modelo}
Endereço de Destino: ${destino}
Problema com o Veículo: ${problema}
Nome: ${nome}`;

    var telefone = '5511949581246'; // Substitua pelo número de telefone correto
    var url = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}&app_absent=0`;
    window.open(url, '_blank');
});

// Função para obter a localização atual do usuário
function obterLocalizacao() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var localizacao = `https://www.google.com/maps?q=${latitude},${longitude}`;
            document.getElementById('localizacao').value = localizacao;
        }, function(error) {
            alert('Não foi possível obter a localização. Por favor, tente novamente.');
        });
    } else {
        alert('Geolocalização não é suportada neste navegador.');
    }
}

// Função para obter a localização de destino do usuário
function obterDestino() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var destino = `https://www.google.com/maps?q=${latitude},${longitude}`;
            document.getElementById('destino').value = destino;
        }, function(error) {
            alert('Não foi possível obter a localização de destino. Por favor, tente novamente.');
        });
    } else {
        alert('Geolocalização não é suportada neste navegador.');
    }
}
