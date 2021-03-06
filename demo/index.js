import Player from "@kissmybutton/motorcortex-player";
import { HTMLClip, loadPlugin } from "@kissmybutton/motorcortex/";
import mySubsTextFile from "./subs.srt.js";
import SubtitlesDefinition from "../src/";
const Subtitles = loadPlugin(SubtitlesDefinition);

const clip = new HTMLClip({
  html: `
    <div class="container">
      <div id="subs-container"></div>
    </div>`,
  css: `
  .container{
    width:100%;
    height:100%;
    position:relative;
    background:#151515;
  }
`,
  host: document.getElementById("clip"),
  containerParams: {
    width: "720px",
    height: "640px",
  },
});

const subtitle = new Subtitles.ParseText(
  {
    fontSize: 14,
    textColor: "white",
    fontFamily: "Ubuntu",
    subtitles: mySubsTextFile,
    position: "bottom",
    maxWidth: 400,
    paddingBottom: 50,
  },
  {
    selector: "#subs-container",
    containerParams: {
      width: "720px",
      height: "640px",
    },
  }
);

clip.addIncident(subtitle, 0);
new Player({
  scaleToFit: true,
  clip: clip,
  theme: "mc-blue",
  preview: true,
  pointerEvents: true,
});
