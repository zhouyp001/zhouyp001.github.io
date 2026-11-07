import { copyFile, access } from 'node:fs/promises'
import { resolve } from 'node:path'

const dist = resolve(process.cwd(), 'dist')
try {
  await access(resolve(dist, 'index.html'))
  await copyFile(resolve(dist, 'index.html'), resolve(dist, '404.html'))
  console.log('[postbuild] 404.html generated')
} catch (e) {
  console.warn('[postbuild] skip:', e.message)
}