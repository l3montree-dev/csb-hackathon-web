import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json({
    status: 'healthy',
    message: 'The application is running smoothly.',
    timestamp: new Date().toISOString(),
  })
}
