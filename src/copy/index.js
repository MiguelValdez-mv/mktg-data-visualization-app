export const COPY = {
  // PAGES
  "pages.login.welcome": "¡Bienvenido!",
  "pages.login.continue": "Continuar",
  "pages.login.cta": "Iniciar sesión",
  "pages.login.changeEmail": "Cambiar correo electrónico",
  "pages.login.productCreatedBy": "Un producto creado por",
  "pages.login.otpCreation.success": (email) =>
    `Código de verificación enviado a ${email}`,
  "pages.login.otpValidation.success": (name) => `Bienvenido ${name}`,

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
