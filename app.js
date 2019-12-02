const http = require("http");
const LoanSchedule = require("./index");

const port = 3000;

let loanSchedule = new LoanSchedule({
	decimalDigit: 2,
	dateFormat: "DD.MM.YYYY",
	prodCalendar: "ru"
});

let interest = loanSchedule.calculateInterestByPeriod({
	from: "10.12.2015",
	to: "10.01.2016",
	amount: 1000,
	rate: 16.7
});

let payment = loanSchedule.calculateAnnuityPaymentAmount({
	amount: 110000,
	term: 60,
	rate: 12.9
});

let schedule = loanSchedule.calculateSchedule({
	amount: 50000,
	rate: 11.5,
	term: 12,
	paymentOnDay: 25,
	issueDate: "25.10.2016",
	scheduleType: loanSchedule.ANNUITY_SCHEDULE
});

const requestHandler = () => {
	schedule.response.end(payments.forEach(function (pay) {console.log(pay.paymentDate + "\t|\t\t" + pay.initialBalance + "\t|\t\t" + pay.paymentAmount + "\t|\t\t" + pay.principalAmount + "\t|\t\t" + pay.interestAmount + "\t|\t\t" + pay.finalBalance);
	})
	);
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if (err) {
		return console.log("something bad happened", err);
	}
});
