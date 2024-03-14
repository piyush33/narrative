export function getTable() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
            { firstName: "Beth", lastName: "Smith", class1: "English", class2: "Math", school: "Harvard", location: "Boston" },
            { firstName: "Rahul", lastName: "Shankar", class1: "Physics", class2: "Chemistry", school: "Stanford", location: "Palo Alto" }
         ]);
      }, 3000);
    });
  }