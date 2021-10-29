module.exports = rawRequest => {
  const parseReq = rawRequest.split('\r\n\r\n');
  const [method, path] = parseReq[0].split(' ');
  const body = parseReq[1];

  return { method, path, body };
    
};
