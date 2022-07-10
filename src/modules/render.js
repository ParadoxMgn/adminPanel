export const render = (users) => {
  const tableBody = document.getElementById('table-body');

  tableBody.innerHTML = '';

  users.forEach(user => {
    tableBody.insertAdjacentHTML('beforeend',
      `<tr data-key="${user.id}">
       <th scope="row">${user.id}</th>
       <td>${user.name}</td>
       <td>${user.email}</td>
       <td>${user.children ? 'Есть' : 'Нет'}</td>
       <td>
         <div class="form-check form-switch">
           <input class="form-check-input" type="checkbox" role="switch" id="form-children" ${user.permission ? 'checked' : ''}>
         </div>
       </td>
       <td>
         <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
           <button type="button" class="btn btn-warning">
             <i class="bi-pencil-square"></i>
           </button>
           <button type="button" class="btn btn-danger">
             <i class="bi-person-x"></i>
           </button>
         </div>
       </td>
     </tr>`);
  });
};
