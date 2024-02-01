export default async function signUp(userData) {
    try {
        const response = await fetch('http://localhost:3000/api/v1/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })

        console.log(response);

        const data = await response.json();
        if (response.status == 201) {
            const jwt = data.token;
            localStorage.setItem('token', jwt);
            return data.message;
        } else {
            throw new Error(data.message)
        }

    } catch (e) {
        throw e;
    }
}