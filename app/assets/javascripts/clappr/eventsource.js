/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */
!function(a) {
    "use strict";
    function b() {
        this.data = {}
    }
    function c() {
        this.listeners = new b
    }
    function d(a) {
        k(function() {
            throw a
        }, 0)
    }
    function e(a) {
        this.type = a,
        this.target = void 0
    }
    function f(a, b) {
        e.call(this, a),
        this.data = b.data,
        this.lastEventId = b.lastEventId
    }
    function g(a, b) {
        var c = a;
        return c !== c && (c = b),
        A > c ? A : c > B ? B : c
    }
    function h(a, b, c) {
        try {
            "function" == typeof b && b.call(a, c)
        } catch (e) {
            d(e)
        }
    }
    function i(b, d) {
        function i() {
            P = t,
            void 0 != L && (L.abort(),
            L = void 0),
            0 !== M && (l(M),
            M = 0),
            0 !== N && (l(N),
            N = 0),
            H.readyState = t
        }
        function j(a) {
            var c = "";
            if (P === s || P === r)
                try {
                    c = L.responseText
                } catch (d) {}
            var j = void 0
              , m = !1;
            if (P === r) {
                var n = 0
                  , o = ""
                  , p = void 0;
                if ("contentType"in L)
                    "" !== a && "error" !== a && (n = 200,
                    o = "OK",
                    p = L.contentType);
                else
                    try {
                        n = L.status,
                        o = L.statusText,
                        p = L.getResponseHeader("Content-Type")
                    } catch (d) {
                        n = 0,
                        o = "",
                        p = void 0
                    }
                if (void 0 == p && (p = ""),
                0 === n && "" === o && "load" === a && "" !== c && (n = 200,
                o = "OK",
                "" === p)) {
                    var A = /^data\:([^,]*?)(?:;base64)?,[\S]*$/.exec(b);
                    void 0 != A && (p = A[1])
                }
                if (200 === n && z.test(p)) {
                    if (P = s,
                    J = !0,
                    I = E,
                    H.readyState = s,
                    j = new e("open"),
                    H.dispatchEvent(j),
                    h(H, H.onopen, j),
                    P === t)
                        return
                } else if (0 !== n && (200 !== n || "" !== p)) {
                    var C = "";
                    C = 200 !== n ? "EventSource's response has a status " + n + " " + o.replace(/\s+/g, " ") + " that is not 200. Aborting the connection." : "EventSource's response has a Content-Type specifying an unsupported type: " + p.replace(/\s+/g, " ") + ". Aborting the connection.",
                    k(function() {
                        throw new Error(C)
                    }, 0),
                    m = !0
                }
            }
            if (P === s) {
                c.length > O && (J = !0);
                for (var D = O - 1, K = c.length, N = "\n"; ++D < K; )
                    if (N = c.charAt(D),
                    U === u && "\n" === N)
                        U = v;
                    else if (U === u && (U = v),
                    "\r" === N || "\n" === N) {
                        if ("data" === V ? Q.push(W) : "id" === V ? R = W : "event" === V ? S = W : "retry" === V ? (E = g(Number(W), E),
                        I = E) : "heartbeatTimeout" === V && (F = g(Number(W), F),
                        0 !== M && (l(M),
                        M = k(T, F))),
                        W = "",
                        V = "",
                        U === v) {
                            if (0 !== Q.length && (G = R,
                            "" === S && (S = "message"),
                            j = new f(S,{
                                data: Q.join("\n"),
                                lastEventId: R
                            }),
                            H.dispatchEvent(j),
                            "message" === S && h(H, H.onmessage, j),
                            P === t))
                                return;
                            Q.length = 0,
                            S = ""
                        }
                        U = "\r" === N ? u : v
                    } else
                        U === v && (U = w),
                        U === w ? ":" === N ? U = x : V += N : U === x ? (" " !== N && (W += N),
                        U = y) : U === y && (W += N);
                O = K
            }
            P !== s && P !== r || !("load" === a || "error" === a || m || O > 1048576 || 0 === M && !J) ? 0 === M && (J = !1,
            M = k(T, F)) : (m ? i() : ("" !== a || 0 !== M || J || k(function() {
                throw new Error("No activity within " + F + " milliseconds. Reconnecting.")
            }, 0),
            P = q,
            L.abort(),
            0 !== M && (l(M),
            M = 0),
            I > 16 * E && (I = 16 * E),
            I > B && (I = B),
            M = k(T, I),
            I = 2 * I + 1,
            H.readyState = r),
            j = new e("error"),
            H.dispatchEvent(j),
            h(H, H.onerror, j))
        }
        function m() {
            j("progress")
        }
        function n() {
            j("load")
        }
        function A() {
            j("error")
        }
        function C() {
            j(4 === L.readyState ? 0 === L.status ? "error" : "load" : "progress")
        }
        b = b.toString();
        var D = o && void 0 != d && Boolean(d.withCredentials)
          , E = g(1e3, 0)
          , F = g(45e3, 0)
          , G = ""
          , H = this
          , I = E
          , J = !1
          , K = void 0 != d && void 0 != d.Transport ? d.Transport : p
          , L = new K
          , M = 0
          , N = 0
          , O = 0
          , P = q
          , Q = []
          , R = ""
          , S = ""
          , T = void 0
          , U = v
          , V = ""
          , W = "";
        "readyState"in L && void 0 != a.opera && (N = k(function X() {
            3 === L.readyState && j("progress"),
            N = k(X, 500)
        }, 0)),
        T = function() {
            if (M = 0,
            P !== q)
                return void j("");
            if ((!("ontimeout"in L) || "sendAsBinary"in L || "mozAnon"in L) && void 0 != a.document && void 0 != a.document.readyState && "complete" !== a.document.readyState)
                return void (M = k(T, 4));
            L.onload = n,
            L.onerror = A,
            "onabort"in L && (L.onabort = A),
            "onprogress"in L && (L.onprogress = m),
            "onreadystatechange"in L && (L.onreadystatechange = C),
            J = !1,
            M = k(T, F),
            O = 0,
            P = r,
            Q.length = 0,
            S = "",
            R = G,
            W = "",
            V = "",
            U = v;
            var c = b.slice(0, 5);
            c = "data:" !== c && "blob:" !== c ? b + ((-1 === b.indexOf("?", 0) ? "?" : "&") + "lastEventId=" + encodeURIComponent(G) + "&r=" + (Math.random() + 1).toString().slice(2)) : b,
            L.open("GET", c, !0),
            "withCredentials"in L && (L.withCredentials = D),
            "responseType"in L && (L.responseType = "text"),
            "setRequestHeader"in L && L.setRequestHeader("Accept", "text/event-stream"),
            L.send(void 0)
        }
        ,
        c.call(this),
        this.close = i,
        this.url = b,
        this.readyState = r,
        this.withCredentials = D,
        this.onopen = void 0,
        this.onmessage = void 0,
        this.onerror = void 0,
        T()
    }
    function j() {
        this.CONNECTING = r,
        this.OPEN = s,
        this.CLOSED = t
    }
    var k = a.setTimeout
      , l = a.clearTimeout;
    b.prototype.get = function(a) {
        return this.data[a + "~"]
    }
    ,
    b.prototype.set = function(a, b) {
        this.data[a + "~"] = b
    }
    ,
    b.prototype["delete"] = function(a) {
        delete this.data[a + "~"]
    }
    ,
    c.prototype.dispatchEvent = function(a) {
        a.target = this;
        var b = a.type.toString()
          , c = this.listeners
          , e = c.get(b);
        if (void 0 != e)
            for (var f = e.length, g = -1, h = void 0; ++g < f; ) {
                h = e[g];
                try {
                    h.call(this, a)
                } catch (i) {
                    d(i)
                }
            }
    }
    ,
    c.prototype.addEventListener = function(a, b) {
        a = a.toString();
        var c = this.listeners
          , d = c.get(a);
        void 0 == d && (d = [],
        c.set(a, d));
        for (var e = d.length; --e >= 0; )
            if (d[e] === b)
                return;
        d.push(b)
    }
    ,
    c.prototype.removeEventListener = function(a, b) {
        a = a.toString();
        var c = this.listeners
          , d = c.get(a);
        if (void 0 != d) {
            for (var e = d.length, f = [], g = -1; ++g < e; )
                d[g] !== b && f.push(d[g]);
            0 === f.length ? c["delete"](a) : c.set(a, f)
        }
    }
    ,
    f.prototype = e.prototype;
    var m = a.XMLHttpRequest
      , n = a.XDomainRequest
      , o = void 0 != m && void 0 != (new m).withCredentials
      , p = o || void 0 != m && void 0 == n ? m : n
      , q = -1
      , r = 0
      , s = 1
      , t = 2
      , u = 3
      , v = 4
      , w = 5
      , x = 6
      , y = 7
      , z = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i
      , A = 1e3
      , B = 18e6;
    j.prototype = c.prototype,
    i.prototype = new j,
    j.call(i),
    o && (i.prototype.withCredentials = void 0);
    var C = function() {
        return void 0 != a.EventSource && "withCredentials"in a.EventSource.prototype
    };
    void 0 != p && (void 0 == a.EventSource || o && !C()) && (a.NativeEventSource = a.EventSource,
    a.EventSource = i)
}("undefined" != typeof window ? window : this);
