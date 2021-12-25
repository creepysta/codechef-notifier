/*
https://developer.chrome.com/docs/extensions/mv2/messaging/
https://developer.chrome.com/docs/extensions/reference/runtime/#method-getBackgroundPage
https://developer.chrome.com/docs/extensions/mv2/background_migration/
https://developer.chrome.com/docs/extensions/mv2/background_pages/
https://developer.chrome.com/docs/extensions/reference/webRequest/
https://developer.chrome.com/docs/extensions/mv2/declare_permissions/
https://developer.chrome.com/docs/extensions/mv2/manifest/
*/


// since we are using chrome.webRequest API to block network calls
// gotta keep persistent = true

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Sample Context Menu",
    "contexts": ["selection"]
  });
});


// This will run when a bookmark is created.
chrome.bookmarks.onCreated.addListener(function() {
  // do something
});

// filter events
// Use APIs that support event filters to restrict listeners to the cases the extension cares about. If an extension is listening for the tabs.onUpdated event, try using the webNavigation.onCompleted event with filters instead, as the tabs API does not support filters.

chrome.webNavigation.onCompleted.addListener(function() {
  alert("This is my favorite website!");
}, {url: [{urlMatches :     "https://www.codechef.com/submit/*"}]});



// persistent store
chrome.storage.local.set({variable: variableInformation});



// for notifier
chrome.webRequest.onBeforeSendHeaders.addListener((details) => {

});


chrome.runtime.onMessage.addListener((message) => {
  /*
   * query DOM to get problem name and code
   * user sendResponse method to send info back to the sender
   * as a JSON object
   */
});


chrome.tabs.query({object}, (tab) => {
  /*
   * replace the object with the query params. check documentation on
chrome.
*/
  chrome.tabs.sendMessage(tabId, message, (res) => {
    /*
     * replace tabId with ID obtained from tab object above.
     * message can be any JSON string. Parse response object and
     * save the response corresponding to the appropriate submission
    code.
    */
  });
});


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


/*
POST: submit
cc submit url : https://www.codechef.com/submit/HS08TEST
submit payload endpoint : https://www.codechef.com/api/ide/submit

Response :
status: "OK"
upid: "53856049"

response headers
access-control-allow-credentials: true
access-control-allow-methods: GET
access-control-allow-origin: https://www.codechef.com
cache-control: no-cache, must-revalidate, post-check=0, pre-check=0
content-encoding: gzip
content-security-policy: frame-ancestors https://apps.facebook.com https://student.examus.net;
content-type: application/json
date: Sun, 14 Nov 2021 17:32:04 GMT
last-modified: Sun, 14 Nov 2021 17:32:04 +0000
server: nginx
strict-transport-security: max-age=300;
vary: Accept-Encoding
x-frame-options: ALLOW-FROM https://apps.facebook.com

Request headers

authority: www.codechef.com
:method: POST
:path: /api/ide/submit
:scheme: https
accept: application/json, text/javascript, *//*; q=0.01
accept-encoding: gzip, deflate, br
accept-language: en-GB,en;q=0.9
content-length: 489
content-type: application/x-www-form-urlencoded; charset=UTF-8
cookie: SESS93b6022d778ee317bf48f7dbffe03173=8892b8fbf7a22d24f7335f6a5a12f1d6
dnt: 1
origin: https://www.codechef.com
referer: https://www.codechef.com/submit/HS08TEST
sec-ch-ua: "Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
sec-fetch-dest: empty
sec-fetch-mode: cors
sec-fetch-site: same-origin
user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36
x-csrf-token: 06cde104b39b22f00baf4c94f4bd4ad8a6dd88589658983fc6c1f7dfb72a87b1
x-requested-with: XMLHttpRequest


Form Data
sourceCode: #include <bits/stdc++.h>
using namespace std;

int main() {
  // your code goes here
  int x;
  double y;
  cout << setprecision(2) << fixed;
  cin >> x >> y;
  double now = y - (double)x - 0.5;
  if(x % 5 == 0 && now >= 0.0)
  cout << now;
  else
  cout << y;
  cout << "\n";
  return 0;
}
language: 44
problemCode: HS08TEST
contestCode: PRACTICE



GET :
https://www.codechef.com/api/ide/submit?solution_id=53856049

Response :

error_link: null
is_funny_mode: false
result_code: "wait"
score: null
show_status_table: "yes"
signal: null
time: "0.00"
upid: "53856049"

error_link: null
is_funny_mode: false
result_code: "accepted"
score: null
show_status_table: "yes"
signal: null
time: "0.00"
upid: "53856049"

error_link: null
is_funny_mode: false
result_code: "wrong"
score: null
show_status_table: "yes"
signal: null
time: "0.00"
upid: "53861946"

error_link: null
is_funny_mode: false
result_code: "time"
score: null
show_status_table: "yes"
signal: null
time: "0.21"
upid: "53861965"

GET : problem def (returns the problem statement)
https://www.codechef.com/api/contests/PRACTICE/problems/HS08TEST

*/
