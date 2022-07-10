import { UserService } from "./modules/userService";
import { addUser } from "./modules/addUser";
import { removeUser } from "./modules/removeUser";
import { changePermission } from "./modules/changePermission";
import { editUser } from "./modules/editUser";
import { filterUsers } from "./modules/filterUsers";
import { sortUsers } from "./modules/sortUsers";
import { searchUsers } from "./modules/searchUsers";
import { render } from "./modules/render";
import { error } from "./modules/error";

window.userService = new UserService();

userService.usersGet()
  .then(data => render(data));
addUser();
removeUser();
changePermission();
editUser();
filterUsers();
sortUsers();
searchUsers();