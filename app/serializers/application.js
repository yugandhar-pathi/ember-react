import DS from "ember-data";

export default DS.JSONAPISerializer.extend({
  normalizeFindRecordResponse(store,primaryModelClass,payload,id,requestType) {
    console.log("reach serializer for normalizeFindRecordResponse");
    return {
      data: {
        type: "volume-detail",
        id,
        attributes: payload
      }
    };
  },

  normalizeQueryRecordResponse(store,primaryModelClass,payload,id,requestType) {
    console.log("reach serializer");
    return {
      data: {
        attributes: payload,
        id: 1,
        type: "user-details"
      }
    };
  }
});
