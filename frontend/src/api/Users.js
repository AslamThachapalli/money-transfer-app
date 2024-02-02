export default async function getUsers(filter) {
    try {
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })

        const data = await response.json()
        if (response.status == 200) {
            const users = data.users;
            return users;
        } else {
            throw new Error(data.message)
        }
    } catch (e) {
        throw e;
    }
}