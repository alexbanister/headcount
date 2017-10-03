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
    let returnValue

    if (!searchInput){
      return undefined;
    }

    const casedInput = searchInput.toUpperCase()
    const keys = Object.keys(this.data);

    const findObject = keys.forEach( (key) => {
      let upperCasedKey = key.toUpperCase()
      if (upperCasedKey === casedInput) {
         returnValue = upperCasedKey;
      } else {

      };
    })

    // this.data.forEach( (district) => {
    //   if(district.location === casedInput) {
    //     console.log(district);
    //     returnValue = district
    //   }

      // console.log(returnValue);
    const searchResult = Object.assign({}, { location: returnValue }, { data: this.data[returnValue] });

      return searchResult
    }

}
