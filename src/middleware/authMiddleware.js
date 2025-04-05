const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-nbcu7rg7f1xqd021.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://agribroker-api',
  issuer: 'https://dev-nbcu7rg7f1xqd021.us.auth0.com/',
  algorithms: ['RS256']
});

module.exports = checkJwt;
