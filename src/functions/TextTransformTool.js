var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function (t) {
    if(!process.browser) return null;
    "use strict";
    var e = t.GreenSockGlobals || t,
        i = function (t) {
            var i, n = t.split("."),
                r = e;
            for (i = 0; i < n.length; i++) r[n[i]] = r = r[n[i]] || {};
            return r
        },
        o = "TextTransformTool",
        s = String.fromCharCode(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
        a = String.fromCharCode(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47),
        l = function (t) {
            var e = t.nodeType,
                i = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) i += l(t)
            } else if (3 === e || 4 === e) return t.nodeValue;
            return i
        },
        c = document,
        d = c.defaultView ? c.defaultView.getComputedStyle : function () {},
        f = /([A-Z])/g,
        u = function (t, e, i, n) {
            var r;
            return (i = i || d(t, null)) ? (t = i.getPropertyValue(e.replace(f, "-$1").toLowerCase()), r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, r = i[e]), n ? r : parseInt(r, 10) || 0
        },
        g = function (t) {
            return t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]) ? !0 : !1
        },
        p = function (t) {
            var e, i, n, r = [],
                o = t.length;
            for (e = 0; o > e; e++)
                if (i = t[e], g(i))
                    for (n = i.length, n = 0; n < i.length; n++) r.push(i[n]);
                else r.push(i);
            return r
        },
        _ = /(?:\r|\n|\t\t)/g,
        m = /(?:\s\s+)/g,
        C = 55296,
        v = 56319,
        S = 56320,
        y = 127462,
        b = 127487,
        w = 127995,
        x = 127999,
        M = function (t) {
            return (t.charCodeAt(0) - C << 10) + (t.charCodeAt(1) - S) + 65536
        },
        A = c.all && !c.addEventListener,
        P = " style='white-space: nowrap;position:relative;display:inline-block;" + (A ? "*display:inline;*zoom:1;'" : "'"),
        k = function (t, e) {
            t = t || "";
            var i = -1 !== t.indexOf("++"),
                n = 1;
            return i && (t = t.split("++").join("")),
                function () {
                    return "<" + e + P + (t ? " class='" + t + (i ? n++ : "") + "'>" : ">")
                }
        },
        T = e.TextTransformTool = function (e, i) {
            if ("string" == typeof e && (e = T.selector(e)), !e) throw "cannot split a null element.";
            return (this.elements = g(e) ? p(e) : [e], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = i || {}, void this.split(i))
        },
        D = function (t, e, i) {
            var n = t.nodeType;
            if (1 === n || 9 === n || 11 === n)
                for (t = t.firstChild; t; t = t.nextSibling) D(t, e, i);
            else(3 === n || 4 === n) && (t.nodeValue = t.nodeValue.split(e).join(i))
        },
        N = function (t, e) {
            for (var i = e.length; --i > -1;) t.push(e[i])
        },
        E = function (t) {
            var e, i = [],
                n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i
        },
        R = function (t, e, i) {
            for (var n; t && t !== e;) {
                if (n = t._next || t.nextSibling) return n.textContent.charAt(0) === i;
                t = t.parentNode || t._parent
            }
            return !1
        },
        L = function (t) {
            var e, i, n = E(t.childNodes),
                r = n.length;
            for (e = 0; r > e; e++) i = n[e], i._isSplit ? L(i) : (e && 3 === i.previousSibling.nodeType ? i.previousSibling.nodeValue += 3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue : 3 !== i.nodeType && t.insertBefore(i.firstChild, i), t.removeChild(i))
        },
        O = function (t, e, i, n, r, o, s) {
            var a, h, l, f, g, p, _, m, C, v, S, y, b = d(t),
                w = u(t, "paddingLeft", b),
                x = -999,
                M = u(t, "borderBottomWidth", b) + u(t, "borderTopWidth", b),
                A = u(t, "borderLeftWidth", b) + u(t, "borderRightWidth", b),
                P = u(t, "paddingTop", b) + u(t, "paddingBottom", b),
                k = u(t, "paddingLeft", b) + u(t, "paddingRight", b),
                T = .2 * u(t, "fontSize"),
                E = u(t, "textAlign", b, !0),
                O = [],
                H = [],
                q = [],
                V = e.wordDelimiter || " ",
                z = e.span ? "span" : "div",
                G = e.type || e.split || "chars,words,lines",
                I = r && -1 !== G.indexOf("lines") ? [] : null,
                X = -1 !== G.indexOf("words"),
                B = -1 !== G.indexOf("chars"),
                j = "absolute" === e.position || e.absolute === !0,
                F = e.linesClass,
                Y = -1 !== (F || "").indexOf("++"),
                Q = [];
            for (I && 1 === t.children.length && t.children[0]._isSplit && (t = t.children[0]), Y && (F = F.split("++").join("")), h = t.getElementsByTagName("*"), l = h.length, g = [], a = 0; l > a; a++) g[a] = h[a];
            if (I || j)
                for (a = 0; l > a; a++) f = g[a], p = f.parentNode === t, (p || j || B && !X) && (y = f.offsetTop, I && p && Math.abs(y - x) > T && "BR" !== f.nodeName && (_ = [], I.push(_), x = y), j && (f._x = f.offsetLeft, f._y = y, f._w = f.offsetWidth, f._h = f.offsetHeight), I && ((f._isSplit && p || !B && p || X && p || !X && f.parentNode.parentNode === t && !f.parentNode._isSplit) && (_.push(f), f._x -= w, R(f, t, V) && (f._wordEnd = !0)), "BR" === f.nodeName && f.nextSibling && "BR" === f.nextSibling.nodeName && I.push([])));
            for (a = 0; l > a; a++) f = g[a], p = f.parentNode === t, "BR" !== f.nodeName ? (j && (C = f.style, X || p || (f._x += f.parentNode._x, f._y += f.parentNode._y), C.left = f._x + "px", C.top = f._y + "px", C.position = "absolute", C.display = "block", C.width = f._w + 1 + "px", C.height = f._h + "px"), !X && B ? f._isSplit ? (f._next = f.nextSibling, f.parentNode.appendChild(f)) : f.parentNode._isSplit ? (f._parent = f.parentNode, !f.previousSibling && f.firstChild && (f.firstChild._isFirst = !0), f.nextSibling && " " === f.nextSibling.textContent && !f.nextSibling.nextSibling && Q.push(f.nextSibling), f._next = f.nextSibling && f.nextSibling._isFirst ? null : f.nextSibling, f.parentNode.removeChild(f), g.splice(a--, 1), l--) : p || (y = !f.nextSibling && R(f.parentNode, t, V), f.parentNode._parent && f.parentNode._parent.appendChild(f), y && f.parentNode.appendChild(c.createTextNode(" ")), e.span && (f.style.display = "inline"), O.push(f)) : f.parentNode._isSplit && !f._isSplit && "" !== f.innerHTML ? H.push(f) : B && !f._isSplit && (e.span && (f.style.display = "inline"), O.push(f))) : I || j ? (f.parentNode && f.parentNode.removeChild(f), g.splice(a--, 1), l--) : X || t.appendChild(f);
            for (a = Q.length; --a > -1;) Q[a].parentNode.removeChild(Q[a]);
            if (I) {
                for (j && (v = c.createElement(z), t.appendChild(v), S = v.offsetWidth + "px", y = v.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(v)), C = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                for (m = " " === V && (!j || !X && !B), a = 0; a < I.length; a++) {
                    for (_ = I[a], v = c.createElement(z), v.style.cssText = "white-space: nowrap;display:block;text-align:" + E + ";position:" + (j ? "absolute;" : "relative;"), F && (v.className = F + (Y ? a + 1 : "")), q.push(v), l = _.length, h = 0; l > h; h++) "BR" !== _[h].nodeName && (f = _[h], v.appendChild(f), m && f._wordEnd && v.appendChild(c.createTextNode(" ")), j && (0 === h && (v.style.top = f._y + "px", v.style.left = w + y + "px"), f.style.top = "0px", y && (f.style.left = f._x - y + "px")));
                    0 === l ? v.innerHTML = "&nbsp;" : X || B || (L(v), D(v, String.fromCharCode(160), " ")), j && (v.style.width = S, v.style.height = f._h + "px"), t.appendChild(v)
                }
                t.style.cssText = C
            }
            j && (s > t.clientHeight && (t.style.height = s - P + "px", t.clientHeight < s && (t.style.height = s + M + "px")), o > t.clientWidth && (t.style.width = o - k + "px", t.clientWidth < o && (t.style.width = o + A + "px"))), N(i, O), N(n, H), N(r, q)
        },
        H = function (t, e, i, n) {
            var r, o, s, a, h, d, f, u, g, p = e.span ? "span" : "div",
                S = e.type || e.split || "chars,words,lines",
                A = (-1 !== S.indexOf("words"), -1 !== S.indexOf("chars")),
                P = "absolute" === e.position || e.absolute === !0,
                k = e.wordDelimiter || " ",
                T = " " !== k ? "" : P ? "&#173; " : " ",
                N = e.span ? "</span>" : "</div>",
                E = !0,
                R = c.createElement("div"),
                L = t.parentNode;
            for (L.insertBefore(R, t), R.textContent = t.nodeValue, L.removeChild(t), t = R, r = l(t), f = -1 !== r.indexOf("<"), e.reduceWhiteSpace !== !1 && (r = r.replace(m, " ").replace(_, "")), f && (r = r.split("<").join("{{LT}}")), h = r.length, o = (" " === r.charAt(0) ? T : "") + i(), s = 0; h > s; s++)
                if (d = r.charAt(s), d === k && r.charAt(s - 1) !== k && s) {
                    for (o += E ? N : "", E = !1; r.charAt(s + 1) === k;) o += T, s++;
                    s === h - 1 ? o += T : ")" !== r.charAt(s + 1) && (o += T + i(), E = !0)
                } else "{" === d && "{{LT}}" === r.substr(s, 6) ? (o += A ? n() + "{{LT}}</" + p + ">" : "{{LT}}", s += 5) : d.charCodeAt(0) >= C && d.charCodeAt(0) <= v || r.charCodeAt(s + 1) >= 65024 && r.charCodeAt(s + 1) <= 65039 ? (u = M(r.substr(s, 2)), g = M(r.substr(s + 2, 2)), a = (y > u || u > b || y > g || g > b) && (w > g || g > x) ? 2 : 4, o += A && " " !== d ? n() + r.substr(s, a) + "</" + p + ">" : r.substr(s, a), s += a - 1) : o += A && " " !== d ? n() + d + "</" + p + ">" : d;
            t.outerHTML = o + (E ? N : ""), f && D(L, "{{LT}}", "<")
        },
        q = function (t, e, i, n) {
            var r, o, s = E(t.childNodes),
                a = s.length,
                h = "absolute" === e.position || e.absolute === !0;
            if (3 !== t.nodeType || a > 1) {
                for (e.absolute = !1, r = 0; a > r; r++) o = s[r], (3 !== o.nodeType || /\S+/.test(o.nodeValue)) && (h && 3 !== o.nodeType && "inline" === u(o, "display", null, !0) && (o.style.display = "inline-block", o.style.position = "relative"), o._isSplit = !0, q(o, e, i, n));
                return e.absolute = h, void(t._isSplit = !0)
            }
            H(t, e, i, n)
        },
        V = T.prototype;
    V.split = function (t) {
        this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var e, i, n, r = this.elements.length, o = t.span ? "span" : "div", s = ("absolute" === t.position || t.absolute === !0, k(t.wordsClass, o)), a = k(t.charsClass, o); --r > -1;) n = this.elements[r], this._originals[r] = n.innerHTML, e = n.clientHeight, i = n.clientWidth, q(n, t, s, a), O(n, t, this.chars, this.words, this.lines, i, e);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, V.revert = function () {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, T.selector = t.$ || t.jQuery || function (e) {
        var i = t.$ || t.jQuery;
        return i ? (T.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
    }, T.version = "0.5.6"
}(_gsScope),
function (t) {
    "use strict";
    var e = function () {
        return (_gsScope.GreenSockGlobals || _gsScope)[t]
    };
    "function" == typeof define && define.amd ? define([], e) : "undefined" != typeof module && module.exports && (module.exports = e())
}("TextTransformTool");