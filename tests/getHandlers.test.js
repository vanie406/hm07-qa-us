// eslint-disable-next-line no-undef
const config = require('../config');

test('status code should be 200', async () => {
  let response;
  let actualStatus;

  try {
      response = await fetch(`${config.API_URL}/api/v1/warehouses`, {
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



test('working hours in Big World should be correct', async () => {
  let response;
  let responseData;
  let bigWorldStore;

  try {
      response = await fetch(`${config.API_URL}/api/v1/warehouses`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
      }
    });

     responseData = await response.json();

     bigWorldStore = responseData.find(store => store.name === "Big World");

    const expectedWorkingHours = {
      start: 5,
      end: 20
    };

  } catch (error) {
    console.error(error);

    expect(bigWorldStore.workingHours.start).toBe(expectedWorkingHours.start);
    expect(bigWorldStore.workingHours.end).toBe(expectedWorkingHours.end);
  }
});