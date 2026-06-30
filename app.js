document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('productCategory');
    const electronicsFields = document.getElementById('electronics-fields');
    const clothingFields = document.getElementById('clothing-fields');
    const productForm = document.getElementById('productForm');

    // Starting mock database modeled directly off your Java Main array defaults
    let inventory = [
        { id: 1, name: "Laptop", category: "electronics", price: 12000, quantity: 3, attribute: "24 Months Warranty" },
        { id: 2, name: "Smartphone", category: "electronics", price: 8000, quantity: 5, attribute: "12 Months Warranty" },
        { id: 3, name: "T-Shirt", category: "clothing", price: 200, quantity: 20, attribute: "Size: M" },
        { id: 4, name: "Jeans", category: "clothing", price: 600, quantity: 10, attribute: "Size: L" }
    ];

    // Toggle input field conditions based on product category select
    categorySelect.addEventListener('change', (e) => {
        const selectedValue = e.target.value;
        electronicsFields.classList.add('hidden');
        clothingFields.classList.add('hidden');

        if (selectedValue === 'electronics') {
            electronicsFields.classList.remove('hidden');
        } else if (selectedValue === 'clothing') {
            clothingFields.classList.remove('hidden');
        }
    });

    // Function to calculate metrics and render interface
    function updateDashboard() {
        const tableBody = document.getElementById('inventoryTableBody');
        tableBody.innerHTML = ''; // Wipe old visual structures

        let totalValue = 0;
        let electronicsCount = 0;
        let clothingCount = 0;

        inventory.forEach(product => {
            // Aggregate values modeled off your Java loops
            totalValue += (product.price * product.quantity);
            if (product.category === 'electronics') electronicsCount++;
            if (product.category === 'clothing') clothingCount++;

            // Append dynamic UI rows to standard data table
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>#${product.id}</td>
                <td style="font-weight: 500;">${product.name}</td>
                <td><span class="badge">${product.category}</span></td>
                <td>R${product.price.toFixed(2)}</td>
                <td>${product.quantity}</td>
                <td><span class="badge badge-gold">${product.attribute}</span></td>
            `;
            tableBody.appendChild(row);
        });

        // Update reporting headers in domestic South African currency layout
        document.getElementById('stat-total-value').textContent = `R${totalValue.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}`;
        document.getElementById('stat-total-count').textContent = inventory.length;
        document.getElementById('stat-electronics-count').textContent = electronicsCount;
        document.getElementById('stat-clothing-count').textContent = clothingCount;
    }

    // Intercept submit, update logic array, and re-calculate parameters instantly
    productForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const id = parseInt(document.getElementById('productId').value);
        const name = document.getElementById('productName').value;
        const price = parseFloat(document.getElementById('productPrice').value);
        const quantity = parseInt(document.getElementById('productQuantity').value);
        const category = categorySelect.value;

        let attribute = '';

        if (category === 'electronics') {
            const warranty = document.getElementById('warrantyMonths').value;
            attribute = `${warranty} Months Warranty`;
        } else if (category === 'clothing') {
            const selectedSize = document.querySelector('input[name="size"]:checked');
            attribute = selectedSize ? `Size: ${selectedSize.value}` : 'Size: N/A';
        }

        // Add to our core functional list arrays
        inventory.push({ id, name, category, price, quantity, attribute });

        // Reset the form values cleanly for next input
        productForm.reset();
        electronicsFields.classList.add('hidden');
        clothingFields.classList.add('hidden');

        // Fire rendering updates instantly
        updateDashboard();
    });

    // Run calculations on initial app payload load
    updateDashboard();
});