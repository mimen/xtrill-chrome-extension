
// Create a parent item and two children.
var parent = chrome.contextMenus.create({"title": "trill - Open on...", "contexts": ["selection"]});
var child1 = chrome.contextMenus.create({"title": "dbr.ee", "contexts": ["selection"], "parentId": parent, "onclick": openOnDbree});
var child2 = chrome.contextMenus.create({"title": "we.tl", "contexts": ["selection"], "parentId": parent, "onclick": openOnWetl});
var child3 = chrome.contextMenus.create({"title": "mega.nz", "contexts": ["selection"], "parentId": parent, "onclick": openOnMega});
var child4 = chrome.contextMenus.create({"title": "Google Drive", "contexts": ["selection"], "parentId": parent, "onclick": openOnGoogle});
var child5 = chrome.contextMenus.create({"title": "Dropbox", "contexts": ["selection"], "parentId": parent, "onclick": openOnDropbox});

function openOnDbree(info, tab) {
  const url = "https://dbr.ee/" + info.selectionText;
  chrome.tabs.create({ url });
}

function openOnWetl(info, tab) {
  const url = "https://we.tl/" + info.selectionText;
  chrome.tabs.create({ url });
}

function openOnMega(info, tab) {
  const url = "https://mega.nz/" + info.selectionText;
  chrome.tabs.create({ url });
}

function openOnGoogle(info, tab) {
  const url = "https://drive.google.com/file/d/" + info.selectionText;
  chrome.tabs.create({ url });
}

function openOnDropbox(info, tab) {
  const url = "https://dropbox.com/s/" + info.selectionText;
  chrome.tabs.create({ url });
}
