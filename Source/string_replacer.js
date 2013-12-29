walk(document.body);

function walk(node) 
{
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                replaceText(node);
            }
			break;
	}
}

function replaceText(textNode) {
	var v = textNode.nodeValue;

  // witnesses > these dudes i know
  v = v.replace(/\b(W|w)itnesses/g, function(match, p1, p2, offset, string) {
    // w - 3 = t
    t = String.fromCharCode(p1.charCodeAt(0) - 3);
    return t + "hese dudes I know";
  });

  // allegedly > kinda probably
  v = v.replace(/\b(A|a)llegedly/g, function(match, p1, p2, offset, string) {
    // a + 10 = k
    k = String.fromCharCode(p1.charCodeAt(0) + 10);
    return k + "inda probably";
  });

  // new study > tumblr post
  v = v.replace(/\b(N|n)ew (S|s)tudy/g, function(match, p1, p2, offset, string) {
    // n + 6 = t
    // s - 3 = p
    t = String.fromCharCode(p1.charCodeAt(0) + 6);
    p = String.fromCharCode(p2.charCodeAt(0) - 3);
    return t + "umblr " + p + "ost";
  });

  // rebuild > avenge
  v = v.replace(/\b(R|r)ebuild/g, function(match, p1, p2, offset, string) {
    // r - 17 = a
    a = String.fromCharCode(p1.charCodeAt(0) - 17);
    return a + "venge";
  });

  // space > spaaaaace
  v = v.replace(/\b(S|s)pace/g, function(match, p1, p2, offset, string) {
    s = String.fromCharCode(p1.charCodeAt(0));
    return s + "paaaaace";
  });

  // google glass > virtual boy
  v = v.replace(/\b(G|g)oogle (G|g)lass/g, function(match, p1, p2, offset, string) {
    // g + 15 = v
    // g - 5 = b
    v = String.fromCharCode(p1.charCodeAt(0) + 15);
    b = String.fromCharCode(p2.charCodeAt(0) - 5);
    return v + "irtual " + b + "oy";
  });

  // smartphone > pokedex
  v = v.replace(/\b(S|s)martphone/g, function(match, p1, p2, offset, string) {
    // s - 3 = p
    p = String.fromCharCode(p1.charCodeAt(0) - 3);
    return p + "okedex";
  });

  // electric > atomic
  v = v.replace(/\b(E|e)lectric/g, function(match, p1, p2, offset, string) {
    // e - 4 = a
    a = String.fromCharCode(p1.charCodeAt(0) - 4);
    return a + "tomic";
  });

  // senator > elf lord
  v = v.replace(/\b(S|s)enator/g, function(match, p1, p2, offset, string) {
    // s - 14 = e
    e = String.fromCharCode(p1.charCodeAt(0) - 14);
    return e + "lf lord";
  });

  // car > cat
  v = v.replace(/\b(C|c)ar/g, function(match, p1, p2, offset, string) {
    c = String.fromCharCode(p1.charCodeAt(0));
    return c + "at";
  });

  // election > eating contest
  v = v.replace(/\b(E|e)lection/g, function(match, p1, p2, offset, string) {
    e = String.fromCharCode(p1.charCodeAt(0));
    return e + "ating contest";
  });

  // congressional leaders > river spirits
  v = v.replace(/\b(C|c)ongressional (L|l)eaders/g, function(match, p1, p2, offset, string) {
    // c + 15 = r
    // l + 7 = s
    r = String.fromCharCode(p1.charCodeAt(0) + 15);
    s = String.fromCharCode(p2.charCodeAt(0) + 7);
    return r + "iver " + s + "pirits";
  });

  // homeland security > homestar runner
  v = v.replace(/\b(H|h)omeland (S|s)ecurity/g, function(match, p1, p2, offset, string) {
    // h > h
    // s - 1 = r
    h = String.fromCharCode(p1.charCodeAt(0));
    r = String.fromCharCode(p2.charCodeAt(0) - 1);
    return h + "omestar " + r + "unner";
  });

  // could not be reached for comment > is guilty and everyone knows it.
  v = v.replace(/\bcould not be reached for comment/g, function(match, p1, p2, offset, string) {
    return "is guilty and everyone knows it";
  });

	textNode.nodeValue = v;
}


