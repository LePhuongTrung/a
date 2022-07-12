const BookService = require("./BookService");
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
    const books = await BookService.getAllBooks();

    expect(books).toBeTruthy();
    expect(typeof books).toBe("object");
    expect(books.length).toBeGreaterThan(0);
  });
  it("search book", async () => {
    const book = await BookService.searchBook("testCreate1",1);

    expect(book).toBeTruthy();
  });

  it("getAllBooks skip work OK", async () => {
    const books = await BookService.getAllBooksSkip(3);

    expect(books).toBeTruthy();
    expect(typeof books).toBe("object");
    expect(books.length).toEqual(3);
  });

  it("findBookById work OK", async () => {
    const book = await BookService.getOneBook("62bb0a19c814665522ed8b2b");

    expect(book).toBeTruthy();
    expect(typeof book).toBe("object");
    expect(book.title).toBe(mockBook.title);
  });

  it("create book is successful", async () => {
    const book = await BookService.createBook(mockBook);
    expect(book.title).toBe(mockBook.title);

    const deleteBook = await BookService.deleteBook(book.id);
  });

  it("Update book is successful", async () => {
    const updateBook = await BookService.updateBook("62bb0a19c814665522ed8b2b",mockBook);

    expect(updateBook.title).toBe(mockBook.title);
  });
});

describe("Rainy case: Book testing", () => {});
