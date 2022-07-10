import { render } from "./render";

export const filterUsers = () => {
  const btnGroup = document.querySelector('.btn-group');
  const searchInput = document.getElementById('search-input');

  btnGroup.addEventListener('click', e => {
    if (e.target.closest('#btn-isChildren')) {
      userService.filterUsers('?children=true')
        .then(data => render(data));
    }

    if (e.target.closest('#btn-isPermissions')) {
      userService.filterUsers('?permission=true')
        .then(data => render(data));
    }

    if (e.target.closest('#btn-isAll')) {
      userService.usersGet()
        .then(data => render(data));
      searchInput.value = '';
    }
  });
};