<script>
  import { onMount } from "svelte";
  import Text from "../../../UI/Text.svelte";
  import Plate from "../../../UI/Plate.svelte";
  import AxieImage from "../../../LeekPromotion/AxieImage.svelte";
	import Button from "../../../Misc/Button.svelte";
	import Loader from "../../../UI/Loader.svelte";
	import {asyncForEach} from "../../../../utils/Utils";
	import { getAxieBriefList } from "../../../../services/AxieDataService";

	// state
	let textinput = "";
	let loading = false;
	let counter = 0;
	let axie_objects = [];
  let addresses = [];

	onMount(async () => {});

	const init = async () => {

		loading = true;
		axie_objects = [];
		counter = 0;
		let _addresses = textinput.split("\n");
		_addresses = _addresses.map(a => a.replace("ronin:", "0x"));
		addresses = _addresses
		await getAxies(addresses);
		loading = false;

		console.log("axies", axie_objects);
	}

	const getAxies = async (_addresses) => {
		await asyncForEach(_addresses, async (ronin_address,i) => {
				let axie = await getAxie(ronin_address);
				console.log("ax", axie);
				if(axie) {
					axie_objects.push(axie);
					axie_objects = axie_objects;
				}
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

    let axie = await getAxieBriefList(params, {}).then((data) => data.data ? data.data.axies : null); 
		if(!axie) axie = await getAxieBriefList(params, {}).then((data) => data.data ? data.data.axies : null); // retry 1
		if(!axie) axie = await getAxieBriefList(params, {}).then((data) => data.data ? data.data.axies : null); // retry 2
		return axie;
	}
</script>


<div class="experimental-page">

  <Plate>

    <Text type="h3" class="text-dark-2">Insert RONIN Addresses</Text>


		<div class="group1">
			<textarea bind:value={textinput} />
			<Button on:click={init}>
			  {#if loading}
          <Loader />
        {:else}Get Accounts {/if}
			</Button>
		</div>

		{#if addresses.length}

			<div class="counter">Accounts: {counter} / {addresses.length}</div>

			<div class="teams">
				
				{#each axie_objects as account, i}
					<div class="team">
						<div class="team-id">#{i + 1}</div>

						{#if account}
							<div class="axies">
								{#each account.results as axie}
									<div class="axie">
										<AxieImage id={axie.id} />
									</div>
								{/each}
							</div>
						{/if}
					</div>
				{/each}
				

			</div>
		{/if}

  </Plate>

</div>


<style>
  .experimental-page {
    width: 800px;
  }

	.experimental-page :global(.loader) {
    width: 18px;
    height: 18px;
  }

	.group1 {
		display:flex;
		flex-flow: column;
    align-items: flex-start;
		margin-top:20px;
	}

	textarea {
    border: 1px solid #cacaca;
    margin-bottom: 10px;
    width: 450px;
    height: 100px;
    padding: 5px;
    background: rgb(var(--color-white));
    color: rgb(var(--color-black));
    font-size: 12px;
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