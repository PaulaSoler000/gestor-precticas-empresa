
$(document).ready(function () {
    $(".btn").click(function () {
      $("#myModal").modal();
    });
  });
  $(document).ready(function () {
    $("#btn-agregar").click(function () {
      agregarEmpresa();
    });
  });
  
  $(document).ready(function () {
    $('#agregarEmpresaBtn').click(function () {
      $('#agregarEmpresaModal').modal('show');
    });
  });
  
  $.getJSON("https://raw.githubusercontent.com/PaulaSoler000/gestor-precticas-empresa/main/json/empresas.json", function (data) {
    // Iterar sobre los datos y agregarlos a la tabla
    $.each(data, function (key, value) {
      const nombre = value.nombre;
      const telefono = parseInt(value.telefono);
      const email = value.email;
      const responsable = value.sexo;
      const observaciones = value.sexo;
  
      var row = '<tr id="row' + key + '">' +
    '<td id="nombre_row' + key + '">' + value.nombre + '</td>' +
    '<td id="telefono_row' + key + '">' + value.telefono + '</td>' +
    '<td id="email_row' + key + '">' + value.email + '</td>' +
    '<td id="responsable_row' + key + '">' + value.responsable + '</td>' +
    '<td id="observaciones_row' + key + '">' + value.observaciones + '</td>' +
    '<td>' +
    '<button type="button" style="background-color: black;" id="edit_button' + key + '" value="Edit" onclick="edit_row(' + key + ')" class="btn btn-link"><i class="bi bi-pencil"></i></button>' +
    '<button type="button" style="background-color: black;" id="save_button' + key + '" value="Save" onclick="save_row(' + key + ')" class="btn btn-link"><i class="bi bi-save"></i></button>' +
    '<button type="button" style="background-color: black;" value="Delete" onclick="delete_row(' + key + ')" class="btn btn-link" id="delete_button' + key + '"><i class="bi bi-trash"></i></button>' +
    '</td>' +
    '</tr>';
      $('#table-bodydatos').append(row);
    });
  });
  
  function edit_row(row_id) {
    const nombre = document.getElementById(`nombre_row${row_id}`).innerHTML;
    const telefono = document.getElementById(`telefono_row${row_id}`).innerHTML;
    const email = document.getElementById(`email_row${row_id}`).innerHTML;
    const responsable = document.getElementById(`responsable_row${row_id}`).innerHTML;
    const observaciones = document.getElementById(`observaciones_row${row_id}`).innerHTML;
  
    document.getElementById(`nombre_row${row_id}`).innerHTML = `<input type='text' id='nombre_text${row_id}' value='${nombre}'>`;
    document.getElementById(`telefono_row${row_id}`).innerHTML = `<input type='text' id='telefono_text${row_id}' value='${telefono}'>`;
    document.getElementById(`email_row${row_id}`).innerHTML = `<input type='text' id='email_text${row_id}' value='${email}'>`;
    document.getElementById(`responsable_row${row_id}`).innerHTML = `<input type='text' id='responsable_text${row_id}' value='${responsable}'>`;
    document.getElementById(`observaciones_row${row_id}`).innerHTML = `<input type='text' id='observaciones_text${row_id}' value='${observaciones}'>`;
  
    document.getElementById(`edit_button${row_id}`).style.display = 'none';
    document.getElementById(`save_button${row_id}`).style.display = 'inline-block';
  }
  
  function save_row(row_id) {
    const nombre = document.getElementById(`nombre_text${row_id}`).value;
    const telefono = document.getElementById(`telefono_text${row_id}`).value;
    const email = document.getElementById(`email_text${row_id}`).value;
    const responsable = document.getElementById(`responsable_text${row_id}`).value;
    const observaciones = document.getElementById(`observaciones_text${row_id}`).value;
  
    document.getElementById(`nombre_row${row_id}`).innerHTML = nombre;
    document.getElementById(`telefono_row${row_id}`).innerHTML = telefono;
    document.getElementById(`email_row${row_id}`).innerHTML = email;
    document.getElementById(`responsable_row${row_id}`).innerHTML = responsable;
    document.getElementById(`observaciones_row${row_id}`).innerHTML = observaciones;
  
    document.getElementById(`edit_button${row_id}`).style.display = 'inline-block';
    document.getElementById(`save_button${row_id}`).style.display = 'none';
  }
  
  function delete_row(row_id) {
    document.getElementById(`row${row_id}`).outerHTML = '';
  }