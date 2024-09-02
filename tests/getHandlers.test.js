/* eslint-env node */

// eslint-disable-next-line no-undef
const config = require('../config');

test('status code should be 200', async () => {
  let actualStatus;

  try {
    const response = await fetch(`${config.API_URL}/api/v1/warehouses`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    actualStatus = response.status;
    console.log('Received status:', actualStatus); 
  } catch (error) {
    console.error('Fetch error:', error); 
  }

  expect(actualStatus).toBe(200);
});