import { TextLO } from "../../pages/textLOPages/textLO.page";
import { createBddCustom } from "../common/createBddCustom";

const { Given, When, Then, Before } = createBddCustom();
let textLO: TextLO;

Before({ tags: '@textLO' }, async ({ page }) => {
  textLO = new TextLO(page);
});

When('User clicks on the Content option in the navbar', async function () {
  await textLO.clickContentOption();
});

When('User clicks on Learning Object Library in the menu', async function () {
  await textLO.clickLOOption();
});

Then('User is redirected to Learning Object Library page', async function () {
  await textLO.verifyLOLibraryPage();
});

When('User clicks on the Create New Learning Object button', async function () {
  await textLO.clickCreateLOButton();
});

Then('User is redirected to the Create New Learning Object popup', async function () {
  await textLO.verifyCreateLOPopup();
});

When('User selects the Text option from the popup', async function () {
  await textLO.clickTextOption();
});

Then('User is redirected to the Create New Text LO page', async function () {
  await textLO.verifyTextLOPage();
});

Then('User clicks on the dropdown for Course family',async function(){
  await textLO.clickCFDropdown();
});

Then('User Selects the Success Coach Course Family',async function(){
  await textLO.clickCF();
});

When('User clicks on LO name field',async function(){
  await textLO.clickLO();
})

Then('User Enters the LO name',async function(){
  await textLO.enterText();
})
