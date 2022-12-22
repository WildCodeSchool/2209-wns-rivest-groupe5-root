export const login = async (page, user, expect) => {
  await page.goto("http://localhost:3000/login");
  const emailInput = page.locator("#email");
  const passwordInput = page.locator("#password");
  const submitButton = page.getByRole("button", { name: "login" });
  await emailInput.fill(user.email);
  await passwordInput.fill(user.password);
  await submitButton.click();
  await expect(page).toHaveURL("http://localhost:3000/dashboard");
};
