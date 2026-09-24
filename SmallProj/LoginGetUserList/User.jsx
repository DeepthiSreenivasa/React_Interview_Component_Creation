import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchString, setSearchString] = useState("");

  let filteredUsers = users.filter((item) =>
    item.firstName.includes(searchString)
  );

  useEffect(() => {
    let controller = new AbortController();
    getUserDetails();
  }, []);

  function getFilteredUsers(event) {
    let searchStr = event.target.value;
    setSearchString(searchStr);
  }

  function getUserDetails() {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        userData = data.users;
        filteredUsers = [...userData];
        console.log("filteredUsers::", filteredUsers);
        setUsers(userData);
      });
  }

  return (
    <>
      <input
        type="text"
        value={searchString}
        onChange={($event) => getFilteredUsers($event)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li>{user.firstName}</li>
        ))}
      </ul>
    </>
  );
};

export default Users;
