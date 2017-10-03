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
        accu[loc].data[record.TimeFrame] = Math.round(data * 1000)/1000;
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

  findAllMatches(searchInput) {
    if (!searchInput) {
      return Object.keys(this.data);
    }
    return Object.keys(this.data).filter( (key) => {
      return key.includes(searchInput.toUpperCase());
    });
  }
}
