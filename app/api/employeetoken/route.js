import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { cookies } from 'next/headers';
export async function GET(req) {
  try {
    const nextRequestConfig = {
      method: 'GET',
      url: 'https://bms.idsystems.co.id/api/resource/User',
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_API_KEY}:${process.env.NEXT_PUBLIC_SECRET_KEY}`,
      },
    };
    const response = await axios(nextRequestConfig);
    return NextResponse.json(
      {
        status: true,
        data: response.data.data,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
  }
}
