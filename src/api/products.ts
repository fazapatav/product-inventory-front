export const fetchProducts = async () => {
    try {
        const response = await fetch('http://localhost:7267/Product/Get');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

export const createProduct = async (formData:any) =>{
    const response = await fetch('http://localhost:7267/Product/Create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
}