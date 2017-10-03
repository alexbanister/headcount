export default class DistrictRepository {
  constructor(data) {
    this.data = this.parseData(data);
  }

  parseData(data) {
    return data.reduce( (accu, record) => {
      if(!accu[record.Location]) {
        accu[record.Location] = []
      }
      const recordKeys = Object.keys(record);
      const strippedKeys = recordKeys.filter( (key) => {
        return key !== 'Location';
      });

      const newRecord = strippedKeys.reduce( (accu, key) => {
        if(!accu[key]) {
          accu[key] = ''
        }
        accu[key] = record[key];
        return accu
      }, {});

      accu[record.Location].push(newRecord);
      return accu
    }, {})
  }

  findByName(searchInput) {
    if (searchInput === ''){
      return 'undefined';
    }

    const keys = Object.keys(this.data);

    const findObject = keys.filter( (key) => {
      if(key === searchInput) {
        const searchResult = Object.assign({}, { location: key }, { data: this.data[key] });
        // console.log('searchResult', searchResult);
        return searchResult;
      }
    })

    console.log(findObject);
  }

}
