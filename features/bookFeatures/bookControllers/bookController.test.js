const request = require("supertest");

const app = require("../../../app");
const DB = require("../../../Database/connect");

const mockBook = {
    title: "Book Controller Test",
    price: 30000,
    author: "Nodejs",
  };

beforeAll(() => {
  DB.connectDatabase();
});

afterAll(() => {
  DB.disconnectDatabase();
});

// describe("POST /bookapi/CreateBooks ", () => {
//   test("return response status is 200", async () => {
//     const response = await request(app)
//       .post("/bookapi/CreateBooks")
//       .send(mockBook)
//       .set("Accept", "application/json");

//     expect(response.status).toBe(200);
//     expect(response.body.title).toEqual(mockBook.title);

//     const deleteResponse = await request(app)
//     .delete("/bookapi/deleteBooks/:id")
//     .send(response.id)
//     .set("Accept", "application/json");
//     expect(deleteResponse.status).toBe(200);

//   });
// });
