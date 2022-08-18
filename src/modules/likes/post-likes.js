const addLike = async (id) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YlzFhmUp3C5MMK2s56nm/likes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  const jsonResponse = await response.text();
  return jsonResponse;
};

export default addLike;