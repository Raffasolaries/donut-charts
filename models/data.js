var data = (type) => {
    return [{
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
      }];
    switch (type) {
        case 'revenue': {
            return {
                id: 'revenue',
                tablet: 120000,
                smartphone: 80000,
                total: 200000
            }
        }
        case 'impressions': {
            return {
                id: 'impressions',
                tablet: 20000000,
                smartphone: 30000000,
                total: 50000000
            }
        }
        case 'visits': {
            return {
                id: 'visits',
                tablet: 480000000,
                smartphone: 120000000,
                total: 600000000
            }
        }
    }
}