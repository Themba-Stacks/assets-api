export const cheepRequest = async () => {
  const response = await my.request({
    url: 'http://localhost:3000/cheeps',
    method: 'GET',
    timeout: 3000
  });

  return response.data.cheeps.map((item) => {
    return {
      image: item.profileImageSrc,
      handle: item.handle,
      text: item.message
    }
  });
}