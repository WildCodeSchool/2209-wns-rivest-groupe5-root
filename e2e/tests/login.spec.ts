import { test, expect } from "@playwright/test";
import { login } from "./utils/login";

const user = {
  email: "toto@toto.com",
  password: "toto",
};

test("login test", async ({ page }) => {
  await login(page, user, expect);
});
