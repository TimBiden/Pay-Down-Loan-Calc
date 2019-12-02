const http = require("http");
const LoanSchedule = require('./index');

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(
        let loanSchedule = new LoanSchedule({
            decimalDigit: 2,
            dateFormat: 'DD.MM.YYYY',
            prodCalendar: "ru"
        })
    );

        let interest = loanSchedule.calculateInterestByPeriod({
            from: '10.12.2015',
            to: '10.01.2016',
            amount: 1000,
            rate: 16.7
        });
    );
});

server.listen(port, hostname, () => {
    console.log(interest);
});
