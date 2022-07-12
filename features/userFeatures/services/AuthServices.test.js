const AuthServices = require("./AuthServices");
const DB = require("../../../Database/connect");

beforeAll(async () => {
  await DB.connectDatabase();
});

afterAll(async () => {
  await DB.disconnectDatabase();
});

const MOCK_USER_DATA = {
  email: "nampt4@gmail.com",
  password: "123456",
  fullname: "nampt_test",
  role: "admin",
};

describe("Sunny case: User testing", () => {
  it("findUser work OK", async () => {
    const User = await AuthServices.findOne("nampt4@gmail.com");
    console.log("🚀 ~ file: AuthRepository.test.js ~ line 22 ~ it ~ User", User)

    expect(User).toBeTruthy();
    expect(typeof User).toBe("object");
    expect(User.email).toBe(MOCK_USER_DATA.email);
  });

  it("sign in is successful", async () => {
    const User = await AuthServices.create(MOCK_USER_DATA);
    expect(User.email).toBe(MOCK_USER_DATA.email);
    console.log(User.id);
    const deleteUser = await AuthServices.deleteAccount(User.id);
    console.log(deleteUser);
  });
});

describe("Rainy case: User testing", () => {});
