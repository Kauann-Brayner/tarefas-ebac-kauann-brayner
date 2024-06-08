$(document).ready(()=>{
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: true
    })
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })
    
    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    })
    
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });

    
    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            adress: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
        },
        messages:{
            name: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu email',
            phone: 'Por favor, insira seu telefone',
            cpf: 'Por favor, insira seu CPF',
            cep: 'Por favor, insira seu CEP',
            adress: 'Por favor, insira seu endereço'
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function () {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })
})

