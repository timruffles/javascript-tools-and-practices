
slides:
	cat slides/head.html slides/*-*.html slides/foot.html > slides/index.html

ebi:
	cat slides/head.html slides/[0-9][0-9]-*.html slides/ebi-*.html slides/foot.html > slides/ebi.html
