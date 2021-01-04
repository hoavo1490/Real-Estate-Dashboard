cube(`BatdongsanContent`, {
  sql: `SELECT * FROM public.batdongsan_content`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [title, id]
    },
    officeCount: {
      sql: 'id',
      type: 'count'
    },

    averagePrice: {
      sql: 'price',
      type: 'avg'
    },

    totalArea: {
      sql: 'area',
      type: 'sum'
    },

    avgPricebyArea: {
      sql: `${price}/${area}`,
      type: 'avg'
    },

    price: {
      sql: `price`,
      type: `number`
    }
  },
  
  dimensions: {
    title: {
      sql: `title`,
      type: `string`
    },
    location: {
      sql: `location`,
      type: `string`
    },
    area: {
      sql: `area`,
      type: `number`
    },    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    }
  }
});
