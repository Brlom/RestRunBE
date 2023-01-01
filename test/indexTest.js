const { expect } = require('chai');
const axios = require('axios');

describe('Request', () => {
  describe('#/', () => {
    it('Should be able to get main page content', async () => {
      const res = await axios.get('http://localhost:3000/');
      expect(res.data).equal('Hello World!');
    });
  });
});