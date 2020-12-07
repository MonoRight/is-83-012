function FillData() {
    let requestURL =
    'https://jsonplaceholder.typicode.com/users';
  
    //Create request
    let request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
  
    //Send requesst
    request.send();
  
    //On load create html eleents
    request.onload = function () {
      var users_json = request.response;
      ShowUsers(users_json);
    };
    //Creates html elements
    function ShowUsers(jsonObj) {
      //Get section element
      let section = document.querySelector("section");
      //Create table
      let table = document.createElement("table");
      table.classList.add("table", "table-bordered");
      //Create table heading
      let thead = document.createElement("thead");
      thead.classList.add("thead-dark");
  
      //Create table heading row and add elements to it
      let tr = document.createElement("tr");
      tr.classList.add("text-center");
  
      let t = document.createElement("th");
      t.textContent = "Id";
      t.scope = "col";
      tr.appendChild(t);
  
      t = document.createElement("th");
      t.textContent = "Name";
      t.scope = "col";
      tr.appendChild(t);
  
      t = document.createElement("th");
      t.textContent = "Username";
      t.scope = "col";
      tr.appendChild(t);
      thead.appendChild(tr);
      table.appendChild(thead);
  
      t = document.createElement("th");
      t.textContent = "Email";
      t.scope = "col";
      tr.appendChild(t);
  
      t = document.createElement("th");
      t.textContent = "Website";
      t.scope = "col";
      tr.appendChild(t);

      t = document.createElement("th");
      t.textContent = "Address";
      t.scope = "col";
      tr.appendChild(t);

      thead.appendChild(tr);
      table.appendChild(thead);
  
      //Add table rows from each json object
      for (var i = 0; i < jsonObj.length; i++) {
        //Create table heading row and add elements to it
        tr = document.createElement("tr");
        tr.classList.add("table-secondary", "text-center");
  
        t = document.createElement("th");
        t.textContent = jsonObj[i].id;
        t.scope = "row";
        tr.appendChild(t);
  
        t = document.createElement("td");
        t.textContent = jsonObj[i].name;
        tr.appendChild(t);

        t = document.createElement("td");
        t.textContent = jsonObj[i].username;
        tr.appendChild(t);

        t = document.createElement("td");
        t.textContent = jsonObj[i].email;
        tr.appendChild(t);

        t = document.createElement("td");
        t.textContent = jsonObj[i].website;
        tr.appendChild(t);

        t = document.createElement("td");
        t.textContent = 'street: ' + jsonObj[i].address.street + ' city: ' + jsonObj[i].address.city + ' zipcode: ' + jsonObj[i].address.zipcode;
        tr.appendChild(t);
  
        table.appendChild(tr);
      }
      section.appendChild(table);
    }
  }