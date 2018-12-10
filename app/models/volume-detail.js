import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr("string"),
  agenttype: DS.attr("string"),
  volumesize: DS.attr("string")
});
