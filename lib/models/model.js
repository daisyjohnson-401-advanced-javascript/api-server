'use strict';
// sending back a collection of records and providing some filtering for them
class DataModel {

  constructor(schema) {
    this.schema = schema;
  }

  get(id) {
    // if id is truthy than find the id
    if (id) {
      return this.schema.findById(id);
    }
    else {
      return this.schema.find({});
    }
  }
  post(record) {
    let newRecord = this.schema(record);
    return newRecord.save();
  }
  update(id, record){
    return this.schema.findByIdAndUpdate(id, record, { new: true });
  }
  delete(id) {
    return this.schema.findByIdAndDelte(id);
  }
}
module.exports = DataModel;