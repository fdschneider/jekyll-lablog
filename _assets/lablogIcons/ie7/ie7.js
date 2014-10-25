/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'lablogIcons\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-tags': '&#xe600;',
		'icon-rss': '&#xe607;',
		'icon-box': '&#xf096;',
		'icon-box_checked': '&#xf046;',
		'icon-checked': '&#xe602;',
		'icon-code': '&#xe603;',
		'icon-exit': '&#xf00d;',
		'icon-home': '&#xe605;',
		'icon-left': '&#x2039;',
		'icon-less': '&#xf068;',
		'icon-menu': '&#xf0c9;',
		'icon-more': '&#xf067;',
		'icon-project': '&#xe60a;',
		'icon-right': '&#x203a;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
