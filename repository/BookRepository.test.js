const BookRepository = require('./BookRepository');
const DB = require('../Database/connect');

beforeEach( async () =>{
    await DB.connectDatabase();
});

afterEach( async () =>{
    await DB.disconnectDatabase();
});
//check find book by id chuyên sâu
const mockBook = {
	title: "2",
	price: 3000,
}
describe('Sunny case: Book testings',() =>{
    // it('find all books',async () =>{
    //     const books = await BookRepository.FindAllBooks();
    //     expect(books).toBeTruthy();
    //     expect(typeof books).toBe("object");
    // })
    // it('Search books',async () =>{
    //     const books = await BookRepository.SearchBook();
    //     expect(books).toBeTruthy();
    //     expect(typeof books).toBe("object");
    // })
    // it('find books by id',async () =>{
    //     const book = await BookRepository.FindOneBook("62a48b9b94aeea18e4b69b04no");
    //     expect(book).toBeTruthy();
    //     expect(typeof book).toBe("object");
    //     expect(book.title).toBe(mockBook.title);
    // })
    // it('limit number book of each page',async () =>{
    //     const books = await BookRepository.FindAllBooksSkip();
    //     expect(books).toBeTruthy();
    //     expect(books.length).toBe(3);
    // })
    
    // it('Create book OK',async () =>{
    //     const book = await BookRepository.CreateBook({mockBook})
    //     expect(book).toBeTruthy();
    //     expect(book.title).toBe(mockBook.title);
    // })

    it('Update book OK',async () =>{
        const book = await BookRepository.CreateBook("62bb098189cd3d9c8905b024", {mockBook})
        expect(book.title).toBe(mockBook.title);
    })
    // chưa chuẩn
    // it('Delete books by id',async () =>{
    //     const book = await BookRepository.DeleteBook("62a48bb994aeea18e4b69b06");
    //     expect(book).toBeNull();
    // })
})
describe('Rainy case: Book testings',() =>{
})