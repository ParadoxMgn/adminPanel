import { debounce } from './helpers';
import { render } from './render';

export const searchUsers = () => {
  const searchInput = document.getElementById('search-input');

  const debounceSearch = debounce(() => {
    userService.searchUsers(`?name_like=${searchInput.value}`)
      .then(data => render(data));
  }, 400);

  searchInput.addEventListener('input', debounceSearch);
};