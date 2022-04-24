import create from 'zustand';

export const useCertificateStore = create((set) => ({
    certificates: [],
    addCertificates: (data) => set(state => ({ ...state, certificates: data }))
}))

