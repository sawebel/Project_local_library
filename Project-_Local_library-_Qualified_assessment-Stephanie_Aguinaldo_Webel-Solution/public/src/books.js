function findAuthorById(authors, id) {
  const findAuthor = authors.find((author) => author.id === id, {});
  return findAuthor;
}

function findBookById(books, id) {
  const findBook = books.find((book) => book.id === id, {});
  return findBook;
}

//It returns an array with two arrays inside of it. All of the inputted books are present in either the first or second array.
//The first array contains book objects that represent the books _that are currently checked out_, 
//while the second array contains book objects that represent the books _that have been returned._  

function partitionBooksByBorrowedStatus(books) {
//need to use filter to create array with books that are currently checked out
let currentlyOut = books.filter((book) => book.borrows[0].returned === false);
//need to use filter to create array with books that have been returned
let returned = books.filter((book) => book.borrows[0].returned !== false);
//combine the two arrays
return [currentlyOut, returned];
//return the combined array
}

function getBorrowersForBook(book, accounts) {
  
  let result = book.borrows.map(borrower => { 
   let result = accounts.find(account => borrower.id === account.id )
   result.returned = borrower.returned 
   
   return result
  })
  console.log(result);
  return result.filter((borrower, i)=> result.findIndex(item => item.id === borrower.id) === i) 

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
