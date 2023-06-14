function main_function(){
    var obj = document.evaluate('//button[@class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-dgl2Hf ksBjEc lKxP2d LQeN7"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if(obj){
		console.log("First");
		obj.click();
        observer.disconnect();
	} else {
		// Content element not found yet, continue observing DOM changes
        observer.observe(document, { childList: true, subtree: true });
	}
	
	var obj = document.evaluate('//div[@class="VfPpkd-T0kwCb"]/button[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if(obj){
		console.log("Second");
        obj.click();
        observer.disconnect();
	} else {
		// Content element not found yet, continue observing DOM changes
        observer.observe(document, { childList: true, subtree: true });
	}
	
	var obj = document.evaluate('//button[@class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-dgl2Hf ksBjEc lKxP2d LQeN7 QhU7ub"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if(obj){
		console.log("Third");
        obj.click();
        observer.disconnect();
	} else {
		// Content element not found yet, continue observing DOM changes
        observer.observe(document, { childList: true, subtree: true });
	}
    
}


// Create a MutationObserver to watch for changes in the DOM
var observer = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutation) {
		// Check if the desired content element has been added or modified
		if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
			// Check if the added nodes contain the desired content element
			var hasContentElement = Array.from(mutation.addedNodes).some(
				function (node) {
					var result = document.evaluate(
						'//button[@class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-dgl2Hf ksBjEc lKxP2d LQeN7 QhU7ub"]',
						node,
						null,
						XPathResult.FIRST_ORDERED_NODE_TYPE,
						null
					);
					var element1 = result.singleNodeValue;
					return element1 !== null;
				}
			);

			if (hasContentElement) {
				// Stop observing DOM changes and capture the content
				observer.disconnect();
				main_function();
			}
		}
	});
});

var observer2 = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutation) {
		// Check if the desired content element has been added or modified
		if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
			// Check if the added nodes contain the desired content element
			var hasContentElement = Array.from(mutation.addedNodes).some(
				function (node) {
					var result = document.evaluate(
						'//div[@class="VfPpkd-T0kwCb"]/button[2]',
						node,
						null,
						XPathResult.FIRST_ORDERED_NODE_TYPE,
						null
					);
					var element = result.singleNodeValue;
					return element !== null;
				}
			);

			if (hasContentElement) {
				// Stop observing DOM changes and capture the content
				observer.disconnect();
				main_function();
			}
		}
	});
});

var observer3 = new MutationObserver(function (mutations) {
	mutations.forEach(function (mutation) {
		// Check if the desired content element has been added or modified
		if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
			// Check if the added nodes contain the desired content element
			var hasContentElement = Array.from(mutation.addedNodes).some(
				function (node) {
					var result = document.evaluate(
						'//button[@class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-dgl2Hf ksBjEc lKxP2d LQeN7"]',
						node,
						null,
						XPathResult.FIRST_ORDERED_NODE_TYPE,
						null
					);
					var element = result.singleNodeValue;
					return element !== null;
				}
			);

			if (hasContentElement) {
				// Stop observing DOM changes and capture the content
				observer.disconnect();
				main_function();
			}
		}
	});
});

// Start observing the DOM changes
observer.observe(document, { childList: true, subtree: true });
observer2.observe(document, { childList: true, subtree: true });
observer3.observe(document, { childList: true, subtree: true });

main_function();