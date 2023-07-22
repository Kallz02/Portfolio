

<svelte:head>
	<title>Contact</title>
</svelte:head>

<!-- Contact Us -->
<div class="max-w-[150rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto">
	<div class="max-w-[130rem] lg:max-w-5xl mx-auto">
		<div class="text-center">
			<h1 class="text-3xl text-black sm:text-6xl dark:text-white">Contact Me</h1>
			<p class="mt-3 text-lg text-gray-800 dark:text-gray-400">
				Let me know if you have any questions or just want to say hi.
			</p>
		</div>

		<div class="mt-3  items-center ">
			<div class="mb-3 text-center">
				<p class="text-md text-gray-700">I'll get back to you in 1 or 2 days.</p>
			</div>
			<!-- Card -->
			<div class="flex flex-col card border-[0.15rem]  border-black rounded-xl p-4 sm:p-6 lg:p-8 lg:py-14 md:my-16 dark:border-gray-700">
				
				<form>
					<div class="grid gap-4">
						<!-- Grid -->
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div>
								<label for="hs-firstname-contacts-1" class="sr-only">First Name</label>
								<input
									type="text"
									name="hs-firstname-contacts-1"
									id="hs-firstname-contacts-1"
									class="py-3 px-4 block w-full border-[0.15rem] border-black rounded-md text-black text-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
									placeholder="First Name"
								/>
							</div>

							<div>
								<label for="hs-lastname-contacts-1" class="sr-only">Last Name</label>
								<input
									type="text"
									name="hs-lastname-contacts-1"
									id="hs-lastname-contacts-1"
									class="py-3 px-4 block w-full border-[0.15rem] border-black rounded-md text-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
									placeholder="Last Name"
								/>
							</div>
						</div>
						<!-- End Grid -->

						<div>
							<label for="hs-email-contacts-1" class="sr-only">Email</label>
							<input
								type="email"
								name="hs-email-contacts-1"
								id="hs-email-contacts-1"
								autocomplete="email"
								class="py-3 px-4 block w-full border-[0.15rem] border-black rounded-md text-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
								placeholder="Email"
							/>
						</div>

						<div>
							<label for="hs-phone-number-1" class="sr-only">Phone Number</label>
							<input
								type="text"
								name="hs-phone-number-1"
								id="hs-phone-number-1"
								class="py-3 px-4 block w-full border-[0.15rem] border-black rounded-md text-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
								placeholder="Phone Number"
							/>
						</div>

						<div>
							<label for="hs-about-contacts-1" class="sr-only">Details</label>
							<textarea
								id="hs-about-contacts-1"
								name="hs-about-contacts-1"
								rows="4"
								class="py-3 px-4 block w-full border-[0.15rem] border-black rounded-md text-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
								placeholder="Details"
							/>
						</div>
					</div>
					<!-- End Grid -->

					<div class="mt-4 grid">
						<button
							type="submit"
							class="inline-flex justify-center items-center gap-x-3 text-center bg-cyan-300 border-[0.15rem] border-black hover:bg-cyan-700  text-lg  text-black font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
							>Send inquiry</button
						>
					</div>

					
				</form>
			</div>
			<!-- End Card -->
	
			</div>
		</div>
	</div>

<!-- End Contact Us -->

<style>

	.card{

		box-shadow: 0.65rem 0.65rem 0 hsl(var(--shadowColor) / 1);
	}
</style>