import fetch from 'node-fetch';

export const fetchDatas = (link: string): Promise<any> => new Promise((resolve, reject) => {
  fetch(link)
    .then((result) => {
      return result.text()
    }).then(content => resolve(content))
    .catch((err) => reject(err))
});
