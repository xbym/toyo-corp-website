import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const filePath = path.join(process.cwd(), 'data', 'homepage.json')
    await fs.writeFile(filePath, JSON.stringify(data, null, 2))
    return NextResponse.json({ message: 'Homepage data updated successfully' })
  } catch (error) {
    console.error('Error updating homepage data:', error)
    return NextResponse.json({ error: 'Failed to update homepage data' }, { status: 500 })
  }
}