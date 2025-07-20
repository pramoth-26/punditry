import { NextResponse } from 'next/server';

export async function GET() {
  const response = await fetch('http://localhost:3002/api/messages');
  const data = await response.json();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();
  const response = await fetch('http://localhost:3002/api/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return NextResponse.json(data);
}

export async function DELETE(request: Request) {
  const { pathname } = new URL(request.url);
  const id = pathname.split('/').pop();
  console.log('Pathname:', pathname, 'ID:', id);
  const response = await fetch(`http://localhost:3002/api/messages/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return NextResponse.json(data);
}