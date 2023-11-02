// import { NextResponse, NextRequest } from 'next/server';
// import axios from 'axios';
// export async function POST(req) {
//   try {
//     const dataRequest = await req.json();
//     console.log(dataRequest);
//     const { username, password } = dataRequest;
//     console.log(username, password);
//     const test = await axios
//       .post('https://bms.idsystems.co.id/api/method/login', {
//         usr: username,
//         pwd: password,
//       })
//       .then((res) => {
//         return res;
//       })
//       .catch((err) => {
//         return err;
//       });

//     return NextResponse.json(
//       {
//         status: true,
//         data: test.data.message,
//         headers: {
//           'set-cookie': test.headers['set-cookie'],
//         },
//       },
//       {
//         status: 200,
//       }
//     );
//   } catch (err) {
//     console.log(err);
//   }
// }

// hampir beres
import { NextResponse, NextRequest } from 'next/server';
import axios from 'axios';
let savedCookies = '';

export async function POST(req) {
  try {
    const dataRequest = await req.json();
    const { username, password } = dataRequest;

    // Buat permintaan login
    const loginResponse = await axios.post(
      'https://bms.idsystems.co.id/api/method/login',
      {
        usr: username,
        pwd: password,
      }
    );

    // Ambil cookie dari respons login
    const cookies = loginResponse.headers['set-cookie'];

    // Simpan cookie dalam variabel savedCookies
    savedCookies = cookies.join('; ');

    return NextResponse.json(
      {
        status: true,
        data: loginResponse.data,
      },
      {
        status: 200,
        headers: {
          'Set-Cookie': savedCookies, // Mengirim cookie ke peramban
        },
      }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.error('Terjadi kesalahan dalam permintaan.');
  }
}
