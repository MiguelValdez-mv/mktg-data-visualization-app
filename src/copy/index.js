export const COPY = {
  // APP
  "app.sidebar.logout": "Cerrar sesión",

  // PAGES
  "pages.login.welcome": "¡Bienvenido!",
  "pages.login.email": "Correo electrónico",
  "pages.login.continue": "Continuar",
  "pages.login.otp": "Código de verificación",
  "pages.login.cta": "Iniciar sesión",
  "pages.login.changeEmail": "Cambiar correo electrónico",
  "pages.login.productCreatedBy": "Un producto creado por",
  "pages.login.otpCreation.success": (email) =>
    `Código de verificación enviado a ${email}`,
  "pages.login.otpValidation.success": (name) => `Bienvenid@, ${name}`,

  "pages.users.title": "Usuarios",
  "pages.users.searchUser": "Buscar usuario",

  "pages.users.create.title": "Añadir Usuario",
  "pages.users.create.name": "Nombre",
  "pages.users.create.email": "Correo electrónico",
  "pages.users.create.role": "Rol",
  "pages.users.create.role.admin": "Administrador",
  "pages.users.create.role.owner": "Propietario",
  "pages.users.create.role.employee": "Empleado",
  "pages.users.create.cta": "Añadir",

  "pages.users.details.title": "Detalles de Usuario",

  "pages.connections.title": "Conexiones",
  "pages.connections.searchConnection": "Buscar conexión",

  "pages.businesses.title": "Negocios",
  "pages.businesses.searchBusiness": "Buscar negocio",

  "pages.businesses.details.title": "Detalles de Negocio",

  "pages.panels.title": "Paneles",
  "pages.panels.searchPanel": "Buscar panel",

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
