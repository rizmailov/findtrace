browser.contextMenus.create({
    id: "find-trace",
    title: "Find the trace",
    contexts: ["selection"]
});

function fromSelectedText(currentTab, trace) {
        openInNewTab(trace, currentTab);
}

function readFromClipboard(currentTab) {
    navigator.clipboard.readText().then(text => openInNewTab(text, currentTab));
}

function openInNewTab(trace, currentTab) {
    browser.tabs.create({
        url: "https://tsum.yandex-team.ru/trace/" + trace,
        index: currentTab.index + 1
    })
}

browser.browserAction.onClicked.addListener(readFromClipboard);

browser.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "find-trace":
            fromSelectedText(tab, info.selectionText)
    }
})