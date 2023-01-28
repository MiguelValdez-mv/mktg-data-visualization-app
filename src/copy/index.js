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
  "users.removal.success": "Eliminación realizada exitosamente",
  "users.creation.title": "Añadir Usuario",
  "users.creation.success": "Usuario creado exitosamente",
  "users.detail.title": "Detalle de Usuario",
  "users.detail.userRegistrationDate": "Fecha de registro",
  "users.detail.update.success": "Usuario actualizado exitosamente",

  "connections.title": "Conexiones",

  "businesses.title": "Negocios",
  "businesses.removal.success": "Eliminación realizada exitosamente",
  "businesses.creation.title": "Añadir Negocio",
  "businesses.creation.success": "Negocio creado exitosamente",
  "businesses.detail.title": "Detalle de Negocio",
  "businesses.detail.businessRegistrationDate": "Fecha de registro",
  "businesses.detail.update.success": "Negocio actualizado exitosamente",
  "businesses.detail.addEmployee": "Añadir Empleado",
  "businesses.detail.employees": "Empleados",
  "businesses.detail.addEmployee.modal.title": "Selecciona un empleado",
  "businesses.detail.addEmployee.modal.noEmployees":
    "No hay empleados disponibles en este momento...",
  "businesses.detail.employeeAddition.success": "Empleado añadido exitosamente",
  "businesses.detail.employeeDeletion.success":
    "Eliminación realizada exitosamente",

  "panels.title": "Paneles",

  "sidebar.logout": "Cerrar sesión",

  "searchBar.search": "Buscar...",

  "userList.user": "Usuario",
  "userList.role": "Función",
  "userList.role.admin": "Administrador",
  "userList.role.owner": "Propietario",
  "userList.role.employee": "Empleado",
  "userList.date": "Fecha",

  "employeeList.name": "Nombre",
  "employeeList.email": "Email",

  "businessList.company": "Compañía",
  "businessList.type": "Categoría",
  "businessList.type.service": "Empresa de Servicios",
  "businessList.type.commercial": "Empresa Comercial",
  "businessList.type.industrial": "Empresa Industrial",
  "businessList.description": "Descripción",

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

  "businessForm.name": "Nombre",
  "businessForm.type": "Categoría",
  "businessForm.type.service": "Empresa de Servicios",
  "businessForm.type.commercial": "Empresa Comercial",
  "businessForm.type.industrial": "Empresa Industrial",
  "businessForm.description": "Descripción",
  "businessForm.owner": "Propietario",
  "businessForm.owner.modal.title": "Selecciona un propietario",
  "businessForm.owner.noOwners": "Actualmente no hay propietarios registrados",
  "businessForm.owner.addOwner": "Agregar Propietario",
  "businessForm.avatar": "Avatar",
  "businessForm.avatar.change": "Cambiar",
  "businessForm.add": "Añadir",
  "businessForm.save": "Guardar",

  "table.viewDetail": "Ver Detalle",
  "table.delete": "Eliminar",

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
