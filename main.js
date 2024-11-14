/*
    console.log(document.querySelector('header button'));
    console.log($('#botao-cancelar'))

formas de adicionar um evento a um elemento

document.querySelector('header button').addEventListener('click', function(e){

})

//ou resumidamente 
*/

$(document).ready(function(){
$('header button').click(function(){
    $('form').slideDown();
})

$('#botao-cancelar').click(function(){
    $('form').slideUp();
})

//outra forma
$('form').on('submit', function(e){
    e.preventDefault();
    const enderecoDaNovaImagem = $('#endereço-img-nova').val();
    const novoItem = $('<li style="display: none"></li>');
    $(`<img src="${enderecoDaNovaImagem}">`).appendTo(novoItem);


    $(`
    <div class="overlay">
        <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
        Ver imagem em tamnho real
        </a>    
        </div>
        `).appendTo(novoItem);

    $(novoItem).appendTo('ul');
    $(novoItem).fadeIn(1000);
    $('#endereço-img-nova').val('')

})


})