export default class DistrictRepository {
  constructor(data) {
    this.data = this.parseData(data);
  }

  parseData(data) {
    return data.reduce( (accu, record) => {
      const loc = record.Location.toUpperCase();
      if(!accu[loc]) {
        accu[loc] = {
          location: loc,
          data: {}
        }
      }
      let data = record.Data;
      if (isNaN(record.Data)) {
        data = 0;
      }
      if(!accu[loc].data[record.TimeFrame]) {
        accu[loc].data[record.TimeFrame] = this.rounded(data);
      }
      return accu
    }, {});
  }

  findByName(searchInput) {
    if (!searchInput){
      return undefined;
    }
    const searchResult = Object.keys(this.data).find( (key) => {
      return key === searchInput.toUpperCase();
    });
    if (!searchResult){
      return undefined;
    }
    return this.data[searchResult];
  }

  rounded(num){
    return Math.round(num * 1000) / 1000;
  }

  findAllMatches(searchInput) {
    if (!searchInput) {
      return Object.keys(this.data);
    }
    return Object.keys(this.data).filter( (key) => {
      return key.includes(searchInput.toUpperCase());
    });
  }

  findAverage(district) {
    const dataPoints = this.findByName(district).data;
    const years = Object.keys(dataPoints);
    const average = years.reduce( (accum, year) => {
      accum += dataPoints[year];
      return accum
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
      compared = district2Average / district1Average
    }
    return {
      [district1]: district1Average,
      [district2]: district2Average,
      compared: this.rounded(compared)
    }

  }
}
