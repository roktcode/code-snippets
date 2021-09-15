const url = `https://www.user.com?name=ahmad&age=20`;

function removeParam(url, paramsToRemove) {
	const queryStartIndex = url.indexOf("?");
	const paramsStringList = url.slice(queryStartIndex + 1).split("&");
	const paramsObjectList = paramsStringList.map((p) => {
		const equalIndex = p.indexOf("=");
		const k = p.slice(0, equalIndex);
		const v = p.slice(equalIndex + 1);

		return { param: k, value: v };
	});

	const filteredParams = paramsObjectList.filter(
		(p) => !paramsToRemove.includes(p.param)
	);
  
	const filteredParamsJoinedString = filteredParams.reduce(
		(acc, currentParam, index) => {
			const paramString = `${currentParam.param}=${currentParam.value}`;
			return `${acc ? `${acc}&` : ``}${paramString}`;
		},
		""
	);

	const urlBeforeQueryString = url.slice(0, queryStartIndex);
	const newUrlWithRemovedParams = `${urlBeforeQueryString}${
		filteredParamsJoinedString.length > 0
			? `?${filteredParamsJoinedString}`
			: ``
	}`;
	return newUrlWithRemovedParams;
}

// pass URL, and list of query params you want to remove
console.log(removeParam(url, []));
