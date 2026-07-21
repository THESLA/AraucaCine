import sharp from 'sharp'
import { readdirSync, statSync } from 'fs'
import { join, parse } from 'path'

const inputDir = 'public/images'
const files = readdirSync(inputDir)

for (const file of files) {
  const ext = file.toLowerCase()
  if (!ext.endsWith('.jpg') && !ext.endsWith('.jpeg') && !ext.endsWith('.png')) continue
  const name = parse(file).name
  const input = join(inputDir, file)
  const output = join(inputDir, `${name}.webp`)
  const before = statSync(input).size
  await sharp(input).webp({ quality: 80 }).toFile(output)
  const after = statSync(output).size
  const saved = ((before - after) / before * 100).toFixed(1)
  console.log(`${file} → ${name}.webp  (${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB, ${saved}% menos)`)
}
