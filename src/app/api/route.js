
import { NextResponse } from 'next/server'
export async function GET() {

    console.log('happening');
    return NextResponse.json(<h1>hj</h1>)
}