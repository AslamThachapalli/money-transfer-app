export default async function signIn(userData) {
    try {
        const response = await fetch('http://localhost:3000/api/v1/user/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })

        console.log(response);

        const data = await response.json();
        if (response.status == 200) {
            const jwt = data.token;
            localStorage.setItem('token', jwt);
            return {
                username: data.username,
                firstname: data.firstname,
                lastname: data.lastname
            };
        } else {
            throw new Error(data.message)
        }

    } catch (e) {
        throw e;
    }
}