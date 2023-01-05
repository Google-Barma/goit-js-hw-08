import throttle from 'lodash.throttle';
import storage from './utils/localStorage';

const form = document.querySelector('.feedback-form');

const FORM_STATE = 'feedback-form-state';

const onChange = e => {
  if (e?.target?.nodeName === 'INPUT' || e?.target?.nodeName === 'TEXTAREA') {
    const { name, value } = e?.target;
    const localState = storage.get(FORM_STATE) || {};

    storage.save(FORM_STATE, {
      ...localState,
      [name]: value,
    });
  }
};

const onSubmit = e => {
  e.preventDefault();

  const localState = storage.get(FORM_STATE) || {};

  e.currentTarget.reset();
  storage.delete(FORM_STATE);

  console.log(localState);
};

form.addEventListener('submit', onSubmit);
form.addEventListener('input', onChange);
