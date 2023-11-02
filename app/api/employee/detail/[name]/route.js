import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { cookies } from 'next/headers';
export async function GET(req,{params}) {
  try {
    const {name} = params;
    const decodedName = decodeURIComponent(name);
    // console.log(req.headers.name)
    const nextRequestConfig = {
      method: 'GET',
      url: `https://bms.idsystems.co.id/api/resource/User/${decodedName}`,
      headers: {
        Cookie: cookies(req.headers.cookie),
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
  } catch (err) {
    console.log(err);
  }
}
