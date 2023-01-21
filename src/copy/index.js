export const COPY = {
  "login.welcome": "¡Bienvenido!",
  "login.email": "Correo electrónico",
  "login.continue": "Continuar",
  "login.otp": "Código de verificación",
  "login.cta": "Iniciar sesión",
  "login.changeEmail": "Cambiar correo electrónico",
  "login.productCreatedBy": "Un producto creado por",
  "login.otpCreation.success": (email) =>
    `Código de verificación enviado a ${email}`,
  "login.otpConsumption.success": (name) => `Bienvenid@, ${name}`,

  "users.title": "Usuarios",
  "users.creation.title": "Añadir Usuario",
  "users.creation.success": "Usuario creado exitosamente",
  "users.details.title": "Detalles de Usuario",
  "users.details.userRegistrationDate": "Fecha de registro",
  "users.details.update.success": "Usuario actualizado exitosamente",

  "connections.title": "Conexiones",

  "businesses.title": "Negocios",
  "businesses.details.title": "Detalles de Negocio",

  "panels.title": "Paneles",

  "sidebar.logout": "Cerrar sesión",

  "searchBar.search": "Buscar...",

  "userList.user": "Usuario",
  "userList.role": "Función",
  "userList.role.admin": "Administrador",
  "userList.role.owner": "Propietario",
  "userList.role.employee": "Empleado",
  "userList.date": "Fecha",

  "userForm.name": "Nombre",
  "userForm.email": "Correo electrónico",
  "userForm.role": "Función",
  "userForm.role.admin": "Administrador",
  "userForm.role.owner": "Propietario",
  "userForm.role.employee": "Empleado",
  "userForm.avatar": "Avatar",
  "userForm.notifyRegistration": "Notificar registro",
  "userForm.add": "Añadir",
  "userForm.save": "Guardar",

  "table.edit": "Editar",

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
