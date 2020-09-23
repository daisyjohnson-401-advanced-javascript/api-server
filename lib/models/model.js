'use strict';
// sending back a collection of records and providing some filtering for them
class DataModel {

  constructor(schema) {
    this.schema = schema;
  }

  async get(id) {
    // if id is truthy than find the id
    if (id) {
      return this.schema.findById(id);
    }
    else {
      return this.schema.find({});
    }
  }
  post(info) {
    return this.schema.create(info);
  }
  put(id, info) {
    return this.schema.findByIdAndUpdate(id, info, { new: true });
  }
  patch(id, record){
    return this.schema.findByIdAndUpdate(id, record, { new: true });
  }
  delete(id) {
    return this.schema.findByIdAndDelete(id);
  }
}
module.exports = DataModel;