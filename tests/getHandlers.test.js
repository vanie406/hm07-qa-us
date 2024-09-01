// eslint-disable-next-line no-undef
const config = require('../config');

test('status code should be 200', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/warehouses`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const actualStatus = response.status;
    expect(actualStatus).toBe(200);

  } catch (error) {
    console.error(error);
  }
});

//Test 2
test('working hours in Big World should be correct', async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/warehouses`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const responseData = await response.json();

    const bigWorldStore = responseData.find(store => store.name === "Big World");

    const expectedWorkingHours = {
      start: 5,
      end: 20
    };

    expect(bigWorldStore.workingHours.start).toBe(expectedWorkingHours.start);
    expect(bigWorldStore.workingHours.end).toBe(expectedWorkingHours.end);

  } catch (error) {
    console.error(error);
  }
});






