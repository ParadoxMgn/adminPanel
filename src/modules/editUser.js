import { render } from "./render";

export const editUser = () => {
  const tableBody = document.getElementById('table-body');
  const form = document.querySelector('form');
  const inputName = document.getElementById('form-name');
  const inputEmail = document.getElementById('form-email');
  const inputChildren = document.getElementById('form-children');
  const searchInput = document.getElementById('search-input');
  let permission;

  tableBody.addEventListener('click', e => {
    if (e.target.closest('.btn-warning')) {
      console.log(1);
      const tr = e.target.closest('tr');

      userService.usersGet(`/${tr.dataset.key}`).then(user => {
        inputName.value = user.name;
        inputEmail.value = user.email;
        inputChildren.checked = user.children;
        permission = user.permission;
        form.dataset.edit = `${tr.dataset.key}`;
      });
    }
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    if (form.dataset.edit) {
      const user = {
        "name": `${inputName.value}`,
        "email": `${inputEmail.value}`,
        "children": inputChildren.checked,
        "permission": permission
      };

      userService.editUser(form.dataset.edit, user).then(() => {
        userService.usersGet()
          .then(data => render(data));
      });

      form.reset();
      searchInput.value = '';
    }
  });
};