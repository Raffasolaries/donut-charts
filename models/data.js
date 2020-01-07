var data = (type) => {
    /* return [{
        name: 'Washington',
        acres: 32205
      }, {
        name: 'Oregon',
        acres: 6807
      }, {
        name: 'Idaho',
        acres: 4975
      }, {
        name: 'Other States',
        acres: 1244
      }, {
        name: 'Canada',
        acres: 257
      }]; */
    switch (type) {
        case 'revenue': {
            return {
                id: 'revenue',
                total: 200000,
                colors: ['#8EC353', '#4B6332'],
                values: [{
                  value: 80000
                }, {
                  value: 120000
                }]
            }
        }
        case 'impressions': {
            return {
                id: 'impressions',
                total: 50000000,
                colors: ['#ABDFE9', '#2E4955'],
                values: [{
                  value: 30000000
                }, {
                  value: 20000000
                }]
              }
        }
        case 'visits': {
            return {
                id: 'visits',
                value: 480000000,
                total: 600000000,
                colors: ['#D1C223', '#A75227'],
                values: [{
                  value: 120000000
                }, {
                  value: 480000000
                }]
            }
        }
    }
}