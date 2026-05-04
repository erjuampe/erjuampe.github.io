/* =============================================
   HUMO CON SOLERA — Lógica de contacto
   ============================================= */

/**
 * Recoge los campos del formulario, valida que estén rellenos
 * y abre el cliente de correo del usuario con los datos precargados.
 * Destino: contacto@humoconsolera.com
 */
function enviarEmail(e) {
    e.preventDefault();

    const nombre  = document.getElementById('field-nombre').value.trim();
    const email   = document.getElementById('field-email').value.trim();
    const mensaje = document.getElementById('field-mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
        alert('Por favor, rellena todos los campos antes de enviar.');
        return;
    }

    const destinatario = 'contacto@humoconsolera.com';
    const asunto = encodeURIComponent('Consulta desde la web — ' + nombre);
    const cuerpo = encodeURIComponent(
        'Nombre: '  + nombre  + '\n' +
        'Email: '   + email   + '\n\n' +
        mensaje
    );

    window.location.href =
        'mailto:' + destinatario +
        '?subject=' + asunto +
        '&body='    + cuerpo;
}
