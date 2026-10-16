# Formularios de investigación — By Sophie (2026)

Formularios: https://keris19.github.io/By-Sophie/investigacion.html

## Conectar respuestas a Google Sheets (exportable a Excel)

1. Cree una hoja de Google Sheets privada, por ejemplo **Investigación By Sophie 2026**.
2. En ella abra **Extensiones → Apps Script** y reemplace el contenido de Código.gs por el archivo **apps-script-respuestas.gs** de este repositorio.
3. Guarde y despliegue mediante **Implementar → Nueva implementación → Aplicación web**. Ejecutar como **Yo**; acceso **Cualquier usuario**. Autorice los permisos solicitados. Este endpoint es público para recepción de respuestas, por lo que evite datos identificatorios o sensibles y supervise envíos abusivos.
4. Copie la URL de implementación que termina en `/exec`.
5. En `investigacion.html`, reemplace **PEGAR_AQUI_URL_DE_APPS_SCRIPT** por esa URL y guarde en la rama main.
6. Pruebe enviando una respuesta de cada modalidad. Verifique que aparezcan las pestañas **Cuantitativo** y **Cualitativo** y que se hayan creado filas.
7. Para descargar el Excel: **Archivo → Descargar → Microsoft Excel (.xlsx)**.

**Nota:** Hasta que se configure el enlace de Apps Script, el formulario NO guarda respuestas y así lo advierte. El modo `no-cors` del navegador no permite confirmar que Google almacenó los datos; verifique la hoja tras una prueba. La encuesta es una adaptación por validar y no debe presentarse como instrumento originalmente validado.

**Privacidad:** No compartir la hoja con participantes; solo la web del formulario. No solicitar nombres, DNI, teléfono o correo. Definir periodo de conservación de datos y restringir acceso a investigadores.
