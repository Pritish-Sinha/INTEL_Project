function isApiKeyValid(e){return/[a-zA-Z0-9]{20}.[a-zA-Z0-9]{20}/.test(e)}document.getElementById("submitApiKey").addEventListener("click",(function(){let e=document.getElementById("apiKey").value;var t=document.getElementsByClassName("errorMessage");isApiKeyValid(e)?(t.style.display="none",chrome.storage.sync.set({apiKey:e},(function(){console.log("Set ApiKey")}))):t.style.display="block"}));
//# sourceMappingURL=options.b517429d.js.map
