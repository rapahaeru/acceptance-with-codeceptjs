
function hash() {
	date = new Date();
	return date.getSeconds()+date.getMinutes()+date.getHours();
}

Feature('Teste de busca home do site do Elo7');

Scenario('Busca simples na home do Elo 7', (I) => {

	I.amOnPage('/');
	within('.container', function() {
		I.fillField('q','bebe reborn');
		I.click('button');
	});

	I.amOnPage('/lista/bebe-reborn');

	var ScreenshotName = 'busca-filtrada' + hash() + '.png';
	I.saveScreenshot(ScreenshotName);

});

Scenario('Busca pelo valor minimo de 1000,00', (I)=> {

	I.amOnPage('/lista/bebe-reborn');

	within('.search-results-title', function() {
		I.see('Bebe Reborn');
	});

	within('.filters', function() {
		I.fillField('min-price','1000');
		I.click('.btn');
	});

	I.amOnPage('/lista/bebe-reborn');

	// within('.applied-filters', function() {
	// 	I.see('A partir de R$ 1.000,00');
	// });

	var ScreenshotFinalName = 'busca-filtrada-final' + hash() + '.png';
	I.saveScreenshot(ScreenshotFinalName);

});
