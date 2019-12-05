import fetch from 'isomorphic-unfetch';

export class HttpClient {
  

  static async get(endpoint) {
    const host = 'http://localhost:8080';
    const res = await fetch(`${host}/${endpoint}`);
    return res.json();
  }
}
