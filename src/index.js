import { whenDOMReady } from "@abcnews/env-utils";
import { fetchOne } from "@abcnews/terminus-fetch";
import html from "bel";

const view = (
  stories,
  root,
  dateAEST
) => html`<table width="580" cellpadding="1" cellspacing="1" border="0">
  <tr>
    <td rowspan="3" align="left" valign="bottom" width="85"><a href="/news/"><img src="${root}newsworm.gif" width="85" height="134" border="0" alt="ABC Australia - Online News"></a></td>
    <td rowspan="3" width="20"><img width="20" height="10" src="${root}space.gif" alt="[space]"></td>
    <td valign="top"><a href="/newsradio/listen/"><img align="left" src="${root}the_dial.gif" width="150" height="50" border="0" alt="The Dial: Today's audio highlight"></a></td>
    <td valign="top" align="right"><a href="."><img src="${root}banner.gif" border="0" alt="Northern Exposure"></a></td>
  </tr>
  <tr>
    <td colspan="2" align="center"><a href="/news/business/"><img src="${root}new_strap1.gif" width="105" height="19" border="0" alt="Business News"></a><a href="/news/australia/"><img src="${root}new_strap2.gif" width="79" height="19" border="0" alt="State News"></a><a href="/news/sport/"><img src="${root}new_strap3.gif" width="150" height="19" border="0" alt="Sport News"></a></td>
  </tr>
  <tr>
    <td valign="bottom" width="475" colspan="2">
      <span style="font-size:xx-large"><b><tt>ABC News - top stories</tt></b></span><br>
      <span style="font-size:medium"><tt>This bulletin: ${dateAEST}  <a href="#time">AEST</a></tt></span><br>
      <span style="font-size:medium"><tt>(Use "<span style="color:#ff0000">Refresh</span>" or "<span style="color:#ff0000">Reload</span>" to get latest edition)</tt></span>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <a href="/news/"><img src="${root}bulletin1.gif" alt="Latest Bulletin" width="123" height="27" border="0"></a><br>
      <a href="/news/justin/"><img src="${root}newslink0.gif" alt="Just In" width="123" height="27" border="0"></a><br>
      <a href="/news/world/"><img src="${root}ra0.gif" alt="World News" width="123" height="27" border="0"></a><br>
      <a href="/news/australia/"><img src="${root}state0.gif" alt="State News" width="123" height="27" border="0" name="slot2"></a><br>
      <a href="/news/business/"><img src="${root}business0.gif" alt="Business News" width="123" height="27" border="0" name="slot1"></a><br>
      <a href="/news/sport/"><img src="${root}sport0.gif" alt="Sport News" width="123" height="27" border="0" name="slot3"></a><br>
      <a href="/news/rural/"><img src="${root}rural0.gif" alt="Rural News" width="123" height="27" border="0"></a><br>
      <a href="/news/interactives/"><img src="${root}features0.gif" alt="Features" width="123" height="27" border="0"></a><br>
      <a href="/news/weather/"><img src="${root}weather0.gif" alt="Weather" width="123" height="27" border="0"></a><br>
      <img width="5" height="25" src="${root}space.gif" alt="[space]"  border="0"><br>
      <a href="/news/map/?id=4768972"><img width="84" height="110" src="${root}aust_map.gif" border="0" alt="Regional News Service" hspace="12"></a><br>
      <img width="5" height="15" src="${root}space.gif" alt="[space]" border="0"><br>
      <img width=20 height=20 src="${root}space.gif" alt="[space]"><br>
      <a href="/tv/epg/#/channel/ABCN"><img src="${root}guide0.gif" alt="ABC News Guide" width="123" height="27" border="0"></a><br>
      <a href="http://about.abc.net.au/"><img src="${root}about0.gif" alt="About This Site" width="123" height="27" border="0"></a><br>
      <a href="http://search.abc.net.au/"><img src="${root}search0.gif" alt="Search" width="123" height="27" border="0"></a><br>
    </td>
    <td></td>
    <td valign="top" colspan="2">
      ${stories.map(
        (story, index) => html`<p>
          ${index === 0 && story.imageURL
            ? html`<img
                src="${story.imageURL}"
                style="float:right;border:1px solid #000;margin:8px;width:200px;height:auto"
              />`
            : ""}
          <span
            style="font-size:${index < 3 ? "x" : ""}x-large;line-height:0.95"
            ><tt
              ><b><a href="${story.url}">${story.headline}</a></b></tt
            ></span
          >
          <br />
          <span style="font-size:large">${story.teaser}</span>
          <tt
            >[<a href="${story.url}"><nobr>FULL STORY</nobr></a
            >]</tt
          >
          <br />
        </p>`
      )}
      <p>
        <span style="font-size:large" face="Arial, Helvetica"><b><a href="/news/weather/"><img src="${root}forecast.gif" alt="Tomorrow's weather forecast:" border="0"></a></b></span>
      </p>
      <p>
        <center>
          <a href="/news/"><img border=0 alt="ABC Online" src="${root}abconl.gif"></a>
        </center>
      </p>
        <center>
          <b><a href="http://about.abc.net.au/">© 1997 Australian Broadcasting Corporation</a></b><br>
          <span style="font-size:small"><a name="time">AEST = Australian Eastern Standard Time which is 10 hours ahead of UTC (Greenwich Mean Time)</a></span>
        </center>
      </p>
    </td>
  </tr>
</table>`;

Promise.all([fetchOne({ id: 45910, type: "collection" }), whenDOMReady]).then(
  ([collectionDocument]) => {
    const headEl = document.querySelector("head");
    const bodyEl = document.querySelector("body");

    Promise.all(
      collectionDocument._embedded.content
        .filter(({ docType }) => docType === "Article")
        .map(({ id }) => fetchOne({ id, isTeasable: true }))
    ).then((articleDocuments) => {
      const stories = articleDocuments.map((articleDocument, index) => ({
        url: articleDocument.canonicalURL,
        headline: articleDocument.title,
        pubDate: +new Date(articleDocument.dates.displayPublished),
        teaser: articleDocument.synopsis,
        imageURL:
          index === 0 && articleDocument._embedded.mediaThumbnail
            ? articleDocument._embedded.mediaThumbnail.images["4x3"]
            : null,
      }));

      let date = new Date(
        stories.reduce((memo, story) => {
          if (story.pubDate > memo) {
            memo = story.pubDate;
          }

          return memo;
        }, 0)
      );

      if (0 === +date) {
        date = new Date(Date.now());
      }

      const offsetMinutes = date.getTimezoneOffset() + 600;

      date.setMinutes(date.getMinutes() + offsetMinutes);

      const hours = date.getHours() % 12;
      const minutes = date.getMinutes();

      const dateAEST = `${
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()]
      }, ${
        [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ][date.getMonth()]
      } ${date.getDate()}, ${date.getFullYear()} at ${hours ? hours : 12}:${
        minutes < 10 ? "0" : ""
      }${minutes} ${date.getHours() >= 12 ? "PM" : "AM"}`;

      bodyEl.appendChild(view(stories, __webpack_public_path__, dateAEST));
    });

    // Document reset (will have competed before the last promise resolves)

    Array.from(headEl.children)
      .filter((el) => el.getAttribute("rel") === "stylesheet")
      .forEach((el) => headEl.removeChild(el));

    bodyEl.innerHTML = "";
    bodyEl.setAttribute("link", "#0000ff");
    bodyEl.setAttribute("bgcolor", "#ffffff");
    bodyEl.setAttribute("background", `${__webpack_public_path__}margin.gif`);
  }
);
