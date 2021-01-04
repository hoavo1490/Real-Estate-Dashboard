cube(`AnalyzeResult`, {
  sql: `SELECT * FROM public.analyze_result`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    },
    
    averageprice: {
      sql: `averageprice`,
      type: `sum`
    }
  },
  
  dimensions: {
    location: {
      sql: `location`,
      type: `string`
    }
  }
});
