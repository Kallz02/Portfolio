<script>
	let timelineItems = [
		{
			school: 'Chrysalis High, Whitefield',
			class: 'Class 10 , CBSE',
			pcmc: 'PCMC',
			percentage: '82.8%',
			year: '2018'
		},
		{
			school: 'Delhi Public School, Whitefield',
			class: '10+2 (CBSE)',
			percentage: '88.4%',
			year: '2020'
		},
		{
			school: 'VIT, Vellore',
			class: 'Integrated Mtech(Cse)',
			cgpa: 'CGPA: 7.35 (tentative)',
			year: '2025 · 5 years'
		},
		{
			school: 'Formi',
			class: 'Marketing Intern',
			year: 'Apr 2022 - Jul 2022 · 4 mos'
		}
	];
</script>

<div class="pg4 section" id="exp">
	<h2>
		<center>Experience</center>
	</h2>
	<p>Click on the Cards for more!</p>
	<div class="wrapper">
		<ul class="timeline">
			{#each timelineItems as item, index (item.school)}
				<li>
					<details class="panel {index === 0 ? '' : 'hidden1'}">
						<summary>
							{#if item.school}
								<div class="flex">
									<img
										src=""
										alt=""
										loading="lazy"
										class="w-[55px] h-[55px] rounded-full border-2 border-black"
									/>
									<div class="flex ml-2 flex-col">
										<h4 class="text-[1.2rem] md:text-[1.5rem] font-medium">
											{item.school}
										</h4>
										<h4 class="text-[1rem] flex justify-between font-semibold">{item.class}</h4>
									</div>
								</div>
								<div class="ml-[63px] font-normal">{item.pcmc}</div>
							{/if}
						</summary>
						<p>{item.percentage}</p>
						<p><b>{item.year}</b></p>
						{#if item.cgpa}
							<p>{item.cgpa}</p>
						{/if}
					</details>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.section {
		padding: 0 1rem;
		width: 100%;

		min-height: calc(100vh - 4.4rem);

		scroll-snap-align: start;
		scroll-snap-stop: always;
		scroll-margin-top: 5rem;
		color: var(--sec);
	}

	.pg4 {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}

	.pg4 > p {
		margin-top: 0.5rem;
		font-size: 1.3rem;
	}

	.pg4 h2 {
		font-size: 4rem;
	}

	.wrapper {
		width: 100%;
		max-width: 1000px;
		display: flex;
		justify-content: center;
		margin-top: 1rem;
	}

	.timeline {
		list-style: none;
		padding: 20px 0 20px;
		position: relative;
		width: 100%;
	}

	.timeline li {
		margin-bottom: 50px;
		position: relative;
		display: flex;
	}

	.timeline .panel {
		width: 46%;
		border-radius: 10px;
		overflow: hidden;
		position: relative;
		border: solid 0.3rem black;
		/* background: hsl(191, 35%, 90%); */
		background: whitesmoke;
		box-shadow: 0.4rem 0.4rem 0 hsl(var(--shadowColor) / 1);
		/* box-shadow: 3px 3px 12px #dee1e4,
  -3px -3px 12px #fff; */
	}

	/* .logo:nth-child(even) {
		transition-delay: 200ms;
	} */

	.timeline p {
		padding: 0 20px 10px 20px;
	}
	/* 
	.timeline h3 {
		padding: 0 20px 10px 20px;
	} */

	.timeline summary {
		display: flex;
		flex-direction: column;
		user-select: none;
		cursor: pointer;
		outline: none;
		padding: 15px 0px;
		padding-left: 15px;
		padding-right: 10px;
		margin-bottom: 0px;
		font-size: 1rem;
		transition: all 600ms cubic-bezier(0.2, 1, 0.3, 1);
		font-weight: 600;
	}

	.timeline .panel[open] summary {
		margin-bottom: 20px;
		padding-bottom: 20px;
		border-bottom: 3px solid rgba(0, 0, 0);
	}

	.timeline summary:hover {
		background: #f8f8f8;
	}

	.timeline:before {
		top: 0;
		bottom: 0;
		left: 50%;
		position: absolute;
		content: '';
		width: 5px;
		background-color: black;
		box-shadow: 1px 1px 5px #dee1e4, -1px -1px 5px #fff;
	}

	.timeline li:before {
		content: '';
		width: 25px;
		height: 25px;
		border-radius: 50%;
		position: absolute;
		top: 18px;
		left: 50%;
		background: black;
		margin-left: -11px;
		z-index: 9;
		box-shadow: 2px 2px 5px #dee1e4, -2px -2px 5px #fff;
	}

	.timeline li:nth-child(even) {
		justify-content: flex-end;
	}

	@media only screen and (max-width: 1111px) {
		.timeline li {
			justify-content: flex-end;
		}

		.timeline li:before {
			left: 3%;
		}

		.timeline:before {
			left: 3%;
		}
		.timeline .panel {
			width: 90%;
		}
	}
</style>
