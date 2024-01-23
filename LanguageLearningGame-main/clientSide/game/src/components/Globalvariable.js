import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
    email: "",
    language: "English",
    score: 0,
})

export { setGlobalState, useGlobalState };