import { error } from "./error";

export class UserService {
  async usersGet(option = "") {
    try {
      const response = await fetch(`http://localhost:3004/users${option}`);

      if (response.ok) {
        return await response.json();
      } else {
        throw error();
      }
    } catch (error) {
      error();
    }
  }

  async usersSend(method, user, option = "") {
    try {
      const response = await fetch(`http://localhost:3004/users${option}`, {
        method: method,
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        return await response.json();
      } else {
        throw error();
      }
    } catch (error) {
      error();
    }
  }

  addUser(user) {
    return this.usersSend("POST", user);
  }

  removeUser(option) {
    return this.usersSend("DELETE", [], `/${option}`);
  }

  changePermission(option, permission) {
    return this.usersSend("PATCH", permission, `/${option}`);
  }

  editUser(option, users) {
    return this.usersSend("PUT", users, `/${option}`);
  }

  filterUsers(option) {
    return this.usersGet(option);
  }

  sortUsers(option) {
    return this.usersGet(option);
  }

  searchUsers(option) {
    return this.usersGet(option);
  }
}