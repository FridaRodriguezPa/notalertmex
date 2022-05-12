let id = ( id ) => document.getElementById(id);

let $registroForm = id('registro-form')
    $userName = id('user-name');
    $email = id('email')
    $password = id('password')
    $password2 = id('password2');

    const validarCampoTexto = ( campo ) => {
      campo.value.length <= 7
        ? alert('El campo debe contener al menos ocho carácteres*')
        : null;
    };

    const validarPassword =  ( pass1, pass2 ) => {
      pass1.value.trim() !== pass2.value.trim()
        ? alert('Las contraseñas no coinciden')
        : null;
    };

    const validarEmail = ( email ) => {
      const emailRegex = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
      !email.value.match( emailRegex )
        ? alert('El email no es válido')
        : null;
    };


$registroForm.addEventListener('submit', ( e ) => {

  e.preventDefault();

  validarCampoTexto( $userName );
  validarCampoTexto( $password );
  validarCampoTexto( $password2 );
  validarPassword( $password, $password2);
  validarEmail( $email );
});


