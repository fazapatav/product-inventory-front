export const payBuy = async(cart:any) =>{
    try {
        const response = await fetch('http://localhost:7267/Buy/Create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: new Date(),
                idClient: 1,
                products: cart.map((item:any) => ({
                    idProduct: item.id, 
                    quantity: item.quantity, 
                })),
            }),
        });
    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    }
    catch(error){
        console.error('Error:', error);
    }  
} 

export const fetchBuys = async () => {
    try {
        const response = await fetch('http://localhost:7267/Buy/Get');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching buys:', error);
    }
}