import path from 'path'

import test from '@interactjs/_dev/test/test'
import mkdirp from 'mkdirp'
import * as shell from 'shelljs'
import temp from 'temp'

shell.config.verbose = true
shell.config.fatal = true

test('typings', async t => {
  const tempDir = temp.track().mkdirSync('testProject')
  const modulesDir = path.join(tempDir, 'node_modules')
  const tempTypesDir = path.join(modulesDir, '@interactjs', 'types')
  const interactDir = path.join(modulesDir, 'interactjs')

  await mkdirp(interactDir)

  t.doesNotThrow(
    () => {
      shell.exec(`_types ${modulesDir}`)
      shell.cp('interactjs/{*.d.ts,package.json}', interactDir)
      shell.cp('@interactjs/types/{*.d.ts,package.json}', tempTypesDir)
      shell.cp('-R', path.join(process.cwd(), 'test', 'testProject', '*'), tempDir)
      shell.exec('tsc -b', { cwd: tempDir })

      const error = shell.error()

      if (error) {
        throw error
      }
    },
    'dependent typescript project compiles successfuly',
  )

  t.end()
})
