const BookRepository = require("./BookRepository");
const DB = require("../../../Database/connect");

beforeAll(async () => {
  await DB.connectDatabase();
});

afterAll(async () => {
  await DB.disconnectDatabase();
});

const mockBook = {
  title: "Unit Test",
  price: 30000,
  author: "Nodejs",
};

describe("Sunny case: Book testing", () => {
  it("getAllBooks work OK", async () => {
    const books = await BookRepository.FindAllBooks();
    console.log(
      "🚀 ~ file: BookRepository.test.js ~ line 15 ~ it ~ books",
      books
    );
    expect(books).toBeTruthy();
    expect(typeof books).toBe("object");
    expect(books.length).toBeGreaterThan(0);
  });
  it("search book", async () => {
    const book = await BookRepository.SearchBook("testCreate1",1);
    console.log(
      "🚀 ~ file: BookRepository.test.js ~ line 15 ~ it ~ books",
      book
    );
    expect(book).toBeTruthy();
  });

  it("getAllBooks skip work OK", async () => {
    const books = await BookRepository.FindAllBooksSkip(3);
    console.log(
      "🚀 ~ file: BookRepository.test.js ~ line 15 ~ it ~ books",
      books
    );
    expect(books).toBeTruthy();
    expect(typeof books).toBe("object");
    expect(books.length).toEqual(3);
  });

  it("findBookById work OK", async () => {
    const book = await BookRepository.FindOneBook("62bb0a19c814665522ed8b2b");
    console.log(
      "🚀 ~ file: BookRepository.test.js ~ line 21 ~ it ~ book",
      book
    );

    expect(book).toBeTruthy();
    expect(typeof book).toBe("object");
    expect(book.title).toBe(mockBook.title);
  });

  it("create book is successful", async () => {
    const book = await BookRepository.CreateBook(mockBook);
    expect(book.title).toBe(mockBook.title);
    console.log(book);
    const deleteBook = await BookRepository.DeleteBook(book.id);
    console.log(deleteBook);
  });

  it("Update book is successful", async () => {
    const updateBook = await BookRepository.UpdateBook("62bb0a19c814665522ed8b2b",mockBook);

    expect(updateBook.title).toBe(mockBook.title);
    console.log(updateBook);
  });
});

describe("Rainy case: Book testing", () => {});
