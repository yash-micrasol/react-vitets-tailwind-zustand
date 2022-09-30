import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

const useDashboard = create(
  persist(
    (set: any, get: any) => ({
      data: null,
      setData: (payload: any) => {
        const result = axios.get("/dashboard", payload);
        set((state: { data: any }) => ({
          data: {
            ...state.data,
            result,
          },
        }));
      },
    }),
    {
      name: "dashboard",
      // getStorage: () => sessionStorage,
    }
  )
);

export default useDashboard;
