export const COPY = {
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
  "pages.users.creation.title": "Añadir Usuario",
  "pages.users.creation.name": "Nombre",
  "pages.users.creation.email": "Correo electrónico",
  "pages.users.creation.role": "Función",
  "pages.users.creation.role.admin": "Administrador",
  "pages.users.creation.role.owner": "Propietario",
  "pages.users.creation.role.employee": "Empleado",
  "pages.users.creation.avatar": "Avatar",
  "pages.users.creation.notifyRegistration": "Notificar registro",
  "pages.users.creation.cta": "Añadir",
  "pages.users.creation.success": "Usuario creado exitosamente",
  "pages.users.details.title": "Detalles de Usuario",

  "pages.connections.title": "Conexiones",
  "pages.connections.searchConnection": "Buscar conexión",

  "pages.businesses.title": "Negocios",
  "pages.businesses.searchBusiness": "Buscar negocio",
  "pages.businesses.details.title": "Detalles de Negocio",

  "pages.panels.title": "Paneles",
  "pages.panels.searchPanel": "Buscar panel",

  "sidebar.logout": "Cerrar sesión",

  "searchBar.placeholder": "Buscar...",

  "userList.user": "Usuario",
  "userList.role": "Función",
  "userList.role.admin": "Administrador",
  "userList.role.owner": "Propietario",
  "userList.role.employee": "Empleado",
  "userList.date": "Fecha",

  "table.opts.edit": "Editar",

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
