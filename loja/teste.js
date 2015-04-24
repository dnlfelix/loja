(function(){
var table = $('<table></table>').addClass('foo');
for(i=0; i<30; i++){
    var tr = $('<tr></tr>').addClass('bar').text('result ' + i);

    table.append(tr);
}

$('#tst').append(table);


})();
