export function uploadPhoto() {
  return new Promise((resolve, reject) => {
    resolve({ status: 200, body: 'photo-profile-1',});
    reject(Error());
  });
}

export function createUser() {
  return new Promise((resolve, reject) => {
    resolve({ firstName: 'Guillaume', lastName: 'Salva',});
    reject(Error());
  });
}
