import { render } from "./render";

export const changePermission = () => {
  const tableBody = document.getElementById('table-body');

  tableBody.addEventListener('click', e => {
    if (e.target.closest('.form-check-input')) {
      const tr = e.target.closest('tr');
      const input = tr.querySelector('.form-check-input');

      userService.changePermission(tr.dataset.key, { permission: input.checked })
        .then(() => {
          userService.usersGet()
            .then(data => render(data));
        });
    }
  });
};