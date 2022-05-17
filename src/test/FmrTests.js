import { Selector } from 'testcafe';
import FmrPage from '../page/FmrPage';

//{"AARON","TESTA","2049 Vandever Ave","HOLLYWOOD","Florida","33025","4045049006","12345","09011957","899010001","650"},

fixture`FMR Application Flow`
    .page`https://beta.savvymoney.com/ui/page/154/fmr`;

test('FMR Application - Positive Flow', async t => {
    console.log(new Date().toUTCString());
    console.log("Verifying title");
    await t.expect(Selector("title").innerText).eql('Find My Rate | SavvyMoney')
    await t.click("button[data-at='get-my-rate-button']");
    await FmrPage.fillAndSubmitStep1();
    await FmrPage.fillAndSubmitStep2();
    await FmrPage.agreeToDisclosures();
    await FmrPage.fillAndSubmitMFACode();
    await t.expect(Selector("title").innerText).eql('Find My Rate | SavvyMoney');
});
