import { Selector, t } from 'testcafe';
import UserUtil from '../util/UserUtil';

class FmrPage {
    constructor () {
        // UserUtil
        this.UserUtil = new UserUtil();
        // Landing Page
        this.continueButton = Selector("button[data-at='continue-button']");
        // App Modal Step 1
        this.emailField = Selector("input#email");
        this.firstNameField = Selector("input#firstName");
        this.lastNameField = Selector("input#lastName");
        // App Modal Step 2
        this.addressField = Selector("input#address");
        this.cityField = Selector("input#city");
        this.dateOfBirthField = Selector("input#dateOfBirth");
        this.phoneField = Selector("input#phone");
        this.ssnField = Selector("input#ssn");
        this.stateDropdown = Selector("div#state");
        this.zipCodeField = Selector("input#zipCode");
        // App Modal Step 3
        this.disclosureCheckbox = Selector("div#disclosureCheckbox");
        // App Modal Step 4
        this.passcodeField = Selector("input#passcode");
        this.resendCodeLink = Selector("div.gzYoWY");
        //{"AARON","TESTA","2049 Vandever Ave","HOLLYWOOD","Florida","33025","4045049006","12345","09011957","899010001","650"},
    }

    async fillAndSubmitStep1() {
        console.log("Step 1 of FMR application");
        await t
            .typeText(this.firstNameField, "Aaron")
            .typeText(this.lastNameField, "Testa");
        const email = this.UserUtil.generateEmailAddress("eugene.lee+atesta");
        console.log("Using email: " + email);
        await t
            .typeText(this.emailField, email)
            .click(this.continueButton);
    }

    async fillAndSubmitStep2() {
        console.log("Step 2 of FMR application");
        await t
            .typeText(this.addressField, "2049 Vandever Ave")
            .typeText(this.cityField, "Hollywood");
        await this.selectState("Florida");
        await t
            .typeText(this.zipCodeField, "33025")
            .typeText(this.phoneField, "4045049006")
            .typeText(this.ssnField, "899010001")
            .typeText(this.dateOfBirthField, "09011957")
            .click(this.continueButton);
    }

    async selectState(stateName) {
        await t.click(this.stateDropdown);
        const state = Selector('div').withExactText(stateName);
        await t.click(state);
    }

    async agreeToDisclosures() {
        console.log("Agree to disclosures");
        await t
            .click(this.disclosureCheckbox)
            .click(this.continueButton);
    }

    async fillAndSubmitMFACode() {
        await t
            .typeText(this.passcodeField, "12345")
            .click(this.continueButton);
    }
}

export default new FmrPage();