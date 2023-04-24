enum Role {
  ADMIN = 1,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  job: [number, string];
  role: Role;
} = {
  name: "Joe",
  age: 28,
  hobbies: ["Sports", "Cooking"],
  job: [2, "author"],
  role: Role.ADMIN,
};

let favouriteActivities: string[];
favouriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) console.log("Admin");
