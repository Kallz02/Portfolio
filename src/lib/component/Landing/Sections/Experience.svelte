<div class="pg4 section" id="exp">
	<h2>
		<center>Experience</center>
	</h2>
	<p>Click on the Cards for more!</p>
	<div class="wrapper">
		<ul class="timeline">
			<li>
				<details class="panel hidden1">
					<summary>Class 10 (CBSE) • Chrysalis High, Whitefield</summary>
					<!-- <h3></h3> -->
					<p>82.8%</p>
					<p><b>2018</b></p>
				</details>
			</li>

			<li>
				<details class="panel hidden1">
					<summary> 10+2 (CBSE) • Delhi Public School, Whitefield</summary>
					<!-- <h3></h3> -->
					<p>88.4%</p>
					<p><b>2020</b></p>
				</details>
			</li>

			<li>
				<details class="panel hidden1">
					<summary>VIT,Vellore • Integrated Mtech(Cse)</summary>
					<!-- <h3></h3> -->
					<p>CGPA: 7.2 (tentative)</p>
					<p><b>2025 · 5 years</b></p>
				</details>
			</li>

			<li>
				<details class="panel hidden1">
					<summary>Formi • <b>Marketing Intern</b></summary>
					<!-- <h3>Marketing Intern</h3> -->
					<p><b>Apr 2022 - Jul 2022 · 4 mos</b></p>
				</details>
			</li>
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
		background: hsl(191, 35%, 90%);

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
		display: block;
		user-select: none;
		cursor: pointer;
		outline: none;
		padding: 20px;
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
</style>
