browser.browserAction.onClicked.addListener((tab) => {
  const title = tab.title;
  const url = tab.url;

  const htmlContent = `
            <html>
            <body>
            <!--StartFragment--><a href="${url}">${title}</a><!--EndFragment-->
            </body>
            </html>
    `;

  navigator.clipboard
    .write([
      new ClipboardItem({
        "text/html": new Blob([htmlContent], { type: "text/html" }),
        "text/plain": new Blob([url], { type: "text/plain" }),
      }),
    ])
    .then(() => {
      console.log("Link copied to clipboard in Teams format!");
    })
    .catch((err) => {
      console.error("Failed to copy link:", err);
    });
});
