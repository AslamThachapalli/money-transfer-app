export default async function transferMoney(transferData) {
    try {
        const token = localStorage.getItem('token');

        const response = await fetch(`http://localhost:3000/api/v1/account/transfer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(transferData),
        })

        const data = await response.json();
        if (response.status == 200) {
            return true;
        } else {
            throw new Error(data.message)
        }
    } catch (e) {
        throw e;
    }
}