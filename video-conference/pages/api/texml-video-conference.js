export default (req, res) => {
  let xmlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Dial>
        <Conference>ideo Room</Conference>
    </Dial>
</Response>`;

  res.send(xmlResponse);
};
