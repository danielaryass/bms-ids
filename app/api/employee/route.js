import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { cookies } from 'next/headers'
export async function GET(req) {
  try {
    const nextRequestConfig = {
      method: 'GET',
      url: 'https://bms.idsystems.co.id/api/resource/User?limit_page_length=200&fields=["name", "full_name","user_image"]',
      headers: {
        Cookie: cookies(req.headers.cookie),
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
