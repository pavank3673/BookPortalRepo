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
    if (book.quantity == 0) {
      book.status = "unavailable";
    }

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
  let quantity = Number.parseInt(question("\nEnter the quantity : "));

  while (quantity > booklist[bookId].quantity) {
    console.log("\nAvailable Quantity : " + booklist[bookId].quantity);
    quantity = Number.parseInt(question("\nEnter the quantity : "));
  }

  let book = {};
  book.book_name = booklist[bookId].name;
  book.price = booklist[bookId].price;
  book.quantity = quantity;
  book.total_price = book.price * book.quantity;

  let cartlistBook = cartlist.find((existingBook) => {
    return existingBook.book_name == book.book_name;
  });

  if (cartlistBook) {
    let cartlistBookIndex = cartlist.indexOf(cartlistBook);
    cartlist[cartlistBookIndex].quantity =
      cartlist[cartlistBookIndex].quantity + quantity;
    cartlist[cartlistBookIndex].total_price =
      cartlist[cartlistBookIndex].price * cartlist[cartlistBookIndex].quantity;
  } else {
    cartlist.push(book);
  }

  booklist[bookId].quantity = booklist[bookId].quantity - quantity;

  menuDisplay();
}

function showCart() {
  console.log(
    "\n Cart List :\n+-----------------------+-------+----------+-------------+\n| Book Name             | Price | Quantity | Total Price |\n+-----------------------+-------+----------+-------------+ "
  );
  let cartValue = 0;
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
    cartValue += book.total_price;
  });

  console.log("Cart Value : " + cartValue);

  menuDisplay();
}

function updateCart() {
  if (cartlist.length == 0) {
    console.log("Cart Empty");
    menuDisplay();
  } else {
    let updateChoice = question(
      "1) increase quantity \n2) decrease quantity \n3) remove \n"
    );

    if (updateChoice == 1) {
      let existingBookId = question("Enter the Book Id : ");

      let existingCartlistBookIndex = cartlist.findIndex((cartlistBook) => {
        return booklist[existingBookId].name == cartlistBook.book_name;
      });

      if (existingCartlistBookIndex != -1) {
        let updateQuantity = Number.parseInt(
          question("\nEnter the Quantity : ")
        );

        if (updateQuantity <= booklist[existingBookId].quantity) {
          cartlist[existingCartlistBookIndex].quantity += updateQuantity;
          booklist[existingBookId].quantity -= updateQuantity;

          if (booklist[existingBookId].quantity == 0) {
            booklist[existingBookId].status = "unavailable";
          }
        }
      }
    } else if (updateChoice == 2) {
      let existingBookId = question("Enter the Book Id : ");

      let existingCartlistBookIndex = cartlist.findIndex((cartlistBook) => {
        return booklist[existingBookId].name == cartlistBook.book_name;
      });

      if (existingCartlistBookIndex != -1) {
        let updateQuantity = Number.parseInt(
          question("\nEnter the Quantity : ")
        );

        if (updateQuantity <= cartlist[existingCartlistBookIndex].quantity) {
          cartlist[existingCartlistBookIndex].quantity -= updateQuantity;
          booklist[existingBookId].quantity += updateQuantity;

          if (booklist[existingBookId].quantity != 0) {
            booklist[existingBookId].status = "available";
          }
        }
      }
    } else if (updateChoice == 3) {
      let existingBookId = question("Enter the Book Id : ");

      let existingCartlistBookIndex = cartlist.findIndex((cartlistBook) => {
        return booklist[existingBookId].name == cartlistBook.book_name;
      });

      booklist[existingBookId].quantity +=
        cartlist[existingCartlistBookIndex].quantity;

      if (booklist[existingBookId].quantity != 0) {
        booklist[existingBookId].status = "available";
      }

      delete cartlist[existingCartlistBookIndex];
    }
  }

  menuDisplay();
}

function menuDisplay() {
  let choice = question(
    "Display Menu :- \n 1) show available books to users \n 2) add book \n 3) show cart \n 4) update cart \n"
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
    case "4":
      updateCart();
      break;
  }
}

menuDisplay();
