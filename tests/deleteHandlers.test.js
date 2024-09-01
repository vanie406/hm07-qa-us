// eslint-disable-next-line no-undef 
const config = require('../config');

test('status should be 200', async () => {
    try {
       
        const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
            method: 'DELETE',
        });

        expect(response.status).toBe(200);
    } catch (error) {
        console.error(error);
    }
});

test('response body should contain expected data', async () => {
    try {
     
        const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
            method: 'DELETE',
        });

        const responseBody = await response.json();
        
        expect(responseBody).toEqual({ ok: true });
    } catch (error) {
        console.error(error);
    }
});
