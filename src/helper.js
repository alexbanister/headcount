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
    const thing = Object.keys(this.data);
    const foundIt = thing.find( (key) => {
      return key === searchInput.toUpperCase();
    });
    if (!foundIt){
      return undefined;
    }
    return this.data[foundIt];
  }
}
