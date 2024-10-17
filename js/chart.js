var xValues1 = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Creativity",
    "Confident",
];
var yValues1 = [8, 7, 6, 7.5, 8];
var barColors1 = [
    "#ff0000",
    "#ffa500",
    "#ffff00",
    "#008000",
    "#52f2c5",
];

new Chart("myChart1", {
    type: "doughnut",
    data: {
        labels: xValues1,
        datasets: [
            {
                backgroundColor: barColors1,
                data: yValues1,
                borderColor: '#000',
                hoverBackgroundColor: '#fff',
            },
        ],
    },
    options: {
        title: {
            display: true,
            text: "Soft Skills(out of 10)",
        },
    },
});


var xValues2 = [
    "C",
    "JAVA",
    "Oops",
    "DSA",
    "SpringBoot",
    "HTML",
    "CSS",
    "JS",
    "MySQL"
];
var yValues2 = [7, 8, 8, 7, 6, 8, 7, 6, 6];
var barColors2 = [
    "#ff0000",
    "#ffa500",
    "#ffff00",
    "#008000",
    "#52f2c5",
    "#1c6cf7",
    "#8d26ed",
    "#d823de",
    "#e62d4c",
];
new Chart("myChart2", {
    type: "horizontalBar",
    data: {
        labels: xValues2,
        datasets: [
            {
                backgroundColor: barColors2,
                data: yValues2,
                hoverBackgroundColor: '#fff',
            },
        ],
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Technical Skills(out of 10)",
        },
    },
});
