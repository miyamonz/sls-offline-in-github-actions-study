const request = require("supertest");

test("GET /hello", async () => {
  const res = await request("http://localhost:3000").get("/hello");

  expect(res.status).toBe(200);
  expect(res.get("Content-Type")).toMatch(/json/);
});
