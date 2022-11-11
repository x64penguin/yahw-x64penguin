export const findAllBackrefs = (table, id) => {
    let result = [];
  
    table.forEach((entity, index) => {
      if (entity.backref == id) {
        result.push(entity);
      }
    })
  
    return result;
  };

  export const prepareData = (items) => {
    return {
      entities: items.reduce((acc, cinema) => {
        acc[cinema.id] = cinema;
        return acc;
      }, {}),
      ids: items.map(({ id }) => id),
    };
  };
  