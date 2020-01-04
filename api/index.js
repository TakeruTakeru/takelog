

export class HttpClient {

  static async get(endpoint) {
    // const host = 'https://takefile.herokuapp.com';
    const host = 'http://localhost:8080';
    const res = await fetch(`${host}/${endpoint}`, {
    });
    return res.json();
  }
}

// https://takefile.herokuapp.com/v1/gstorage/files/dGFrZXJ1LXN0b3JhZ2UvYXJ0aWNsZS_pgIDogbfmiYvntprjgY3jgb7jgajjgoEubWQ=