export default function getFullResponseFromAPI(success) {
  return new Promise(function (resolve, reject) {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject("The fake API is not working currently");
    }
  });
}
