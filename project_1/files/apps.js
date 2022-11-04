

$(() => {
    $('#menuClick').css('cursor', 'pointer');
    let counter = 0; 
    const $menu = $('#menuClick').click(function() {
        if (counter == 0) {
            $('.elements').css('display' , 'block')
            $('.sidebar').css('width', '50%')
            $('.sidebar li a').css('width', '80%')
            counter += 1
        }
        else if (counter == 1) {
            $('.elements').css('display' , 'none')
            $('.sidebar').css('width', '9%')
            $('.sidebar li a').css('width', '43px')
            counter -= 1
        }
        

    })


})