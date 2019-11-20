const LoanSchedule = require("../lib/differentiated-loan-schedule");
const {expect} = require("chai");
require("mocha");

describe("Differentiated Loan Schedule should", () => {
	let loanSchedule = new LoanSchedule();

	it("have overall interest eq 3111.18 when params($50000/12m/11.5%/25.10.2016/25)", () => {
		expect(loanSchedule.calculateSchedule({
			amount: 50000,
			rate: 11.5,
			term: 12,
			paymentOnDay: 25,
			issueDate: "25.10.2016"
		}).overAllInterest, "3111.18");
	});
});