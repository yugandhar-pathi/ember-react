import DS from "ember-data";

export default DS.JSONAPISerializer.extend({
  normalizeQueryRecordResponse(
    store,
    primaryModelClass,
    payload,
    id,
    requestType
  ) {
    return {
      data: {
        attributes: payload,
        id: 1,
        type: "user-details"
      }
    };
  }
});
