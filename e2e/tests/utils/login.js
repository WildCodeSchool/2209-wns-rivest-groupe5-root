export const login = async (page, user, expect) => {
  await page.goto("http://front:3000/login");
  const emailInput = page.locator("#email");
  const passwordInput = page.locator("#password");
  const submitButton = page.getByRole("button", { name: "login" });
  await emailInput.fill(user.email);
  await passwordInput.fill(user.password);
  await submitButton.click({timeout: 50000});
  await expect(page).toHaveURL(/dashboard/i);
};
