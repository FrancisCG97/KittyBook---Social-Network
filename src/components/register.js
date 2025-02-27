import { newAccount, accessWithGoogle, accessWithGithub } from '../lib/auth';

// Creación sección registro
function register(navigateTo) {
  const sectionReg = document.createElement('section');
  sectionReg.id = 'reg-account';
  sectionReg.classList.add('register-background');
  const titleRegKitty = document.createElement('h1');
  titleRegKitty.id = 'title';
  const titleReg = document.createElement('h3');
  const divContainer = document.createElement('div');
  titleReg.id = 'register-title';
  const inputEmail = document.createElement('input');
  const regTrademark = document.createElement('footer');
  regTrademark.id = 'footer-reg';
  divContainer.id = 'container';
  divContainer.classList.add('signup-container');
  regTrademark.id = 'marca';
  inputEmail.id = 'email';
  inputEmail.placeholder = 'Escribe tu correo';
  const inputPass = document.createElement('input');
  inputPass.id = 'contraseña';
  inputPass.placeholder = 'Escribe tu contraseña';
  inputPass.type = 'password';
  const btnSend = document.createElement('button');
  btnSend.id = 'send-info';
  btnSend.type = 'submit';

  // Creación botón Registrar con Google
  const btnRegWithGoogle = document.createElement('button');
  btnRegWithGoogle.classList.add('google-reg-btn');
  btnRegWithGoogle.id = 'google-reg';

  // Creación botón Registrar con GitHub
  const btnRegWithGithub = document.createElement('button');
  btnRegWithGithub.classList.add('github-reg-btn');
  btnRegWithGithub.id = 'github-reg';

  // Texto de error al registrar
  const errorElement = document.createElement('h3');
  errorElement.classList.add('error-element');
  errorElement.textContent = '';

  // Título registro de KittyBook
  titleRegKitty.classList.add('title-reg-kitty');
  titleRegKitty.textContent = 'KittyBook';
  titleReg.textContent = '¡Regístrate!';
  titleReg.classList.add('title-registrate');
  btnSend.textContent = 'Registrarme';
  btnRegWithGoogle.textContent = 'Regístrate con Google';
  btnRegWithGithub.textContent = 'Regístrate con GitHub';
  regTrademark.textContent = 'KittyBook, 2023';

  // Sección para tablets y dekstop
  const infoContReg = document.createElement('section');
  infoContReg.id = 'info-cont-reg';
  const infoTxtReg = document.createElement('p');
  infoTxtReg.id = 'info-text-reg';
  infoTxtReg.textContent = `¿Tienes un gatito? ¡En KittyBook puedes presumirlo!
  Publica ideas e imágenes para compartir información gatuna.`;

  // Creación botón Volver al Inicio
  const btnReturnH = document.createElement('button');
  btnReturnH.id = 'return';
  btnReturnH.textContent = 'Volver al Inicio';
  btnReturnH.addEventListener('click', () => {
    navigateTo('/');
  });

  btnSend.addEventListener('click', () => {
    const email = inputEmail.value;
    const password = inputPass.value;
    newAccount(email, password, errorElement);
  });

  btnRegWithGoogle.addEventListener('click', () => {
    accessWithGoogle(navigateTo);
  });

  btnRegWithGithub.addEventListener('click', () => {
    accessWithGithub(navigateTo);
  });

  divContainer.append(
    inputEmail,
    inputPass,
    btnSend,
    btnRegWithGoogle,
    btnRegWithGithub,
    errorElement,
  );
  sectionReg.append(
    titleRegKitty,
    infoContReg,
    titleReg,
    divContainer,
    btnReturnH,
    regTrademark,
  );

  infoContReg.append(infoTxtReg);
  return sectionReg;
}
export default register;
