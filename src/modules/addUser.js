import { render } from "./render";
import { error } from "./error";

export const addUser = () => {
  const form = document.querySelector('form');
  const inputName = document.getElementById('form-name');
  const inputEmail = document.getElementById('form-email');
  const inputChildren = document.getElementById('form-children');
  const searchInput = document.getElementById('search-input');

  form.addEventListener('submit', e => {
    e.preventDefault();

    if (!form.dataset.edit) {
      const user = {
        "name": `${inputName.value}`,
        "email": `${inputEmail.value}`,
        "children": inputChildren.checked,
        "permisson": false
      };

      userService.addUser(user).then(() => {
        userService.usersGet()
          .then(data => render(data))
          .catch(() => error());
      });

      form.reset();
      searchInput.value = '';
    }
  });
};