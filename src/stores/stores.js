import { writable } from "svelte/store";

export let name = writable()
export let dateOfBirth = writable("null")
export let about = writable("null")
export let userGender = writable("null")