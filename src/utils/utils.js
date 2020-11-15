/*
  Checks if the input is in JSON format
  @params: json: string 
  returns: boolean
*/

export const isJSON = json => {
  try {
    JSON.parse(json);
  } catch {
    return false;
  }
  return true;
};
