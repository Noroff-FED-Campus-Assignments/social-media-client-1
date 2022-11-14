import { login } from "./login";

test("Check localstorage", async () => {
  await login("jowander_@noroff.no", "12345678");
  const token = localStorage.getItem("token");
  expect(token).toBeTruthy();
});
