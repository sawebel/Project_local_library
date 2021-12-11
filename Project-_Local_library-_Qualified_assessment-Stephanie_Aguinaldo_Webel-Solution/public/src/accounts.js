function findAccountById(accounts, id) { //comapre if input id matches the account id, if it does, return account object
  const findAccount = accounts.find((account) => account.id === id, {});
return findAccount;
}

function sortAccountsByLastName(accounts) { // This function is to return a sorted array of the provided account abojects. The objects are sorted alphabetically by the last name.
  let lastName = accounts.sort(function (a, b) {
    if(a.name.last > b.name.last) return 1;
    else if (b.name.last > a.name.last) return -1;
    else return 1;
})
  return lastName
}

//returns a number that represents the number of times the account's ID appears in any book's 'borrows' array.
function getTotalNumberOfBorrows(account, books) {
  let result = books.reduce((acc, book) => {
    for (let i = 0; i < book.borrows.length; i++) {
      if (book.borrows[i].id === account.id) 
      {
        acc++
      }
    }
    return acc
  }, 0)
  return result
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => book.borrows.some(acc => acc.id === account.id && acc.returned === false))
    .map(book => {let author = authors.find(author => author.id === book.authorId)
      book.author = author; 

      return book
    })
    }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
