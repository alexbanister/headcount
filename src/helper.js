export default class DistrictRepository {
  constructor(districtData) {
    this.districtData = this.parseData(districtData);
  }

  parseData(rawData) {
    return rawData.reduce( (accu, record) => {
      const loc = record.Location.toUpperCase();
      if (!accu[loc]) {
        accu[loc] = {
          location: loc,
          districtData: {}
        };
      }
      let dataPoint = record.Data;
      if (isNaN(record.Data)) {
        dataPoint = 0;
      }
      if (!accu[loc].districtData[record.TimeFrame]) {
        accu[loc].districtData[record.TimeFrame] = this.rounded(dataPoint);
      }
      return accu;
    }, {});
  }

  findByName(searchInput) {
    if (!searchInput){
      return undefined;
    }
    const searchResult = Object.keys(this.districtData).find( (key) => {
      return key === searchInput.toUpperCase();
    });
    if (!searchResult){
      return undefined;
    }
    return this.districtData[searchResult];
  }

  rounded(num){
    return Math.round(num * 1000) / 1000;
  }

  findAllMatches(searchInput) {
    if (!searchInput) {
      return Object.keys(this.districtData);
    }
    return Object.keys(this.districtData).filter( (key) => {
      return key.includes(searchInput.toUpperCase());
    });
  }

  findAverage(district) {
    const dataPoints = this.findByName(district).districtData;
    const years = Object.keys(dataPoints);
    const average = years.reduce( (accum, year) => {
      accum += dataPoints[year];
      return accum;
    }, 0);
    return this.rounded(average / years.length);
  }

  compareDistrictAverages(district1, district2) {
    district1 = district1.toUpperCase();
    district2 = district2.toUpperCase();
    const district1Average = this.findAverage(district1);
    const district2Average = this.findAverage(district2);
    let compared = district1Average / district2Average;
    if (district1Average > district2Average) {
      compared = district2Average / district1Average;
    }
    return {
      [district1]: district1Average,
      [district2]: district2Average,
      compared: this.rounded(compared)
    };
  }
}
