export let displaySigninModal = () => {
  document.getElementById('modal-wrapper-signin').setAttribute('class', 'modal-wrapper');
  document.getElementById('modal-hidden-signin').setAttribute('class', 'modal');
}

export  let displaySignupModal = () => {
  document.getElementById('modal-wrapper-signup').setAttribute('class', 'modal-wrapper');
  document.getElementById('modal-hidden-signup').setAttribute('class', 'modal');
}

export let closeModal = () => {
  document.getElementsByClassName('modal-wrapper')[0].setAttribute('class', '');
  document.getElementsByClassName('modal')[0].setAttribute('class', 'modal-hidden');
}