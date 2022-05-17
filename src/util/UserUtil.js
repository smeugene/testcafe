export default class UserUtil {
    constructor() {
    }

    getISOTimeStamp() {
        return new Date().toISOString();
    }

    getFormattedTimeStamp() {
        const date = new Date();
        const timestamp = date.getFullYear() + date.getMonth() + date.getDate() + date.getTime();
        return timestamp;
    }

    generateEmailAddress(emailPrefix) {
        return emailPrefix + this.getFormattedTimeStamp() + "@savvymoney.com";
    }
}
