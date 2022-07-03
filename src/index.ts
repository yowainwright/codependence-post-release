import { promisify } from 'util'
import { exec } from 'child_process'
import { readFileSync, writeFileSync } from 'fs-extra'

/**
 * execPromise
 * @description interprets a cmd
 * @param {cmd} string
 * @returns {object}
 */
export const execPromise = promisify(exec)

export const updateReadme = ({
	json = './package.json',
	md = './README.md',
} = {}) => {
	const packageJson = readFileSync(json, 'utf8')
	const readme = readFileSync(md, 'utf8')
	console.log({ packageJson, readme })
	const updatedReadme = `${readme}\nTest`
	console.log({ updatedReadme })
	writeFileSync(md, updatedReadme)
}

updateReadme()
