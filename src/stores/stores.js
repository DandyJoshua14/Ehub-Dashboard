import { browser } from "$app/environment";
import { writable } from "svelte/store";

export let dateOfBirth = writable("")
export let about = writable("")
export let userGender = writable("")

export const name = writable(browser && localStorage.getItem("name"));
// @ts-ignore
name.subscribe((val) => browser && localStorage.setItem("name", val));