Date.prototype.getMonthName = function(lang) {
    lang = lang && (lang in Date.locale) ? lang : 'en';
    return Date.locale[lang].month_names[this.getMonth()];
};

Date.prototype.getMonthNameShort = function(lang) {
    lang = lang && (lang in Date.locale) ? lang : 'en';
    return Date.locale[lang].month_names_short[this.getMonth()];
};

Date.locale = {
    en: {
       month_names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
       month_names_short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
};

Date.prototype.getWeek = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
};

// var myDate = new Date("2001-02-02");
// myDate.getWeek();

function getMonthCode(month, companyId) {

  companyId = typeof companyId !== 'undefined' ? companyId : 0;

  if (companyId == 0) { // Grizzly | Kodiak
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
  else if (companyId == 1) { // Timber Wolf | Longhorn | RJ Reynolds | Commonwealth
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
  else if (companyId == 2) { // (Julian Date) Phillip Morris | Santa Fe Tobacco
    switch (month) {
      case 1:
        return '001 - 031';
      case 2:
        return '032 - 059';
      case 3:
        return '060 - 090';
      case 4:
        return '091 - 120';
      case 5:
        return '121 - 151';
      case 6:
        return '152 - 181';
      case 7:
        return '182 - 212';
      case 8:
        return '213 - 243';
      case 9:
        return '244 - 273';
      case 10:
        return '274 - 304';
      case 11:
        return '305 - 334';
      case 12:
        return '335 - 365';
    }
  }
  else if (companyId == 3) { // ITG Brands | Lorillard
    switch (month) {
      case 1:
        return 'B';
      case 2:
        return 'L';
      case 3:
        return 'A';
      case 4:
        return 'C';
      case 5:
        return 'K';
      case 6:
        return 'O';
      case 7:
        return 'R';
      case 8:
        return 'W';
      case 9:
        return 'H';
      case 10:
        return 'I';
      case 11:
        return 'T';
      case 12:
        return 'E';
    }
  }
  else if (companyId == 4) { // Liggett (Printed Codes)
    var date = new Date();
    var month = date.getMonth() + 1,
        day = date.getDate(),
        year = date.getFullYear();

    switch (month) {
      case 1:
        var first = new Date(year + '-01-01'),
            last = new Date(year + '-01-31');

        return first.getWeek() + ' ' + last.getWeek();
      case 2:
        var first = new Date(year + '-02-01'),
            last = new Date(year + '-02-28');

        if (year % 4 === 0) {
          last = new Date(year + '-02-29');
        }

        return first.getWeek() + ' ' + last.getWeek();
      case 3:
        var first = new Date(year + '-03-01'),
            last = new Date(year + '-03-31');

        return first.getWeek() + ' - ' + last.getWeek();
      case 4:
        var first = new Date(year + '-04-01'),
            last = new Date(year + '-04-30');

        return first.getWeek() + ' - ' + last.getWeek();
      case 5:
        var first = new Date(year + '-05-01'),
            last = new Date(year + '-05-31');

        return first.getWeek() + ' - ' + last.getWeek();
      case 6:
        var first = new Date(year + '-06-01'),
            last = new Date(year + '-06-30');

        return first.getWeek() + ' - ' + last.getWeek();
      case 7:
        var first = new Date(year + '-07-01'),
            last = new Date(year + '-07-31');

        return first.getWeek() + ' - ' + last.getWeek();
      case 8:
        var first = new Date(year + '-08-01'),
            last = new Date(year + '-08-31');

        return first.getWeek() + ' - ' + last.getWeek();
      case 9:
        var first = new Date(year + '-09-01'),
            last = new Date(year + '-09-30');

        return first.getWeek() + ' - ' + last.getWeek();
      case 10:
        var first = new Date(year + '-10-01'),
            last = new Date(year + '-10-31');

        return first.getWeek() + ' - ' + last.getWeek();
      case 11:
        var first = new Date(year + '-11-01'),
            last = new Date(year + '-11-30');

        return first.getWeek() + ' - ' + last.getWeek();
      case 12:
        var first = new Date(year + '-12-01'),
            last = new Date(year + '-12-31');

        return first.getWeek() + ' - ' + last.getWeek();
    }
  }
}

function getYearCode(year, exponent) {

  exponent = typeof exponent !== 'undefined' ? exponent : 1;

  return "" + (year % Math.pow(10, exponent));
}

function getDateCode(month, day, year) {
  return getMonthCode(month, 1) + day + getYearCode(year);
}

function getMonthsAgo(month, year, ago) {

  if (ago >= 12) { // Remove a year if ago is greater than 12
    year -= 1;
  }

  if (month < ( ago % 12 )) { // If month is less than ago remove a year
    year -= 1;
  }

  ago -= 1;

  return {
    'month': Math.abs((month - 1) + (12 - ago)) % 12 + 1,
    'year': year
  };

}

function expiration() {

  var date = new Date();
  var month = date.getMonth() + 1,
      day = date.getDate(),
      year = date.getFullYear();

  var tmp = getMonthsAgo(month, year, 6);
  var month6Ago = tmp.month,
      yearAgo = tmp.year;

  var letterCode = getMonthCode(month6Ago) + getYearCode(yearAgo),
      dateCode = getDateCode(month, day, year),
      snusVuse = getMonthCode(month) + getYearCode(year - 1);

  tmp = getMonthsAgo(month, year, 18);
  var month18Ago = tmp.month,
      year18Ago = tmp.year,
      julianDate = getMonthCode(month18Ago, 2),
      weekRange = getMonthCode(month, 4);

  var rj_renolds = getMonthCode(month18Ago, 1) + getYearCode(year18Ago),
      phillip_morris = '_( Julian Date )_' + getYearCode(year18Ago),
      santa_fe_tobacco = '( Julian Date )' + getYearCode(year18Ago, 2),
      lorillard = getYearCode(year18Ago) + getMonthCode(month18Ago),
      itgLetterCode = getMonthCode(month18Ago, 3) + getYearCode(year18Ago),
      liggett_printed = '_' + getYearCode(year - 1, 2) + '( Week Range )',
      liggett_embosed = getMonthCode(month, 1) + getYearCode(year - 1);

  var brands = [
    {
      "name": "Grizzly | Kodiak",
      "pull": letterCode,
      "date": "Last Day of " + date.getMonthName() + ", " + year
    },
    {
      "name": "Copenhagon | Skoal",
      "pull": date.getMonthNameShort() + " " + day + " " + year,
      "date": date.getMonthName() + " " + day + ", " + year
    },
    {
      "name": "Timber Wolf | Longhorn",
      "pull": dateCode,
      "date": date.getMonthName() + " " + day + ", " + year
    },
    {
      "name": "CAMEL SNUS | VUSE",
      "pull": snusVuse,
      "date": "Last Day of " + date.getMonthName() + ", " + year
    },
    {
      "name": "RJ Reynolds",
      "pull": rj_renolds,
      "date": "Last Day of " + date.getMonthName() + ", " + year
    },
    {
      "name": "Lorillard",
      "pull": lorillard,
      "date": "Last Day of " + date.getMonthName() + ", " + year
    },
    {
      "name": "ITG Brands",
      "pull": itgLetterCode,
      "date": "Last Day of " + date.getMonthName() + ", " + year
    },
    {
      "name": "Liggett (Embosed)",
      "pull": liggett_embosed,
      "date": "Last Day of " + date.getMonthName() + ", " + year
    },
    {
      "name": "JT International USA",
      "pull": '',
      "date": "Last Day of " + date.getMonthName() + ", " + year
    }
  ];

  var julianBrands = [
    {
      "name": "Phillip Morris",
      "julianDate": julianDate,
      "pull": phillip_morris,
      "date": "Last Day of " + date.getMonthName() + ", " + year
    },
    {
      "name": "Santa Fe Tobacco",
      "julianDate": julianDate,
      "pull": santa_fe_tobacco,
      "date": "Last Day of " + date.getMonthName() + ", " + year
    }
  ];

  var weekBrands = [
    {
      "name": "Liggett (Printed)",
      "week": weekRange,
      "pull": liggett_printed,
      "date": "Last Day of " + date.getMonthName() + ", " + year
    }
  ];

  document.getElementById('content').innerHTML = '';
  loadFile('templates', 'templates/expiration.html').then(function(res) {

    var content = document.getElementById('content');

    var expirationTemplate = convertToElement(document.getElementById('expirationTemplate').innerHTML);

    content.appendChild(expirationTemplate);

    brands.forEach(function(brand) {

      var template = convertToElement(document.getElementById("expirationBrands").innerHTML);

      template.getElementsByClassName("insertBrand")[0].innerHTML = brand.name;
      template.getElementsByClassName("insertPull")[0].innerHTML = brand.pull;
      template.getElementsByClassName('insertExpirationDate')[0].innerHTML = brand.date;

      document.getElementById('smallBrand').appendChild(template);
      document.getElementById('largeBrand').appendChild(template.cloneNode(true));
    });

    julianBrands.forEach(function(brand) {

      var template = convertToElement(document.getElementById("expirationJulianBrands").innerHTML);

      template.getElementsByClassName("insertJulian")[0].innerHTML = brand.julianDate;
      template.getElementsByClassName("insertBrand")[0].innerHTML = brand.name;
      template.getElementsByClassName("insertPull")[0].innerHTML = brand.pull;
      template.getElementsByClassName('insertExpirationDate')[0].innerHTML = brand.date;

      document.getElementById('smallBrand').appendChild(template);
      document.getElementById('largeBrand').appendChild(template.cloneNode(true));
    });

    weekBrands.forEach(function(brand) {

      var template = convertToElement(document.getElementById("expirationWeekBrands").innerHTML);

      template.getElementsByClassName("insertWeekRange")[0].innerHTML = brand.week;
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
