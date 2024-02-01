import { atom, selector, useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';

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

export const signUpCallStatus = atom({
    key: 'signUpCallStatus',
    default: ''
})

export const signUpErrorState = atom({
    key: 'signUpErrorState',
    default: ''
})