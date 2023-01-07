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
  "pages.users.search.placeholder": "Buscar usuario",
  "pages.users.details.title": "Detalles de Usuario",

  "pages.connections.title": "Conexiones",
  "pages.connections.search.placeholder": "Buscar conexión",

  "pages.businesses.title": "Negocios",
  "pages.businesses.search.placeholder": "Buscar negocio",
  "pages.businesses.details.title": "Detalles de Negocio",

  "pages.panels.title": "Paneles",
  "pages.panels.search.placeholder": "Buscar panel",

  // FORMS
  "forms.labels.email": "Correo electrónico",
  "forms.labels.otp": "Código de verificación",

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
