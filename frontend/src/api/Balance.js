export default async function getBalance(){
    const token = localStorage.getItem('token');
    console.log(token)
    try{
        const response = await fetch('http://localhost:3000/api/v1/account/balance', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })

        const data = await response.json();
        if(response.status == 200){
           return data.balance;
        }else if(response.status == 403){
            throw new Error('User un-authorised')
        }
    }catch(e){
        throw e;
    }
}