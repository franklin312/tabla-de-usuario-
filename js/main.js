import { user } from "./user.js";

let root = document.querySelector("#root");


let table = '<table border="1">'+


'<tr>' + '<td>'+user[0].id +'</td>' + '<td>'+user[0].name +'</td>' +'<td>'+user[0].email + '</td>'+'</tr>'+
'<tr>' + '<td>'+user[1].id +'</td>' + '<td>'+user[1].name +'</td>' +'<td>'+user[1].email + '</td>'+'</tr>'+
'<tr>' + '<td>'+user[2].id +'</td>' + '<td>'+user[2].name +'</td>' +'<td>'+user[2].email + '</td>'+'</tr>'+
'<tr>' + '<td>'+user[3].id +'</td>' + '<td>'+user[3].name +'</td>' +'<td>'+user[3].email + '</td>'+'</tr>'+
'<tr>' + '<td>'+user[4].id +'</td>' + '<td>'+user[4].name +'</td>' +'<td>'+user[4].email + '</td>'+'</tr>'+
'<tr>' + '<td>'+user[5].id +'</td>' + '<td>'+user[5].name +'</td>' +'<td>'+user[5].email + '</td>'+'</tr>'+
'<tr>' + '<td>'+user[6].id +'</td>' + '<td>'+user[6].name +'</td>' +'<td>'+user[6].email + '</td>'+'</tr>'+

'</table>';

// se agregara a la etiqueta root el DOM la variable listado 
root.innerHTML = table

