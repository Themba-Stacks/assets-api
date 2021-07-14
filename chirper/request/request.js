export const cheepRequest = async () => {
  const response = await my.request({
    url: 'http://localhost:3000/cheeps',
    method: 'GET',
    timeout: 3000
  });
  console.log(response)
  return response.data.cheeps.map((item) => {
    return {
      image: item.profileImageSrc,
      handle: item.handle,
      text: item.message
    }
  });
}


export const newCheepRequest = async (thisData) =>{
  const response = await my.request({
    url: "http://localhost:3000/cheep",
    method: "POST",
    timeout: 3000,
    data: thisData
  })
  
  return response
  
}

export const profileRequest = async () => {
  const response = await my.request({
    url: 'http://localhost:3000/profile',
    method: 'GET',
    timeout: 3000
  });
  
 return response.data
}

