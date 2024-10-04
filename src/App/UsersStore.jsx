
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUsersStore = create(
    persist(
        (set) => (
            {
                registeredUsers: [],
                setUser: (newUser) => set((state) => (
                    {
                        registeredUsers: [newUser, ...state.registeredUsers]
                    }
                ))
                ,
                resetUsers: () => set({
                    registeredUsers: []
                })

            }

        )
    ),
    {
        name: 'users'
    },
);

export default useUsersStore;
