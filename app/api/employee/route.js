import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { cookies } from 'next/headers';

async function getCookies(req) {
  const cookieData = cookies(req);
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData);
    }, 1000)
  );
}
export async function GET(req) {
  const Cookies = await getCookies(req.headers.cookie);
  const nextRequestConfig = {
    method: 'GET',
    url: 'https://bms.idsystems.co.id/api/resource/User?limit_page_length=200&fields=["name", "full_name","user_image"]',
    headers: {
      Cookie: Cookies,
    },
    cache: 'force-cache',
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
}
