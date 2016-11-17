/* global newsCSS */

(function () {
	var BREAKPOINT = '641px';
	var toggles, mql;

	function updatePlatform(mql) {
		var isStandard, i, len, toggle;

		// Are we changing to the standard platform?
		// (default: `true` for browsers that don't support `window.matchMedia`)
		isStandard = (mql == null) ? true : mql.matches;

		// Set correct News stylesheet
		newsCSS.href = newsCSS.href.replace(
			/(\.news).*(\.css)/,
			'$1' + (isStandard ? '' : '.mobile') + '$2'
		);

		// Set correct CSS classes on all Core Media elements
		for (i = 0, len = toggles.length; i < len; i++) {
			toggle = toggles[i];

			$('[cm-' + toggle[0] + ']')
			.removeClass(toggle[+!!isStandard + 1])
			.addClass(toggle[+!isStandard + 1]);
		}
	}

	// Each toggle contains:
	//   [0] cm-* attribute
	//   [1] standard classes
	//   [2] mobile classes
	toggles = [
		['platform',  'platform-standard',            'platform-mobile'       ],
		['content',   'page_margins',                 'content',              ],
		['article',   'article section',              'story richtext'        ],
		['fragment',  'inline-content html-fragment', 'embed-fragment'        ],
		['wysiwyg',   'inline-content wysiwyg',       'embed-wysiwyg richtext'],
		['inner',     'inner',                        'contents'              ],
		['full',      'full',                         ''                      ],
		['left',      'left',                         ''                      ],
		['right',     'right',                        ''                      ]
	];
	// e.g. An embedded WYSIWYG Teaser (right-floated on standard):
	//   Markup:   <div cm-wysiwyg cm-right></div>
	//   Standard: <div class="inline-content wysiwyg right"></div>
	//   Mobile:   <div class="embed-wysiwyg richtext"></div>

	// Bind an update to whenever the BREAKPOINT is passed.
	if ('matchMedia' in window) {
		mql = window.matchMedia('(min-width: ' + BREAKPOINT + ')');
		mql.addListener(updatePlatform);
	}

	// Update once immediately to add initial classes
	updatePlatform(mql);
})();
