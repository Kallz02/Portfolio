from django.core.mail import send_mail
from django.http import JsonResponse
from django.views import View
from django.conf import settings
import json
import asyncio
from django.views.decorators.csrf import csrf_exempt



@csrf_exempt
class SendEmailView(View):
    async def post(self, request):
        data = json.loads(request.body.decode('utf-8'))  # Parse the JSON data sent from Svelte
        print(data)
        first_name = data.get('firstName', '')
        last_name = data.get('lastName', '')
        email = data.get('email', '')
        phone_number = data.get('phoneNumber', '')
        details = data.get('details', '')

        # Perform any validation on the data if needed

        # Send the email
        subject = 'Contact Inquiry'
        message = f'Name: {first_name} {last_name}\nEmail: {email}\nPhone Number: {phone_number}\n\nDetails: {details}'
        from_email = settings.DEFAULT_FROM_EMAIL
        to_email = "akshay@akshayk.dev"  # Replace with the recipient email address

        try:
            # Send the email asynchronously using asyncio
            loop = asyncio.get_event_loop()
            loop.run_in_executor(None, send_mail, subject, message, from_email, [to_email], False)
        except Exception as e:
            response_data = {
                'status': 'error',
                'message': 'Failed to send the email.',
                'error': str(e)
            }
            return JsonResponse(response_data, status=500)

        response_data = {
            'status': 'success',
            'message': 'Email sent successfully.',
            'data': {
                'firstName': first_name,
                'lastName': last_name,
                'email': email,
                'phoneNumber': phone_number,
                'details': details,
            }
        }

        return JsonResponse(response_data)

