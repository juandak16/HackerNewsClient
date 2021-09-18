export const formatData = (data) => {
  let dataFormated = [];
  dataFormated = data?.hits?.map((item) => {
    let object = {}
    if (item.author && item.created_at && item.story_title && item.story_url) {
      object = {
        author: item.author,
        created_at: item.created_at,
        story_title: item.story_title,
        story_url: item.story_url,
        story_id: item.story_id
      }
      return object;
    } else {
      return null;
    }
  }).filter(Boolean);

  return dataFormated;
}