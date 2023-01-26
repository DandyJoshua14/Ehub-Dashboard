import * as fs from 'fs';

/** @type {import('./$types').PageLoad} */
export function load () {
   const response = fs.readFileSync('lib/projects.json', 'utf-8')
   const result = response
      return {
        result
    }
  }