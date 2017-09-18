function getMonthCode(month, companyId) {

    companyId = typeof companyId !== 'undefined' ? companyId : 0;

    if (companyId == 0) {
        switch (month) {
            case 1:
                return 'A';
            case 2:
                return 'B';
            case 3:
                return 'C';
            case 4:
                return 'D';
            case 5:
                return 'E';
            case 6:
                return 'F';
            case 7:
                return 'G';
            case 8:
                return 'H';
            case 9:
                return 'J';
            case 10:
                return 'K';
            case 11:
                return 'L';
            case 12:
                return 'M';
        }
    }
    else if (companyId == 1) {
        switch (month) {
            case 1:
                return 'A';
            case 2:
                return 'B';
            case 3:
                return 'C';
            case 4:
                return 'D';
            case 5:
                return 'E';
            case 6:
                return 'F';
            case 7:
                return 'G';
            case 8:
                return 'H';
            case 9:
                return 'I';
            case 10:
                return 'J';
            case 11:
                return 'K';
            case 12:
                return 'L';
        }
    }
    else if (companyId == 2) {
        switch (month) { //TODO
            case 1:
                return 'A';
            case 2:
                return 'B';
            case 3:
                return 'C';
            case 4:
                return 'D';
            case 5:
                return 'E';
            case 6:
                return 'F';
            case 7:
                return 'G';
            case 8:
                return 'H';
            case 9:
                return 'J';
            case 10:
                return 'K';
            case 11:
                return 'L';
            case 12:
                return 'M';
        }
    }
}

function getYearCode(year) {
    return "" + (year % 10);
}

function getDateCode(month, day, year) {
    return getMonthCode(month, 1) + day + getYearCode(year);
}

function getMonthsAgo(month, ago) {
    return Math.abs((month - 1) + (12 - ago)) % 12 + 1;
}

function expiration() {

    var date = new Date();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();

    var letterCode = getMonthCode(getMonthsAgo(month, 5)) + getYearCode(year);
    var dateCode = getDateCode(month, day, year);
    var snusVuse = getMonthCode(month) + getYearCode(year - 1);
    var itgLetterCode = getMonthCode(getMonthsAgo(month, 5), 2) + getYearCode(year - 1);

    var brands = [
        {
          "name": "Grizzly | Kodiak",
          "pull": letterCode,
          "date": "Last Day of " + month + " " + year
        },
        {
          "name": "Copenhagon | Skoal",
          "pull": month + " " + day + " " + year,
          "date": month + " " + day + " " + year
        },
        {
          "name": "Timber Wolf | Longhorn",
          "pull": dateCode,
          "date": month + " " + day + " " + year
        },
        {
          "name": "CAMEL SNUS | VUSE",
          "pull": snusVuse,
          "date": "Last Day of " + month + " " + year
        }
    ];

    document.getElementById('content').innerHTML = '';
    loadFile('templates', 'templates/expiration.html').then(function(res) {

        var content = document.getElementById('content');

        var expirationTemplate = convertToElement(document.getElementById('expirationTemplate').innerHTML);
        expirationTemplate.getElementsByClassName('insertDate')[0].innerHTML = month + ' ' + day + ' ' + year;

        content.appendChild(expirationTemplate);

        brands.forEach(function(brand) {

            var template = convertToElement(document.getElementById("expirationBrands").innerHTML);

            template.getElementsByClassName("insertBrand")[0].innerHTML = brand.name;
            template.getElementsByClassName("insertPull")[0].innerHTML = brand.pull;
            template.getElementsByClassName('insertExpirationDate')[0].innerHTML = brand.date;

            document.getElementById('smallBrand').appendChild(template);
            document.getElementById('largeBrand').appendChild(template.cloneNode(true));
        });
    }, function(error) {
        console.error('Failed!', error);
    });
}

function dateCode() {
    document.getElementById('content').innerHTML = '';
    loadFile('content', 'templates/information.html');
}

function about() {
    document.getElementById('content').innerHTML = '';
    loadFile('content', 'templates/about.html');
}

document.addEventListener('DOMContentLoaded', function() {
    expiration();
});
