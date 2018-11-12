import c from "../lib/mc2";
const title = c("h1", {}, "CASTO Studio");
const video = c("video", { class: "ready", autoplay: true });
const readyButton = c("button", { class: "ready" });
module.exports = c("div", { class: "container" }, null, [
  title,
  video,
  c("div", {}, "", [readyButton])
]);
