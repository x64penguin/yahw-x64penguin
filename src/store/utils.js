export const findAllBackrefs = (table, id) => {
    const result = [];
  
    for (entity in table) {
      if (entity.backref == id) {
        result.push(entity);
      }
    }
  
    return result;
  };

export const prepareData = (data) => {
    let entities = {};
    let ids = [];

    for (item in data) {
        let id = item.id;
        entities[id] = item;
        ids.push(id);
    }

    return {entities, ids};
}