<script lang="ts">

let firstName = '';
  let lastName = '';
  let email = '';
  let phoneNumber = '';
  let details = '';

  let firstNameError = '';
  let lastNameError = '';
  let emailError = '';
  let phoneNumberError = '';
  let detailsError = '';

  async function handleSubmit() {
    // Reset previous errors
    firstNameError = '';
    lastNameError = '';
    emailError = '';
    phoneNumberError = '';
    detailsError = '';

    // Validate input fields
    if (firstName.trim() === '') {
      firstNameError = 'First Name is required';
    }

    if (lastName.trim() === '') {
      lastNameError = 'Last Name is required';
    }

    if (email.trim() === '') {
      emailError = 'Email is required';
    } else if (!isValidEmail(email)) {
      emailError = 'Invalid email format';
    }

    if (phoneNumber.trim() === '') {
      phoneNumberError = 'Phone Number is required';
    }

    if (details.trim() === '') {
      detailsError = 'Details are required';
    }

    // If any errors, stop form submission
    if (
      firstNameError ||
      lastNameError ||
      emailError ||
      phoneNumberError ||
      detailsError
    ) {
      return;
    }

    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      details,
    };

    try {
      const response = await fetch('http://back.akshayk.dev/send-email/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful form submission
        console.log('Email sent successfully');
        // Optionally, you can show a success message or redirect the user to a thank-you page.
      } else {
        // Handle form submission failure
        console.error('Failed to send the email');
        // Optionally, you can show an error message to the user.
      }
    } catch (error) {
      console.error('Error occurred during form submission:', error);
      // Optionally, you can show an error message to the user.
    }
  }

  // Helper function to validate email format
  function isValidEmail(email:string) {
    // Use a regular expression to validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

</script>



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
      <div class="flex flex-col card border-[0.15rem] border-black rounded-xl p-4 sm:p-6 lg:p-8 lg:py-14 md:my-16 dark:border-gray-700">
        <form on:submit|preventDefault={handleSubmit}>
          <div class="grid gap-4">
            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="firstName" class="sr-only">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  bind:value={firstName}
                  class="{firstNameError ? 'error-input' : ''} py-3 px-4 block w-full border-[0.15rem] border-black rounded-md text-black text-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="First Name"
                />
                {#if firstNameError}
                  <p class="text-red-500 text-sm">{firstNameError}</p>
                {/if}
              </div>
    
              <div>
                <label for="lastName" class="sr-only">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  bind:value={lastName}
                  class="{lastNameError ? 'error-input' : ''} py-3 px-4 block w-full border-[0.15rem] border-black rounded-md text-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="Last Name"
                />
                {#if lastNameError}
                  <p class="text-red-500 text-sm">{lastNameError}</p>
                {/if}
              </div>
            </div>
            <!-- End Grid -->
    
            <div>
              <label for="email" class="sr-only">Email</label>
              <input
                type="email"
                id="email"
                bind:value={email}
                autocomplete="email"
                class="{emailError ? 'error-input' : ''} py-3 px-4 block w-full border-[0.15rem] border-black rounded-md text-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Email"
              />
              {#if emailError}
                <p class="text-red-500 text-sm">{emailError}</p>
              {/if}
            </div>
    
            <div>
              <label for="phoneNumber" class="sr-only">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                bind:value={phoneNumber}
                class="{phoneNumberError ? 'error-input' : ''} py-3 px-4 block w-full border-[0.15rem] border-black rounded-md text-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Phone Number"
              />
              {#if phoneNumberError}
                <p class="text-red-500 text-sm">{phoneNumberError}</p>
              {/if}
            </div>
    
            <div>
              <label for="details" class="sr-only">Details</label>
              <textarea
                id="details"
                bind:value={details}
                rows="4"
                class="{detailsError ? 'error-input' : ''} py-3 px-4 block w-full border-[0.15rem] border-black rounded-md text-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Details"
              />
              {#if detailsError}
                <p class="text-red-500 text-sm">{detailsError}</p>
              {/if}
            </div>
          </div>
          <!-- End Grid -->
    
          <div class="mt-4 grid">
            <button
              type="submit"
              class="inline-flex justify-center items-center gap-x-3 text-center bg-cyan-300 border-[0.15rem] border-black hover:bg-cyan-700  text-lg  text-black font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
            >
              Send inquiry
            </button>
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