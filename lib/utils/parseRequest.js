module.exports = rawRequest => {
  const parseReq = rawRequest.split('\r\n\r\n');
  const [method, path] = parseReq[0].split(' ');
  const body = parseReq[1];

  console.log([method, path]);
  return { method, path, body };
    
};
