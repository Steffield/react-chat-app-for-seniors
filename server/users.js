const users = [];

//adding users to a room, remove all whitespace and lowerCase, check if name already exists in that room
const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  //if there is already user with that name in that room user can not sign in
  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );
  //needs input
  if (!name || !room)
    return { error: "Please, enter a username and chat room!" };
  if (existingUser) {
    //add alert?
    return { error: "Username is already taken!" };
  }

  const user = { id, name, room };

  users.push(user);

  return { user };
};

//remove a user from chat by id
const removeUser = ({ id }) => {
  //find user with specific id
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }

  // return (index!==-1) ?  :
};

//find a user by id
const getUser = ({ id }) => {
  users.find((user) => user.id === id);
};
//find all users in specific room
const getUsersInRoom = ({ room }) => {
  users.filter((user) => user.room === room);
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
