// Unique element in an array
let names = ['Rahim','Ithan','Jobbar','Ithan','Rahim','Jobbar','kaffy','Ithan','Jobbar','Rahim','Ithan','Jobbar','kaffy','Ithan','Jobbar','Rahim','Ithan','Jobbar','kaffy','Ithan','Jobbar','Rahim','Ithan','Jobbar','kaffy','Ithan','Jobbar','Rahim','Ithan','Jobbar','kaffy','Ithan','Jobbar','Rahim','Ithan','Jobbar','kaffy','Ithan','Jobbar','Rahim','Ithan','Jobbar','kaffy','Ithan','Jobbar','Rahim','Ithan','Jobbar','kaffy','Ithan','Jobbar','Rahim','Ithan','Jobbar','kaffy','Ithan','Jobbar','Rahim','Ithan','Jobbar','kaffy','Ithan','Jobbar','Rahim','Ithan','Jobbar','kaffy','Ithan','Jobbar','Rahim','Ithan','Jobbar','kaffy','Ithan','Jobbar','Rahim','Ithan','Jobbar','kaffy','Ithan','Jobbar']
let uniqueNames = [];

for (let i = 0; i < names.length; i++) {
    let element = names[i];
    let index = uniqueNames.indexOf(element);
    if (index == -1) {
        uniqueNames.push(element);
    }
}

console.log(uniqueNames);  // Output: [ 'Rahim', 'Ithan', 'Jobbar', 'kaffy' ]