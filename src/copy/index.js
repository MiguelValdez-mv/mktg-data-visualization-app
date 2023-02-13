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
  "user.details.businessList.title": "Negocios",

  "connections.title": "Conexiones",
  "connections.removal.success": "Eliminación realizada exitosamente",
  "connections.creation.title": "Añadir Conexión",
  "connections.creation.googleAnalytics": "Google Analytics 4",
  "connections.creation.facebookAds": "Facebook Ads",
  "connections.creation.success": "Conexión creada exitosamente",

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
  "panels.creation.title": "Añadir Panel",
  "panels.creation.success": "Panel añadido exitosamente",

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

  "connectionList.connection": "Conexión",
  "connectionList.connection.facebook_ads": "Facebook Ads",
  "connectionList.connection.google_analytics": "Google Analytics 4",
  "connectionList.email": "Correo electrónico",
  "connectionList.date": "Fecha",

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
  "businessForm.owner.change": "Cambiar",
  "businessForm.add": "Añadir",
  "businessForm.save": "Guardar",

  "panelForm.name": "Nombre",
  "panelForm.description": "Descripción",
  "panelForm.business": "Negocio",
  "panelForm.business.modal.title": "Selecciona un negocio",
  "panelForm.business.change": "Cambiar",
  "panelForm.business.noBusinesses": "Actualmente no hay negocios registrados",
  "panelForm.business.addBusiness": "Agregar Negocio",
  "panelForm.add": "Añadir",
  "panelForm.save": "Guardar",

  "table.viewDetail": "Ver Detalle",
  "table.delete": "Eliminar",

  "panelListItem.businessName": (businessName) => `Negocio: ${businessName}`,
  "panelListItem.viewDetail": "Ver Detalle",

  noDataYet: "Sin datos",

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
