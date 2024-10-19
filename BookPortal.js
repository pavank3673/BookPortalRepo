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

let cartlist = [];

function showBooks() {
  console.log(
    "\nBook List:\n+---------+-----------------------+-------+------------+----------+\n| Book Id | Book Name             | Price | Status     | Quantity | \n+---------+-----------------------+-------+------------+----------+"
  );
  booklist.forEach((book, index) => {
    console.log(
      " " +
        index +
        "\t   " +
        book.name +
        "\t   " +
        book.price +
        "\t   " +
        book.status +
        "\t" +
        book.quantity +
        "\t"
    );
  });

  menuDisplay();
}

function addBook() {
  let bookId = question("Enter Book Id to add to cart : ");

  let book = {};
  book.book_name = booklist[bookId].name;
  book.price = booklist[bookId].price;
  book.quantity = 1;
  book.total_price = book.price * book.quantity;

  let cartlistBook = cartlist.find((existingBook) => {
    return existingBook.book_name == book.book_name;
  });

  if (cartlistBook) {
    let cartlistBookIndex = cartlist.indexOf(cartlistBook);
    cartlist[cartlistBookIndex].quantity =
      cartlist[cartlistBookIndex].quantity + 1;
    cartlist[cartlistBookIndex].total_price =
      cartlist[cartlistBookIndex].price * cartlist[cartlistBookIndex].quantity;
  } else {
    cartlist.push(book);
  }

  booklist[bookId].quantity = booklist[bookId].quantity - 1;

  menuDisplay();
}

function showCart() {
  console.log(
    "\n Cart List :\n+-----------------------+-------+----------+-------------+\n| Book Name             | Price | Quantity | Total Price |\n+-----------------------+-------+----------+-------------+ "
  );

  cartlist.forEach((book) => {
    console.log(
      " " +
        book.book_name +
        "\t " +
        book.price +
        "\t " +
        book.quantity +
        "\t    " +
        book.total_price +
        "\t"
    );
  });

  menuDisplay();
}
function menuDisplay() {
  let choice = question(
    "Display Menu :- \n 1) show available books to users \n 2) add book \n 3) show cart \n"
  );

  switch (choice) {
    case "1":
      showBooks();
      break;
    case "2":
      addBook();
      break;
    case "3":
      showCart();
      break;
  }
}

menuDisplay();
