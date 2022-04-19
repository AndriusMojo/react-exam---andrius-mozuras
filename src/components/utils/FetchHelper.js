const BASE_URL = 'https://autumn-delicate-wilderness.glitch.me/v1';


export const getFetch = async (resource) => {
    try {
      const token = localStorage.getItem('token');
      const resp = await fetch(`${BASE_URL}/${resource}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const dataFromApi = await resp.json();
      return dataFromApi;
    } catch (error) {
      console.log('getData error', error);
      return false;
    }
};

  export async function deleteFetch(resource, id) {
    try {
      const resp = await fetch(`${BASE_URL}/${resource}/${id}`, {
        method: 'DELETE',
      });
      const dataInJS = await resp.json();
      return dataInJS;
    } catch (error) {
      console.log('deleteFetch error', error);
      return false;
    }
  }
  
  
  // export async function sendRegisterFetch(resource, dataToPost) {
  //   try {
  //     const resp = await fetch(`${BASE_URL}/${resource}`, {
  //       method: 'POST',
  //       header: {'Content-Type': 'application/json'},
  //       body: JSON.stringify(dataToPost),
  //     });
  //     if (resp.status === 200) {
  //       const data = await resp.json();
  //       // console.log(data);
  //       return data;
  //       }
  //       if (resp.status === 400) {
  //       console.log(`err: 'Incorrect email or password'`);
  //       return false;
  //       }
  //       } catch (error) {
  //       console.log("error", error);
  //       }
  // }

  // export async function sendLoginFetch(resource, dataToPost) {
  //   try {
  //     const resp = await fetch(`${BASE_URL}/${resource}`, {
  //       method: 'POST',
  //       header: {'Content-Type': 'application/json'},
  //       body: JSON.stringify(dataToPost),
  //     });
  //     if (resp.status === 200) {
  //       const data = await resp.json();
  //       // console.log(data);
  //       localStorage.setItem('token24', data.data);
  //       return data;
  //       }
  //       if (resp.status === 400) {
  //       console.log(`err: 'Incorrect email or password'`);
  //       return false;
  //       }
  //       } catch (error) {
  //       console.log("error", error);
  //       }
  // }