<script lang="ts">
import Swal from 'sweetalert2';
let firstName = '';
  let lastName = '';
  let email = '';
  let phoneNumber = '';
  let details = '';
  let isLoading = false;
  let firstNameError = '';
  let lastNameError = '';
  let emailError = '';
  let phoneNumberError = '';
  let detailsError = '';

  const swalWithButtons = Swal.mixin({
  customClass: {
    confirmButton: 'bg-cyan-300 shadow-xl text-black px-5 py-1 border-[0.12rem] border-black rounded-md',
    cancelButton: 'bg-cyan-300 shadow-xl text-black px-5 py-1 border-[0.12rem] border-black rounded-md',
    popup: 'dark:bg-slate-900 dark:text-gray-400 dark:border-gray-700 border-[0.15rem] border-black',
  },
  background: 'whitesmoke',
 buttonsStyling:false,
  
})


  function showSuccessPopup() {
    swalWithButtons.fire({
      title: 'Success!',
      text: 'Email sent successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  }

  // Helper function to show an error popup
  function showErrorPopup() {
    swalWithButtons.fire({
      title: 'Error!',
      text: 'Failed to send the email.',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }
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
      isLoading = true;
      // const response = await fetch('https://kallz02-portfolio.hf.space/send-email/', {
      // const response = await fetch('http://localhost:7860/send-email/', {
      const response = await fetch('https://back.akshayk.dev/send-email/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        isLoading = false;
        // Handle successful form submission
        console.log('Email sent successfully');
        // Optionally, you can show a success message or redirect the user to a thank-you page.
        showSuccessPopup();
      } else {
        // Handle form submission failure
        console.log(response)
        console.error('Failed to send the email');
        isLoading = false;
        // Optionally, you can show an error message to the user.
        showErrorPopup();
      }
    } catch (error) {
      isLoading = false;
      console.error('Error occurred during form submission:', error);
      // Optionally, you can show an error message to the user.
      showErrorPopup();
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
<div class="max-w-[150rem] px-4 py-8 sm:px-6 lg:px-8   mx-auto">
	<div class="max-w-[130rem] lg:max-w-5xl mx-auto">
		<div class="text-center">
			<h1 class="text-5xl text-black mb-6 sm:text-6xl dark:text-white">Contact Me</h1>
			<p class="mt-3 text-md text-gray-800 dark:text-gray-400">
				Let me know if you have any questions or just want to say hi.
			</p>
		</div>

		<div class="mt-3  items-center ">
			<div class="mb-3 text-center">
				<p class="text-md mb-6 text-gray-700">I'll get back to you in 1 or 2 days.</p>
			</div>
		  <!-- Card -->
      <div class="flex flex-col card border-[0.15rem] border-black bg-gray-100 rounded-xl p-4 sm:p-6 lg:p-8 lg:py-14 md:my-16 dark:border-gray-700">
        <form on:submit|preventDefault={handleSubmit}>
          <div class="grid gap-4">
            <!-- Grid -->
            <div class="grid grid-cols-1 text-black sm:grid-cols-2 gap-4">
              <div>
                <label for="firstName"  class="sr-only text-black">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  bind:value={firstName}
                  class="{firstNameError ? 'error-input' : ''} py-3 px-4 block w-full border-[0.15rem] bg-gray-100 border-black rounded-md text-black text-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
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
                  class="{lastNameError ? 'error-input' : ''} py-3 px-4 block w-full border-[0.15rem] bg-gray-100 border-black rounded-md text-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
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
                class="{emailError ? 'error-input' : ''} py-3 px-4 block w-full border-[0.15rem] bg-gray-100 border-black rounded-md text-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
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
                class="{phoneNumberError ? 'error-input' : ''} py-3 px-4 block w-full border-[0.15rem] bg-gray-100 border-black rounded-md text-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
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
                class="{detailsError ? 'error-input' : ''} py-3 px-4 block w-full bg-gray-100 border-[0.15rem] border-black rounded-md text-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Details"
              />
              {#if detailsError}
                <p class="text-red-500 text-sm">{detailsError}</p>
              {/if}
            </div>
          </div>
          <!-- End Grid -->
    
          <div class="mt-4 grid">
            <!-- <button
              type="submit"
              class="inline-flex justify-center items-center gap-x-3 text-center bg-cyan-300 border-[0.15rem] border-black hover:bg-cyan-700  text-lg  text-black font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
            >
              Send inquiry
            </button> -->
            <button
  type="submit"
  disabled={isLoading} 
  class="inline-flex justify-center items-center gap-x-3 text-center bg-cyan-300 border-[0.15rem] border-black hover:bg-cyan-700  text-lg  text-black font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
>
  {#if isLoading}
  <div aria-label="Loading..." role="status">
    <svg class="h-6 w-6 animate-spin" viewBox="3 3 18 18">
      <path
        class="fill-gray-200"
        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
      <path
        class="fill-gray-800"
        d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
    </svg>
  </div>
    Sending...
  {:else}
    Send inquiry
  {/if}
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