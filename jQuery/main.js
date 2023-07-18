function main1(){

    //Komplette Tags auswählen
    //$("p").hide();

    //Einzelnes Element mit ID auswählen
    //$("#sub").hide();

    //Klasse auswählen
    //$(".test").hide();

    //Text verändern
    //('.test1').text("Hallo Welt");

    //HTML ändern
    //$('.test2').html("<p>Test</p><button>Test</button>")

    //Setzen von Attributen
    //$('#sub2').attr('hidden', true)

    //Elemente hinzufügen
    //$('ul').append('<list>Test1</list>');
    //$('ul').prepend('<list>Test0</list>');

    //$('li').parent().append('<list>Test2</list>')
    //$('li').children().append('<list>Test2</list>')

    //jQuery AJAX
    $.get('https://jsonplaceholder.typicode.com/todos/2', (res) => {

        $('#sub').text(JSON.stringify(res.title));

    })

}