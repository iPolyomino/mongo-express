const newUsers = [
  {
    user: "user",
    pwd: "password",
    roles: [
      {
        role: "readWrite",
        db: "todo",
      },
    ],
  },
];

const currentUsers = db.getUsers();
if (currentUsers.length === newUsers.length) {
  quit();
}
db.dropAllUsers();

newUsers.forEach((user) => db.createUser(user));
