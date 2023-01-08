export const COPY = {
  // APP
  "app.sidebar.logout": "Cerrar sesión",

  // PAGES
  "pages.login.welcome": "¡Bienvenido!",
  "pages.login.continue": "Continuar",
  "pages.login.cta": "Iniciar sesión",
  "pages.login.changeEmail": "Cambiar correo electrónico",
  "pages.login.productCreatedBy": "Un producto creado por",
  "pages.login.otpCreation.success": (email) =>
    `Código de verificación enviado a ${email}`,
  "pages.login.otpValidation.success": (name) => `Bienvenid@, ${name}`,

  "pages.users.title": "Usuarios",
  "pages.users.details.title": "Detalles de Usuario",

  "pages.connections.title": "Conexiones",

  "pages.businesses.title": "Negocios",
  "pages.businesses.details.title": "Detalles de Negocio",

  "pages.panels.title": "Paneles",

  // FORMS
  "forms.labels.email": "Correo electrónico",
  "forms.placeholder.otp": "Código de verificación",
  "forms.placeholder.searchUser": "Buscar usuario",
  "forms.placeholder.searchConnection": "Buscar conexión",
  "forms.placeholder.searchBusiness": "Buscar negocio",
  "forms.placeholder.searchPanel": "Buscar panel",

  // ERRORS
  "errors.requiredField": "Campo requerido",
  "errors.invalidEmail": "Correo electrónico no válido",
  "errors.unregisteredUser":
    "Este usuario no se encuentra registrado actualmente",
  "errors.unexpectedError":
    "Ha ocurrido un error inesperado, intentelo nuevamente",
  "errors.invalidOtpInput": (attemptsRemaining) =>
    `Código de verificación incorrecto. Intentos restantes: ${attemptsRemaining}`,
  "errors.otpExpired":
    "Este código de verificación ha expirado. Renegere uno nuevo e intentelo nuevamente",
};
