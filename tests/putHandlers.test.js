// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody= {
	"name": "My modified kit",
    "productsList": [
        {
            "id": 1,
            "quantity": 4
        },
        {
            "id": 5,
            "quantity": 2
        },
        {
            "id": 3,
            "quantity": 1
        },
        {
            "id": 4,
            "quantity": 1
        }
    ]
}

test('status should respond with 200', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'PUT',
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

//Test 2

const updatedRequestBody= {
	"name": "Shopping Cart",
    "productsList": [
        {
            "id": 1,
            "quantity": 4
        },
        {
            "id": 5,
            "quantity": 2
        },
        {
            "id": 3,
            "quantity": 1
        },
        {
            "id": 4,
            "quantity": 1
        }
    ]
}
test('shoud update the kit name', async () => {
	try {
		await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(updatedRequestBody)
		});
		
		const getResponse = await fetch(`${config.API_URL}/api/v1/kits/2`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

		const kitData = await getResponse.json();
		expect(kitData.name).toBe("Shopping Cart");
		

    } catch (error) {
        console.error(error);
    }
});