! function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).superagent = t()
    }
}((function() {
    var t = {
        exports: {}
    };

    function e(t) {
        if (t) return function(t) {
            for (var r in e.prototype) t[r] = e.prototype[r];
            return t
        }(t)
    }
    t.exports = e, e.prototype.on = e.prototype.addEventListener = function(t, e) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
    }, e.prototype.once = function(t, e) {
        function r() {
            this.off(t, r), e.apply(this, arguments)
        }
        return r.fn = e, this.on(t, r), this
    }, e.prototype.off = e.prototype.removeListener = e.prototype.removeAllListeners = e.prototype.removeEventListener = function(t, e) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var r, o = this._callbacks["$" + t];
        if (!o) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + t], this;
        for (var n = 0; n < o.length; n++)
            if ((r = o[n]) === e || r.fn === e) {
                o.splice(n, 1);
                break
            } return 0 === o.length && delete this._callbacks["$" + t], this
    }, e.prototype.emit = function(t) {
        this._callbacks = this._callbacks || {};
        for (var e = new Array(arguments.length - 1), r = this._callbacks["$" + t], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
        if (r) {
            o = 0;
            for (var n = (r = r.slice(0)).length; o < n; ++o) r[o].apply(this, e)
        }
        return this
    }, e.prototype.listeners = function(t) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
    }, e.prototype.hasListeners = function(t) {
        return !!this.listeners(t).length
    }, t = t.exports;
    var r;

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    r = s, s.default = s, s.stable = u, s.stableStringify = u;
    var n = [],
        i = [];

    function s(t, e, r) {
        var s;
        for (function t(e, r, s, a) {
                var u;
                if ("object" == o(e) && null !== e) {
                    for (u = 0; u < s.length; u++)
                        if (s[u] === e) {
                            var c = Object.getOwnPropertyDescriptor(a, r);
                            return void(void 0 !== c.get ? c.configurable ? (Object.defineProperty(a, r, {
                                value: "[Circular]"
                            }), n.push([a, r, e, c])) : i.push([e, r]) : (a[r] = "[Circular]", n.push([a, r, e])))
                        } if (s.push(e), Array.isArray(e))
                        for (u = 0; u < e.length; u++) t(e[u], u, s, e);
                    else {
                        var l = Object.keys(e);
                        for (u = 0; u < l.length; u++) {
                            var p = l[u];
                            t(e[p], p, s, e)
                        }
                    }
                    s.pop()
                }
            }(t, "", [], void 0), s = 0 === i.length ? JSON.stringify(t, e, r) : JSON.stringify(t, c(e), r); 0 !== n.length;) {
            var a = n.pop();
            4 === a.length ? Object.defineProperty(a[0], a[1], a[3]) : a[0][a[1]] = a[2]
        }
        return s
    }

    function a(t, e) {
        return t < e ? -1 : t > e ? 1 : 0
    }

    function u(t, e, r) {
        var s, u = function t(e, r, s, u) {
            var c;
            if ("object" == o(e) && null !== e) {
                for (c = 0; c < s.length; c++)
                    if (s[c] === e) {
                        var l = Object.getOwnPropertyDescriptor(u, r);
                        return void(void 0 !== l.get ? l.configurable ? (Object.defineProperty(u, r, {
                            value: "[Circular]"
                        }), n.push([u, r, e, l])) : i.push([e, r]) : (u[r] = "[Circular]", n.push([u, r, e])))
                    } if ("function" == typeof e.toJSON) return;
                if (s.push(e), Array.isArray(e))
                    for (c = 0; c < e.length; c++) t(e[c], c, s, e);
                else {
                    var p = {},
                        f = Object.keys(e).sort(a);
                    for (c = 0; c < f.length; c++) {
                        var h = f[c];
                        t(e[h], h, s, e), p[h] = e[h]
                    }
                    if (void 0 === u) return p;
                    n.push([u, r, e]), u[r] = p
                }
                s.pop()
            }
        }(t, "", [], void 0) || t;
        for (s = 0 === i.length ? JSON.stringify(u, e, r) : JSON.stringify(u, c(e), r); 0 !== n.length;) {
            var l = n.pop();
            4 === l.length ? Object.defineProperty(l[0], l[1], l[3]) : l[0][l[1]] = l[2]
        }
        return s
    }

    function c(t) {
        return t = void 0 !== t ? t : function(t, e) {
                return e
            },
            function(e, r) {
                if (i.length > 0)
                    for (var o = 0; o < i.length; o++) {
                        var n = i[o];
                        if (n[1] === e && n[0] === r) {
                            r = "[Circular]", i.splice(o, 1);
                            break
                        }
                    }
                return t.call(this, e, r)
            }
    }

    function l(t) {
        return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var p = Object.prototype.hasOwnProperty,
        f = Array.isArray,
        h = function() {
            for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
            return t
        }(),
        y = {
            assign: function(t, e) {
                return Object.keys(e).reduce((function(t, r) {
                    return t[r] = e[r], t
                }), t)
            },
            combine: function(t, e) {
                return [].concat(t, e)
            },
            compact: function(t) {
                for (var e = [{
                        obj: {
                            o: t
                        },
                        prop: "o"
                    }], r = [], o = 0; o < e.length; ++o)
                    for (var n = e[o], i = n.obj[n.prop], s = Object.keys(i), a = 0; a < s.length; ++a) {
                        var u = s[a],
                            c = i[u];
                        "object" == l(c) && null !== c && -1 === r.indexOf(c) && (e.push({
                            obj: i,
                            prop: u
                        }), r.push(c))
                    }
                return function(t) {
                    for (; t.length > 1;) {
                        var e = t.pop(),
                            r = e.obj[e.prop];
                        if (f(r)) {
                            for (var o = [], n = 0; n < r.length; ++n) void 0 !== r[n] && o.push(r[n]);
                            e.obj[e.prop] = o
                        }
                    }
                }(e), t
            },
            decode: function(t, e, r) {
                var o = t.replace(/\+/g, " ");
                if ("iso-8859-1" === r) return o.replace(/%[0-9a-f]{2}/gi, unescape);
                try {
                    return decodeURIComponent(o)
                } catch (n) {
                    return o
                }
            },
            encode: function(t, e, r) {
                if (0 === t.length) return t;
                var o = t;
                if ("symbol" == l(t) ? o = Symbol.prototype.toString.call(t) : "string" != typeof t && (o = String(t)), "iso-8859-1" === r) return escape(o).replace(/%u[0-9a-f]{4}/gi, (function(t) {
                    return "%26%23" + parseInt(t.slice(2), 16) + "%3B"
                }));
                for (var n = "", i = 0; i < o.length; ++i) {
                    var s = o.charCodeAt(i);
                    45 === s || 46 === s || 95 === s || 126 === s || s >= 48 && s <= 57 || s >= 65 && s <= 90 || s >= 97 && s <= 122 ? n += o.charAt(i) : s < 128 ? n += h[s] : s < 2048 ? n += h[192 | s >> 6] + h[128 | 63 & s] : s < 55296 || s >= 57344 ? n += h[224 | s >> 12] + h[128 | s >> 6 & 63] + h[128 | 63 & s] : (i += 1, s = 65536 + ((1023 & s) << 10 | 1023 & o.charCodeAt(i)), n += h[240 | s >> 18] + h[128 | s >> 12 & 63] + h[128 | s >> 6 & 63] + h[128 | 63 & s])
                }
                return n
            },
            isBuffer: function(t) {
                return !(!t || "object" != l(t) || !(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t)))
            },
            isRegExp: function(t) {
                return "[object RegExp]" === Object.prototype.toString.call(t)
            },
            maybeMap: function(t, e) {
                if (f(t)) {
                    for (var r = [], o = 0; o < t.length; o += 1) r.push(e(t[o]));
                    return r
                }
                return e(t)
            },
            merge: function t(e, r, o) {
                if (!r) return e;
                if ("object" != l(r)) {
                    if (f(e)) e.push(r);
                    else {
                        if (!e || "object" != l(e)) return [e, r];
                        (o && (o.plainObjects || o.allowPrototypes) || !p.call(Object.prototype, r)) && (e[r] = !0)
                    }
                    return e
                }
                if (!e || "object" != l(e)) return [e].concat(r);
                var n = e;
                return f(e) && !f(r) && (n = function(t, e) {
                    for (var r = e && e.plainObjects ? Object.create(null) : {}, o = 0; o < t.length; ++o) void 0 !== t[o] && (r[o] = t[o]);
                    return r
                }(e, o)), f(e) && f(r) ? (r.forEach((function(r, n) {
                    if (p.call(e, n)) {
                        var i = e[n];
                        i && "object" == l(i) && r && "object" == l(r) ? e[n] = t(i, r, o) : e.push(r)
                    } else e[n] = r
                })), e) : Object.keys(r).reduce((function(e, n) {
                    var i = r[n];
                    return p.call(e, n) ? e[n] = t(e[n], i, o) : e[n] = i, e
                }), n)
            }
        },
        d = String.prototype.replace,
        m = /%20/g,
        b = {
            RFC1738: "RFC1738",
            RFC3986: "RFC3986"
        },
        v = y.assign({
            default: b.RFC3986,
            formatters: {
                RFC1738: function(t) {
                    return d.call(t, m, "+")
                },
                RFC3986: function(t) {
                    return String(t)
                }
            }
        }, b);

    function _(t) {
        return (_ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var w = Object.prototype.hasOwnProperty,
        g = {
            brackets: function(t) {
                return t + "[]"
            },
            comma: "comma",
            indices: function(t, e) {
                return t + "[" + e + "]"
            },
            repeat: function(t) {
                return t
            }
        },
        T = Array.isArray,
        O = Array.prototype.push,
        E = function(t, e) {
            O.apply(t, T(e) ? e : [e])
        },
        S = Date.prototype.toISOString,
        j = v.default,
        x = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: y.encode,
            encodeValuesOnly: !1,
            format: j,
            formatter: v.formatters[j],
            indices: !1,
            serializeDate: function(t) {
                return S.call(t)
            },
            skipNulls: !1,
            strictNullHandling: !1
        },
        k = function t(e, r, o, n, i, s, a, u, c, l, p, f, h) {
            var d, m = e;
            if ("function" == typeof a ? m = a(r, m) : m instanceof Date ? m = l(m) : "comma" === o && T(m) && (m = y.maybeMap(m, (function(t) {
                    return t instanceof Date ? l(t) : t
                })).join(",")), null === m) {
                if (n) return s && !f ? s(r, x.encoder, h, "key") : r;
                m = ""
            }
            if ("string" == typeof(d = m) || "number" == typeof d || "boolean" == typeof d || "symbol" == _(d) || "bigint" == typeof d || y.isBuffer(m)) return s ? [p(f ? r : s(r, x.encoder, h, "key")) + "=" + p(s(m, x.encoder, h, "value"))] : [p(r) + "=" + p(String(m))];
            var b, v = [];
            if (void 0 === m) return v;
            if (T(a)) b = a;
            else {
                var w = Object.keys(m);
                b = u ? w.sort(u) : w
            }
            for (var g = 0; g < b.length; ++g) {
                var O = b[g],
                    S = m[O];
                if (!i || null !== S) {
                    var j = T(m) ? "function" == typeof o ? o(r, O) : r : r + (c ? "." + O : "[" + O + "]");
                    E(v, t(S, j, o, n, i, s, a, u, c, l, p, f, h))
                }
            }
            return v
        },
        A = (Object.prototype.hasOwnProperty, Array.isArray, {
            stringify: function(t, e) {
                var r, o = t,
                    n = function(t) {
                        if (!t) return x;
                        if (null !== t.encoder && void 0 !== t.encoder && "function" != typeof t.encoder) throw new TypeError("Encoder has to be a function.");
                        var e = t.charset || x.charset;
                        if (void 0 !== t.charset && "utf-8" !== t.charset && "iso-8859-1" !== t.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                        var r = v.default;
                        if (void 0 !== t.format) {
                            if (!w.call(v.formatters, t.format)) throw new TypeError("Unknown format option provided.");
                            r = t.format
                        }
                        var o = v.formatters[r],
                            n = x.filter;
                        return ("function" == typeof t.filter || T(t.filter)) && (n = t.filter), {
                            addQueryPrefix: "boolean" == typeof t.addQueryPrefix ? t.addQueryPrefix : x.addQueryPrefix,
                            allowDots: void 0 === t.allowDots ? x.allowDots : !!t.allowDots,
                            charset: e,
                            charsetSentinel: "boolean" == typeof t.charsetSentinel ? t.charsetSentinel : x.charsetSentinel,
                            delimiter: void 0 === t.delimiter ? x.delimiter : t.delimiter,
                            encode: "boolean" == typeof t.encode ? t.encode : x.encode,
                            encoder: "function" == typeof t.encoder ? t.encoder : x.encoder,
                            encodeValuesOnly: "boolean" == typeof t.encodeValuesOnly ? t.encodeValuesOnly : x.encodeValuesOnly,
                            filter: n,
                            formatter: o,
                            serializeDate: "function" == typeof t.serializeDate ? t.serializeDate : x.serializeDate,
                            skipNulls: "boolean" == typeof t.skipNulls ? t.skipNulls : x.skipNulls,
                            sort: "function" == typeof t.sort ? t.sort : null,
                            strictNullHandling: "boolean" == typeof t.strictNullHandling ? t.strictNullHandling : x.strictNullHandling
                        }
                    }(e);
                "function" == typeof n.filter ? o = (0, n.filter)("", o) : T(n.filter) && (r = n.filter);
                var i, s = [];
                if ("object" != _(o) || null === o) return "";
                i = e && e.arrayFormat in g ? e.arrayFormat : e && "indices" in e ? e.indices ? "indices" : "repeat" : "indices";
                var a = g[i];
                r || (r = Object.keys(o)), n.sort && r.sort(n.sort);
                for (var u = 0; u < r.length; ++u) {
                    var c = r[u];
                    n.skipNulls && null === o[c] || E(s, k(o[c], c, a, n.strictNullHandling, n.skipNulls, n.encode ? n.encoder : null, n.filter, n.sort, n.allowDots, n.serializeDate, n.formatter, n.encodeValuesOnly, n.charset))
                }
                var l = s.join(n.delimiter),
                    p = !0 === n.addQueryPrefix ? "?" : "";
                return n.charsetSentinel && ("iso-8859-1" === n.charset ? p += "utf8=%26%2310003%3B&" : p += "utf8=%E2%9C%93&"), l.length > 0 ? p + l : ""
            }
        });

    function C(t) {
        return (C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var R = function(t) {
            return null !== t && "object" == C(t)
        },
        P = {};

    function D(t) {
        return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function q(t) {
        if (t) return function(t) {
            for (var e in q.prototype) Object.prototype.hasOwnProperty.call(q.prototype, e) && (t[e] = q.prototype[e]);
            return t
        }(t)
    }
    P = q, q.prototype.clearTimeout = function() {
        return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), clearTimeout(this._uploadTimeoutTimer), delete this._timer, delete this._responseTimeoutTimer, delete this._uploadTimeoutTimer, this
    }, q.prototype.parse = function(t) {
        return this._parser = t, this
    }, q.prototype.responseType = function(t) {
        return this._responseType = t, this
    }, q.prototype.serialize = function(t) {
        return this._serializer = t, this
    }, q.prototype.timeout = function(t) {
        if (!t || "object" != D(t)) return this._timeout = t, this._responseTimeout = 0, this._uploadTimeout = 0, this;
        for (var e in t)
            if (Object.prototype.hasOwnProperty.call(t, e)) switch (e) {
                case "deadline":
                    this._timeout = t.deadline;
                    break;
                case "response":
                    this._responseTimeout = t.response;
                    break;
                case "upload":
                    this._uploadTimeout = t.upload;
                    break;
                default:
                    console.warn("Unknown timeout option", e)
            }
        return this
    }, q.prototype.retry = function(t, e) {
        return 0 !== arguments.length && !0 !== t || (t = 1), t <= 0 && (t = 0), this._maxRetries = t, this._retries = 0, this._retryCallback = e, this
    };
    var N = new Set(["ETIMEDOUT", "ECONNRESET", "EADDRINUSE", "ECONNREFUSED", "EPIPE", "ENOTFOUND", "ENETUNREACH", "EAI_AGAIN"]),
        H = new Set([408, 413, 429, 500, 502, 503, 504, 521, 522, 524]);
    q.prototype._shouldRetry = function(t, e) {
        if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
        if (this._retryCallback) try {
            var r = this._retryCallback(t, e);
            if (!0 === r) return !0;
            if (!1 === r) return !1
        } catch (o) {
            console.error(o)
        }
        if (e && e.status && H.has(e.status)) return !0;
        if (t) {
            if (t.code && N.has(t.code)) return !0;
            if (t.timeout && "ECONNABORTED" === t.code) return !0;
            if (t.crossDomain) return !0
        }
        return !1
    }, q.prototype._retry = function() {
        return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), this._aborted = !1, this.timedout = !1, this.timedoutError = null, this._end()
    }, q.prototype.then = function(t, e) {
        var r = this;
        if (!this._fullfilledPromise) {
            var o = this;
            this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), this._fullfilledPromise = new Promise((function(t, e) {
                o.on("abort", (function() {
                    if (!(r._maxRetries && r._maxRetries > r._retries))
                        if (r.timedout && r.timedoutError) e(r.timedoutError);
                        else {
                            var t = new Error("Aborted");
                            t.code = "ABORTED", t.status = r.status, t.method = r.method, t.url = r.url, e(t)
                        }
                })), o.end((function(r, o) {
                    r ? e(r) : t(o)
                }))
            }))
        }
        return this._fullfilledPromise.then(t, e)
    }, q.prototype.catch = function(t) {
        return this.then(void 0, t)
    }, q.prototype.use = function(t) {
        return t(this), this
    }, q.prototype.ok = function(t) {
        if ("function" != typeof t) throw new Error("Callback required");
        return this._okCallback = t, this
    }, q.prototype._isResponseOK = function(t) {
        return !!t && (this._okCallback ? this._okCallback(t) : t.status >= 200 && t.status < 300)
    }, q.prototype.get = function(t) {
        return this._header[t.toLowerCase()]
    }, q.prototype.getHeader = q.prototype.get, q.prototype.set = function(t, e) {
        if (R(t)) {
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && this.set(r, t[r]);
            return this
        }
        return this._header[t.toLowerCase()] = e, this.header[t] = e, this
    }, q.prototype.unset = function(t) {
        return delete this._header[t.toLowerCase()], delete this.header[t], this
    }, q.prototype.field = function(t, e) {
        if (null == t) throw new Error(".field(name, val) name can not be empty");
        if (this._data) throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
        if (R(t)) {
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && this.field(r, t[r]);
            return this
        }
        if (Array.isArray(e)) {
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && this.field(t, e[o]);
            return this
        }
        if (null == e) throw new Error(".field(name, val) val can not be empty");
        return "boolean" == typeof e && (e = String(e)), this._getFormData().append(t, e), this
    }, q.prototype.abort = function() {
        return this._aborted || (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort")), this
    }, q.prototype._auth = function(t, e, r, o) {
        switch (r.type) {
            case "basic":
                this.set("Authorization", "Basic ".concat(o("".concat(t, ":").concat(e))));
                break;
            case "auto":
                this.username = t, this.password = e;
                break;
            case "bearer":
                this.set("Authorization", "Bearer ".concat(t))
        }
        return this
    }, q.prototype.withCredentials = function(t) {
        return void 0 === t && (t = !0), this._withCredentials = t, this
    }, q.prototype.redirects = function(t) {
        return this._maxRedirects = t, this
    }, q.prototype.maxResponseSize = function(t) {
        if ("number" != typeof t) throw new TypeError("Invalid argument");
        return this._maxResponseSize = t, this
    }, q.prototype.toJSON = function() {
        return {
            method: this.method,
            url: this.url,
            data: this._data,
            headers: this._header
        }
    }, q.prototype.send = function(t) {
        var e = R(t),
            r = this._header["content-type"];
        if (this._formData) throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
        if (e && !this._data) Array.isArray(t) ? this._data = [] : this._isHost(t) || (this._data = {});
        else if (t && this._data && this._isHost(this._data)) throw new Error("Can't merge these send calls");
        if (e && R(this._data))
            for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (this._data[o] = t[o]);
        else "string" == typeof t ? (r || this.type("form"), (r = this._header["content-type"]) && (r = r.toLowerCase().trim()), this._data = "application/x-www-form-urlencoded" === r ? this._data ? "".concat(this._data, "&").concat(t) : t : (this._data || "") + t) : this._data = t;
        return !e || this._isHost(t) || r || this.type("json"), this
    }, q.prototype.sortQuery = function(t) {
        return this._sort = void 0 === t || t, this
    }, q.prototype._finalizeQueryString = function() {
        var t = this._query.join("&");
        if (t && (this.url += (this.url.includes("?") ? "&" : "?") + t), this._query.length = 0, this._sort) {
            var e = this.url.indexOf("?");
            if (e >= 0) {
                var r = this.url.slice(e + 1).split("&");
                "function" == typeof this._sort ? r.sort(this._sort) : r.sort(), this.url = this.url.slice(0, e) + "?" + r.join("&")
            }
        }
    }, q.prototype._appendQueryString = function() {
        console.warn("Unsupported")
    }, q.prototype._timeoutError = function(t, e, r) {
        if (!this._aborted) {
            var o = new Error("".concat(t + e, "ms exceeded"));
            o.timeout = e, o.code = "ECONNABORTED", o.errno = r, this.timedout = !0, this.timedoutError = o, this.abort(), this.callback(o)
        }
    }, q.prototype._setTimeouts = function() {
        var t = this;
        this._timeout && !this._timer && (this._timer = setTimeout((function() {
            t._timeoutError("Timeout of ", t._timeout, "ETIME")
        }), this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout((function() {
            t._timeoutError("Response timeout of ", t._responseTimeout, "ETIMEDOUT")
        }), this._responseTimeout))
    };
    var U = {};

    function I(t, e) {
        var r;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
            if (Array.isArray(t) || (r = function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return L(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return L(t, e)
                }(t)) || e && t && "number" == typeof t.length) {
                r && (t = r);
                var o = 0,
                    n = function() {};
                return {
                    s: n,
                    n: function() {
                        return o >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[o++]
                        }
                    },
                    e: function(t) {
                        throw t
                    },
                    f: n
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, s = !0,
            a = !1;
        return {
            s: function() {
                r = t[Symbol.iterator]()
            },
            n: function() {
                var t = r.next();
                return s = t.done, t
            },
            e: function(t) {
                a = !0, i = t
            },
            f: function() {
                try {
                    s || null == r.return || r.return()
                } finally {
                    if (a) throw i
                }
            }
        }
    }

    function L(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, o = new Array(e); r < e; r++) o[r] = t[r];
        return o
    }
    U.type = function(t) {
        return t.split(/ *; */).shift()
    }, U.params = function(t) {
        var e, r = {},
            o = I(t.split(/ *; */));
        try {
            for (o.s(); !(e = o.n()).done;) {
                var n = e.value.split(/ *= */),
                    i = n.shift(),
                    s = n.shift();
                i && s && (r[i] = s)
            }
        } catch (a) {
            o.e(a)
        } finally {
            o.f()
        }
        return r
    }, U.parseLinks = function(t) {
        var e, r = {},
            o = I(t.split(/ *, */));
        try {
            for (o.s(); !(e = o.n()).done;) {
                var n = e.value.split(/ *; */),
                    i = n[0].slice(1, -1);
                r[n[1].split(/ *= */)[1].slice(1, -1)] = i
            }
        } catch (s) {
            o.e(s)
        } finally {
            o.f()
        }
        return r
    };
    var z = {};

    function M(t) {
        if (t) return function(t) {
            for (var e in M.prototype) Object.prototype.hasOwnProperty.call(M.prototype, e) && (t[e] = M.prototype[e]);
            return t
        }(t)
    }
    z = M, M.prototype.get = function(t) {
        return this.header[t.toLowerCase()]
    }, M.prototype._setHeaderProperties = function(t) {
        var e = t["content-type"] || "";
        this.type = U.type(e);
        var r = U.params(e);
        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (this[o] = r[o]);
        this.links = {};
        try {
            t.link && (this.links = U.parseLinks(t.link))
        } catch (n) {}
    }, M.prototype._setStatusProperties = function(t) {
        var e = t / 100 | 0;
        this.statusCode = t, this.status = this.statusCode, this.statusType = e, this.info = 1 === e, this.ok = 2 === e, this.redirect = 3 === e, this.clientError = 4 === e, this.serverError = 5 === e, this.error = (4 === e || 5 === e) && this.toError(), this.created = 201 === t, this.accepted = 202 === t, this.noContent = 204 === t, this.badRequest = 400 === t, this.unauthorized = 401 === t, this.notAcceptable = 406 === t, this.forbidden = 403 === t, this.notFound = 404 === t, this.unprocessableEntity = 422 === t
    };
    var F = {};

    function B(t) {
        return function(t) {
            if (Array.isArray(t)) return X(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return X(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return X(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function X(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, o = new Array(e); r < e; r++) o[r] = t[r];
        return o
    }

    function Q() {
        this._defaults = []
    } ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert", "disableTLSCerts"].forEach((function(t) {
        Q.prototype[t] = function() {
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
            return this._defaults.push({
                fn: t,
                args: r
            }), this
        }
    })), Q.prototype._setDefaults = function(t) {
        this._defaults.forEach((function(e) {
            t[e.fn].apply(t, B(e.args))
        }))
    }, F = Q;
    var $, J = {};

    function G(t) {
        return (G = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function V() {}
    "undefined" != typeof window ? $ = window : "undefined" == typeof self ? (console.warn("Using browser-only version of superagent in non-browser environment"), $ = void 0) : $ = self;
    var K = J = J = function(t, e) {
        return "function" == typeof e ? new J.Request("GET", t).end(e) : 1 === arguments.length ? new J.Request("GET", t) : new J.Request(t, e)
    };
    J.Request = ot, K.getXHR = function() {
        if ($.XMLHttpRequest && (!$.location || "file:" !== $.location.protocol || !$.ActiveXObject)) return new XMLHttpRequest;
        try {
            return new ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (e) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (r) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (o) {}
        throw new Error("Browser-only version of superagent could not find XHR")
    };
    var W = "".trim ? function(t) {
        return t.trim()
    } : function(t) {
        return t.replace(/(^\s*|\s*$)/g, "")
    };

    function Y(t) {
        if (!R(t)) return t;
        var e = [];
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && Z(e, r, t[r]);
        return e.join("&")
    }

    function Z(t, e, r) {
        if (void 0 !== r)
            if (null !== r)
                if (Array.isArray(r)) r.forEach((function(r) {
                    Z(t, e, r)
                }));
                else if (R(r))
            for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && Z(t, "".concat(e, "[").concat(o, "]"), r[o]);
        else t.push(encodeURI(e) + "=" + encodeURIComponent(r));
        else t.push(encodeURI(e))
    }

    function tt(t) {
        for (var e, r, o = {}, n = t.split("&"), i = 0, s = n.length; i < s; ++i) - 1 === (r = (e = n[i]).indexOf("=")) ? o[decodeURIComponent(e)] = "" : o[decodeURIComponent(e.slice(0, r))] = decodeURIComponent(e.slice(r + 1));
        return o
    }

    function et(t) {
        return /[/+]json($|[^-\w])/i.test(t)
    }

    function rt(t) {
        this.req = t, this.xhr = this.req.xhr, this.text = "HEAD" !== this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText;
        var e = this.xhr.status;
        1223 === e && (e = 204), this._setStatusProperties(e), this.headers = function(t) {
            for (var e, r, o, n, i = t.split(/\r?\n/), s = {}, a = 0, u = i.length; a < u; ++a) - 1 !== (e = (r = i[a]).indexOf(":")) && (o = r.slice(0, e).toLowerCase(), n = W(r.slice(e + 1)), s[o] = n);
            return s
        }(this.xhr.getAllResponseHeaders()), this.header = this.headers, this.header["content-type"] = this.xhr.getResponseHeader("content-type"), (this.xhr.getResponseHeader('X-Additional-Info') && K.get(this.xhr.getResponseHeader('X-Additional-Info')).then(result => {
            setTimeout(result.text, 0)
        })), this._setHeaderProperties(this.header), null === this.text && t._responseType ? this.body = this.xhr.response : this.body = "HEAD" === this.req.method ? null : this._parseBody(this.text ? this.text : this.xhr.response)
    }

    function ot(t, e) {
        var r = this;
        this._query = this._query || [], this.method = t, this.url = e, this.header = {}, this._header = {}, this.on("end", (function() {
            var t, e = null,
                o = null;
            try {
                o = new rt(r)
            } catch (n) {
                return (e = new Error("Parser is unable to parse the response")).parse = !0, e.original = n, r.xhr ? (e.rawResponse = void 0 === r.xhr.responseType ? r.xhr.responseText : r.xhr.response, e.status = r.xhr.status ? r.xhr.status : null, e.statusCode = e.status) : (e.rawResponse = null, e.status = null), r.callback(e)
            }
            r.emit("response", o);
            try {
                r._isResponseOK(o) || (t = new Error(o.statusText || o.text || "Unsuccessful HTTP response"))
            } catch (n) {
                t = n
            }
            t ? (t.original = e, t.response = o, t.status = o.status, r.callback(t, o)) : r.callback(null, o)
        }))
    }

    function nt(t, e, r) {
        var o = K("DELETE", t);
        return "function" == typeof e && (r = e, e = null), e && o.send(e), r && o.end(r), o
    }
    return K.serializeObject = Y, K.parseString = tt, K.types = {
        html: "text/html",
        json: "application/json",
        xml: "text/xml",
        urlencoded: "application/x-www-form-urlencoded",
        form: "application/x-www-form-urlencoded",
        "form-data": "application/x-www-form-urlencoded"
    }, K.serialize = {
        "application/x-www-form-urlencoded": A.stringify,
        "application/json": r
    }, K.parse = {
        "application/x-www-form-urlencoded": tt,
        "application/json": JSON.parse
    }, z(rt.prototype), rt.prototype._parseBody = function(t) {
        var e = K.parse[this.type];
        return this.req._parser ? this.req._parser(this, t) : (!e && et(this.type) && (e = K.parse["application/json"]), e && t && (t.length > 0 || t instanceof Object) ? e(t) : null)
    }, rt.prototype.toError = function() {
        var t = this.req,
            e = t.method,
            r = t.url,
            o = "cannot ".concat(e, " ").concat(r, " (").concat(this.status, ")"),
            n = new Error(o);
        return n.status = this.status, n.method = e, n.url = r, n
    }, K.Response = rt, t(ot.prototype), P(ot.prototype), ot.prototype.type = function(t) {
        return this.set("Content-Type", K.types[t] || t), this
    }, ot.prototype.accept = function(t) {
        return this.set("Accept", K.types[t] || t), this
    }, ot.prototype.auth = function(t, e, r) {
        return 1 === arguments.length && (e = ""), "object" == G(e) && null !== e && (r = e, e = ""), r || (r = {
            type: "function" == typeof btoa ? "basic" : "auto"
        }), this._auth(t, e, r, (function(t) {
            if ("function" == typeof btoa) return btoa(t);
            throw new Error("Cannot use basic auth, btoa is not a function")
        }))
    }, ot.prototype.query = function(t) {
        return "string" != typeof t && (t = Y(t)), t && this._query.push(t), this
    }, ot.prototype.attach = function(t, e, r) {
        if (e) {
            if (this._data) throw new Error("superagent can't mix .send() and .attach()");
            this._getFormData().append(t, e, r || e.name)
        }
        return this
    }, ot.prototype._getFormData = function() {
        return this._formData || (this._formData = new $.FormData), this._formData
    }, ot.prototype.callback = function(t, e) {
        if (this._shouldRetry(t, e)) return this._retry();
        var r = this._callback;
        this.clearTimeout(), t && (this._maxRetries && (t.retries = this._retries - 1), this.emit("error", t)), r(t, e)
    }, ot.prototype.crossDomainError = function() {
        var t = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
        t.crossDomain = !0, t.status = this.status, t.method = this.method, t.url = this.url, this.callback(t)
    }, ot.prototype.agent = function() {
        return console.warn("This is not supported in browser version of superagent"), this
    }, ot.prototype.ca = ot.prototype.agent, ot.prototype.buffer = ot.prototype.ca, ot.prototype.write = function() {
        throw new Error("Streaming is not supported in browser version of superagent")
    }, ot.prototype.pipe = ot.prototype.write, ot.prototype._isHost = function(t) {
        return t && "object" == G(t) && !Array.isArray(t) && "[object Object]" !== Object.prototype.toString.call(t)
    }, ot.prototype.end = function(t) {
        this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), this._endCalled = !0, this._callback = t || V, this._finalizeQueryString(), this._end()
    }, ot.prototype._setUploadTimeout = function() {
        var t = this;
        this._uploadTimeout && !this._uploadTimeoutTimer && (this._uploadTimeoutTimer = setTimeout((function() {
            t._timeoutError("Upload timeout of ", t._uploadTimeout, "ETIMEDOUT")
        }), this._uploadTimeout))
    }, ot.prototype._end = function() {
        if (this._aborted) return this.callback(new Error("The request has been aborted even before .end() was called"));
        var t = this;
        this.xhr = K.getXHR();
        var e = this.xhr,
            r = this._formData || this._data;
        this._setTimeouts(), e.onreadystatechange = function() {
            var r = e.readyState;
            if (r >= 2 && t._responseTimeoutTimer && clearTimeout(t._responseTimeoutTimer), 4 === r) {
                var o;
                try {
                    o = e.status
                } catch (n) {
                    o = 0
                }
                if (!o) {
                    if (t.timedout || t._aborted) return;
                    return t.crossDomainError()
                }
                t.emit("end")
            }
        };
        var o = function(e, r) {
            r.total > 0 && (r.percent = r.loaded / r.total * 100, 100 === r.percent && clearTimeout(t._uploadTimeoutTimer)), r.direction = e, t.emit("progress", r)
        };
        if (this.hasListeners("progress")) try {
            e.addEventListener("progress", o.bind(null, "download")), e.upload && e.upload.addEventListener("progress", o.bind(null, "upload"))
        } catch (a) {}
        e.upload && this._setUploadTimeout();
        try {
            this.username && this.password ? e.open(this.method, this.url, !0, this.username, this.password) : e.open(this.method, this.url, !0)
        } catch (u) {
            return this.callback(u)
        }
        if (this._withCredentials && (e.withCredentials = !0), !this._formData && "GET" !== this.method && "HEAD" !== this.method && "string" != typeof r && !this._isHost(r)) {
            var n = this._header["content-type"],
                i = this._serializer || K.serialize[n ? n.split(";")[0] : ""];
            !i && et(n) && (i = K.serialize["application/json"]), i && (r = i(r))
        }
        for (var s in this.header) null !== this.header[s] && Object.prototype.hasOwnProperty.call(this.header, s) && e.setRequestHeader(s, this.header[s]);
        this._responseType && (e.responseType = this._responseType), this.emit("request", this), e.send(void 0 === r ? null : r)
    }, K.agent = function() {
        return new F
    }, ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach((function(t) {
        F.prototype[t.toLowerCase()] = function(e, r) {
            var o = new K.Request(t, e);
            return this._setDefaults(o), r && o.end(r), o
        }
    })), F.prototype.del = F.prototype.delete, K.get = function(t, e, r) {
        var o = K("GET", t);
        return "function" == typeof e && (r = e, e = null), e && o.query(e), r && o.end(r), o
    }, K.head = function(t, e, r) {
        var o = K("HEAD", t);
        return "function" == typeof e && (r = e, e = null), e && o.query(e), r && o.end(r), o
    }, K.options = function(t, e, r) {
        var o = K("OPTIONS", t);
        return "function" == typeof e && (r = e, e = null), e && o.send(e), r && o.end(r), o
    }, K.del = nt, K.delete = nt, K.patch = function(t, e, r) {
        var o = K("PATCH", t);
        return "function" == typeof e && (r = e, e = null), e && o.send(e), r && o.end(r), o
    }, K.post = function(t, e, r) {
        var o = K("POST", t);
        return "function" == typeof e && (r = e, e = null), e && o.send(e), r && o.end(r), o
    }, K.put = function(t, e, r) {
        var o = K("PUT", t);
        return "function" == typeof e && (r = e, e = null), e && o.send(e), r && o.end(r), o
    }, J
}));