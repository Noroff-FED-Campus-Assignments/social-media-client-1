import { logout } from "./logout";

test("Clear localstorage", async () => {
  logout();
  const token = localStorage.getItem("token");
  expect(token).toBeNull();
});
