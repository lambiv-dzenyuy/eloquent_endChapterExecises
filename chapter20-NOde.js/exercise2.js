/*
Add support for the MKCOL method (“make collection”), which should create a directory by calling mkdir from the fs module.
*/

//this method is similar to DELETE just that here we use mkdir not rmdir or unlink
const {mkdir} = require("fs").promises;

methods.MKCOL = async function(request) {
  let path = urlPath(request.url);
  let stats;
  try {
    stats = await stat(path);
  } catch (error) {
    if (error.code != "ENOENT") throw error;
    await mkdir(path);
    return {status: 204};
  }
  if (stats.isDirectory()) return {status: 204};
  else return {status: 400, body: "Bad request"};
};