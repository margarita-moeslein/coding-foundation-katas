  /*The first parameter apiData will be an array that includes objects
    -The objects can have different keys
    -The second parameter mandatoryKeys is a array that includes all keys that an object (from the apiData array) should have to pass the filter test
    -Return an array with only the objects that include all keys from the mandatoryKeys array*/
    
    function filterApiData(apiData, mandatoryKeys) {
      /**
       * Checkt ob in jedem apiData Datensatz jedes Objekt die Keys hat die in MandatoryKeys angegeben sind.
       * @param {Array} a = ["id", "title"]
       */
      function hasAllMandatoryKeys(a) {
        const mandatoryKeysLength = mandatoryKeys.length;
    
        let count = 0;
    
        for (let mandatoryKey of mandatoryKeys) {
          if (mandatoryKey && a.includes(mandatoryKey)) {
            count++;
          }
        }
    
        return count === mandatoryKeysLength;
      }
    
      let result = [];
    
      for (let data of apiData) {
        const dataKeys = Object.keys(data);
    
        if (hasAllMandatoryKeys(dataKeys) === true) {
          result.push(data);
        }
      }
    
      return result;
    }
/*
const data = [{ id: 1, price: 100 }, { price: 50 }];

const filteredData = filterApiData(data, ["id"]);

console.log(filteredData); // [{id: 1, price: 0}]

const data = [
  { id: 1, price: 100 },
  { id: 2, title: "" },
  { id: 3, price: 50 },
];

const filteredData = filterApiData(data, ["id", "price"]);

console.log(filteredData); // [{ id: 1, price: 100 }, { id:3, price: 50}]
*/
