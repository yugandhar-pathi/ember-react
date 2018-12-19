import { Selector, RequestHook } from "testcafe";
import MockData from "./mocks";

//Configure Fixture
fixture`New Fixture`
.page`http://localhost:4200/`
.requestHooks(MockData)


const inputUserName = Selector("#username");
const inputPassword = Selector("#password");
const inputLoginButton = Selector('#login');


test("access home page", async t => {
  await t
    .typeText(inputUserName, "admin")
    .typeText(inputPassword, "admin")
    .click(inputLoginButton)
    .expect(Selector("p").withText("This is home route").exists).eql(true)
    .expect(Selector("p").withText("Test Pathi").exists).eql(true)
});

test("Check Volume List", async t => {
  await t
    .typeText(inputUserName, "admin")
    .typeText(inputPassword, "admin")
    .click(inputLoginButton)
    .expect(Selector("th").withText("volume10").find("u").exists).eql(true);
});
