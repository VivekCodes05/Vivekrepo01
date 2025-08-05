//we want to get the details acc. to some conditions
//we know condition are used in filter method of array
//also we can use for-each to access each item and apply conditon using if  
const books = [
    { bookName: "To Kill a Mockingbird", genre: "Fiction", year: 1960 },
    { bookName: "1984", genre: "Dystopian", year: 1949 },
    { bookName: "The Great Gatsby", genre: "Classic", year: 1925 },
    { bookName: "The Hobbit", genre: "Fantasy", year: 1937 },
    { bookName: "Pride and Prejudice", genre: "Romance", year: 1813 },
    { bookName: "The Catcher in the Rye", genre: "Fiction", year: 1951 },
    { bookName: "The Da Vinci Code", genre: "Thriller", year: 2003 },
    { bookName: "The Alchemist", genre: "Adventure", year: 1988 },
    { bookName: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", year: 1997 },
    { bookName: "Sapiens: A Brief History of Humankind", genre: "Non-fiction", year: 2011 }
  ];
  let fict_bk = books.filter((item)=>item.genre==="Fiction" && item.year>1955)
  console.log(fict_bk);
  

  books.forEach((item)=>{if (item.genre==="Fiction"){
    console.log(item);
}
    
  })
  
  