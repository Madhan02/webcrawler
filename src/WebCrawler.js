import React, { useEffect } from 'react';

function WebCrawler() {
  useEffect(() => {
    // URL of your custom CORS proxy server
    const proxyUrl = 'http://localhost:8080/';
    // URL of the external resource you want to fetch
    const targetUrl = 'https://www.flipkart.com/';

    // Fetch the webpage content via your custom CORS proxy
    fetch(proxyUrl + targetUrl)
      .then((response) => response.text())
      .then((html) => {
        // Create a DOM parser to parse the HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        console.log("doc", doc);
        // Find all 'h2' elements on the page
        // const h2Elements = doc.querySelectorAll('h2');
        // console.log("h2", h2Elements);
        // // Iterate over each 'h2' element and extract its text content
        // h2Elements.forEach((h2) => {
        //   const value = h2.textContent.trim();
        //   console.log('h2 Value:', value);
        // });
      })
      .catch((error) => {
        console.error('Error fetching webpage:', error);
      });
  }, []);

  return (
    <div>
      <h1>Web Crawling Results</h1>
      {/* You can add a component to display the results in the UI if needed */}
    </div>
  );
}

export default WebCrawler;
