// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {

		"productsList": [
        {
            "id": 1,
            "quantity": 2
        },
        {
            "id": 6,
            "quantity": 2
        }
    ]
}

test('status should response 200', async () => {
	let response;
	let actualStatus;

    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6/products`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		actualStatus = response.status;
		console.log('Received status:', actualStatus); 

	} catch (error) {
		console.error(error);
	}

	expect(actualStatus).toBe(200);
});


test('kits should contain productList', async () => {
	let response;
	let kitData;
  
	try {
	    response = await fetch(`${config.API_URL}/api/v1/kits/6/products`, {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify(requestBody)
	  });
  
	  if (response.ok) {
		kitData = await response.json();
	  } else {
		console.error('Response error:', response.status);
	  }
	} catch (error) {
	  console.error('Fetch error:', error);
	}

	expect(kitData).toHaveProperty('productsList');
	expect(Array.isArray(kitData.productsList)).toBe(true);
  });