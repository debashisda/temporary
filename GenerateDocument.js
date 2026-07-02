(function () {
	const e = React.createElement;

	function GenerateDocument(props) {
		const iluUrl = props.iluUrl;
		const environment = props.environment;
		const authToken = props.authToken;
		const caseID = props.caseID;

		// HTML code to render button
		return e(
			{
				style: {
					padding: "0",
				},
			},
			e(
				"button",
				{
					title: "Generate Document",
					disabled: false, // update code here to add flag if you want button disabled
					onClick() {
						regenerateDocument(); // in this function need to pass data
					},
				},
				"Generate Document",
			),
		);
	}
	window.GenerateDocument = GenerateDocument;
})();
