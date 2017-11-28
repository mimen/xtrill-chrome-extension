// Create a parent item and children for each hosting site.
var parent = browser.menus.create({title: "trill - Open on...", contexts: ["selection"]});
browser.menus.create({title: "dbr.ee", contexts: ["selection"], parentId: parent, onclick: openOnDbree});
browser.menus.create({title: "we.tl", contexts: ["selection"], parentId: parent, onclick: openOnWetl});
browser.menus.create({title: "mega.nz", contexts: ["selection"], parentId: parent, onclick: openOnMega});
browser.menus.create({title: "Google Drive", contexts: ["selection"], parentId: parent, onclick: openOnGoogle});
browser.menus.create({title: "Dropbox", contexts: ["selection"], parentId: parent, onclick: openOnDropbox});

function openOnDbree(info, tab) {
  const url = "https://dbr.ee/" + info.selectionText;
  browser.tabs.create({ url });
}

function openOnWetl(info, tab) {
  const url = "https://we.tl/" + info.selectionText;
  browser.tabs.create({ url });
}

function openOnMega(info, tab) {
  const url = "https://mega.nz/" + info.selectionText;
  browser.tabs.create({ url });
}

function openOnGoogle(info, tab) {
  const url = "https://drive.google.com/file/d/" + info.selectionText;
  browser.tabs.create({ url });
}

function openOnDropbox(info, tab) {
  const url = "https://dropbox.com/s/" + info.selectionText;
  browser.tabs.create({ url });
}
