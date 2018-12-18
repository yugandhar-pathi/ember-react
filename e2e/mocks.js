import { RequestMock } from "testcafe";

//Mock Data for volume list
let MockData = {};

const volumeList = {
  url: "http://localhost:3000/volumes",
  data: [
    { title: "volume10", agenttype: "vvol", volumesize: "100kb" },
    { title: "volume20", agenttype: "vol", volumesize: "200kb" },
    { title: "volume30", agenttype: "vol", volumesize: "300kb" },
    { title: "volume40", agenttype: "vvol", volumesize: "400kb" }
  ]
};

MockData.volumesList = RequestMock()
  .onRequestTo(volumeList.url)
  .respond(volumeList.data, 200, { "access-control-allow-origin": "*" });

export default MockData;
