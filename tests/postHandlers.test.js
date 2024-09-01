// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    // put your body here
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
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6/products`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		const actualStatus = response.status;
		expect(actualStatus).toBe(200);

	} catch (error) {
		console.error(error);
	}
});

//test 2

test('kits should contain productList', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6/products`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		const kitData = await response.json();
		expect(kitData).toHaveProperty('productsList');
		expect(Array.isArray(kitData.productsList)).toBe(true);


	} catch (error) {
		console.error(error);
	}
});


