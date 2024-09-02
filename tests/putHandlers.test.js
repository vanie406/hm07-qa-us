// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
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
    let response;
    let actualStatus;

    try {
        response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
            method: 'PUT',
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


let updatedRequestBody = {
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

test('should update the kit name', async () => {
    let getResponse;
    let kitData;
    
    try {
        await fetch(`${config.API_URL}/api/v1/kits/2`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedRequestBody)
        });
        
        getResponse = await fetch(`${config.API_URL}/api/v1/kits/2`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        kitData = await getResponse.json();

    } catch (error) {
        console.error('Fetch error:', error);
    }
    
    expect(kitData).toBeDefined(); 
    expect(kitData.name).toBe("Shopping Cart");
}); 
