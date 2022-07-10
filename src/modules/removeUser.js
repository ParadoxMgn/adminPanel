import { render } from "./render";

export const removeUser = () => {
  const tableBody = document.getElementById('table-body');


  tableBody.addEventListener('click', e => {
    if (e.target.closest('.btn-danger')) {
      const tr = e.target.closest('tr');

      userService.removeUser(tr.dataset.key).then(() => {
        userService.usersGet()
          .then(data => render(data));
      });
    }
  });
};