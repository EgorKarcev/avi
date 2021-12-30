export default new (class FetchAvi {
  async getResource(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  }

  getApi() {
    return this.getResource('https://front-test.beta.aviasales.ru/search');
  }

  getTicket(id) {
    return this.getResource(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`);
  }
})();
