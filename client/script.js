async function saludo() {
    try {
        const nombre = document.getElementById('nombre').value;
        const response = await fetch(`http://localhost:3000/saludo/${nombre}`);
        const data = await response.text();
        document.getElementById('mensaje').textContent = data;
    } catch (error) {
        console.error('Error:', error);
    }
}