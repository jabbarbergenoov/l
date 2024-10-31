const form = document.getElementById('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    }
    try {
        const res = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        const result = await res.json();
        document.getElementById('response-message').textContent = result.message || 'Muvaffaqiyatli roʻyxatdan oʻtdingiz!';
    } catch {
        document.getElementById('response-message').textContent = 'Xatolik yuz berdi.';
    }
    console.log(e);
});
