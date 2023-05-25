export const fetchProducts = async () => {
    try {
        const response = await fetch('http://localhost:7267/Product/Get');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}