<script>
  import { onMount } from "svelte";
  import Text from "../../../UI/Text.svelte";
  import Plate from "../../../UI/Plate.svelte";
  import AxieImage from "../../../LeekPromotion/AxieImage.svelte";

	import {asyncForEach} from "../../../../utils/Utils";
	import { getAxieBriefList } from "../../../../services/AxieDataService";


	let loading = false;
	let counter = 0;
	let axie_objects = [];
  let addresses = [
		"0x575e5a7421a17c7fc0c872a84bb708f260815d02",
		"0xa40720deae0e0135f469f138cad0a41a6e6d5101",
		"0x741a4dda0933ad112bb6149417ac10bf1409f20d",
		"0x87656a5204edeaa11a1b45ab960d24957ecf959e",
		"0xc500cefb65342bfac7cf6864d56fd263375c312d",
		"0x67ca916d4258cfd333d19a5a3a761ebca4977eed",
		"0xfd850440d2280ef10493a75558c3dd07ef3abcdb",
		"0x96fdbe10224001113e19d7775094708676d6156f",
		"0xe35383aa712a2901411e505486a1459457384644",
		"0x5aa6ee461ae2bac3817d66266f922cf4c0313e13",
		"0x177f3d57a64abd1b70cdd27310a08a4db1ff4b63",
		"0x2c0966cb9f71cf5e7a1aabd05f837d484a36f63a",
		"0x89f24381034bf7fbcd88ef0d23aeb3ad80390385",
		"0x1a93fc4d154610b286bd846cd12ae6a3e7ef6628",
		"0x5205c546d4ce56843dffa7d6293544c39007dbb0",
		"0x22e2ebfc6e96e3a6189db0747deb3bc1036dc524",
		"0xd9502e70d239ad5a7b57a3f52763b2aa13bf48bb",
		"0xaa4341410364ff58c9762da278b304e94be08604",
		"0xa621975da2d4df00fe1e3f37ffeb23e142f457f7",
		"0x49bbef8f14b324a9b14493de07bd3e1ae37e7810",
		"0x033d93ea7375040fce859dcd3d00fc521a4ed056",
		"0x3e1b429952071baf793a8af1c37fb71c28ea979f",
		"0x31a3b4a0015367034ab5f33d58f7d9e414d5994b",
		"0x4aa05fd7fb62227dbd7ced4921c3939e83468f26",
		"0x874dca22d5faa03ae4922e303b03d228cf53c37f",
		"0x94063766fc00f5d8a409a3f62909e7d54116d5e5",
		"0x8f253e2d12768867963c4631f8a012a3aaf2c512",
		"0x4f758c801498f7db30de2db12508f7a63968b90c",
		"0x911d1c4d07bb83ce6693c47624d6de66738d868f",
		"0x32d4d1e562ae366565cd10e1d2b8d0a1a2bea45b",
		"0x534f180689ddc972402fcda264f6f1b8ba59feab",
		"0x61a21b7c797eabbc8acbeafa3c5fc38430472a60",
		"0x77affc4c59b5243ab4220fd36a4e31527f5448b5",
		"0x15a74633517ea55cfab11bde1506a47769ef4ecf",
		"0x591f6330c1ae4ded1ed048f1a4da1c0bd1634507",
		"0x329f7157b4fd3481d3ea78890d3e27dbb9c74eb7",
		"0x2adf2d0c238c62ef93139b5d3c318e0cf9dc7e11",
		"0xc6a513d12016a7e66a714d1c5686c83310acae21",
		"0xf989446273fd89eef1b473d8b91d4443f9cb4275",
		"0x32aa767670974d3acf43a71f13f37ed496d052a4",
		"0x9d33cc9efebbd003850af073b8b1afa194714ecd",
		"0x341111b4f8af1feaf5e8554d6abb9ef5014eacc4",
		"0x911ed6d680e280454db2a9c492503d7ebfe3abb6",
		"0x0af5796d3c599d22c471b16541e41d7f4c735507",
		"0xdf8df7c3b627d4ebc393d1ead3a64a9ad37cd598",
		"0x791804e61e1be63b795e04bbef9dae2424a254aa",
		"0xa8047d2e2658079b546b329e5f3c21dcadbd9c69",
		"0xa404f311e410da3f3ba84eaf875b46178ba4f575",
		"0x31081239c1febc24024dd3a150b81c11f8e8c94b",
		"0x73003d66f8a4ecacbd26ce492a997683d80b2ee9",
		"0x742bae13fa5024278fdc1e9e14151c51b73476f9",
		"0x97a737faab3738d34b2efc057984bcbbeefa1cea",
		"0xfd349df9e5acc87f87a65d06395a0f01eafbbf05",
		"0x1b4812890f5839f2e24cc8f67caa8f120b3a0f3c",
		"0xdfe2a84a51420ff6ae259158201057a31cc844ca",
		"0x18806b457b160a274fabc82fe34bf2b95d662d5f",
		"0xec5fbdd10e4ce7193695aa24fc14c7472578d152",
		"0xd9ef65e7ccd9aac1980f5c5536aa42f51ea1fa4d",
		"0xb0696210f6da5cd9b3e368935e028613169de32b",
		"0x538c215cf683ce615a67b23fc9629de2b1b59442",
		"0x64dff142a3de91bfd246f2d98e69d0cb12919556",
		"0x17760c4e9d190a4ff11db39b76713a14c4d1d3f7",
		"0x0568d10545d145cab9058eccbe94fd8c7b0d19a0",
		"0x6b0401ea9a127b00d2641fa99691155122a2d448",
		"0x12572359dc666acf68d02616c6864f9b61000947",
		"0x253216a67efa4a8eca7b908a5bbd76d6b896fa0f",
		"0x6f63e42ace8c1700417efe2a52ba20cbd2301df1",
		"0x819937dea76eb0e452a6cbead1df2f24fe73c8e5",
		"0x7cfbcfcc8b2a72e46f7a85954495e50610da4a9c",
		"0x8753badc2b7f9a31f3954e33d9f78cf90c85bfad",
		"0xa203057454404be2d9c93f8ae79f539a43909d83",
		"0x3dfa69b0affa6967691174384e8aef1f8ac25f0b",
		"0x84f73b5b531bdcc8887b773dca13a46e6d86fe1f",
		"0x3671bbbcc98d1b949b07dd567a12aee43b1b645c",
		"0xa85573bfc724abb62430c077d2077a6a6b7b310c",
		"0x55e31a28dfd273fe1d4df942c354192a0c3ad814",
		"0x1c84a847b4cf17303ff9c1cf60b04c29c32a76a2",
		"0x0d7a5b61e820e12901fdb9eab20ce07ffa7de76a",
		"0x5a47038433c39b476177320b3a0f7b3b66b2bce2",
		"0xf73276483521667bacd1bf8683e4f03ffd0fba86",
		"0x2afa8df54beeab9ed96b3095b9f356a3e02ddf77",
		"0x9078020f1ee6711fa7d14de5e51d1ad3af753d69",
		"0x8ee6c14e427ba2b8245947235e009ea8f30c4333",
		"0x7153f0821814214c3574344d02b575db805860dd",
		"0x379eb7886da210914c95bc935240deff75268f84",
		"0xc6f8bc560e690bf33e63d2932e8d80c70551ec46",
		"0xe45a231c9a67d885255ae3df313685d9bd8d96fe",
		"0xe107af90c443b0dd5f670dcced08c9d3e9ae426a",
		"0xf768b2c8ef2caeeab103467cf5bb011d3ab5e1e5",
		"0xb877ee630e8b651ce9d785a0cf753524375002c6",
		"0x617285daf2b2e00f8ebefcea072cc6638876eced",
		"0x4488ee9222fc652ac9d62e5a588b03b02336a697",
		"0xfa3e8cf176557d4c7afbac50bdde9621d8a55213",
		"0x8f41a45a346e77481528545c7208d0bfe0c24bda",
		"0xff0601ab2b727bcbfc20e650f0c67961732c715b",
		"0xd6e075299b63db84a9505d19cd7c2de7fe0fa20f",
		"0x79a4dee5e419b04be5e66d72aae860afb17cd1c3",
		"0xd2c6dfa11f1eaef7b3622fd097c44d31a00b3f49",
		"0xbfd282387d28130f5ddcdb8d3530ea133583a362",
		"0x732cfc101e3f783a299208cef5f622707ba115cf",
		"0x4b54d2b15735c3ba38cb93e17b908229109f6a2a",
		"0x2f80b5900bf93879eee0636937b5a56572c641dd",
		"0x54da76cda991b5a1074d8c8210a896105843ed5c",
		"0xfc926a2090e641091334a2fbb2830eb86eb05631",
		"0xc73dff7cea2f9739d585eb2b5e4e9a278bc9ab7e",
		"0x51d10378e644e213ea136849b103aaf8d47cff5a",
		"0x052474218015d9845a6a07e45c404e5eb927307f",
		"0x35fa8c4120fe96976dd2d36a1cc50a536f575958",
		"0xb1587096c87b0646ce8d9f1e72db8e505d34e12d",
		"0x1981ee5f92a08e8d4a5a135417b0108e3288fce6",
		"0xa03013979334c85a50518a0178bf0eda027aa5d9",
		"0xe7b25673745b66b3dc6c4ed78540fa7bc3823627",
		"0xc44081d262aabb33247d2a271fbfc9f9f36412fd",
		"0xeb06e4bca249c0026cc5868d7f9b5fe606423a89",
		"0xfc6ab950d2c2985e5c447523b7e4c2572e805f5e",
		"0x21398113141a8145422940353c39ceabbae6fb0c",
		"0xd26d7f64abd905419acc1761521b4388009068ed",
		"0x6ac4678d5bdc3ce591193323c6fa50aa100c029e",
		"0x9240778a3e7cd77c2800ab9933cf086fd2a85627",
		"0x95800a1f70373ac2c500137a65dab4eeaa9b2044",
		"0x97fc051f1be6a0212d15985c6412079979098236",
		"0x88e9bb6f1af78d07041889555bfc590cf9f52542",
		"0x9709e75a039d5098ebe17e7b7ed29bca7db20647",
		"0xc951ed42d789c3e6bbd54d143e8628de2d351010",
		"0x120631d4be6a8e524fec50fae939e9360426cc00",
		"0xa84c97e135af8b84c21f439fbfcb72594e6bf380",
		"0xf28655eaa375c2c15151f11d3aca1fa91fa92f0a",
		"0x08e23df9b73f3dafcd656a4674456674abd8511e",
		"0x0716db6c544d3a42faaa80f1e64a75d0d8cecf27",
		"0xc7431bdfa2b5794b0bdd1a9ba66386a5527dca8d",
		"0x8ca8d659a2a9fb438609daf2fb9719c9ab6ff1dc",
		"0x0757695c667832500f09b78e0e4e8e76b1eb8361",
		"0xc7ef2fc0a9b4679376e73684e6553b10a553cd5f",
		"0xeca33afcf316e2296f64e76b0872a24f697c7896",
		"0xef0d07386a5c89c1868aeaa9ac98c785b55d709a",
		"0x3cdae7f54a6a675dd9df8a850395729107e6eeb8",
		"0x85895ca267bc6c9fab5dc97f63ff419749f80510",
		"0x87e626f5fad37b9c7a08289054ff21037e1428f7",
		"0xdee59b0bc06a51d5b1f8f269eb24a9a1c382f614",
		"0x93fc180686ade13b17e47fb426746014de619349",
		"0xeb0088a2d5cc38f49799ab40f1fe4a427d03ccd7",
		"0x0450d08f5a6d9d21a52795ed9c4600553bfa61c4",
		"0x67f0fe1d4e687196d91656d8d79a4af97b5113a8",
		"0xd40a79fa5bc9d6f3f90217c047dd316b86e20c41",
		"0x61f7469ae1101ed887419f9242ae0f0bfa672f02",
		"0x171fa055b9e235791756af72fa6dfa2ab2aef937",
		"0x0e394163efe8f0541513d9a4af252e6da3f45d90",
		"0x642702e1033b4e935e15473574801a38a6a9e166",
		"0xea61508777b395e97542ab1ccf3c3a6d0f432e29",
		"0xeef9a199b5596f0c07a654d50ba3226bffb9b70f",
		"0x543f231cc64f4bd9aa7e81b9ab699c83635c5a96",
		"0xcc335cfd40d17eba09a305169ebf1b2adf02bc59",
		"0x7a3ce89af186a546471079f691088de702fa4745",
		"0xf5936fa71dffa721dd56399071b05fb8851f705e",
		"0x50f8b6f6f234e308fecdb1cae14e917adaf96f70",
		"0x6c8300a9ec01f1c38720745538d418ffec245b44",
		"0x2fc3e0756bb044f041e969b9176ae027407c642f",
		"0x8ad187c79a859cfc439d51797ca42f64718f1a79",
		"0x922f9dc5ab8e5f24a869559b8b99ca75efc8683a",
		"0xce5459798acde01a6cabae2d001bdaf8ff8b01d2",
		"0x260296feed187a0c16f5630648050df3c134f9e7",
		"0x9ad9f6e79a4d6e453a704091eaac372741d38005",
		"0xea4c9f09089d7a983197e42718247674ab7b18a7",
		"0x3e20e5076c046d0dcd131a56ad13cebe5551906f",
		"0x74b6dc84bd0cb0c5e1d1529c70dff6732868bfb9",
		"0x18e601cce4aa90df755b00b6d048c23e26c3500f",
		"0x57f1d32d039ffbdddde74222a87744f0f1d4ccbb",
		"0x45e4ea559aabf7eca0e79c45aa1a7e903341ce05",
		"0x45869382c878e005cc23ea4306611ed9b7dfc32c",
		"0x5abd38d84f7cdc6b20ae39f773eb3e2c3dfd3576",
		"0xb4c2d0ccd6fdc136bed112f30f6f069731974113",
		"0xb7e41675062a113265ef046591adb2a68f8b6f15",
		"0xaca43727d3fa8a482e2f68a7e612b77835ccd639",
		"0x7da8525a6628110b8a4a7887d5271cc8f409adc3",
		"0xc3b8b0c83e50bfa0f156e5032780ae8f11ad3304",
		"0x9d45d5d741fac156874b6af0531088cb1d13698f",
		"0x95d6baeec1d674cea1a4239cacfee1b58569f537",
		"0x469f0ea35cbd3497dfdb567a84635c4b791fa982",
		"0x4cff99c21415a5445508a5f1cd620d61b6e01eb2",
		"0x1ad1b2749ee60f24e73af755dc9984c1017c6593",
		"0x12f352a882368783fda860c88a4cba02a84f7413",
		"0x30d14207c1c31152f8527e4f4d9143298f2f8efe",
		"0x207fc9d52d57e9ffdc303bce22c62351e1e11baa",
		"0x2556dc03cae39de6b1ff48ebffa55c80d8d44291",
		"0x81ddec0992b2201063d141270a927a23d2127163",
		"0x797e865ad6185e624341b15e9a5456b8c484becb",
		"0xbd625b01af4abad1df561f40bdf5dca5427eae55",
		"0xc7ca684afeec1cffa0a1266c5737467e279392b7",
		"0x6ea60475d3294c2efcd9f1ccbe0e59f79dfe851d",
		"0x3b038d87fd0d06e358d02cf902801557b30d6843",
		"0x6dcec183cef7f894ce19089ce4a944e19b5b870d",
		"0x64383302288733144c8745156e93867543e0004c",
		"0x2a0ce7b2dce2f12096133086e3c2bea6970e1c86",
		"0xd8b198e807928e67449890737085055caa46d25d",
		"0xaf7241af041fd2e2c5011073df978f9e55f3c4f2",
		"0x15ebf64b73e0d87426a293833fa4b150011247de",
		"0x350b38e2f7a1955679cd8a544abc812b4c8190b6",
		"0xfd0d1eaeade1fb0a578474c4f442b6199bb07acc",
		"0x7c458ebf8eb9e76faa850dae6512509780e96023",
		"0x2d0a3f7363f319fad60f3a0c0b12ad2e4349fd6f",
		"0x8400c8d6502e4e63a2d0dc78187b7bb2d88f23ff",
		"0x37cceb4065c03048869342cd89c8074c1caeaf0c",
		"0xc408c7645b03b719b44457dedeb054c01f64a948",
		"0x32ef0fffabfe6b4f3c3b62cb7dacc32f982f7244",
		"0xe2d899c51d89899b0917231404aefb76b36f6db6",
		"0xb36dd45f50ce7d9fb2869e25e4a084591535da21",
		"0xcb4c3594b13d8d7bb983dbe63317f15cd51b600b",
		"0x43a4801951c15567b1f279f73ad8360047475eb4",
		"0x77392f2a7cf813f520ab02b9577b866f8cb519b6",
		"0xe1d67b572ebf68db3027c6903967f24eebd1960b",
		"0x846edb6d04e0ceff846520f3c94e6dd60a0e06dd",
		"0x276f3f1aa3eb1f145f1f9d6d46a182a60ccb4965",
		"0xb49de89ac24f13593100d3857156000006069b29",
		"0x58aa9dee107851fc56d294ee52d38e0a70f1cc52",
		"0x93b299989f4aa3cb8bd17889f96a6953e2fa4a48",
  ];

	


	onMount(async () => {
		//odp_batch_01

		await getAxies(addresses);

		console.log("axies", axie_objects);

	});

	const getAxies = async (_addresses) => {
		await asyncForEach(_addresses, async (ronin_address,i) => {
				let axie = await getAxie(ronin_address);
				axie_objects.push(axie);
				axie_objects = axie_objects;
				counter += 1;
		});
	}


	const getAxie = async(ronin_address) => {
		let params = {
      from: 0,
      size: 24,
      sort: "IdDesc", //"PriceAsc",
      auctionType: "All",
      owner: ronin_address,
      region: null,
			endpoint: "graph_v2"
    };

    /*let criteria = {
      classes: $filters.classes ? Array.from($filters.classes) : null,
      numMystics: $filters.numMystic ? [parseInt([$filters.numMystic])] : null,
      pureness: $filters.pureness ? [parseInt([$filters.pureness])] : null,
      stages: $filters.stages ? Array.from($filters.stages).map(Number) : null,
      title: $filters.title ? Array.from($filters.title) : null
    };*/

    return await getAxieBriefList(params, {}).then((data) => data.data.axies); 
	}
</script>




<style>
  .experimental-page {
    width: 800px;
  }

  .teams {
		margin-top:20px;
    display: flex;
    flex-flow: column;
    margin-bottom: 50px;
  }

  .team {
    display: flex;
    font-size: 14px;
    font-weight: bold;
    color: var(--text-dark-2);
    /*margin-bottom: -50px;*/
  }
  .axies {
    display: flex;
		flex-flow: wrap;
		margin-bottom: 20px;
    margin-top: 20px;
  }
  .axie {
    width: 120px;
		margin-right: -50px;
    margin-top: -45px;
  }

  .axie :global(.id) {
    display: none;
  }

	.counter {
		margin:20px 0px;
	}
</style>

<div class="experimental-page">

  <Plate>

    <Text type="h1">Axie Accounts</Text>

		<div class="counter">Accounts: {counter} / {addresses.length}</div>

    <div class="teams">
			
      {#each axie_objects as account, i}
        <div class="team">
          <div class="team-id">#{i + 1}</div>
          <div class="axies">
            {#each account.results as axie}
              <div class="axie">
                <AxieImage id={axie.id} />
              </div>
            {/each}
          </div>
        </div>
      {/each}
			

    </div>
  </Plate>

</div>
