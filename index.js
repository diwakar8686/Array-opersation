const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
    
    addBook(book) {
      if (!book.title || !book.author || !book.year) {
        console.log("Book information is incomplete. Please provide a valid title, author, and year.");
        return;
      }
      const existingBook = this.findBookByTitle(book.title);
      if (existingBook) {
        console.log(`The book titled "${book.title}" already exists in the library.`);
        return;
      }
      this.books.push(book);
      console.log(`Book "${book.title}" added successfully.`);
    },
  
    findBookByTitle(title) {
      return this.books.find(book => book.title === title);
    },
  
    removeBook(title) {
      const index = this.books.findIndex(book => book.title === title);
  
      if (index !== -1) {
        this.books.splice(index, 1);
        console.log(`Book "${title}" removed successfully.`);
      } else {
        console.log(`Book titled "${title}" not found.`);
      }
    }
  };
  library.addBook({ author: "George Orwell", year: 1949 }); 
  library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); 
  console.log(library.books.length); 
  
  library.removeBook("The Hobbit");
  console.log(library.books.length);
  