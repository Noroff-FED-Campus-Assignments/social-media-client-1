import { login } from "./login";
import { logout } from "./logout";

test("Clear localstorage", async () => {
  await login("jowander_@noroff.no", "12345678");
  const token = localStorage.getItem("token");
  expect(token).toBeTruthy();
  logout();
  const afterLogout = localStorage.getItem("token");
  expect(afterLogout).not.toBeTruthy();
});
