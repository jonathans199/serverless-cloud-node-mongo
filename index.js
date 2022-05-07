	
import { api } from "@serverless/cloud";
import { menu } from "./mongo";
 
api.get("/menu", async (req, res) => {
  await menu.insertOne({ name: "Sam Smith" });
 
  const result = await menu.find().toArray();
 
  res.send({
    result,
  });
});
 
api.get("/*", (req, res) => {
  res.redirect("/menu");
});