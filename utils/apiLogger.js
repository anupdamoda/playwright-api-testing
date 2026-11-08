
function maskSensitiveHeaders(headers = {}) {
  const safeHeaders = { ...headers };

  for (const key of Object.keys(safeHeaders)) {
    if (
      ['authorization', 'cookie', 'set-cookie', 'x-api-key']
        .includes(key.toLowerCase())
    ) {
      safeHeaders[key] = '[REDACTED]';
    }
  }

  return safeHeaders;
}

async function logApiRequest(request) {
  console.log('\n========== API REQUEST ==========');
  console.log('Method:', request.method());
  console.log('Full URL:', request.url());
  console.log(
    'Headers:',
    JSON.stringify(maskSensitiveHeaders(request.headers()), null, 2)
  );

  const body = request.postData();

  if (body) {
    console.log('Request Body:', body);
  } else {
    console.log('Request Body: No body');
  }

  console.log('=================================\n');
}

async function logApiResponse(response, durationMs) {
  console.log('\n========== API RESPONSE ==========');
  console.log('Method:', response.request().method());
  console.log('Full URL:', response.url());
  console.log('Status:', response.status());
  console.log('Status Text:', response.statusText());
  console.log('Duration:', `${durationMs} ms`);
  console.log(
    'Headers:',
    JSON.stringify(
      maskSensitiveHeaders(await response.allHeaders()),
      null,
      2
    )
  );

  const body = await response.text();

  console.log('Response Body:', body || '[Empty response]');
  console.log('==================================\n');
}

module.exports = {
  logApiRequest,
  logApiResponse,
};
