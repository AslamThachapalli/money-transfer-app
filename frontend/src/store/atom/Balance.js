import { atom, selector } from "recoil";
import getBalance from "../../api/Balance";

export const shouldRefetchBalanceState = atom({
    key: 'shouldRefetchBalanceState',
    default: false
})

export const balanceState = atom({
    key: 'balanceState',
    default: selector({
        key: 'balanceStateSelector',
        get: async ({ get }) => {
            get(shouldRefetchBalanceState)

            try {
                const balance = await getBalance();
                return balance;
            } catch (e) {
                throw e;
            }
        }
    })
})