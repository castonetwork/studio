import PeerInfo from "peer-info";

const createNode = async () => {
  return await PeerInfo.create(async (err, peerInfo) => {
    return await peerInfo;
  });
};
module.exports = createNode;
