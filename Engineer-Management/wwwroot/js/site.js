// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let csvArray = [];

function getCSV() {
    var csvFile = document.getElementById("csv").value;

    let csv = new XMLHttpRequest();

    // CSVファイルへのパス
    csv.open("GET", csvFile, false);

    // 改行ごとに配列化
    let lines = csv.responseText.split(/\r\n|\n/);

    alert(lines + " ");
    // 1行ごとに処理
    for (let i = 0; i < lines.length; ++i) {
        let cells = lines[i].split(",");
        if (cells.length != 1) {
            csvArray.push(cells);
        }
    }
    console.log(csvArray);
}


