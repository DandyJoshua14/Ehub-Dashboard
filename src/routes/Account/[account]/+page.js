/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
      name: `${params.account.charAt(0).toUpperCase()  + `${params.account}`.slice(1)}`,
  };
}