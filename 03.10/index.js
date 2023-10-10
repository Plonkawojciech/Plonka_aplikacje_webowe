import http from "http";
import { readFile, writeFile } from "fs/promises";

const port = 3000;
const hostname = "127.0.0.1";

const object = [{ imie: "filip" }, { imie: "wojtek" }];

const server = http.createServer(async (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.statusCode = 200;
    const html = await readFile("./index.html");
    res.setHeader("content-type", "text/html");
    res.write(html);
    res.end();
  } else if (url === "/kontakt" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", async () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      const text = parseBody.split("=")[1];
      await writeFile(`./contact/message${Date.now().toString()}.txt`, text);
      res.statusCode = 302;
      res.setHeader("Location", "/dziekujemy");
      res.end();
    });
  } else if (url === "/dziekujemy") {
    res.statusCode = 200;
    res.write("<h1>dziekujemy</h2>");
    return res.end();
  } else if (url === "/api") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(object));
  } else if ((res.statusCode = 404)) {
    res.write("błąd 404, nie znaleziono strony");
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`server running on port ${port} on adress ${hostname}`);
});
