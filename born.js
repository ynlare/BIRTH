        //* Data Manipulation with JavaScript*//
        //* Data source:*//
    /*https://www.stats.govt.nz/large-datasets/csv-files-for-download/
    CSV files for download
    Births and deaths: Year ended December 2020 – CSV
    */
    
    
    //* Display data(DATA.csv) in browser
    getData();
    async function getData() {
    const response = await fetch ('DATA.csv');
    const data = await response.text();
    console.log(data);
    
    //* Row Selection(selection of row we need to use)
    const rows = data.split("\n");
    //*const rows = data.split("\n").slice(1); if you want to remove the first element of csv.
    rows.forEach(elt => { 
        const row = elt.split(',');
        const Mothers_Age = row[0]
        const Count_2017 = row[1]
        const Count_2018 = row[2]
        const Count_2019 = row[3]
        const Count_2020 = row[4]
    console.log(Mothers_Age, Count_2017,Count_2018,Count_2019,Count_2020);
    
    });
    }
    
    //* Create four csv for each year
    //********************************STAT_2017
    getData();
    async function getData() {
    const response = await fetch ('DATA.csv');
    const data = await response.text();
    console.log(data);
    
    
    const rows = data.split("\n");
    rows.forEach(elt => { 
        const row = elt.split(',');
        const Mothers_Age = row[0]
        const Count_2017 = row[1]
    console.log(Mothers_Age, Count_2017);
    
    });
    }
    //********************************STAT_2018
     getData();
    async function getData() {
    const response = await fetch ('DATA.csv');
    const data = await response.text();
    console.log(data);
    
    
    const rows = data.split("\n");
    rows.forEach(elt => { 
        const row = elt.split(',');
        const Mothers_Age = row[0]
        const Count_2018 = row[2]
    console.log(Mothers_Age, Count_2018);
    
    });
    }
    //********************************STAT_2019
    getData();
    async function getData() {
    const response = await fetch ('DATA.csv');
    const data = await response.text();
    console.log(data);
    
    
    const rows = data.split("\n");
    rows.forEach(elt => { 
        const row = elt.split(',');
        const Mothers_Age = row[0]
        const Count_2019 = row[3]
    console.log(Mothers_Age, Count_2019);
    
    });
    }
    //********************************STAT_2020
    getData();
    async function getData() {
    const response = await fetch ('DATA.csv');
    const data = await response.text();
    console.log(data);
    
    
    const rows = data.split("\n");
    rows.forEach(elt => { 
        const row = elt.split(',');
        const Mothers_Age = row[0]
        const Count_2020 = row[4]
    console.log(Mothers_Age, Count_2020);
    
    });
    }






var year2017 = [
{
  Mothers_Age: "Under 15",
  Count_2017: "18"
},
{
  Mothers_Age: "15–19",
  Count_2017: "2298"
},
{
  Mothers_Age: "20–24",
  Count_2017: "9387"
},
{
  Mothers_Age: "25–29",
  Count_2017: "16737"
},
{
  Mothers_Age: "30–34",
  Count_2017: "18795"
},
{
  Mothers_Age: "35–39",
  Count_2017: "9933"
},
{
  Mothers_Age: "40–44",
  Count_2017: "2292"
},
{
  Mothers_Age: "45 and over",
  Count_2017: "150"
}
];


var year2018 = [
{
  Mothers_Age: "Under 15",
  Count_2018: "15"
},
{
  Mothers_Age: "15–19",
  Count_2018: "2061"
},
{
  Mothers_Age: "20–24",
  Count_2018: "8688"
},
{
  Mothers_Age: "25–29",
  Count_2018: "16227"
},
{
  Mothers_Age: "30–34",
  Count_2018: "18708"
},
{
  Mothers_Age: "35–39",
  Count_2018: "10023"
},
{
  Mothers_Age: "40–44",
  Count_2018: "2145"
},
{
  Mothers_Age: "45 and over",
  Count_2018: "153"
}
];

var year2019 = [
{
  Mothers_Age: "Under 15",
  Count_2019: "21"
},
{
  Mothers_Age: "15–19",
  Count_2019: "1974"
},
{
  Mothers_Age: "20–24",
  Count_2019: "8511"
},
{
  Mothers_Age: "25–29",
  Count_2019: "16428"
},
{
  Mothers_Age: "30–34",
  Count_2019: "19740"
},
{
  Mothers_Age: "35–39",
  Count_2019: "10548"
},
{
  Mothers_Age: "40–44",
  Count_2019: "2268"
},
{
  Mothers_Age: "45 and over",
  Count_2019: "153"
}
];

var year2020 = [
{
  Mothers_Age: "Under 15",
  Count_2020: "12"
},
{
  Mothers_Age: "15–19",
  Count_2020: "1881"
},
{
  Mothers_Age: "20–24",
  Count_2020: "7977"
},
{
  Mothers_Age: "25–29",
  Count_2020: "15705"
},
{
  Mothers_Age: "30–34",
  Count_2020: "19515"
},
{
  Mothers_Age: "35–39",
  Count_2020: "10233"
},
{
  Mothers_Age: "40–44",
  Count_2020: "2091"
},
{
  Mothers_Age: "45 and over",
  Count_2020: "159"
}
];

//Object based data:

[
    {
      Mothers_Age: "Under 15",
      Count_2017: "18",
      Count_2018: "15",
      Count_2019: "21",
      Count_2020: "12"
    },
    {
      Mothers_Age: "15–19",
      Count_2017: "2298",
      Count_2018: "2061",
      Count_2019: "1974",
      Count_2020: "1881"
    },
    {
      Mothers_Age: "20–24",
      Count_2017: "9387",
      Count_2018: "8688",
      Count_2019: "8511",
      Count_2020: "7977"
    },
    {
      Mothers_Age: "25–29",
      Count_2017: "16737",
      Count_2018: "16227",
      Count_2019: "16428",
      Count_2020: "15705"
    },
    {
      Mothers_Age: "30–34",
      Count_2017: "18795",
      Count_2018: "18708",
      Count_2019: "19740",
      Count_2020: "19515"
    },
    {
      Mothers_Age: "35–39",
      Count_2017: "9933",
      Count_2018: "10023",
      Count_2019: "10548",
      Count_2020: "10233"
    },
    {
      Mothers_Age: "40–44",
      Count_2017: "2292",
      Count_2018: "2145",
      Count_2019: "2268",
      Count_2020: "2091"
    },
    {
      Mothers_Age: "45 and over",
      Count_2017: "150",
      Count_2018: "153",
      Count_2019: "153",
      Count_2020: "159"
    }
  ]

  //* The table initialisation:

  $('piechart1').DataTable( {
    data: data,
    columns: [
        { data: ' Mothers_Age' },
        { data: 'Count_2017' },
        { data: 'Count_2018' },
        { data: 'Count_2019' },
    { data: 'Count_2020' }
   ]
} );