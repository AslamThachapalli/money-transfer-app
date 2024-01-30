import { atom, selector, useRecoilCallback } from 'recoil';

export const signUpFirstnameState = atom({
    key: 'signUpUsernameState',
    default: ''
})

export const signUpLastnameState = atom({
    key: 'signUpLastnameState',
    default: ''
})

export const signUpEmailState = atom({
    key: 'signUpEmailState',
    default: ''
})

export const signUpPasswordState = atom({
    key: 'signUpPasswordState',
    default: ''
})

const signUpRequest = selector({
    key: 'signUpRequest',
    get: async ({ get }) => {
        const firstname = get(signUpFirstnameState);
        const lastname = get(signUpLastnameState);
        const username = get(signUpEmailState);
        const password = get(signUpPasswordState);

        try {
            const response = await fetch('localhost:3000/api/v1/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    password,
                    username,
                })
            })

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            return data;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
})