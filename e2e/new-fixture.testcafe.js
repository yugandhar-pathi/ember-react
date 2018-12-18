import { Selector } from "testcafe";
import MockData from "./mocks";

//Configure Fixture
fixture`New Fixture`.page`http://localhost:4200/`.requestHooks(
  MockData.volumesList
);

test("access home page", async t => {
  await t
    .typeText(Selector("#ember226"), "admin")
    .typeText(Selector("#ember227"), "admin")
    .click(Selector('[data-ember-action-228="228"]'))
    .expect(Selector("p").withText("This is home route").exists)
    .eql(true);
});

test("Check Volume List", async t => {
  await t
    .typeText(Selector("#ember226"), "admin")
    .typeText(Selector("#ember227"), "admin")
    .click(Selector('[data-ember-action-228="228"]'))
    .expect(
      Selector("th")
        .withText("volume10")
        .find("u").exists
    )
    .eql(true);
});
