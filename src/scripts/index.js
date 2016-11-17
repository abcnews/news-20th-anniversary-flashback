/*!
 * news-20th-anniversary-flashback
 *
 * @version development
 * @author Colin Gourlay <Gourlay.Colin@abc.net.au>
 */

const yo = require('yo-yo');
const slice = Array.prototype.slice;

const view = state => {
  return yo`<table width="580" cellpadding="1" cellspacing="1" border="0">
    <tr>
      <td rowspan="3" align="left" valign="bottom" width="85"><a href="/news/"><img src="${state.assetsRoot}newsworm.gif" width="85" height="134" border="0" alt="ABC Australia - Online News"></a></td>
      <td rowspan="3" width="20"><img width="20" height="10" src="${state.assetsRoot}space.gif" alt="[space]"></td>
      <td valign="top"><a href="http://www.abc.net.au/newsradio/listen/"><img align="left" src="${state.assetsRoot}the_dial.gif" width="150" height="50" border="0" alt="The Dial: Today's audio highlight"></a></td>
      <td valign="top" align="right"><a href="."><img src="${state.assetsRoot}banner.gif" border="0" alt="Northern Exposure"></a></td>
    </tr>
    <tr>
      <td colspan="2" align="center"><a href="/news/business/"><img src="${state.assetsRoot}new_strap1.gif" width="105" height="19" border="0" alt="Business News"></a><a href="/news/state/"><img src="${state.assetsRoot}new_strap2.gif" width="79" height="19" border="0" alt="State News"></a><a href="/news/sport/"><img src="${state.assetsRoot}new_strap3.gif" width="150" height="19" border="0" alt="Sport News"></a></td>
    </tr>
    <tr>
      <td valign="bottom" width="475" colspan="2">
        <span style="font-size:xx-large"><b><tt>ABC News - top stories</tt></b></span><br>
        <span style="font-size:medium"><tt>This bulletin: Sat, Jan 31, 1998 at 11:50 AM  <a href="#time">AEST</a></tt></span><br>
        <span style="font-size:medium"><tt>(Use "<span style="color:#ff0000">Refresh</span>" or "<span style="color:#ff0000">Reload</span>" to get latest edition)</tt></span>
      </td>
    </tr>
    <tr>
      <td valign="top">
        <a href="/news/"><img src="${state.assetsRoot}bulletin1.gif" alt="Latest Bulletin" width="123" height="27" border="0"></a><br>
        <a href="/news/justin/"><img src="${state.assetsRoot}newslink0.gif" alt="Just In" width="123" height="27" border="0"></a><br>
        <a href="/news/world/"><img src="${state.assetsRoot}ra0.gif" alt="World News" width="123" height="27" border="0"></a><br>
        <a href="/news/australia/"><img src="${state.assetsRoot}state0.gif" alt="State News" width="123" height="27" border="0" name="slot2"></a><br>
        <a href="/news/business/"><img src="${state.assetsRoot}business0.gif" alt="Business News" width="123" height="27" border="0" name="slot1"></a><br>
        <a href="/news/sport/"><img src="${state.assetsRoot}sport0.gif" alt="Sport News" width="123" height="27" border="0" name="slot3"></a><br>
        <a href="/news/rural/"><img src="${state.assetsRoot}rural0.gif" alt="Rural News" width="123" height="27" border="0"></a><br>
        <a href="/news/interactives/"><img src="${state.assetsRoot}features0.gif" alt="Features" width="123" height="27" border="0"></a><br>
        <a href="/news/weather/"><img src="${state.assetsRoot}weather0.gif" alt="Weather" width="123" height="27" border="0"></a><br>
        <img width="5" height="25" src="${state.assetsRoot}space.gif" alt="[space]"  border="0"><br>
        <a href="/news/map/?id=4768972"><img width="84" height="110" src="${state.assetsRoot}aust_map.gif" border="0" alt="Regional News Service" hspace="12"></a><br>
        <img width="5" height="15" src="${state.assetsRoot}space.gif" alt="[space]" border="0"><br>
        <img width=20 height=20 src="${state.assetsRoot}space.gif" alt="[space]"><br>
        <a href="/tv/epg/#/channel/ABCN"><img src="${state.assetsRoot}guide0.gif" alt="ABC News Guide" width="123" height="27" border="0"></a><br>
        <a href="http://about.abc.net.au/"><img src="${state.assetsRoot}about0.gif" alt="About This Site" width="123" height="27" border="0"></a><br>
        <a href="http://search.abc.net.au/"><img src="${state.assetsRoot}search0.gif" alt="Search" width="123" height="27" border="0"></a><br>
      </td>
      <td></td>
      <td valign="top" colspan="2">
        ${state.stories.map((story, index) => yo`<p>
          ${index === 0 && story.imageURL ? yo`<img src="${story.imageURL}" style="float:right;border:1px solid #000;margin:8px;width:200px;height:auto" />` : ''}
          <span style="font-size:${index < 3 ? 'x' : ''}x-large;line-height:0.95"><tt><b><a href="${story.url}">${story.headline}</a></b></tt></span>
          <br>
          <span style="font-size:large">${story.teaser}</span>
          <tt>[<a href="${story.url}"><nobr>FULL STORY</nobr></a>]</tt>
          <br>
        </p>`)}
        <p>
          <span style="font-size:large" face="Arial, Helvetica"><b><a href="/web/19980131015346/http://www.abc.net.au/news/weather/default.htm"><img src="${state.assetsRoot}forecast.gif" alt="Tomorrow's weather forecast:" border="0"></a></b></span>
          <br>
          <applet code="WeatherBot.class" codebase="/web/19980131015346oe_/http://www.abc.net.au/news/java" width="475" height="50">
            <param name="items" value="15">
            <param name="holdTime" value="5000">
            <param name="bgColor" value="#ffffff">
            <param name="headColor" value="#ff0000">
            <param name="headSize" value="18">
            <param name="headFace" value="Helvetica">
            <param name="headStyle" value="0">
            <param name="headAlign" value="3">
            <param name="bodyColor" value="#000000">
            <param name="bodySize" value="10">
            <param name="bodyFace" value="Helvetica">
            <param name="bodyStyle" value="0">
            <param name="bodyAlign" value="3">
            <param name="head1" value="Adelaide">
            <param name="body1" value="Max: 31&deg;C   Fine.">
            <param name="link1" value="http://www.abc.net.au/news/weather/default.htm">
            <param name="head2" value="Albury-Wodonga">
            <param name="body2" value="Max: 32&deg;C   Fine.">
            <param name="link2" value="http://www.abc.net.au/news/weather/default.htm">
            <param name="head3" value="Alice Springs">
            <param name="body3" value="Max: 41&deg;C   Fine.">
            <param name="link3" value="http://www.abc.net.au/news/weather/default.htm">
            <param name="head4" value="Brisbane">
            <param name="body4" value="Max: 31&deg;C   Mostly fine.">
            <param name="link4" value="http://www.abc.net.au/news/weather/default.htm">
            <param name="head5" value="Broome">
            <param name="body5" value="Max: 29&deg;C   Showers and storms developing">
            <param name="link5" value="http://www.abc.net.au/news/weather/default.htm">
            <param name="head6" value="Cairns">
            <param name="body6" value="Max: 32&deg;C   Afternoon shower.">
            <param name="link6" value="http://www.abc.net.au/news/weather/default.htm">
            <param name="head7" value="Canberra">
            <param name="body7" value="Max: 32&deg;C   Fine.">
            <param name="link7" value="http://www.abc.net.au/news/weather/default.htm">
            <param name="head8" value="Darwin">
            <param name="body8" value="Max: 32&deg;C   Mainly fine.">
            <param name="link8" value="http://www.abc.net.au/news/weather/default.htm">
            <param name="head9" value="Hobart">
            <param name="body9" value="Max: 21&deg;C   Fine.">
            <param name="link9" value="http://www.abc.net.au/news/weather/default.htm">
            <param name="head10" value="Melbourne">
            <param name="body10" value="Max: 29&deg;C   Fine. ">
            <param name="link10" value="http://www.abc.net.au/news/weather/default.htm">
            <param name="head11" value="Newcastle">
            <param name="body11" value="Max: 27&deg;C   Showers and thunderstorms.">
            <param name="link11" value="http://www.abc.net.au/news/weather/default.htm">
            <param name="head12" value="Perth">
            <param name="body12" value="Max: 28&deg;C   Fine.">
            <param name="link12" value="http://www.abc.net.au/news/weather/default.htm">
            <param name="head13" value="Sydney">
            <param name="body13" value="Max: 27&deg;C   A few showers.">
            <param name="link13" value="http://www.abc.net.au/news/weather/default.htm">
            <param name="head14" value="Townsville">
            <param name="body14" value="Max: 33&deg;C   Humid but fine.">
            <param name="link14" value="http://www.abc.net.au/news/weather/default.htm">
            <param name="head15" value="Wollongong">
            <param name="body15" value="Max: 27&deg;C   Mostly fine.">
            <param name="link15" value="http://www.abc.net.au/news/weather/default.htm">
          </applet>
        </p>
        <p>
          <center>
            <a href="/news/"><img border=0 alt="ABC Online" src="${state.assetsRoot}abconl.gif"></a>
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
 };

const $stylesheet = $(`[rel="stylesheet"][href="${$('.init-interactive').first().data('styles')}"]`).detach();
const projectRoot = $stylesheet.attr('href').split('styles/')[0];
const assetsRoot = projectRoot + 'assets/';
const metadata = slice.call($('meta[name]').get()).reduce((memo, el) => {
  memo[el.getAttribute('name')] = el.getAttribute('content');
  return memo;
}, {});
const $collection = $('.stories-collection').detach(); console.log($collection);
const stories = $collection.find('ol>li,article').map((index, el) => {
  const $story = $(el);
  return {
    url: $story.find('a').first().attr('href'),
    headline: $.trim($story.find('h2,h3,h4').first().text()),
    teaser: $story.find('p').first().text(),
    imageURL: $story.data('image-cmid') ? `/news/image/${$story.data('image-cmid')}-3x2-220x147.jpg` : $story.find('img').first().attr('src')
  };
}).get();

$('[rel="stylesheet"]').remove();
$('head').append($stylesheet);

$('body')
.empty()
.attr('link', '#0000ff')
.attr('bgcolor', '#ffffff')
.attr('background', projectRoot + 'assets/margin.gif')
.append(view({
  metadata: metadata,
  stories: stories,
  assetsRoot: assetsRoot
}));
