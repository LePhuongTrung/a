const request = require("supertest");

const app = require("../../../app");
const DB = require("../../../Database/connect");
const UserModel = require("../../../Database/models/User");

const MOCK_USER_DATA = {
  email: "trunglp20015@gmail.com",
  password: "123456",
  fullname: "trung",
  role: "admin",
};

const MOCK_USER_DATA_NO_DEL = {
    email: "trunglp20017@gmail.com",
    password: "123456",
    fullname: "trung",
    role: "admin",
  };

beforeAll(() => {
  DB.connectDatabase();
});

afterAll(() => {
  DB.disconnectDatabase();
});

describe("POST /users/register ", () => {
  // chưa fix đc xóa sau khi tạo test
  // test("return response status is 200", async () => {
  //   const response = await request(app)
  //     .post("/users/register")
  //     .send(MOCK_USER_DATA_NO_DEL)
  //     .set("Accept", "application/json");

  //   expect(response.status).toBe(200);
  //   expect(response.body.email).toEqual(MOCK_USER_DATA_NO_DEL.email);
  //   const id = (await UserModel.findOne({email: MOCK_USER_DATA_NO_DEL.email}))._id;
  //   console.log("🚀 ~ file: authController.test.js ~ line 39 ~ test ~ id", id)
    
  //   const deleteResponse = await request(app)
  //   .delete("/users/deletedAccount/:id")
  //   .send(id)
  //   .set("Accept", "application/json");
  //   const user = await UserModel.findOne({email: MOCK_USER_DATA_NO_DEL.email});
  //   console.log("🚀 ~ file: authController.test.js ~ line 46 ~ test ~ user", user)
  // });
  test("return response status is 400", async () => {
    const response = await request(app)
      .post("/users/register")
      .send(MOCK_USER_DATA)
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.text).toEqual("user already exist");
  });
});

describe("POST /users/login ", () => {
  test("check empty email or password return response status is 400", async () => {
    const response = await request(app)
      .post("/users/login")
      .send({
        email: "",
        password: MOCK_USER_DATA.password,
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(400);
    expect(response.text).toEqual("empty email or password");
  });
  test("check User does not exist or been disabled return response status is 403", async () => {
    const response = await request(app)
      .post("/users/login")
      .send({
        email: "156181@21584gmail.com",
        password: MOCK_USER_DATA.password,
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(403);
    expect(response.text).toEqual("Can't find any user");
  });
  test("check Invalid password return response status is 401", async () => {
    const response = await request(app)
      .post("/users/login")
      .send({
        email: "trunglp20015@gmail.com",
        password: "12123sdasd",
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(401);
    expect(response.text).toEqual("Password is not valid");
  });
  test("return response status is 200", async () => {
    const response = await request(app)
      .post("/users/login")
      .send({
        email: MOCK_USER_DATA.email,
        password: MOCK_USER_DATA.password,
      })
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
    expect(response.text).toEqual("Login successfully !!!");
  });
});
