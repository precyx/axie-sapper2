<script>
  import { onMount } from "svelte";
  import Text from "../../../UI/Text.svelte";
  import Plate from "../../../UI/Plate.svelte";
  import AxieImage from "../../../LeekPromotion/AxieImage.svelte";

  // prettier-ignore
  let teams_reillz_batch_1 = [
["https://marketplace.axieinfinity.com/axie/91663","https://marketplace.axieinfinity.com/axie/91753","https://marketplace.axieinfinity.com/axie/86271"],
["https://marketplace.axieinfinity.com/axie/86658","https://marketplace.axieinfinity.com/axie/76804","https://marketplace.axieinfinity.com/axie/62938"],
["https://marketplace.axieinfinity.com/axie/86259","https://marketplace.axieinfinity.com/axie/86625","https://marketplace.axieinfinity.com/axie/66994"],
["https://marketplace.axieinfinity.com/axie/19099","https://marketplace.axieinfinity.com/axie/81815","https://marketplace.axieinfinity.com/axie/52019"],
["https://marketplace.axieinfinity.com/axie/82633","https://marketplace.axieinfinity.com/axie/74845","https://marketplace.axieinfinity.com/axie/46715"],
["https://marketplace.axieinfinity.com/axie/86231","https://marketplace.axieinfinity.com/axie/86281","https://marketplace.axieinfinity.com/axie/39116"],
["https://marketplace.axieinfinity.com/axie/80628","https://marketplace.axieinfinity.com/axie/74742","https://marketplace.axieinfinity.com/axie/30517"],
["https://marketplace.axieinfinity.com/axie/79261","https://marketplace.axieinfinity.com/axie/73325","https://marketplace.axieinfinity.com/axie/28394"],
["https://marketplace.axieinfinity.com/axie/58588","https://marketplace.axieinfinity.com/axie/58671","https://marketplace.axieinfinity.com/axie/27538"],
["https://marketplace.axieinfinity.com/axie/43283","https://marketplace.axieinfinity.com/axie/58643","https://marketplace.axieinfinity.com/axie/27244"],
["https://marketplace.axieinfinity.com/axie/39085","https://marketplace.axieinfinity.com/axie/58581","https://marketplace.axieinfinity.com/axie/25281"],
["https://marketplace.axieinfinity.com/axie/33659","https://marketplace.axieinfinity.com/axie/54767","https://marketplace.axieinfinity.com/axie/24970"],
["https://marketplace.axieinfinity.com/axie/24876","https://marketplace.axieinfinity.com/axie/91659","https://marketplace.axieinfinity.com/axie/24341"],
["https://marketplace.axieinfinity.com/axie/24870","https://marketplace.axieinfinity.com/axie/86267","https://marketplace.axieinfinity.com/axie/22853"],
["https://marketplace.axieinfinity.com/axie/33700","https://marketplace.axieinfinity.com/axie/49676","https://marketplace.axieinfinity.com/axie/21270"],
["https://marketplace.axieinfinity.com/axie/82476","https://marketplace.axieinfinity.com/axie/47652","https://marketplace.axieinfinity.com/axie/18967"],
["https://marketplace.axieinfinity.com/axie/20193","https://marketplace.axieinfinity.com/axie/36279","https://marketplace.axieinfinity.com/axie/17287"],
["https://marketplace.axieinfinity.com/axie/24325","https://marketplace.axieinfinity.com/axie/33730","https://marketplace.axieinfinity.com/axie/16366"],
["https://marketplace.axieinfinity.com/axie/24367","https://marketplace.axieinfinity.com/axie/29759","https://marketplace.axieinfinity.com/axie/16365"],
["https://marketplace.axieinfinity.com/axie/21280","https://marketplace.axieinfinity.com/axie/86270","https://marketplace.axieinfinity.com/axie/15147"],
];

  // prettier-ignore
  let teams_ak_batch_1 = [
["https://marketplace.axieinfinity.com/axie/92775", "https://marketplace.axieinfinity.com/axie/45773", "https://marketplace.axieinfinity.com/axie/56100"],
["https://marketplace.axieinfinity.com/axie/91700", "https://marketplace.axieinfinity.com/axie/81220", "https://marketplace.axieinfinity.com/axie/56063"],
["https://marketplace.axieinfinity.com/axie/84617", "https://marketplace.axieinfinity.com/axie/80800", "https://marketplace.axieinfinity.com/axie/45705"],
["https://marketplace.axieinfinity.com/axie/83319", "https://marketplace.axieinfinity.com/axie/42728", "https://marketplace.axieinfinity.com/axie/39079"],
["https://marketplace.axieinfinity.com/axie/138705","https://marketplace.axieinfinity.com/axie/69293", "https://marketplace.axieinfinity.com/axie/39067"],
["https://marketplace.axieinfinity.com/axie/24943", "https://marketplace.axieinfinity.com/axie/74494", "https://marketplace.axieinfinity.com/axie/39060"],
["https://marketplace.axieinfinity.com/axie/24321", "https://marketplace.axieinfinity.com/axie/86240", "https://marketplace.axieinfinity.com/axie/33671"],
["https://marketplace.axieinfinity.com/axie/24324", "https://marketplace.axieinfinity.com/axie/82482", "https://marketplace.axieinfinity.com/axie/33689"],
["https://marketplace.axieinfinity.com/axie/19174", "https://marketplace.axieinfinity.com/axie/39107", "https://marketplace.axieinfinity.com/axie/33294"],
["https://marketplace.axieinfinity.com/axie/79718", "https://marketplace.axieinfinity.com/axie/58679", "https://marketplace.axieinfinity.com/axie/32055"],
["https://marketplace.axieinfinity.com/axie/74768", "https://marketplace.axieinfinity.com/axie/51837", "https://marketplace.axieinfinity.com/axie/32054"],
["https://marketplace.axieinfinity.com/axie/17674", "https://marketplace.axieinfinity.com/axie/76857", "https://marketplace.axieinfinity.com/axie/32023"],
["https://marketplace.axieinfinity.com/axie/17672", "https://marketplace.axieinfinity.com/axie/28365", "https://marketplace.axieinfinity.com/axie/32022"],
["https://marketplace.axieinfinity.com/axie/86262", "https://marketplace.axieinfinity.com/axie/42691", "https://marketplace.axieinfinity.com/axie/30518"],
["https://marketplace.axieinfinity.com/axie/14256", "https://marketplace.axieinfinity.com/axie/66559", "https://marketplace.axieinfinity.com/axie/29772"],
["https://marketplace.axieinfinity.com/axie/14201", "https://marketplace.axieinfinity.com/axie/27207", "https://marketplace.axieinfinity.com/axie/28385"],
["https://marketplace.axieinfinity.com/axie/80643", "https://marketplace.axieinfinity.com/axie/36234", "https://marketplace.axieinfinity.com/axie/27530"],
["https://marketplace.axieinfinity.com/axie/46132", "https://marketplace.axieinfinity.com/axie/47665", "https://marketplace.axieinfinity.com/axie/27181"],
["https://marketplace.axieinfinity.com/axie/13568", "https://marketplace.axieinfinity.com/axie/33736", "https://marketplace.axieinfinity.com/axie/24959"],
["https://marketplace.axieinfinity.com/axie/12602", "https://marketplace.axieinfinity.com/axie/33382", "https://marketplace.axieinfinity.com/axie/24333"],
["https://marketplace.axieinfinity.com/axie/33669", "https://marketplace.axieinfinity.com/axie/39092", "https://marketplace.axieinfinity.com/axie/24030"],
["https://marketplace.axieinfinity.com/axie/21465", "https://marketplace.axieinfinity.com/axie/28837", "https://marketplace.axieinfinity.com/axie/23835"],
["https://marketplace.axieinfinity.com/axie/12994", "https://marketplace.axieinfinity.com/axie/33737", "https://marketplace.axieinfinity.com/axie/18549"],
["https://marketplace.axieinfinity.com/axie/12991", "https://marketplace.axieinfinity.com/axie/24338", "https://marketplace.axieinfinity.com/axie/18546"],
["https://marketplace.axieinfinity.com/axie/12943", "https://marketplace.axieinfinity.com/axie/22574", "https://marketplace.axieinfinity.com/axie/18281"],

  ];

  //prettier-ignore
  let reills_batch_2 = [
    ["https://marketplace.axieinfinity.com/axie/16062"	  ,"https://marketplace.axieinfinity.com/axie/42735",	"https://marketplace.axieinfinity.com/axie/17286"],
    ["https://marketplace.axieinfinity.com/axie/18973"	  ,"https://marketplace.axieinfinity.com/axie/42655",	"https://marketplace.axieinfinity.com/axie/23835"],
    ["https://marketplace.axieinfinity.com/axie/86253"	  ,"https://marketplace.axieinfinity.com/axie/42601",	"https://marketplace.axieinfinity.com/axie/49326"],
    ["https://marketplace.axieinfinity.com/axie/106155"	,"https://marketplace.axieinfinity.com/axie/39226",	  "https://marketplace.axieinfinity.com/axie/92380"],
    ["https://marketplace.axieinfinity.com/axie/28637"	  ,"https://marketplace.axieinfinity.com/axie/42458",	"https://marketplace.axieinfinity.com/axie/96255"],
    ["https://marketplace.axieinfinity.com/axie/32096"	  ,"https://marketplace.axieinfinity.com/axie/33792",	"https://marketplace.axieinfinity.com/axie/106597"],
    ["https://marketplace.axieinfinity.com/axie/11777"	  ,"https://marketplace.axieinfinity.com/axie/33734",	"https://marketplace.axieinfinity.com/axie/114282"],
    ["https://marketplace.axieinfinity.com/axie/91719"	  ,"https://marketplace.axieinfinity.com/axie/45445",	"https://marketplace.axieinfinity.com/axie/32053"],
    ["https://marketplace.axieinfinity.com/axie/28421"	  ,"https://marketplace.axieinfinity.com/axie/46345",	"https://marketplace.axieinfinity.com/axie/36359"],
    ["https://marketplace.axieinfinity.com/axie/21465"	  ,"https://marketplace.axieinfinity.com/axie/91697",	"https://marketplace.axieinfinity.com/axie/36420"],
  ];

  //prettier-ignore
  let reills_batch_3 = [
    ["https://marketplace.axieinfinity.com/axie/114286"	,"https://marketplace.axieinfinity.com/axie/84746",	"https://marketplace.axieinfinity.com/axie/42467"],
    ["https://marketplace.axieinfinity.com/axie/114279"	,"https://marketplace.axieinfinity.com/axie/97615",	"https://marketplace.axieinfinity.com/axie/46014"],
    ["https://marketplace.axieinfinity.com/axie/113233"	,"https://marketplace.axieinfinity.com/axie/103090",	"https://marketplace.axieinfinity.com/axie/46015"],
    ["https://marketplace.axieinfinity.com/axie/45454"	  ,"https://marketplace.axieinfinity.com/axie/106146",	"https://marketplace.axieinfinity.com/axie/49736"],
    ["https://marketplace.axieinfinity.com/axie/103129"	,"https://marketplace.axieinfinity.com/axie/108627",	"https://marketplace.axieinfinity.com/axie/47963"],
    ["https://marketplace.axieinfinity.com/axie/110181"	,"https://marketplace.axieinfinity.com/axie/21257",	"https://marketplace.axieinfinity.com/axie/52147"],
    ["https://marketplace.axieinfinity.com/axie/42582"	  ,"https://marketplace.axieinfinity.com/axie/24327",	"https://marketplace.axieinfinity.com/axie/58542"],
    ["https://marketplace.axieinfinity.com/axie/28422"	  ,"https://marketplace.axieinfinity.com/axie/42460",	"https://marketplace.axieinfinity.com/axie/117107"],
    ["https://marketplace.axieinfinity.com/axie/32011"	  ,"https://marketplace.axieinfinity.com/axie/32126",	"https://marketplace.axieinfinity.com/axie/24966"],
    ["https://marketplace.axieinfinity.com/axie/27268"	  ,"https://marketplace.axieinfinity.com/axie/42727",	"https://marketplace.axieinfinity.com/axie/29792"],
    ["https://marketplace.axieinfinity.com/axie/123867"	,"https://marketplace.axieinfinity.com/axie/45137",	"https://marketplace.axieinfinity.com/axie/29793"],
    ["https://marketplace.axieinfinity.com/axie/119314"	,"https://marketplace.axieinfinity.com/axie/36354",	"https://marketplace.axieinfinity.com/axie/33336"],
    ["https://marketplace.axieinfinity.com/axie/118910"	,"https://marketplace.axieinfinity.com/axie/36277",	"https://marketplace.axieinfinity.com/axie/58625"],
    ["https://marketplace.axieinfinity.com/axie/74816"	  ,"https://marketplace.axieinfinity.com/axie/33737",	"https://marketplace.axieinfinity.com/axie/46002"],
    ["https://marketplace.axieinfinity.com/axie/74763"	  ,"https://marketplace.axieinfinity.com/axie/48593",	"https://marketplace.axieinfinity.com/axie/33337"],
  ];

  //prettier-ignore
  let dean_batch_1 = [
    ["https://marketplace.axieinfinity.com/axie/92402",	"https://marketplace.axieinfinity.com/axie/39093",	"https://marketplace.axieinfinity.com/axie/24030"],
    ["https://marketplace.axieinfinity.com/axie/92894",	"https://marketplace.axieinfinity.com/axie/96725",	"https://marketplace.axieinfinity.com/axie/13888"],
    ["https://marketplace.axieinfinity.com/axie/96160",	"https://marketplace.axieinfinity.com/axie/104276", "https://marketplace.axieinfinity.com/axie/110185"],
    ["https://marketplace.axieinfinity.com/axie/96161",	"https://marketplace.axieinfinity.com/axie/105347", "https://marketplace.axieinfinity.com/axie/106171"],
    ["https://marketplace.axieinfinity.com/axie/96249",	"https://marketplace.axieinfinity.com/axie/106618", "https://marketplace.axieinfinity.com/axie/42595"],
  ];

  // prettier-ignore
  let dean_batch_2 = [
    ["https://marketplace.axieinfinity.com/axie/96253",	  "https://marketplace.axieinfinity.com/axie/132748",	"https://marketplace.axieinfinity.com/axie/133502"],
    ["https://marketplace.axieinfinity.com/axie/96279",	  "https://marketplace.axieinfinity.com/axie/86275",	  "https://marketplace.axieinfinity.com/axie/132045"],
    ["https://marketplace.axieinfinity.com/axie/97620",	  "https://marketplace.axieinfinity.com/axie/86280",	  "https://marketplace.axieinfinity.com/axie/92837"],
    ["https://marketplace.axieinfinity.com/axie/102627",	"https://marketplace.axieinfinity.com/axie/42727",	  "https://marketplace.axieinfinity.com/axie/96198"],
    ["https://marketplace.axieinfinity.com/axie/103095",	"https://marketplace.axieinfinity.com/axie/45137",	  "https://marketplace.axieinfinity.com/axie/102489"],
    ["https://marketplace.axieinfinity.com/axie/104004",	"https://marketplace.axieinfinity.com/axie/58670",	  "https://marketplace.axieinfinity.com/axie/104779"],
    ["https://marketplace.axieinfinity.com/axie/105054",	"https://marketplace.axieinfinity.com/axie/62868",	  "https://marketplace.axieinfinity.com/axie/39193"],
    ["https://marketplace.axieinfinity.com/axie/106616",	"https://marketplace.axieinfinity.com/axie/66985",	  "https://marketplace.axieinfinity.com/axie/84606"],
    ["https://marketplace.axieinfinity.com/axie/132850",	"https://marketplace.axieinfinity.com/axie/72999",	  "https://marketplace.axieinfinity.com/axie/92356"],
  ];

  // prettier-ignore
  let dean_batch_3 = [
    ["https://marketplace.axieinfinity.com/axie/144219",	"https://marketplace.axieinfinity.com/axie/73324",	  "https://marketplace.axieinfinity.com/axie/95549"],
    ["https://marketplace.axieinfinity.com/axie/92774",	  "https://marketplace.axieinfinity.com/axie/76814",	  "https://marketplace.axieinfinity.com/axie/96278"],
    ["https://marketplace.axieinfinity.com/axie/138593",	"https://marketplace.axieinfinity.com/axie/32031",	  "https://marketplace.axieinfinity.com/axie/97365"],
    ["https://marketplace.axieinfinity.com/axie/135303",	"https://marketplace.axieinfinity.com/axie/32119",	  "https://marketplace.axieinfinity.com/axie/104278"],
    ["https://marketplace.axieinfinity.com/axie/133503",	"https://marketplace.axieinfinity.com/axie/33737",	  "https://marketplace.axieinfinity.com/axie/114269"],
    ["https://marketplace.axieinfinity.com/axie/132850",	"https://marketplace.axieinfinity.com/axie/132748",	"https://marketplace.axieinfinity.com/axie/117530"],
    ["https://marketplace.axieinfinity.com/axie/121438",	"https://marketplace.axieinfinity.com/axie/86280",	  "https://marketplace.axieinfinity.com/axie/120759"],
    ["https://marketplace.axieinfinity.com/axie/106619",	"https://marketplace.axieinfinity.com/axie/86275",	  "https://marketplace.axieinfinity.com/axie/132259"],
    ["https://marketplace.axieinfinity.com/axie/106616",	"https://marketplace.axieinfinity.com/axie/76814",	  "https://marketplace.axieinfinity.com/axie/139592"],
    ["https://marketplace.axieinfinity.com/axie/106254",	"https://marketplace.axieinfinity.com/axie/58544",	  "https://marketplace.axieinfinity.com/axie/114269"],
    ["https://marketplace.axieinfinity.com/axie/106152",	"https://marketplace.axieinfinity.com/axie/56252",	  "https://marketplace.axieinfinity.com/axie/84604"],
    ["https://marketplace.axieinfinity.com/axie/138228",	"https://marketplace.axieinfinity.com/axie/92344",	  "https://marketplace.axieinfinity.com/axie/18549"],
    ["https://marketplace.axieinfinity.com/axie/135303",	"https://marketplace.axieinfinity.com/axie/91657",	  "https://marketplace.axieinfinity.com/axie/16011"],
    ["https://marketplace.axieinfinity.com/axie/106619",	"https://marketplace.axieinfinity.com/axie/39337",	  "https://marketplace.axieinfinity.com/axie/131638"],
    ["https://marketplace.axieinfinity.com/axie/96702",	  "https://marketplace.axieinfinity.com/axie/39092",	  "https://marketplace.axieinfinity.com/axie/126381"],
    ["https://marketplace.axieinfinity.com/axie/86304",	  "https://marketplace.axieinfinity.com/axie/36354",	  "https://marketplace.axieinfinity.com/axie/97619"],
    ["https://marketplace.axieinfinity.com/axie/74758",	  "https://marketplace.axieinfinity.com/axie/36353",	  "https://marketplace.axieinfinity.com/axie/26712"],
    ["https://marketplace.axieinfinity.com/axie/47763",	  "https://marketplace.axieinfinity.com/axie/33737",	  "https://marketplace.axieinfinity.com/axie/134592"],
    ["https://marketplace.axieinfinity.com/axie/46136",	  "https://marketplace.axieinfinity.com/axie/126632",	"https://marketplace.axieinfinity.com/axie/132259"],
    ["https://marketplace.axieinfinity.com/axie/45449",	  "https://marketplace.axieinfinity.com/axie/108624",	"https://marketplace.axieinfinity.com/axie/120759"],
    ["https://marketplace.axieinfinity.com/axie/42922",	  "https://marketplace.axieinfinity.com/axie/108443",	"https://marketplace.axieinfinity.com/axie/104278"],
  ];

  //prettier-ignore
  let dean_batch_4 = [
    ["https://marketplace.axieinfinity.com/58841",	"https://marketplace.axieinfinity.com/118570",	"https://marketplace.axieinfinity.com/28625"],
    ["https://marketplace.axieinfinity.com/69506",	"https://marketplace.axieinfinity.com/110142",	"https://marketplace.axieinfinity.com/46745"],
    ["https://marketplace.axieinfinity.com/80657",	"https://marketplace.axieinfinity.com/131064",	"https://marketplace.axieinfinity.com/162441"],
    ["https://marketplace.axieinfinity.com/86255",	"https://marketplace.axieinfinity.com/118902",	"https://marketplace.axieinfinity.com/102967"],
    ["https://marketplace.axieinfinity.com/45716",	"https://marketplace.axieinfinity.com/83653",	  "https://marketplace.axieinfinity.com/106228"],
    ["https://marketplace.axieinfinity.com/54844",	"https://marketplace.axieinfinity.com/119042",	"https://marketplace.axieinfinity.com/33283"],
  ];

  //prettier-ignore
  let dean_batch_5 = [
    ["https://marketplace.axieinfinity.com/36243",	  "https://marketplace.axieinfinity.com/102658",	"https://marketplace.axieinfinity.com/45449"],
    ["https://marketplace.axieinfinity.com/42467",	  "https://marketplace.axieinfinity.com/103070",	"https://marketplace.axieinfinity.com/46716"],
    ["https://marketplace.axieinfinity.com/43853",	  "https://marketplace.axieinfinity.com/103079",	"https://marketplace.axieinfinity.com/47763"],
    ["https://marketplace.axieinfinity.com/43890",	  "https://marketplace.axieinfinity.com/103089",	"https://marketplace.axieinfinity.com/54844"],
    ["https://marketplace.axieinfinity.com/56253",	  "https://marketplace.axieinfinity.com/104786",	"https://marketplace.axieinfinity.com/66561"],
    ["https://marketplace.axieinfinity.com/58526",	  "https://marketplace.axieinfinity.com/104786",	"https://marketplace.axieinfinity.com/66970"],
    ["https://marketplace.axieinfinity.com/58787",	  "https://marketplace.axieinfinity.com/104787",	"https://marketplace.axieinfinity.com/74758"],
    ["https://marketplace.axieinfinity.com/92393",	  "https://marketplace.axieinfinity.com/105046",	"https://marketplace.axieinfinity.com/80148"],
    ["https://marketplace.axieinfinity.com/117530",  	"https://marketplace.axieinfinity.com/105344",	"https://marketplace.axieinfinity.com/80630"],
    ["https://marketplace.axieinfinity.com/124315",  	"https://marketplace.axieinfinity.com/105346",	"https://marketplace.axieinfinity.com/86304"],
    ["https://marketplace.axieinfinity.com/126381",  	"https://marketplace.axieinfinity.com/106259",	"https://marketplace.axieinfinity.com/91670"],
    ["https://marketplace.axieinfinity.com/134592",  	"https://marketplace.axieinfinity.com/106604",	"https://marketplace.axieinfinity.com/32050"],
    ["https://marketplace.axieinfinity.com/154818",  	"https://marketplace.axieinfinity.com/106620",	"https://marketplace.axieinfinity.com/33669"],
    ["https://marketplace.axieinfinity.com/156869",  	"https://marketplace.axieinfinity.com/108443",	"https://marketplace.axieinfinity.com/36225"],
    ["https://marketplace.axieinfinity.com/26605",	  "https://marketplace.axieinfinity.com/126632",	"https://marketplace.axieinfinity.com/91265"],
  ];

  // prettier-ignore
  let coco_batch_1 = [
    ["https://marketplace.axieinfinity.com/axie/91694",	  "https://marketplace.axieinfinity.com/axie/47854",	"https://marketplace.axieinfinity.com/axie/52018"],
    ["https://marketplace.axieinfinity.com/axie/108563",	"https://marketplace.axieinfinity.com/axie/51051",	"https://marketplace.axieinfinity.com/axie/52142"],
    ["https://marketplace.axieinfinity.com/axie/106149",	"https://marketplace.axieinfinity.com/axie/49677",	"https://marketplace.axieinfinity.com/axie/47762"],
  ];

  // prettier-ignore
  let dean_batch_6 = [
    ["https://marketplace.axieinfinity.com/axie/158712",	"https://marketplace.axieinfinity.com/axie/24041",	"https://marketplace.axieinfinity.com/axie/143731"],
    ["https://marketplace.axieinfinity.com/axie/131638",	"https://marketplace.axieinfinity.com/axie/21256",	"https://marketplace.axieinfinity.com/axie/142175"],
    ["https://marketplace.axieinfinity.com/axie/97619",	  "https://marketplace.axieinfinity.com/axie/21254",	"https://marketplace.axieinfinity.com/axie/138847"],
    ["https://marketplace.axieinfinity.com/axie/95548",	  "https://marketplace.axieinfinity.com/axie/19871",	"https://marketplace.axieinfinity.com/axie/138593"],
    ["https://marketplace.axieinfinity.com/axie/95547",	  "https://marketplace.axieinfinity.com/axie/19168",	"https://marketplace.axieinfinity.com/axie/138228"],
    ["https://marketplace.axieinfinity.com/axie/92907",	  "https://marketplace.axieinfinity.com/axie/18834",	"https://marketplace.axieinfinity.com/axie/136137"],
    ["https://marketplace.axieinfinity.com/axie/92856",	  "https://marketplace.axieinfinity.com/axie/18441",	"https://marketplace.axieinfinity.com/axie/121438"],
    ["https://marketplace.axieinfinity.com/axie/88040",	  "https://marketplace.axieinfinity.com/axie/17661",	"https://marketplace.axieinfinity.com/axie/106254"],
    ["https://marketplace.axieinfinity.com/axie/84605",	  "https://marketplace.axieinfinity.com/axie/17659",	"https://marketplace.axieinfinity.com/axie/105601"],
    ["https://marketplace.axieinfinity.com/axie/80623",	  "https://marketplace.axieinfinity.com/axie/17296",	"https://marketplace.axieinfinity.com/axie/105357"],
    ["https://marketplace.axieinfinity.com/axie/42686",	  "https://marketplace.axieinfinity.com/axie/16495",	"https://marketplace.axieinfinity.com/axie/105043"],
    ["https://marketplace.axieinfinity.com/axie/33805",	  "https://marketplace.axieinfinity.com/axie/15812",	"https://marketplace.axieinfinity.com/axie/104803"],
    ["https://marketplace.axieinfinity.com/axie/33716",	  "https://marketplace.axieinfinity.com/axie/15811",	"https://marketplace.axieinfinity.com/axie/104798"],
    ["https://marketplace.axieinfinity.com/axie/27532",	  "https://marketplace.axieinfinity.com/axie/14224",	"https://marketplace.axieinfinity.com/axie/102625"],
  ];

  let dean_batch_7 = [
    /*["https://marketplace.axieinfinity.com/axie/97476"],
    ["https://marketplace.axieinfinity.com/axie/172868"],
    ["https://marketplace.axieinfinity.com/axie/172862"],
    ["https://marketplace.axieinfinity.com/axie/167747"],*/
    //
    /*["https://marketplace.axieinfinity.com/axie/109313"],
    ["https://marketplace.axieinfinity.com/axie/115216"],
    ["https://marketplace.axieinfinity.com/axie/110414"],
    ["https://marketplace.axieinfinity.com/axie/123921"],
    ["https://marketplace.axieinfinity.com/axie/131563"],
    ["https://marketplace.axieinfinity.com/axie/182519"],*/
    //
    /*["https://marketplace.axieinfinity.com/axie/161288"],
    ["https://marketplace.axieinfinity.com/axie/188952"],
    ["https://marketplace.axieinfinity.com/axie/188947"],
    ["https://marketplace.axieinfinity.com/axie/188840"],
    ["https://marketplace.axieinfinity.com/axie/182376"],
    ["https://marketplace.axieinfinity.com/axie/181954"],*/
    //
    /*["https://marketplace.axieinfinity.com/axie/167229"],
    ["https://marketplace.axieinfinity.com/axie/161389"],
    ["https://marketplace.axieinfinity.com/axie/161287"],
    ["https://marketplace.axieinfinity.com/axie/188719"],
    ["https://marketplace.axieinfinity.com/axie/167227"],
    ["https://marketplace.axieinfinity.com/axie/166970"],*/
    //
    /*["https://marketplace.axieinfinity.com/axie/187066"],
    ["https://marketplace.axieinfinity.com/axie/189665"],
    ["https://marketplace.axieinfinity.com/axie/182516"],
    ["https://marketplace.axieinfinity.com/axie/161299"],
    ["https://marketplace.axieinfinity.com/axie/188720"],
    ["https://marketplace.axieinfinity.com/axie/182517"],
    ["https://marketplace.axieinfinity.com/axie/182378"],
    ["https://marketplace.axieinfinity.com/axie/182371"],*/
    //
    ["https://marketplace.axieinfinity.com/axie/154733"],
    ["https://marketplace.axieinfinity.com/axie/156870"],
    ["https://marketplace.axieinfinity.com/axie/123866"],
    ["https://marketplace.axieinfinity.com/axie/154728"],
    ["https://marketplace.axieinfinity.com/axie/130872"],
  ];


  let odp_batch_01 = [
    

  ];
</script>




<style>
  .experimental-page {
    width: 800px;
  }

  .teams {
    display: flex;
    flex-flow: column;
    margin-bottom: 50px;
  }

  .team {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
    color: var(--text-dark-2);
    margin-bottom: -50px;
  }
  .axies {
    display: flex;
  }
  .axie {
    width: 170px;
    margin-right: -30px;
  }

  .axie :global(.id) {
    display: none;
  }
</style>

<div class="experimental-page">

  <Plate>

    <Text type="h1">Batch #7.5</Text>

    <div class="teams">

      {#each dean_batch_7 as team, i}
        <div class="team">
          <div class="team-id">#{i + 1}</div>
          <div class="axies">
            {#each team as axie}
              <div class="axie">

                <AxieImage id={axie.split('/')[axie.split('/').length - 1]} />
              </div>
            {/each}
          </div>
        </div>
      {/each}

    </div>
  </Plate>

</div>
