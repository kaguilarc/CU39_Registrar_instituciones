'use strict';
const input_cedula = document.querySelector('#txt_cedula');
const input_nombre = document.querySelector('#txt_nombre');
const input_nombre_comercial = document.querySelector('#txt_nombre_comercial');
const input_anio_funda = document.getElementById('select_anio_fundacion');
const input_grado = document.forms.box.grado;
const input_clase = document.forms.box.clase;
const input_genero = document.forms.box.genero;
const input_especialidad = document.getElementById('select_especialidad');
const input_historica = document.querySelector('#txt_ref');
const input_provincia = document.getElementById('select_provincia');
let input_canton = document.getElementById('select_canton');
let input_distrito = document.getElementById('select_distrito');
const input_direccion = document.querySelector('#txt_direccion');
const input_mail = document.querySelector('#txt_mail');
const input_telefono = document.querySelector('#txt_telefono');
const input_telefono_extencion = document.querySelector('#txt_extencion');
const input_fax = document.querySelector('#txt_fax');
const input_pagina_web = document.querySelector('#txt_pagina_web');
const input_facebook = document.querySelector('#txt_facebook');
const input_twitter = document.querySelector('#txt_twitter');
const input_instagram = document.querySelector('#txt_instagram');

//todo
const input_documentos = '//TODO ';
const btn_enviar = document.querySelector('#btn_enviar');
const txt_cedula = document.querySelector('#txt_cedula');
const select_anios = document.querySelector('#select_anio_fundacion');
const lst_provincia = document.querySelector('#select_provincia');
const lst_canton = document.querySelector('#select_canton');
const lst_distrito = document.querySelector('#select_distrito');

function validar() {
    console.log('se dejo el foco');
   
};

function setMasks() {
    //cedula juridica
    $(document).ready(function () {
        $('#txt_cedula').mask("3-999-999999");
    });
    //numero telefono
    $(document).ready(function () {
        $('#txt_telefono').mask("(506)9999-9999");
    });
};

function setConsecutivoAnios() {
    //hacemos un ciclo teniendo en cuenta el año actual 
    //lo recorremos mientras agregamos los elementos al 
    //select de años. 
    //pd: como minimo se tiene tiene 1983 que es el año de la escuela mas 
    //antigua de cr 
    for (var i = new Date().getFullYear(); i > 1983; i--) {
        let option = document.createElement('option');
        option.text = i;
        option.value = i;
        select_anios.add(option);
    }
    
};

function getRadioButtonValue(ctrl) {
    for (let i = 0; i < ctrl.length; i++)
        if (ctrl[i].checked) return ctrl[i].value;
};

let registrar = () => {

    let cedula = input_cedula.value;
    let nombre = input_nombre.value;
    let nombre_comercial = input_nombre_comercial.value;
    let anio_fundacion = input_anio_funda.value;
    let grado = getRadioButtonValue(input_grado);
    let clase = getRadioButtonValue(input_clase);
    let genero = getRadioButtonValue(input_genero);
    let especialidad = input_especialidad.value;
    let refencia_historica = input_historica.value;
    let provincia = input_provincia.value;
    let canton = input_canton.value;
    let distrito = input_distrito.value;
    let direccion = input_direccion.value;
    let url_mail = input_mail.value;
    let telefono = input_telefono.value;
    let fax = input_fax.value;
    let web = input_pagina_web.value;
    let facebook = input_facebook.value;
    let twitter = input_twitter.value;
    let instagram = input_twitter.value;
    let url_archivo = input_mail.value;


    registrar_institucion(cedula, nombre, nombre_comercial, anio_fundacion,
        grado, clase, genero, especialidad, refencia_historica, provincia,
        canton, distrito, direccion, url_mail, telefono, fax, web, facebook,
        twitter,instagram, url_archivo);

};


this.setMasks();
setConsecutivoAnios();
getProvincias();




lst_provincia.addEventListener('change', setProvinciaData);
lst_canton.addEventListener('change', setCantonData);






//lst_distrito.addEventListener('change', setDistritoData);


btn_enviar.addEventListener('click', registrar);
txt_cedula.addEventListener('focusout', validar);
