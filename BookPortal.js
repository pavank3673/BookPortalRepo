import { question } from "readline-sync";

let booklist = [{}];

booklist[0] = {
  name: "Java Complete Guide",
  price: 200,
  status: "available",
  quantity: 20,
};

booklist[1] = {
  name: "Git Fundamentals",
  price: 350,
  status: "available",
  quantity: 15,
};

booklist[2] = {
  name: "Java EE Fundamentals",
  price: 500,
  status: "available",
  quantity: 10,
};

booklist[3] = {
  name: "HTML & CSS Guide",
  price: 450,
  status: "available",
  quantity: 25,
};

booklist[4] = {
  name: "JS Complete Guide",
  price: 250,
  status: "available",
  quantity: 10,
};

booklist[5] = {
  name: "Node Complete Guide",
  price: 200,
  status: "available",
  quantity: 20,
};

booklist[6] = {
  name: "SQL Complete Guide",
  price: 500,
  status: "available",
  quantity: 10,
};

booklist[7] = {
  name: "Linux Fundamentals",
  price: 450,
  status: "available",
  quantity: 10,
};

booklist[8] = {
  name: "Networking Guide",
  price: 600,
  status: "available",
  quantity: 10,
};

booklist[9] = {
  name: "Git Complete Guide",
  price: 400,
  status: "available",
  quantity: 10,
};

function menuDisplay() {
  let choice = question(
    "Display Menu :- \n 1) show available books to users \n 2) add book \n 3) show cart \n"
  );
}

menuDisplay();
