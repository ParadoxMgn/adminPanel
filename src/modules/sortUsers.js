import { render } from "./render";

export const sortUsers = () => {
  const sortIsChildren = document.getElementById('sort-is-children');
  let sortStatus = true;

  sortIsChildren.style.cursor = 'pointer';

  sortIsChildren.addEventListener('click', () => {
    sortStatus = !sortStatus;

    userService.sortUsers(`?_sort=children&_order=${sortStatus ? 'desc' : 'asc'}`)
      .then(data => render(data));
  });
};