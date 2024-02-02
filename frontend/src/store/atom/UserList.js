import { atom, selector } from "recoil";
import getUsers from "../../api/Users";

export const filterState = atom({
    key: 'filterState',
    default: ''
})

export const initiateTransactionState = atom({
    key: 'initiateTransactionState',
    default: false,
})

export const transferAmountState = atom({
    key: 'transferAmountState',
    default: '',
})

export const toUserIdState = atom({
    key: 'toUserIdState',
    default: ''
})

export const usersSelectorState = selector({
    key: 'usersSelectorState',
    get: async ({get}) => {
        const filter = get(filterState)

        try{
            const users = await getUsers(filter);
            return users;
        }catch(e){
            throw e;
        }
    }
})
