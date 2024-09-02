// eslint-disable-next-line no-undef 
const config = require('../config');

test('status should be 200', async () => {
	let response;
    try {
       
        const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
            method: 'DELETE',
        });

    } catch (error) {
        console.error(error);
    }

	expect(response.status).toBe(200);
});

test('should response expected data, ok: true', async () => {
	let response;
	let responseBody;
    try {
     
        const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
            method: 'DELETE',
        });

        const responseBody = await response.json();
        
    } catch (error) {
        console.error(error);
    }

	expect(responseBody).toEqual({ ok: true });
});
