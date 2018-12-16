var fs = require("fs");
const text = {
  a: {  },
  b: {  },
  c: {  },
  d: {  },
  e: {  },
  f: {  },
  g: {  },
  h: {  },
  i: {  },
  j: {  },
  k: {  },
  l: {  },
  m: {  },
  n: {  },
  o: {  },
  p: {  },
  q: {  },
  r: {  },
  s: {  },
  t: {  },
  u: {  },
  v: {  },
  w: {  },
  x: {  },
  y: {  },
  z: {  },
  A: {  },
  B: {  },
  C: {  },
  D: {  },
  E: {  },
  F: {  },
  G: {  },
  H: {  },
  I: {  },
  J: {  },
  K: {  },
  L: {  },
  M: {  },
  N: {  },
  O: {  },
  P: {  },
  Q: {  },
  R: {  },
  S: {  },
  T: {  },
  U: {  },
  V: {  },
  W: {  },
  X: {  },
  Y: {  },
  Z: {  },
  "&": {  },
  ".": {  },
  ",": {  },
  "[": {  },
  "]": {  },
  "(": {  },
  ")": {  },
  "{": {  },
  "}": {  },
  "?": {  },
  "!": {  },
  "'": {  },
  '"': {  },
  "<": {  },
  ">": {  },
  "_": {  },
  "\\": {  },
  "/": {  },
  ";": {  },
  "`": {  },
  "‿": {  },
  "⁅": {  },
  "∴": {  },
  "0": {  },
  "1": {  },
  "2": {  },
  "3": {  },
  "4": {  },
  "5": {  },
  "6": {  },
  "7": {  },
  "8": {  },
  "9": { }
};

