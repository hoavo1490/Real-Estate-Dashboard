cube(`BatdongsanContent`, {
  sql: `SELECT * FROM public.batdongsan_content`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [title, id]
    },
    
    price: {
      sql: `price`,
      type: `sum`
    },

    countDistrict: {
      sql: `location`,
      type: `countDistinct`
    },

    countOffice: {
      sql: `id`,
      type: `count`
    },

    totalArea: {
      sql: `area`,
      type: `sum`
    },
    averagePrice: {
      sql: 'price',
      type: 'avg'
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
