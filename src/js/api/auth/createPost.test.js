import { login } from "./login";
import { createPost } from "../posts/create";

test("Create post", async () => {
  await login("jowander_@noroff.no", "12345678");
  const response = await createPost("Jan Haug", "Retierd");
  expect(response.title).toEqual("Jan Haug");
});