const alphabet = [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,[](){}?!'\"<>_\\/;`‿⁅∴0123456789"]
const bubble = [..."ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ.,[](){}?!'\"<>_\\/;`‿⁅∴⓪①②③④⑤⑥⑦⑧⑨"]
const smallcaps = [..."ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ.,[](){}?!'\"<>_\\/;`‿⁅∴𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿"]
const blackboardbold = [..."𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ.,[](){}?!'\"<>_\\/;`‿⁅∴𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡"]
const fraktur = [..."𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ.,[](){}?!'\"<>_\\/;`‿⁅∴օյշՅկՏճԴՑգ"]
const boldfraktur = [..."𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅.,[](){}?!'\"<>_\\/;`‿⁅∴օյշՅկՏճԴՑգ"]
const blackbubble = [...'🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩.,[](){}?!\'"<>_\\/;`‿⁅∴⓿➊➋➌➍➎➏➐➑➒']
const boldscript = [..."𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩.,[](){}?!'\"<>_\\/;`‿⁅∴0123456789"]
const script = [..."𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵.,[](){}?!'\"<>_\\/;`‿⁅∴0123456789"]
const bold = [..."𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙.,[](){}?!'\"<>_\\/;`‿⁅∴𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗"]
const italic = [..."𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡.,[](){}?!'\"<>_\\/;`‿⁅∴0123456789"]
const bolditalic = [..."𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕.,[](){}?!'\"<>_\\/;`‿⁅∴0123456789"]
const fairy = [..."ᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚᏗᏰፈᎴᏋᎦᎶᏂᎥᏠᏦᏝᎷᏁᎧᎮᎤᏒᏕᏖᏬᏉᏇጀᎩፚ.,[](){}?!'\"<>_\\/;`‿⁅∴0123456789"]
const square = [..."🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉.,[](){}?!'\"<>_\\/;`‿⁅∴0123456789"]
const blacksquare = [..."🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉.,[](){}?!'\"<>_\\/;`‿⁅∴0123456789"]
const russian = [..."абcдёfgнїjкгѫпѳpфя$тцѵщжчзАБCДЄFGHЇJКГѪЙѲPФЯ$TЦѴШЖЧЗ.,[](){}?!'\"<>_\\/;`‿⁅∴0123456789"]
const japenese = [..."卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙.,[](){}?!'\"<>_\\/;`‿⁅∴0123456789"]
const emoji = [..."🇦​🇧​🇨​🇩​🇪​🇫​🇬​🇭​🇮​🇯​🇰​🇱​🇲​🇳​🇴​🇵​🇶​🇷​🇸​🇹​🇺​🇻​🇼​🇽​🇾​🇿​🇦​🇧​🇨​🇩​🇪​🇫​🇬​🇭​🇮​🇯​🇰​🇱​🇲​🇳​🇴​🇵​🇶​🇷​🇸​🇹​🇺​🇻​🇼​🇽​🇾​🇿​.,[](){}?!'\"<>_\\/;`‿⁅∴0123456789"]
const strikethrough = [..."a̵b̵c̵d̵e̵f̵g̵h̵i̵j̵k̵l̵m̵n̵o̵p̵q̵r̵s̵t̵u̵v̵w̵x̵y̵z̵A̵B̵C̵D̵E̵F̵G̵H̵I̵J̵K̵L̵M̵N̵O̵P̵Q̵R̵S̵T̵U̵V̵W̵X̵Y̵Z̵.̵,̵[̵]̵(̵)̵{̵}̵?̵!̵'̵\"̵<̵>̵_̵\\̵/̵;̵`̵‿̵⁅̵∴̵0̵1̵2̵3̵4̵5̵6̵7̵8̵9̵"]
const underline = [..."a͟b͟c͟d͟e͟f͟g͟h͟i͟j͟k͟l͟m͟n͟o͟p͟q͟r͟s͟t͟u͟v͟w͟x͟y͟z͟A͟B͟C͟D͟E͟F͟G͟H͟I͟J͟K͟L͟M͟N͟O͟P͟Q͟R͟S͟T͟U͟V͟W͟X͟Y͟Z͟.͟,͟[͟]͟(͟)͟{͟}͟?͟!͟'͟\"̲<͟>͟_͟\\͟/͟;͟`͟‿͟⁅͟∴͟0͟1͟2͟3͟4͟5͟6͟7͟8͟9͟"]
const wizard = [..."ǟɮƈɖɛʄɢɦɨʝӄʟʍռօքզʀֆȶʊʋաӼʏʐǟɮƈɖɛʄɢɦɨʝӄʟʍռօքզʀֆȶʊʋաӼʏʐ.,[](){}?!'\"<>_\\/;`‿⁅∴0123456789"]
const redacted = [..."██████████████████████████████████████████████████████████████████████████████████████"]
const parenthesizes = [..."⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵.,[](){}?!'\"<>_\\/;`‿⁅∴0⑴⑵⑶⑷⑸⑹⑺⑻⑼"]
const superscript = [..."ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻ.,[](){}?!'\"<>_\\/;`‿⁅∴⁰¹²³⁴⁵⁶⁷⁸⁹"]
const fullwidth = [..."ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ．，［］（）｛｝？！＇＼＂＜＞＿＼＼／；｀‿⁅∴０１２３４５６７８９"]
const upsidedown = [..."68ㄥ59߈ƐᘔƖ0∵⁆⁀,؛\\/‾<>„,¡¿{}()[]'˙Z⅄XMΛ∩⊥SᴚტԀONW˥ꓘſIH⅁ℲƎᗡƆᗺ∀zʎxʍʌnʇsɹbdouɯןʞɾıɥƃɟǝpɔqɐ"].reverse();

alphabet.forEach((e, i) => {
  text[e]["bubble"] = emojiUnicode(bubble[i]);
  text[e]["smallcaps"]=emojiUnicode(smallcaps[i]);
  text[e]["blackboardbold"]=emojiUnicode(blackboardbold[i]);
  text[e]["fraktur"]=emojiUnicode(fraktur[i]);
  text[e]["boldfraktur"]=emojiUnicode(boldfraktur[i]);
  text[e]["blackbubble"]=emojiUnicode(blackbubble[i]);
  text[e]["boldscript"]=emojiUnicode(boldscript[i]);
  text[e]["script"]=emojiUnicode(script[i]);
  text[e]["bold"]=emojiUnicode(bold[i]);
  text[e]["italic"]=emojiUnicode(italic[i]);
  text[e]["bolditalic"]=emojiUnicode(bolditalic[i]);
  text[e]["fairy"]=emojiUnicode(fairy[i]);
  text[e]["square"]=emojiUnicode(square[i]);
  text[e]["blacksquare"]=emojiUnicode(blacksquare[i]);
  text[e]["russian"]=emojiUnicode(russian[i]);
  text[e]["japenese"]=emojiUnicode(japenese[i]);
  text[e]["emoji"]=emojiUnicode(emoji[i]);
  text[e]["strikethrough"]=emojiUnicode(strikethrough[i]);
  text[e]["underline"]=emojiUnicode(underline[i]);
  text[e]["wizard"]=emojiUnicode(wizard[i]);
  text[e]["redacted"]=emojiUnicode(redacted[i]);
  text[e]["parenthesizes"]=emojiUnicode(parenthesizes[i]);
  text[e]["superscript"]=emojiUnicode(superscript[i]);
  text[e]["fullwidth"]=emojiUnicode(fullwidth[i]);
  text[e]["upsidedown"]=emojiUnicode(upsidedown[i]);
  if (i === alphabet.length - 1) {
    var jsonData = JSON.stringify(text);
    fs.writeFile("test.txt", jsonData, function(err) {
      if (err) {
        console.log(err);
      }
    });
    
  }
});
function emojiUnicode (emoji) {
  var comp;
  if (emoji.length === 1) {
      comp = emoji.charCodeAt(0);
  }else{
    comp = (
      (emoji.charCodeAt(0) - 0xD800) * 0x400
    + (emoji.charCodeAt(1) - 0xDC00) + 0x10000
  );
  }
  
  if (comp < 0) {
      comp = emoji.charCodeAt(0);
  }
  return comp.toString("16");
};
