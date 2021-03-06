
// saving the problem code when the user visits submit page
chrome.webNavigation.onCompleted.addListener(function(details) {
  let url = new URL(details.url);
  let path = url.pathname;
  let pathSplits = path.split("/");
  let problemId = pathSplits.at(-1);

  chrome.storage.local.set({"problemId" : problemId}, () => {
    console.log("from webnavigation oncompleted listener | set problemId : " + problemId.toString());
  });
}, {url: [{urlMatches : "https://www.codechef.com/submit/*"}]});


// saving the submit id in local storage
chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    let url = new URL(details.url);
    let submitId = url.searchParams.get("solution_id");
    chrome.storage.local.set({"submitId" : submitId}, () => {
      console.log("from webRequest beforeSendHeaders listener | set submitId : " + submitId.toString());
    });
    for (let i = 0; i < details.requestHeaders.length; i++) {
      let obj = details.requestHeaders[i];
      if(obj.name === "x-csrf-token") {
        let csrf_token = obj.value.toString();
        chrome.storage.local.set({"csrf_token" : csrf_token}, () => {
          console.log("from webRequest beforeSendHeaders listener | set csrf_token : " + csrf_token.toString());
        });
      }
    }
    return {cancel: false};
  },
  {urls: ["https://www.codechef.com/api/ide/submit?solution_id=*"]},
  ["blocking", "requestHeaders"]
);

//let queryOptions = { active: true, currentWindow: true };
//let [tab] = await chrome.tabs.query(queryOptions);
//return tab;

//chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  //console.log(response.farewell);
//});

chrome.runtime.onMessage.addListener((message) => {
  /*
   * query DOM to get problem name and code
   * user sendResponse method to send info back to the sender
   * as a JSON object
   */
});


//chrome.tabs.query({object}, (tab) => {
  /*
   * replace the object with the query params. check documentation on
chrome.
*/
  //chrome.tabs.sendMessage(tabId, message, (res) => {
    /*
     * replace tabId with ID obtained from tab object above.
     * message can be any JSON string. Parse response object and
     * save the response corresponding to the appropriate submission
    code.
    */
  //});
//});


// ping at intervals the cc server for the status of the problem
function checkResult() {
  $.ajax({
    url: /*requested url*/"",
    dataType: "json",
    headers: /*required headers as json object */ "",
    success: /*
              * function to handle success of XHR request
              * check if the response shows verdict available
              * if verdict available then notify user else
              * user setTimeout function to do recursive call
              * to this function after some seconds.
              */ "" ,
    error: /* function to handle errors*/ ""
  });
}


