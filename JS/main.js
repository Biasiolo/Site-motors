$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.menu-hamburguer').click(function () {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00)00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
        },
        messages: {
            nome: "Insira seu nome completo",
            email: "Insira um endereço de e-mail válido",
            telefone: "Insira um número de telefone válido",
        },
        submitHandler: function (form, event) {
            event.preventDefault(); // Impede o comportamento padrão de recarregar a página

            // Sua lógica para o envio do formulário (pode usar Ajax, etc.)
            alert('Formulário enviado com sucesso!');
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();

            // Mostrar mensagem de verificação das informações
            alert(`Verifique as informações e preencha os campos corretamente (${camposIncorretos} campos incorretos).`);
        },
    });

    $('.veiculos button').click(function() {
        const destino = $('form');

        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
});