(function(z) {
  'use strict';
  var qVa = function(a, b) {
      this.user = a;
      this.quotes = b
    },
    rVa = function(a, b) {
      b = b.g();
      if (b === Number || b.$isProtoEnum) return a = Number(a), Number.isNaN(
        a) ? void 0 : a;
      if (b === Boolean) return !!a;
      if (b === String) return String(a)
    },
    m$ = function(a) {
      return a.uy.best || null
    },
    n$ = function(a, b) {
      b = b.filter(function(a) {
        return "anon" != a.gb()
      });
      b = z.hb(b, function(a) {
        return a.gb()
      }, a);
      return z.lb(b).map(function(a) {
        return new qVa(a[0].oc(), a)
      }, a)
    },
    sVa = function(a, b, c, d) {
      return (0, z.fd)(a.Qr[b.name] || [], function(a) {
        return a.gd() ==
          c && a.ce() == d
      })
    },
    o$ = function() {
      this.JC = 1
    },
    p$ = function(a) {
      z.uj.call(this);
      this.s(a)
    },
    tVa = function(a, b) {
      return z.K(a, "slots", b)
    },
    uVa = function(a, b) {
      return z.K(a, "requestContext", b)
    },
    q$ = function(a) {
      z.L.call(this);
      this.s(a)
    },
    r$ = function(a) {
      return z.I(a, "inResponseToMediaResource")
    },
    s$ = function(a) {
      return z.I(a, "mediumQuote")
    },
    vVa = function(a, b) {
      a.UK = b;
      return a
    },
    t$ = function(a, b) {
      return m$(a) ? z.uI(m$(a)).filter(function(a) {
        return this.IZ(a) == b
      }, a) : []
    },
    wVa = function(a) {
      z.ZF(a.Ga, z.lw("", a.Tp()))
    },
    xVa = function(a,
      b, c) {
      c = c.Rv;
      b = b.getAttribute("name").split(" ");
      var d = z.wb(b);
      a = (a.Qr[c.name] || []).filter(function(a) {
        return d[a.ci()]
      });
      return a.length ? z.Ola(a) : null
    },
    yVa = function(a, b, c, d) {
      b = sVa(a, b, c, d);
      return n$(a, b)
    },
    zVa = function(a, b) {
      var c = 0;
      (a.Qr[b] || []).forEach(function(a) {
        "anon" == a.gb() && (c += a.re())
      });
      return c
    },
    AVa = function(a) {
      var b = z.LR(a.jj.pr, a.jj.Dm(), a.Vk.pr, a.Vk.Dm()).Ca().trim();
      0 < a.jj.Dm() && (b = "…" + b);
      var c = z.jK(a.sc, a.Vk.pr);
      a.Vk.Dm() < c.Ca().length && (b += "…");
      return b
    },
    BVa = function(a) {
      var b = z.tH(a.Tpa),
        c = a.jj.pr,
        d = c ? b.indexOf(c) : -1,
        e = (c = a.Vk.pr) ? b.indexOf(c) : -1;
      if (-1 == d || -1 == e) return "";
      for (c = []; d <= e; d++) c.push(z.jK(a.sc, b[d]));
      b = z.Qa(c);
      a = z.jz(c.indexOf(c[0]), a.jj.Dm(), c.indexOf(b), a.Vk.Dm(), !1);
      return z.Ly(new z.Fy(z.Kr, z.Wqa), c, a, !0)
    },
    CVa = function(a) {
      if (a.jj.pr == a.Vk.pr) return {
        oO: a.jj.pr.getAttribute("name"),
        FE: "share",
        startIndex: a.jj.Dm(),
        endIndex: a.Vk.Dm()
      }
    },
    DVa = function(a, b, c) {
      var d = a.ha.ia(z.Dsa, {
        postId: b
      }, {
        filter: c
      });
      return z.VJ(a, d, function() {
        return this.qb.io(d)
      })
    },
    EVa = function(a, b) {
      z.Sx(a,
        7);
      var c = new z.Jx("", 1, a.Ca());
      b.forEach(function(a) {
        z.Qx(c, z.yx(a.startOffset, a.endOffset, [a.quoteId], [a.userId]))
      }, a);
      b = z.Wx(c);
      for (var d = z.Xx(c, b), e = 0; e < b.length; e++) {
        var g = d[e];
        if (g.length) {
          for (var h = {}, l = [], p = 0; p < g.length; p++) {
            var r = g[p];
            h[z.I(r, "creatorIds")] = !0;
            l.push(r.getName())
          }
          g = b[e];
          p = e < b.length - 1 ? b[e + 1] : a.Ca().length;
          z.Qx(a, z.yx(g, p, l, Object.keys(h)))
        }
      }
    },
    FVa = function(a, b, c) {
      b = "";
      a.pxa ? a = z.n("Top highlight") : (c = "" + z.A(z.AT(z.C({
          P_: !0,
          dea: !c.useragent.isMobile
        }, a), c)), 1 == a.Mh && a.isActive &&
        (a = z.n("highlighted"), c += " " + a), a = (0, z.y)(c));
      b += a;
      return (0, z.y)(b)
    },
    u$ = function(a, b) {
      this.sh = a;
      this.Uja = b;
      this.ne = (this.Qj = b = z.oH(a.node, b)) && b.getAttribute("name");
      this.zK = b ? z.TC(a, b) : -1
    },
    GVa = function(a, b, c) {
      return (0, z.y)(z.fT(z.C({
        user: c.currentUser,
        type: "quoteResponses"
      }, a), c))
    },
    HVa = function(a, b, c) {
      b = '\x3cdiv\x3e\x3cdiv class\x3d"buttonSet u-inlineBlock"\x3e' + z.A(z
          .Vm({
            action: "quote",
            source: "quote_popover",
            icon: (0, z.O)("" + z.A(z.em())),
            l: (0, z.O)(
              "button--highlightMenu u-sm-height42 u-sm-lineHeight44 u-accentColor--highlightStrong js-quoteAttributions-pileOn"
            ),
            ec: !0,
            Qi: !0,
            o$: "quote",
            ua: !0,
            isActive: a.isActive
          }, c)) + (c.supportsEdit ? z.A(z.Vm({
          action: "quote-respond",
          source: "quote_popover",
          icon: (0, z.O)("" + z.A(z.qm())),
          l: "button--highlightMenu u-sm-height42 u-sm-lineHeight44",
          ec: !0,
          ua: !0
        }, c)) : "") + (a.gQ ? z.A(z.Vm({
          action: "twitter",
          source: "quote_popover",
          icon: (0, z.O)("" + z.A(z.um())),
          l: "button--highlightMenu u-sm-height42 u-sm-lineHeight44",
          ec: !0,
          ua: !0
        }, c)) : "") +
        '\x3cdiv class\x3d"buttonSet-separator"\x3e\x3c/div\x3e\x3c/div\x3e';
      b += '\x3cdiv class\x3d"' + z.E(z.D(
          "js-quoteAttributions-info u-inlineBlock u-verticalAlignTop u-noWrapWithEllipsis u-maxWidth414 u-paddingTop14 u-paddingRight18 u-paddingBottom0 u-paddingLeft10 u-xs-paddingTop13 u-xs-paddingLeft4 u-xs-maxWidth160"
        )) +
        '"\x3e' + FVa(a, 0, c) + "\x3c/div\x3e\x3c/div\x3e";
      return (0, z.y)(b)
    },
    v$ = function(a) {
      z.Or.call(this);
      var b = z.dt();
      this.jj = b && new u$(z.Kt(b, !0), a);
      this.Vk = b && new u$(z.Kt(b, !1), a)
    },
    w$ = function(a) {
      z.L.call(this);
      this.s(a)
    },
    IVa = function(a, b, c) {
      var d = new z.kk(z.Jr(c));
      z.mw(a, b);
      b = new z.Gd(d.ia(z.yra));
      d = new z.Gd("https://www.facebook.com/v2.3/dialog/share");
      z.Nd(d, z.$d({
        app_id: c.facebook.key,
        href: a.toString(),
        display: "popup",
        redirect_uri: b.toString()
      }));
      return d
    },
    JVa = function() {
      var a = z.n("Highlights");
      return (0, z.y)("" +
        a)
    },
    KVa = function(a) {
      return (0, z.y)(z.A(z.mo(String(a.content))) + " — " + z.A(z.wL(a)) +
        " " + z.A(a.url))
    },
    LVa = function(a, b, c) {
      return (0, z.gk)("https://" + z.Rh(c.textshotHost) + "/image")
    },
    MVa = function(a, b, c) {
      return (0, z.gk)("https://twitter.com/" + z.Rh(c.currentUser.twitterScreenName) +
        "/status/" + z.Rh(a.id))
    },
    NVa = function() {
      var a = z.y,
        b;
      b = z.n("Failed to load image");
      b = (0, z.y)("" + b);
      return a(
        '\x3cspan class\x3d"tweetEditor-imageStatusIcon"\x3e\x26times;\x3c/span\x3e' +
        z.A(b))
    },
    OVa = function(a, b, c) {
      b = z.y;
      a =
        '\x3cdiv class\x3d"tweetEditor u-sizeFullWidth"\x3e\x3cdiv class\x3d"js-tweetEditor-error tweetEditor-error u-paddingBottom10 u-textAlignCenter u-textColorRed"\x3e\x3c/div\x3e\x3cdiv class\x3d"tweetEditor-avatar"\x3e' +
        z.A(z.cp({
          user: a.user,
          Ve: !0
        }, c)) +
        '\x3c/div\x3e\x3cdiv class\x3d"tweetEditor-tweetContainer"\x3e\x3cdiv class\x3d"tweetEditor-textContainer"\x3e\x3cdiv class\x3d"js-tweetEditor-text textInput textInput--chromeless u-textAlignLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"tweetEditor-textshot"\x3e\x3cdiv class\x3d"js-tweetEditor-imageStatus tweetEditor-imageStatus"\x3e';
      var d;
      d = z.n("Loading image attachment…");
      d = (0, z.y)("" + d);
      a = a + z.A(d) + "\x3c/div\x3e";
      d = {};
      d = (0, z.y)(z.wl(z.C({
          name: "addCircled",
          size: "21px",
          content: (0, z.O)(
            '\x3csvg class\x3d"svgIcon-use" width\x3d"21" height\x3d"21" viewBox\x3d"0 0 21 21" \x3e\x3cpath d\x3d"M2.286 12.691a8.358 8.358 0 0 0 2.192 3.831A8.298 8.298 0 0 0 8.3 18.715c.73.19 1.462.288 2.192.29a8.363 8.363 0 0 0 2.2-.29 8.286 8.286 0 0 0 3.822-2.193 8.264 8.264 0 0 0 2.201-3.82c.19-.732.285-1.462.285-2.193a8.248 8.248 0 0 0-.285-2.2 8.265 8.265 0 0 0-2.2-3.823 8.258 8.258 0 0 0-3.822-2.2A8.66 8.66 0 0 0 10.5 2a8.188 8.188 0 0 0-2.192.286 8.33 8.33 0 0 0-3.831 2.2 8.298 8.298 0 0 0-2.193 3.822A8.66 8.66 0 0 0 2 10.5c0 .731.095 1.461.286 2.191zm1.557-.413a6.74 6.74 0 0 1-.239-1.773c0-.592.08-1.184.24-1.773a6.77 6.77 0 0 1 1.786-3.09 6.73 6.73 0 0 1 3.085-1.79c.59-.16 1.181-.24 1.777-.24.596 0 1.188.08 1.777.24a6.736 6.736 0 0 1 3.094 1.786 6.801 6.801 0 0 1 1.787 3.094c.16.59.239 1.178.239 1.768 0 .59-.08 1.182-.24 1.778a6.75 6.75 0 0 1-1.786 3.093 6.801 6.801 0 0 1-3.094 1.787 6.707 6.707 0 0 1-3.545 0A6.74 6.74 0 0 1 5.63 15.37a6.746 6.746 0 0 1-1.787-3.093zm2.937-2.055c0-.134.049-.25.148-.345a.494.494 0 0 1 .359-.143H9.23a.478.478 0 0 0 .35-.148.475.475 0 0 0 .147-.35V7.303c0-.141.048-.262.144-.363a.458.458 0 0 1 .345-.152h.562c.134 0 .25.05.35.152a.502.502 0 0 1 .147.363v1.934c0 .135.048.252.143.35a.46.46 0 0 0 .345.148h1.945c.14 0 .26.048.358.143.099.096.148.21.148.345v.562a.476.476 0 0 1-.148.35.486.486 0 0 1-.358.147h-1.945a.472.472 0 0 0-.345.143.47.47 0 0 0-.143.345v1.944c0 .14-.05.262-.148.36a.478.478 0 0 1-.35.147h-.56a.498.498 0 0 1-.489-.507V11.77a.461.461 0 0 0-.148-.345.487.487 0 0 0-.35-.143H7.287a.488.488 0 0 1-.36-.147.476.476 0 0 1-.147-.35v-.562z" fill-rule\x3d"evenodd"/\x3e\x3c/svg\x3e'
          )
        },
        d)));
      d = (0, z.O)("" + z.A(d));
      var e;
      e = z.n("Include quote image");
      e = (0, z.y)("" + e);
      a = a + z.A(z.Vm({
          icon: d,
          isPrimary: !0,
          ua: !0,
          l: "js-tweetEditor-addTextshot u-hide",
          action: "add-textshot",
          text: (0, z.O)("" + z.A(e))
        }, c)) +
        '\x3cdiv class\x3d"js-tweetEditor-imageContainer tweetEditor-imageContainer"\x3e';
      d = (0, z.O)("\x26times;");
      e = z.n("Remove quote image from tweet");
      e = (0, z.y)("" + e);
      return b(a + z.A(z.Rm({
            o: d,
            Ye: !0,
            l: "js-tweetEditor-removeTextshot tweetEditor-removeTextshot",
            title: (0, z.O)("" + z.A(e)),
            action: "remove-textshot"
          },
          c)) +
        '\x3cimg class\x3d"js-tweetEditor-image tweetEditor-image" data-action\x3d"toggle-expand-image"\x3e\x3c/img\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e' +
        (c.variants.textshots_userid ?
          '\x3cdiv class\x3d"u-textColorRed"\x3eTweet to test account @fuzzyoctopusfee\x3c/div\x3e' :
          ""))
    },
    PVa = function() {
      var a = z.n(
        "An error occurred, and the tweet wasn’t posted to Twitter.");
      return (0, z.y)("" + a)
    },
    QVa = function(a, b, c) {
      var d = "";
      b = z.n("Tweet posted.");
      a = a.YAa;
      var e;
      e = z.n("View the tweet");
      e = (0, z.y)("" +
        e);
      d += b + " " + z.A(z.P({
        Eb: !0,
        href: a,
        o: (0, z.O)("" + e)
      }, c));
      return (0, z.y)(d)
    },
    RVa = function() {
      var a = z.n("Tweet must be 140 characters or less.");
      return (0, z.y)("" + a)
    },
    x$ = function(a, b, c) {
      z.S.call(this);
      this.Zd = a.get("quotes-data");
      var d = this.Zd.Bn;
      d.subscribe("add", this.y8, this);
      d.subscribe("remove", this.y8, this);
      this.Za = b;
      this.xd = b.bn;
      this.fm = c;
      this.Z4 = [];
      this.Ga = a.get("app");
      this.Aa = a.get("popover");
      this.ha = a.get("route-builder");
      this.VT = a.get("global-event-bus");
      this.eqa = a.get("progressive-media-loader")
    },
    TVa = function(a, b, c, d) {
      var e = SVa(a, b);
      if (e) {
        var g = a.Za.isPublished(),
          h = z.cma(a.Za);
        e.gQ = g && h;
        if (c = z.sK(z.mJ(z.lJ(z.nJ(z.tK(z.oJ(a.Aa).Xa(HVa, e), "top"), c), {
            aP: !0,
            Ts: !0,
            Ba: !0
          }), "popover--quoteAttributions"), d).na()) c.Nl("deactivate",
          function() {
            this.Mn === b && y$(this, null)
          }, a), c.eo().w("quote", a.Rka.bind(a, c)).w("quote-respond", a.Ska
          .bind(a, c)).w("twitter", a.Tka.bind(a))
      }
    },
    SVa = function(a, b) {
      if ("anon" == b.gb()) return {
        isActive: !1,
        pxa: !0
      };
      var c = z$(a, b),
        d = b.gd();
      b = b.ce();
      a = yVa(a.Zd, c, d, b);
      if (!a || !a.length) return null;
      a = (0, z.xb)(a, function(a) {
        return a.user
      });
      c = (0, z.fd)(a, function(a) {
        return a.userId != z.wv().userId
      });
      return {
        isActive: (0, z.Qc)(a, function(a) {
          return a.userId == z.wv().userId
        }),
        social: c,
        Mh: a.length
      }
    },
    UVa = function(a, b) {
      a = a.xd.querySelectorAll('.markup--quote[name~\x3d"' + b.ci() + '"]');
      return z.Za(a)
    },
    z$ = function(a, b) {
      b = b.Wb()[0].name;
      return (b = z.ex(a.xd, b)) ? a.Za.bi(b) : null
    },
    VVa = function(a, b) {
      var c = z.et(b);
      return (c = z.cL(a.fm, c)) ? xVa(a.Zd, b, c) : null
    },
    y$ = function(a, b) {
      a.Mn !== b && (a.Mn && WVa(a, a.Mn, !1), b && WVa(a, b, !0), a.Mn = b)
    },
    WVa = function(a, b, c) {
      UVa(a, b).map(function(a) {
        z.jd(a, "is-targeted", c)
      })
    },
    A$ = function(a, b) {
      (b = XVa(a, b)) && z.aL(a.xj(), b)
    },
    XVa = function(a, b) {
      var c = b.Wb(),
        d = z.ex(a.xd, c[0].getName());
      a = z.ex(a.xd, z.Qa(c).getName());
      return z.LR(d, b.gd(), a, b.ce())
    },
    B$ = function(a, b, c, d) {
      a = {
        postId: a.Za.Ia(),
        quoteId: b,
        source: d
      };
      z.pE(c ? z.Vla : z.cua, a)
    },
    YVa = function(a, b) {
      z.sH(a, z.rH, z.Qb(b, z.Jb(!0)), void 0)
    },
    ZVa = function(a, b, c) {
      z.ra(a) || (a = a.toString());
      var d = window,
        e = {
          scrollbars: !0,
          Sza: !0,
          toolbar: !1,
          location: !0,
          width: 670,
          height: 690
        };
      z.ub(e, c || {});
      e.left || e.top || (e.width = (0, window.parseInt)(e.width, 10), e.height =
        (0, window.parseInt)(e.height, 10), e.left = Math.max(d.screenX +
          Math.round(d.outerWidth / 2 - e.width / 2), 0), e.top = Math.max(
          d.screenY + Math.round(d.outerHeight / 2 - e.height / 2), 0));
      var g = {
        scrollbars: "scrollbars",
        Sza: "resizable",
        toolbar: "toolbar",
        location: "location",
        width: "width",
        height: "height",
        left: "left",
        top: "top"
      };
      c = z.Yr(e, function(a, b, c) {
        g[c] && ("boolean" == typeof b && (b = b ? "yes" : "no"), a.push(
          g[c] + "\x3d" + b));
        return a
      }, []).join();
      return d.open(a, b, c)
    },
    $Va = function(a) {
      var b = z.nC(z.jna, {
        jya: !0
      });
      b && (b = b.split(/\s+/), b = b.filter(function(a) {
        return !z.Ea(a)
      }), b.length && z.ed(a, b))
    },
    aWa = function(a) {
      if (!a) return "";
      var b = [],
        c = z.sb(["grafId", "noteId", "command", "startIndex", "endIndex"]),
        d;
      for (d in a) b[c[d]] = a[d];
      return b.join("-")
    },
    C$ = function(a) {
      z.DD.call(this);
      this.sc = a.get("dom-model-converter");
      this.u7 = {};
      this.o6 = {};
      this.PV = {};
      this.qa = a;
      this.jm = a.get("request");
      this.ha = a.get("route-builder");
      this.sa = a.get("model-store");
      this.Ya = "";
      this.V7 = 0;
      this.W4 = !1;
      this.Qg = null
    },
    D$ = function(a, b) {
      var c = a.u7[b];
      c || (c = a.u7[b] = new z.qI, a.va("new_note_list", c, a));
      return c
    },
    bWa = function(a, b) {
      if (!b) return !1;
      var c = b.Ca();
      if (a.content == c.substring(a.startIndex, a.endIndex)) return !0;
      var d = new RegExp(z.Ha(a.content), "gi"),
        c = (b = d.exec(c)) && d.exec(c);
      return b && !c ? (c = a.endIndex - a.startIndex, a.startIndex = b.index,
        a.endIndex = b.index + c, a.content = b[0], !0) : !1
    },
    E$ = function(a, b, c) {
      var d = b.Ia(),
        e = b.Rf(),
        g = D$(a, b.Td()),
        h = g ? g.indexOf(b) : -1,
        l = b.sF();
      b.Fw(c);
      "HIDDEN" ==
      c ? a.sa.remove(b) : b = z.mI(a.sa, b);
      var p = g ? g.indexOf(b) : -1;
      return {
        rk: a.jm.put(a.ha.ia(z.Hra, {
          postId: d,
          noteId: e
        }), {
          state: c
        }),
        yG: function() {
          b.Fw(l); - 1 == p && (-1 == h ? g.add(b) : z.sI(g, b, h))
        }
      }
    },
    F$ = function(a, b, c, d, e, g) {
      var h = z.I(a.co(c, e), "replies"),
        l = z.Ra(h, function(a) {
          return a.Jv() == b
        }),
        p = h[l];
      "HIDDEN" == g && z.Wa(h, l);
      c = a.ha.ia(z.Kra, {
        postId: d,
        noteId: c,
        replyId: b
      });
      a = a.jm.put(c, {
        state: g
      });
      var r = z.Ra(h, function(a) {
        return a.Jv() == b
      });
      return {
        rk: a,
        yG: function() {
          -1 == r && z.bb(h, l, 0, p)
        }
      }
    },
    cWa = function(a, b, c) {
      this.range =
        a;
      this.anchor = b;
      this.Ty = b.getAttribute("name");
      this.highlight = c
    },
    G$ = function(a, b, c) {
      z.S.call(this);
      this.oL = b;
      this.Qpa = c;
      this.La = a.get("screen");
      this.Sa = a.get("screen-request")
    },
    dWa = function(a, b) {
      b = b.querySelectorAll(".js-trackedPostPromotion");
      null != a.oL.postPageContext && null != a.oL.postPageContext.postId &&
        z.Za(b).forEach(function(b) {
          var d = a.oL.postPageContext.postId,
            e = b.getAttribute("data-post-id"),
            g = b.getAttribute("data-post-promotion-source");
          b = b.getAttribute("data-location-id");
          z.pE(z.Fua, {
            hostPostId: d,
            targetPostId: e,
            promotionSource: g,
            locationId: b
          })
        })
    },
    eWa = function() {},
    fWa = function(a) {
      this.yK = a
    },
    H$ = function(a, b) {
      return b ? z.ex(a.yK, b) : null
    },
    gWa = function(a, b, c) {
      YVa(a.yK, function(a) {
        var e = a.getAttribute("name");
        e && b.call(c, a, e)
      })
    },
    hWa = function(a, b) {
      return z.Xg(a.yK, b) ? a.yK : null
    },
    I$ = function(a, b, c, d, e) {
      z.A_.call(this, a, b);
      this.Va(new z.TZ(c));
      this.Va(new z.i0(!1));
      this.Va(new z.k0(a));
      this.Va(new z.B_);
      this.Va(new z.T0(!1, !1));
      this.Va(new z.n1(d, !0));
      this.fk = !0;
      this.$k = d;
      this.jm = a.get("request");
      this.ya =
        a.get("dialog");
      this.tV = e;
      this.na()
    },
    iWa = function() {
      var a = z.n(
        "Saving failed. You may be having connectivity issues or notes might be disabled on this post. Please try again."
      );
      return (0, z.y)("" + a)
    },
    jWa = function() {
      var a = z.n(
        "Yikes! Something happened and we couldn’t dismiss this note.");
      return (0, z.y)("" + a)
    },
    kWa = function() {
      var a = z.n(
        "Yikes! Something happened and we couldn’t delete this note.");
      return (0, z.y)("" + a)
    },
    lWa = function() {
      var a = z.n(
        "Yikes! Something happened and we couldn’t delete this reply.");
      return (0, z.y)("" + a)
    },
    mWa = function() {
      var a = z.n("The note has been dismissed.");
      return (0, z.y)("" + a)
    },
    nWa = function() {
      var a = z.n("The note has been deleted.");
      return (0, z.y)("" + a)
    },
    oWa = function() {
      var a = z.n("The reply has been deleted.");
      return (0, z.y)("" + a)
    },
    pWa = function() {
      var a = z.n("Write a note…");
      return (0, z.y)("" + a)
    },
    qWa = function() {
      var a = z.n("Cancel");
      return (0, z.y)("" + a)
    },
    J$ = function(a, b, c, d, e) {
      I$.call(this, a, b, e || "Leave a note", 400, d || null);
      this.Ya = c;
      this.ha = a.get("route-builder");
      this.Te = a.get("notes-data")
    },
    K$ = function(a, b, c, d, e, g) {
      I$.call(this, a, b, "Leave a reply…", 200, d);
      this.ha = a.get("route-builder");
      this.Te = a.get("notes-data");
      this.Ya = c;
      this.u8 = g || null;
      this.ne = e
    },
    sWa = function(a, b, c) {
      var d = '\x3cdiv class\x3d"quoteResponses js-quoteResponses"\x3e',
        e = a.quotes.length,
        g = a.responses.length || a.A2;
      b = a.notes.length || a.eQ;
      if (e || g || b) {
        if (e) {
          var e = '\x3cdiv class\x3d"quoteResponses-section"\x3e' + z.A(z.lp({
              title: (0, z.O)(z.A(JVa()) + " (" + z.A(a.quotes.length) +
                ")"),
              Ne: !0
            }, c)),
            h;
          h = {
            oda: a.quotes,
            ABa: !0
          };
          var l = '\x3cdiv class\x3d"js-quotesList"\x3e';
          if (!h.ABa) var p = z.n("Learn more"),
            l = l + z.A(z.lp({
              title: (0, z.O)("" + z.A(JVa())),
              Ne: !0,
              yf: (0, z.O)("" + z.A(z.jp({
                href: (0, z.M)("" + z.G((0, z.gk)(
                  "https://medium.com/the-story/introducing-highlights-a4df69e8ed43"
                ))),
                moreText: (0, z.O)("" + p),
                rb: !0
              }, c)))
            }, c));
          for (var p = "list u-marginTop5 u-marginBottom15" + (h.oda.length ?
                "" : " u-hide"), p = (0, z.O)(p), l = l + (
                '\x3cul class\x3d"' + z.E(p) + '"\x3e'), p = h.oda, r = p.length,
              t = 0; t < r; t++) {
            for (var x = p[t], F = "", J = x.quotes, R = J.length, N = 0; N <
              R; N++) F += "" + J[N].quoteId + (N != R - 1 ? "," : "");
            F = z.D(F);
            l +=
              '\x3cli class\x3d"list-item list-item--inline u-border0" data-quote-ids\x3d"' +
              z.E(F) + '" data-quote-creator-id\x3d"' + z.E(x.user.userId) +
              '" data-action\x3d"highlight-quote" data-action-type\x3d"hover"\x3e' +
              z.A(z.ap(z.C({
                user: x.user,
                Pe: !0
              }, h), c)) + "\x3c/li\x3e"
          }
          h = (0, z.y)(l + "\x3c/ul\x3e\x3c/div\x3e");
          e = e + z.A(h) + "\x3c/div\x3e"
        } else e = "";
        g ? (g = '\x3cdiv class\x3d"quoteResponses-section' + (a.A2 ?
            " is-withEditor" : "") + '"\x3e' + z.A(z.lp({
            title: (0, z.O)("" + z.A(z.po())),
            Ne: !0
          }, c)), a.A2 && c.supportsEdit && c.isAuthenticated ?
          (h = {}, h = (0, z.y)(
            '\x3cdiv class\x3d"js-inlineNewPostControl inlineNewPostControl inlineNewPostControl--quoteResponses"\x3e' +
            z.fT(z.C({
              user: c.currentUser,
              isCollapsed: !0,
              Nz: !0,
              type: "quoteResponses",
              ot: (0, z.O)("" + z.A(z.wo()))
            }, h), c) + "\x3c/div\x3e"), h = z.A(h)) : h = "", g = g + h +
          rWa(a, 0, c) + "\x3c/div\x3e") : g = "";
        d += e + g;
        if (a.lza && b) {
          g = z.n("Who can see this?");
          d +=
            '\x3cdiv class\x3d"quoteResponses-section quoteResponses-section--fullBleed u-paddingLeft0 u-paddingRight0"\x3e';
          e = b = "";
          h = a.post.homeCollection;
          h = a.post.creator.userId !=
            c.currentUser.userId ? h ? z.n(
              "Private notes are visible to you, the author, and the editors of {$name}.", {
                name: z.A(h.name)
              }) : z.n(
              "Private notes are visible to you, the author, and the editors of any publication this story is added to."
            ) : h ? z.n(
              "Private notes are visible to you and the editors of {$name}.", {
                name: z.A(h.name)
              }) : z.n(
              "Private notes are visible to you and the editors of any publication this story is added to."
            );
          e += h;
          e = (0, z.y)(e);
          e = "" + z.A(e);
          e = (0, z.O)(e);
          b += '\x3cspan data-tooltip\x3d"' + z.E(e) +
            '"\x3e' + g + "\x3c/span\x3e";
          g = {};
          g = (0, z.y)(z.wl(z.C({
              name: "lock",
              size: "19px",
              content: (0, z.O)(
                '\x3csvg class\x3d"svgIcon-use" width\x3d"19" height\x3d"19" viewBox\x3d"0 0 19 19" \x3e\x3cpath d\x3d"M14 14.052a1 1 0 0 1-.992.998H5.992A.99.99 0 0 1 5 14.052v-4.004a1 1 0 0 1 .992-.998h7.016a.99.99 0 0 1 .992.998v4.004zM7 5.445C7 4.187 8.114 3.15 9.5 3.15c1.385 0 2.5 1.04 2.5 2.295V8.05H7V5.445zm6.008 2.605H13V5.445c0-1.822-1.578-3.295-3.5-3.295C7.577 2.15 6 3.618 6 5.445V8.05h-.008A2 2 0 0 0 4 10.048v4.004a1.99 1.99 0 0 0 1.992 1.998h7.016A2 2 0 0 0 15 14.052v-4.004a1.99 1.99 0 0 0-1.992-1.998z" fill-rule\x3d"evenodd"/\x3e\x3c/svg\x3e'
              )
            },
            g)));
          g = (0, z.O)("" + z.A(g));
          e = z.n("Private notes");
          e = (0, z.y)("" + e);
          b = {
            TAa: g,
            title: (0, z.O)("" + z.A(e)),
            Ne: !0,
            yf: (0, z.O)(b),
            l: "heading--privateNotes"
          };
          b = (0, z.y)(z.hp(z.C({
            Zg: (0, z.O)("" + z.ip(b, c)),
            dya: !0
          }, b)));
          b = d += z.A(b);
          d = "" + ('\x3cdiv class\x3d"privateNotes-list js-notesList' + (a.eQ ?
            " is-showingNoteEditor" : "") + (0 == a.notes.length ?
            " is-empty" : "") + '"\x3e');
          g = a.notes;
          e = g.length;
          for (h = 0; h < e; h++) d += L$({
            note: g[h],
            post: a.post,
            cH: a.cH
          }, 0, c);
          a.eQ ? (g = a.post.creator, a = "", g = c.currentUser.userId == g.userId ?
            z.n("Leave yourself a note") :
            z.n("Send {$name} a private note…", {
              name: z.A(g.name)
            }), a += g, a = (0, z.y)(a), a =
            '\x3cdiv class\x3d"privateNotes-actions js-noteActions"\x3e' +
            z.A(z.Sm({
              action: "show-note-editor",
              text: (0, z.O)("" + z.A(a)),
              l: "privateNotes-prompt"
            }, 0, c)), g = z.y, e =
            '\x3cdiv class\x3d"privateNotes-editor"\x3e' + z.A(z.bp({
              user: c.currentUser,
              Ve: !0
            }, c)) +
            '\x3cdiv class\x3d"js-noteEditor"\x3e\x3c/div\x3e\x3cdiv class\x3d"buttonSet"\x3e',
            h = z.n("Send"), h = (0, z.y)("" + h), c = g(e + z.A(z.Sm({
              action: "save-note",
              isPrimary: !0,
              l: "js-saveNoteButton",
              text: (0, z.O)("" + z.A(h))
            }, 0, c)) + z.A(z.Sm({
              action: "hide-note-editor",
              text: (0, z.O)("" + z.A(qWa()))
            }, 0, c)) + "\x3c/div\x3e\x3c/div\x3e"), c = a + c +
            "\x3c/div\x3e") : c = "";
          c = (0, z.y)(d + ("\x3c/div\x3e" + c));
          d = b + ('\x3cdiv class\x3d"quoteResponses-inner privateNotes"\x3e' +
            c + "\x3c/div\x3e\x3c/div\x3e")
        }
      } else 0 < a.DA && (a = z.n("Show next tip"), b = z.n(
          "Show previous tip"), d +=
        '\x3cdiv class\x3d"quoteResponses-section quoteResponses-section--fullBleed quoteResponses-section--tips u-textAlignCenter u-paddingLeft0 u-paddingRight0"\x3e\x3cdiv class\x3d"quoteResponses-section--tipsInner u-alignMiddle"\x3e' +
        z.A(z.Vm({
          Db: !0,
          Ye: !0,
          ua: !0,
          action: "previous-highlight-tip",
          icon: (0, z.O)("" + z.A(z.Al())),
          title: (0, z.O)("" + b)
        }, c)) +
        "\x3cdiv class\x3d'u-alignBlock quoteResponses-section--tipsContent u-paddingLeft20 u-paddingRight20 js-highlightTip'\x3e\x3c/div\x3e" +
        z.A(z.Vm({
          Db: !0,
          Ye: !0,
          ua: !0,
          action: "next-highlight-tip",
          icon: (0, z.O)("" + z.A(z.Bl())),
          title: (0, z.O)("" + a)
        }, c)) + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e");
      return (0, z.y)(d + "\x3c/div\x3e")
    },
    rWa = function(a, b, c) {
      return (0, z.y)(z.A(z.LT({
        posts: a.responses,
        source: "quoteResponses",
        tO: !0
      }, 0, c)))
    },
    L$ = function(a, b, c) {
      var d, e = null == a.note.replies ? null : a.note.replies.length,
        g = null == a.note.replyId,
        h = a.post.creator.userId == c.currentUser.userId,
        l = a.post.creator.userId == a.note.author.userId;
      d = a.note.author.userId == c.currentUser.userId;
      b = h || (null == a.post.homeCollection ? null : a.post.homeCollection.virtuals
        .permissions.canEditPosts);
      var p = "" + (g ? "js-note-item" + (a.note.noteId ? " js-note-" + a.note
          .noteId : "") : "js-reply-item" + (a.note.replyId ? " js-reply-" +
          a.note.replyId : "")),
        p = z.D(p),
        p = '\x3cdiv class\x3d"privateNotes-item ' +
        z.E(p) + ' js-note" data-note-id\x3d"' + z.E(a.note.noteId) + '"\x3e' +
        (g ? z.A(z.ap({
          user: a.note.author
        }, c)) : z.A(z.Zo({
          user: a.note.author
        }, c))) +
        '\x3cdiv class\x3d"privateNotes-authorLockup"\x3e\x3cdiv class\x3d"privateNotes-author"\x3e' +
        z.A(z.eo({
          user: a.note.author
        }, c));
      g || !(h || d || (null == a.post.homeCollection ? 0 : a.post.homeCollection
        .virtuals.permissions.canEditPosts)) || l || a.Rba ? h = "" : (h =
        z.n("(Editor)"), h = (0, z.y)("" + h), h =
        '\x3cspan class\x3d"privateNotes-author--supplemental"\x3e ' + z.A(
          h) + "\x3c/span\x3e");
      p =
        p + h +
        '\x3c/div\x3e\x3cdiv class\x3d"privateNotes-supplemental"\x3e' + z.A(
          z.yi(Number(a.note.createdAt), c)) +
        '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"privateNotes-content js-privateNotesContent"\x3e';
      h = z.A(z.Sz(String(a.note.content), c));
      l = String(h).replace(/(\r\n|\r|\n)/g, "\x3cbr\x3e");
      h = z.hh(h, z.kh) ? (0, z.y)(l, z.ih(h)) : l;
      d = "" + (p + h + "\x3c/div\x3e" + (d ? tWa({
        note: a.note,
        isPrimary: g
      }, c) : ""));
      if (g) {
        d += '\x3cdiv class\x3d"privateNotes-replies' + (e ? "" : " is-empty") +
          ' js-repliesList"\x3e';
        if (e)
          for (e = a.note.replies,
            g = e.length, p = 0; p < g; p++) h = e[p], d += L$({
            note: h,
            post: a.post,
            Rba: a.note.author.userId == h.author.userId
          }, 0, c);
        e = d;
        a.cH ? (g = z.y, d =
            '\x3cdiv class\x3d"privateNotes-editor privateNotes-editor--reply"\x3e' +
            z.A(z.$o({
              user: c.currentUser,
              Ve: !0
            }, c)) +
            '\x3cdiv class\x3d"js-replyEditor"\x3e\x3c/div\x3e\x3cdiv class\x3d"buttonSet"\x3e',
            p = z.n("Send"), p = (0, z.y)("" + p), g = g(d + z.A(z.Sm({
              action: "save-reply",
              isPrimary: !0,
              text: (0, z.O)("" + z.A(p))
            }, 0, c)) + z.A(z.Sm({
              action: "hide-reply-editor",
              text: (0, z.O)("" + z.A(qWa()))
            }, 0, c)) + "\x3c/div\x3e\x3c/div\x3e")) :
          g = "";
        g = "\x3c/div\x3e" + g + '\x3cdiv class\x3d"privateNotes-actions' + (
            b ? " privateNotes-actions--withDismiss" : "") +
          ' u-clearfix"\x3e';
        a.cH ? (d = z.y, p = z.n("Reply"), p = (0, z.y)("" + p), d =
          '\x3cdiv class\x3d"u-floatLeft"\x3e' + d(z.A(z.Sm({
            isPrimary: !0,
            action: "show-reply-editor",
            l: "privateNotes-prompt",
            text: (0, z.O)("" + z.A(p))
          }, 0, c))) + "\x3c/div\x3e") : d = "";
        d = e + (g + d + (b ? '\x3cdiv class\x3d"u-floatRight"\x3e' + tWa({
          note: a.note,
          isPrimary: !0,
          Bba: !0
        }, c) + "\x3c/div\x3e" : "") + "\x3c/div\x3e")
      }
      return (0, z.y)(d + "\x3c/div\x3e")
    },
    tWa =
    function(a, b) {
      var c = z.y,
        d = a.isPrimary ? a.note.noteId : a.note.replyId,
        e = a.Bba ? "dismiss-note" : a.isPrimary ? "delete-note" :
        "delete-reply";
      a = a.Bba ? z.n("Dismiss note") : z.n("Delete");
      a = (0, z.y)("" + a);
      a = z.A(a);
      return c(z.A(z.Sm({
        actionValue: d,
        action: e,
        l: "privateNotes-delete js-deleteNote",
        text: (0, z.O)("" + a)
      }, 0, b)))
    },
    uWa = function(a, b, c) {
      b = "";
      if (0 == a.n2) a = 1 == a.DA ? z.n(
          "People highlighted this passage. You can click on an existing highlight to add to it, like below:"
        ) : z.n(
          "{$topQuoteCount} people highlighted this passage. You can click on an existing highlight to add to it, like below:", {
            topQuoteCount: z.A(a.DA)
          }), b += a, b +=
        '\x3cimg class\x3d"quoteResponses-tipAnimation" src\x3d"' + z.E(z.gi(
          z.wm({
            imageId: "1*SyXCciYXeNpx4-GUAuh0XQ.gif"
          }, 0, c))) + '"\x3e';
      else if (1 == a.n2) a = z.n(
          "Or, select any passage to create your own highlight and tell the author and others what resonated with you:"
        ), b += a + '\x3cimg class\x3d"quoteResponses-tipAnimation" src\x3d"' +
        z.E(z.gi(z.wm({
          imageId: "1*dEp02HXMKtAeKxsV5MWqGg.gif"
        }, 0, c))) + '"\x3e';
      else if (2 == a.n2) {
        a = z.n(
          "so that you can save your highlights and share them with others."
        );
        var d = z.n("Sign in to create a profile");
        b += z.A(z.P({
          Eb: !0,
          ec: !0,
          source: "highlight_tip",
          o: (0, z.O)("" + d),
          href: (0, z.M)("" + z.G(z.sk(c)))
        }, c)) + " " + a
      }
      return (0, z.y)(b)
    },
    M$ = function(a, b, c, d, e, g, h, l) {
      z.S.call(this);
      this.qa = a;
      this.ra = a.get("butter-bar");
      this.Za = b;
      this.ne = c;
      this.cj = e;
      this.Zd = a.get("quotes-data");
      this.Te = a.get("notes-data");
      this.zi = a.get("responses-data");
      this.Ie = g;
      this.tV = d;
      this.pW = (this.sD = h) ? h.ci() : null;
      this.mf = this.uc = null;
      this.fj = {};
      this.z6 = !!z.yv();
      this.B6 = !!z.Av();
      this.Wx = this.z6 && this.B6 &&
        z.kL(b);
      this.ip = null;
      this.MJ = 0;
      this.z9 = zVa(this.Zd, this.ne);
      this.qu = l;
      this.Wa(this.Zt());
      this.y7 = z.yv() ? 2 : 3
    },
    vWa = function(a) {
      a.tb(".js-block").forEach(function(a) {
        this.Ka(a, "mouseenter", this.qla, this);
        this.Ka(a, "mouseleave", this.JX, this)
      }, a)
    },
    wWa = function(a) {
      a.tb(".js-note").forEach(function(a) {
        this.Ka(a, "mouseenter", this.ola, this);
        this.Ka(a, "mouseleave", this.JX, this)
      }, a)
    },
    xWa = function(a, b) {
      var c = a.query(".js-note-" + b);
      a.fj[b] || (a.fj[b] = new K$(a.qa, c.querySelector(".js-replyEditor"),
          a.Za.Ia(), b, a.ne),
        z.HD(a, a.fj[b], "saving", a.Goa, a), z.HD(a, a.fj[b], "save", a.Aoa,
          a), z.HD(a, a.fj[b], "fail", a.zna, a));
      z.dd(c, "is-noteEditorVisible");
      a.fj[b].focus()
    },
    yWa = function(a, b) {
      var c = a.fj[b];
      c && (c.Ua() && c.Nc(""), a = a.query(".js-note-" + b), z.gd(a,
        "is-noteEditorVisible"))
    },
    zWa = function(a, b, c) {
      var d = H$(a.Ie, a.ne);
      if (d) {
        var e = [];
        a.qu && (e = a.qu.quotes.map(function(a) {
          return a.ci()
        }));
        (0, z.xb)(d.querySelectorAll(".markup--quote"), function(a) {
          var d = a.getAttribute("data-creator-ids").split(" "),
            d = z.Va(d, b);
          if (this.qu) var l =
            a.getAttribute("name").split(" "),
            d = d && (0, z.Qc)(l, z.Va.bind(null, e));
          z.jd(a, "is-selected", c && d)
        }, a)
      }
    },
    N$ = function(a) {
      return (a = z.ax(a, function(a) {
        return z.bd(a, "js-note-item")
      })) && a.getAttribute("data-note-id")
    },
    AWa = function(a, b, c, d) {
      b = new z.mK(b, 300);
      b.Wa(c);
      b.subscribe("dismiss", d, a);
      b.na();
      return b
    },
    O$ = function(a) {
      var b = a.Wb(),
        c = a.gd();
      a = a.ce();
      1 < b.length && (a = b[0].Ca().length);
      var d = new z.Dz;
      d.Go(b[0].getName());
      d.$f(c);
      z.K(d, "endIndex", a);
      d.Nc(b[0].Ca().substring(c, a));
      return d
    },
    P$ = function(a,
      b) {
      b %= a.y7;
      0 > b && (b = a.y7 - 1);
      a.MJ = b;
      (b = a.query(".js-highlightTip")) && z.mC(b, uWa, {
        n2: a.MJ,
        DA: a.z9
      })
    },
    Q$ = function(a, b, c, d) {
      z.S.call(this);
      this.Wa(this.Zt(d));
      this.vb = a.get("dom-monitor");
      this.Za = b;
      this.G6 = !b.eb().Fs() || b.jc();
      this.Ya = b.Ia();
      this.Ie = c;
      this.Zd = a.get("quotes-data");
      this.zi = a.get("responses-data");
      this.Te = a.get("notes-data");
      this.au = null;
      this.Tg = {}
    },
    BWa = function(a, b) {
      b.forEach(function(a) {
        a && R$(this, a)
      }, a)
    },
    R$ = function(a, b) {
      if (!a.au)
        if (H$(a.Ie, b)) {
          var c = CWa(a, b),
            c = DWa(a, c),
            c = EWa(a, c),
            c = FWa(a,
              c);
          a.Tg[b] = c;
          GWa(a, b)
        } else delete a.Tg[b]
    },
    HWa = function(a, b) {
      if (!a.au) {
        var c = a.Tg[b];
        if (c) {
          var d = c.length,
            c = EWa(a, c),
            c = FWa(a, c);
          a.Tg[b] = c;
          d != c.length ? GWa(a, b) : c.forEach(function(a) {
            a.Qa && a.offsetTop && (a.Qa.style.top = a.offsetTop + "px")
          })
        }
      }
    },
    IWa = function(a, b, c) {
      return z.Sa(a.Tg[b] || [], function(a) {
        return a.Qa == c
      })
    },
    CWa = function(a, b) {
      var c = [];
      D$(a.Te, b).jg(function(a) {
        var e = a.oz(),
          g;
        e ? (g = this.Te.UN(e), e = g.Ta(), g = z.I(g, "endIndex")) : (e =
          0, g = a.Ua().length);
        c.push({
          anchor: b,
          startIndex: e,
          endIndex: g,
          notes: [a],
          quotes: [],
          responses: []
        })
      }, a);
      if (a.G6) return c;
      (a.Zd.Qr[b] || []).forEach(function(a) {
        var e = JWa(a);
        c.push({
          anchor: b,
          startIndex: e.startIndex,
          endIndex: e.endIndex,
          notes: [],
          quotes: [a],
          responses: []
        })
      }, a);
      t$(a.zi, b).forEach(function(a) {
        var e = r$(a);
        e && (e = s$(e) && s$(e).Em()) && (e = JWa(e), c.push({
          anchor: b,
          startIndex: e.startIndex,
          endIndex: e.endIndex,
          notes: [],
          quotes: [],
          responses: [a]
        }))
      }, a);
      return c
    },
    DWa = function(a, b) {
      var c = [];
      b.sort(function(a, b) {
        return a.startIndex - b.startIndex
      });
      b.forEach(function(a) {
        var b = z.Ra(c,
          function(b) {
            return b.endIndex >= a.startIndex - 1 && b.startIndex <= a.endIndex +
              1
          });
        0 <= b ? this.UC(c[b], a) : c.push(a)
      }, a);
      return c
    },
    FWa = function(a, b) {
      var c = [];
      b.forEach(function(a) {
        if (a.offsetTop) {
          var b = z.Ra(c, function(b) {
            return 30 >= Math.abs(b.offsetTop - a.offsetTop)
          });
          0 <= b ? this.UC(c[b], a) : c.push(a)
        }
      }, a);
      return c
    },
    GWa = function(a, b) {
      a.tb(".js-paragraphControl-" + b).forEach(z.Rg);
      a.Tg[b] = a.Tg[b].map(function(a) {
        var b = KWa(this, a),
          b = z.oC(LWa, b);
        b.style.top = a.offsetTop + "px";
        a.Qa = b;
        this.ma().appendChild(a.Qa);
        z.dd(b,
          "is-visible");
        return a
      }, a)
    },
    KWa = function(a, b) {
      var c = b.notes,
        d = b.responses,
        e = n$(a.Zd, b.quotes),
        g = d ? d.length : 0,
        h = c ? c.length : 0,
        l = 0,
        p = 0,
        r = 0,
        t = !1,
        x = !1,
        F = {},
        J = {},
        R = z.wv().userId,
        N = a.Za.eb().Xe().gb();
      c.forEach(function(a) {
        var b = a.dF();
        b && ((a = z.I(a, "replies")) && a.forEach(function(a) {
            h++;
            a.author && (a.author.userId == R && l++, a.author.social &&
              a.author.social.isFollowing && (F[a.author.userId] =
                a.author), J[a.author.userId] = !0)
          }), J[b.userId] = !0, b.userId == R && l++, b.userId == N ? p++
          : r++, b.social && b.social.isFollowing &&
          (F[b.userId] = b))
      });
      e.forEach(function(a) {
        a = a.user;
        J[a.userId] = !0;
        a.userId == R && (t = !0);
        a.social && a.social.isFollowing && (F[a.userId] = a)
      });
      d.forEach(function(a) {
        a = a.Xe();
        J[a.userId] = !0;
        a.userId == R && (x = !0);
        a.social && a.social.isFollowing && (F[a.userId] = a)
      });
      c = b.quotes.filter(function(a) {
        return "anon" == a.gb()
      });
      return {
        postId: a.Ya,
        Ty: b.anchor,
        jza: h,
        Tza: g,
        tw: x,
        jw: l,
        Mca: p,
        kza: r,
        YPa: e.length,
        qw: t,
        sba: Object.keys(J).length,
        fxa: z.lb(F),
        DA: c.length
      }
    },
    JWa = function(a) {
      var b = a.gd(),
        c = a.ce();
      1 < a.paragraphs.length && (c =
        a.paragraphs[0].text.length);
      return {
        startIndex: b,
        endIndex: c
      }
    },
    EWa = function(a, b) {
      var c = z.OC();
      return b.map(function(a) {
        var b = this.Ie.get(a.anchor),
          g = this.Za.bi(b);
        if (!g) return a;
        var h;
        4 == g.type && (g.Ca() && (h = b.querySelector("figcaption")), h ||
          (h = b));
        if (!h) {
          g = a.startIndex + 1;
          b = [b];
          h = 0;
          for (var l = null; 0 < b.length && h < g;)
            if (l = b.pop(), !(l.nodeName in z.Mya))
              if (3 == l.nodeType) {
                var p = l.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(
                  / +/g, " ");
                h += p.length
              } else if (l.nodeName in z.zU) h += z.zU[l.nodeName].length;
          else
            for (p =
              l.childNodes.length - 1; 0 <= p; p--) b.push(l.childNodes[p]);
          h = l
        }
        g = z.SC(h, !0);
        a.offsetTop = Math.round(g.top + c.top);
        return a
      }, a)
    },
    LWa = function(a, b, c) {
      b = z.y;
      var d =
        '\x3cdiv class\x3d"paragraphControls js-paragraphControl js-paragraphControl-' +
        z.E(a.Ty) + ' u-noUserSelect"\x3e',
        e = z.y,
        g;
      if (a.jza || a.Tza) {
        g =
          '\x3cdiv class\x3d"notesMarker u-noUserSelect" data-action\x3d"select-anchor" data-action-value\x3d"' +
          z.E(a.Ty) + '"\x3e';
        var h;
        h = {};
        h = (0, z.y)(z.wl(z.C({
            name: "asteriskFilled",
            size: "19px",
            content: (0, z.O)(
              '\x3csvg class\x3d"svgIcon-use" width\x3d"19" height\x3d"19" viewBox\x3d"0 0 19 19" \x3e\x3cpath d\x3d"M14.78 8.07a8.681 8.681 0 0 0-.427-1.383.478.478 0 0 0-.584-.27l-3.12.77V4.034c0-.247-.19-.48-.43-.5a7.23 7.23 0 0 0-1.38 0c-.24.02-.43.253-.43.5V7.19L5.3 6.415a.48.48 0 0 0-.583.27c-.18.448-.324.91-.426 1.383-.05.24.1.5.32.58l3.06.754-1.98 2.956c-.14.196-.13.502.04.67.34.332.7.632 1.09.896.2.136.49.077.63-.117l2.09-3.114 2.09 3.112c.15.193.43.252.63.116.39-.26.75-.56 1.09-.89.17-.17.19-.47.04-.67L11.4 9.41l3.06-.76a.517.517 0 0 0 .32-.58" fill-rule\x3d"evenodd"/\x3e\x3c/svg\x3e'
            )
          },
          h)));
        g = g + z.A(h) + "\x3c/div\x3e"
      } else g = "";
      var l = h = "",
        p = "",
        r = 1 == a.jw ? z.n("a note") : z.n("notes"),
        p = p + ("" + r),
        p = z.D(p);
      1 == a.sba && (0 < a.jw || a.qw || a.tw) && (0 < a.jw && a.qw && a.tw ?
        (p = z.n("highlighted, responded, and left {$noteCountText}", {
          noteCountText: "" + p
        }), l += " " + p) : 0 < a.jw && a.tw ? (p = z.n(
          "responded and left {$noteCountText}", {
            noteCountText: "" + p
          }), l += " " + p) : 0 < a.jw && a.qw ? (p = z.n(
          "highlighted and left {$noteCountText}", {
            noteCountText: "" + p
          }), l += " " + p) : a.qw && a.tw ? (p = z.n(
          "highlighted and responded"), l += " " + p) : a.qw ?
        (p = z.n("highlighted"), l += " " + p) : 0 < a.jw ? (p = z.n(
          "left {$noteCountText}", {
            noteCountText: "" + p
          }), l += " " + p) : a.tw && (p = z.n("responded"), l += " " + p));
      l = z.D(l);
      h += '\x3cspan class\x3d"paragraphControls-itemText"\x3e';
      p = "";
      if (0 < a.Mca && 0 == a.kza && !a.qw && !a.tw) c = 1 == a.Mca ? z.n(
        "Note to self") : z.n("Notes to self"), p += c;
      else {
        r = "";
        if (0 < a.DA) var t = z.n("Top highlight"),
          r = r + t;
        p += z.A(z.AT(z.C({
          social: a.fxa,
          isActive: 0 < a.jw || a.qw || a.tw,
          Mh: a.sba,
          P_: !0,
          tza: !0,
          U$: (0, z.O)(r)
        }, a), c));
        p += z.A(l)
      }
      p = (0, z.O)(p);
      h += z.A(z.bxa(z.C({
          text: p
        },
        a))) + "\x3c/span\x3e";
      a = (0, z.y)(h);
      a = e(g + a);
      return b(d + a + "\x3c/div\x3e")
    },
    S$ = function(a, b, c) {
      z.S.call(this);
      this.qa = a;
      this.Yja = a.get("floating-components");
      this.La = a.get("screen");
      this.kb = a.get("screen-service");
      this.nj = a.get("uri-fragment");
      this.vb = a.get("dom-monitor");
      this.Za = b;
      this.xd = b.xd;
      this.bn = this.xd.querySelector(".js-postField");
      this.P7 = this.La.ma().querySelector(".js-notesPositionContainer");
      this.Zd = a.get("quotes-data");
      this.Te = a.get("notes-data");
      this.Te.subscribe("new_note_list", this.Xna,
        this);
      this.zi = a.get("responses-data");
      this.Sk = null;
      this.Ie = new fWa(this.xd.querySelector(".js-notesSource"));
      this.QC = this.Tg = this.tL = null;
      this.Tg = new Q$(a, b, this.Ie, this.P7);
      this.track(this.Tg);
      this.QC = this.Tg.ma();
      this.Ph = this.bV = null;
      this.oe = c
    },
    U$ = function(a, b) {
      if (a.isActive()) {
        var c = (b = b || a.bV) && b.oO,
          d = b && b.noteId;
        c && (a.Ou(c), d && a.Te.co(d, c) && a.Ph && z.u(a.Ph, function() {
          T$(this, c, null, d)
        }, a));
        wVa(a.nj)
      } else a.bV = b || null
    },
    T$ = function(a, b, c, d, e, g) {
      var h = {
        Bj: !0,
        J_: 767 >= window.innerWidth
      };
      a.wW();
      c = new M$(a.qa,
        a.Za, b, d || "", c || null, a.Ie, e || null, g || null);
      c.subscribe("set-active-highlight", a.F8, a);
      c.subscribe("reset-highlight", a.Yqa, a);
      c.subscribe("close", a.wW, a);
      b = g && g.Qa ? g.Qa : a.Ie.get(b);
      g = z.Jna(a.Yja);
      g.pm = b;
      b = g.FA(c);
      b.hE = h;
      h = b.KQ(a.im.bind(a));
      h.mL = !0;
      a.Sk = h.na()
    },
    MWa = function(a, b, c) {
      var d = a.Za.bi(H$(a.Ie, b));
      if (d && 4 != d.type) {
        z.Sx(d, 4);
        if (c) {
          if (!bWa(c, d)) return;
          z.Qx(d, z.xx(c.startIndex, c.endIndex, c.id))
        }
        c = a.Za.jc();
        var e = a.Za.eb();
        c = {
          mode: c ? "edit" : "view",
          Mi: z.jy(e),
          media: null,
          Gk: null,
          sections: !0,
          Ej: !1,
          Aj: !1,
          pk: !1,
          pf: !1,
          postId: e.id
        };
        a.Ie.get(b).innerHTML = z.pz(d, z.Kr, c)
      }
    },
    NWa = function(a, b) {
      var c = z.dt();
      if (!c || c.isCollapsed())
        if (b && (c = b), !c || c.isCollapsed()) return null;
      b = c.Ig();
      var d = hWa(a.Ie, b);
      if (!d) return null;
      a = (b = z.ax(b, z.rH, d)) && a.Za.bi(b);
      if (!b) return null;
      var d = z.UC(c, b, !0),
        e = z.UC(c, b, !1);
      return -1 == d || -1 == e ? null : new cWa(c, b, new z.Dz({
        anchor: b.getAttribute("name"),
        startIndex: d,
        endIndex: e,
        content: a.Ca().substring(d, e)
      }))
    },
    OWa = function() {},
    PWa = function(a, b, c) {
      var d;
      b = (a.post.creator.userId ==
        c.currentUser.userId || (null == a.post.homeCollection ? null :
          null == a.post.homeCollection.virtuals ? null : null == a.post.homeCollection
          .virtuals.permissions ? null : a.post.homeCollection.virtuals.permissions
          .canManageAll)) && a.post.virtuals.responsesCreatedCount >= c.j.yda;
      d = "" + (
        '\x3cdiv class\x3d"container u-maxWidth740"\x3e\x3cdiv class\x3d"responsesStreamWrapper u-maxWidth640 u-hide js-responsesStreamWrapper"\x3e\x3cdiv class\x3d"container u-maxWidth640 responsesStream-title u-paddingTop15"\x3e\x3cdiv class\x3d"row"\x3e' +
        z.A(z.kp({
          title: (0, z.O)("" + z.A(z.po())),
          Pz: !0,
          yf: (0, z.O)("" + (c.supportsEdit ? b ? z.A(z.Rm({
            Me: !0,
            action: "show-responses-stream-editor",
            l: "js-showResponsesStreamEditorButton",
            o: (0, z.O)("" + z.A(z.lxa()))
          }, c)) : "" : ""))
        }, c)) + "\x3c/div\x3e\x3c/div\x3e");
      if (c.supportsEdit) {
        var e;
        e = z.y;
        var g;
        c.isAuthenticated ? g = z.A(z.Fxa({
          ot: (0, z.O)("" + (a.post.virtuals.responsesCreatedCount ? z.A(
            z.cV()) : z.A(z.FAa())))
        }, c)) : (g = a || {}, g = "" + ('\x3cdiv class\x3d"' + z.E(z.D(
            "u-paddingTop30 u-paddingBottom30 u-paddingLeft0 u-paddingRight0 u-borderBottomLightest js-responsesLoggedOutPrompt"
          )) +
          '"\x3e' + z.A(z.Vm({
            icon: (0, z.O)("" + z.A(z.om())),
            ua: !0,
            hh: !0,
            ec: !0,
            Rd: (0, z.M)("" + z.G(z.lk(z.C({
              SP: !0
            }, g), 0, c))),
            text: (0, z.O)("" + z.A(z.cV())),
            l: "button--loggedOutPrompt",
            source: "logged_out_response_prompt"
          }, c)) + "\x3c/div\x3e"), g = (0, z.y)(g));
        e = e(g);
        d +=
          '\x3cdiv class\x3d"container u-maxWidth640 u-marginBottom30 responsesStream-editor cardChromeless' +
          (b ? " u-hide" : "") +
          ' js-responsesStreamEditor"\x3e\x3cdiv class\x3d"row"\x3e\x3cdiv class\x3d"col u-size12of12"\x3e' +
          e + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e"
      }
      b &&
        (b = d, d = '\x3cdiv class\x3d"' + z.E(z.D(
            "container u-maxWidth640 u-clearfix u-paddingTop25 u-paddingBottom25 u-fontSize14 u-textColorNormal streamItem-card streamItem-card--hPadding20 streamItem-card--borderRadius3 cardChromeless js-responseManagementCard"
          )) + '"\x3e\x3cdiv class\x3d"u-size8of12"\x3e' + z.A(z.KAa({
            l: "responsesIcon u-accentColor--iconLight u-verticalAlignMiddle u-marginRight10"
          })), g = a.post.virtuals.responsesCreatedCount, e = "", g = 1 == g ?
          z.n("{$startBold}{$count}{$endBold} response to your story", {
            startBold: "\x3cb\x3e",
            count: z.A(g),
            endBold: "\x3c/b\x3e"
          }) : z.n("{$startBold}{$count}{$endBold} responses to your story", {
            startBold: "\x3cb\x3e",
            count: z.A(g),
            endBold: "\x3c/b\x3e"
          }), e += g, e = (0, z.y)(e), d = d + z.A(e) +
          '\x3c/div\x3e\x3cdiv class\x3d"u-size4of12"\x3e\x3cspan class\x3d"u-floatRight u-marginTop4 u-marginLeft10"\x3e',
          a = (0, z.M)("" + z.G(z.mV(a, c))), e = z.n("Manage responses"), e =
          (0, z.y)("" + e), d = b + (d + z.A(z.P({
              href: a,
              o: (0, z.O)("" + z.A(e)),
              l: "link--accent u-accentColor--textNormal u-accentColor--textDarken"
            },
            c)) + "\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e"));
      a = d;
      b =
        '\x3cdiv class\x3d"container u-maxWidth640 u-marginBottom30 u-borderTopLighter u-hide js-noOtherResponses"\x3e\x3cdiv class\x3d"row"\x3e\x3cdiv class\x3d"col u-size12of12"\x3e\x3cdiv class\x3d"u-paddingTop20 u-paddingBottom25"\x3e\x3cdiv class\x3d"u-inlineBlock u-verticalAlignTop u-paddingRight10"\x3e' +
        z.A(z.fp({
          Df: !0,
          Ve: !0
        }, c)) +
        '\x3c/div\x3e\x3cdiv class\x3d"u-inlineBlock"\x3e\x3cdiv class\x3d"u-lineHeight36 u-textColorNormal u-contentSerifRegular"\x3e';
      d = z.n("No responses yet");
      d = (0, z.y)("" + d);
      b = b + z.A(d) +
        '\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"responsesStream js-responsesStream"\x3e\x3c/div\x3e\x3cdiv class\x3d"container u-maxWidth640 u-hide js-showOtherResponses"\x3e\x3cdiv class\x3d"row"\x3e';
      d = z.n("Show all responses");
      d = (0, z.y)("" + d);
      d = a + (b + z.A(z.Rm({
          action: "show-other-responses",
          o: (0, z.O)("" + z.A(d)),
          isPrimary: !0,
          l: "responsesStream-showOtherResponses cardChromeless u-sizeFullWidth"
        }, c)) +
        '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"responsesStream js-responsesStreamOther"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'
      );
      return (0, z.y)(d)
    },
    V$ = function(a) {
      z.S.call(this);
      this.Sa = a.get("screen-request");
      this.wa = null;
      this.VX = a.get("screen-view-state");
      this.qa = a;
      this.T8 = this.aX = !1;
      this.NV = this.uc = null
    },
    W$ = function(a) {
      z.DD.call(this);
      this.Pw = a
    },
    QWa = function(a, b, c) {
      a = z.ra(a) ? new z.Gd(a) : a;
      (a = ZVa(a, b, c || {})) && (new W$(a)).focus()
    },
    X$ = function(a) {
      this.la = a.get("request");
      this.nj = a.get("uri-fragment");
      this.ha = a.get("route-builder")
    },
    RWa = function(a, b, c) {
      c = new z.kk(c.authBaseUrl);
      a = new z.Gd(c.rm(a));
      z.mw(a, b);
      return a
    },
    SWa = function(a,
      b, c) {
      b.content = b.content.replace(/“/g, "‘").replace(/”/g, "’").replace(
        /„/g, "‚").replace(/'/g, "’");
      var d = String(a(b, null, c)),
        e = Y$(d) - 140;
      0 < e && (b.content = z.Ci(b.content, b.content.length - e), d = String(
        a(b, null, c)));
      return d
    },
    Y$ = function(a) {
      var b = a.length;
      a = a.match(TWa);
      if (!a) return b;
      for (var c = 0; c < a.length; c++) b += 23 - a[c].length;
      return b
    },
    Z$ = function(a) {
      z.Or.call(this);
      this.qa = a;
      this.QB = a.get("dialog");
      this.la = a.get("request");
      this.ha = a.get("route-builder");
      this.ra = a.get("butter-bar");
      this.oE = this.ya = this.$u =
        this.wa = null;
      this.QJ = !1
    },
    VWa = function(a) {
      var b = a.ya.query(".js-tweetEditor-image"),
        c = a.ya.query(".js-tweetEditor-imageContainer"),
        d = a.ya.query(".js-tweetEditor-imageStatus");
      z.dd(c, "u-hide");
      var e = UWa(a);
      e.base64 = !0;
      z.v(z.u(a.la.post(z.nC(LVa), e, {
        Uy: !1,
        withCredentials: !1
      }), function(a) {
        b.src = "data:image/png;base64," + a;
        z.gd(c, "u-hide");
        z.dd(d, "u-hide");
        this.QJ = !0
      }, a), function(a) {
        z.wD(a);
        z.mC(d, NVa)
      }, a)
    },
    WWa = function(a, b) {
      return 140 >= Y$(b) ? !0 : (b = a.ya.query(".js-tweetEditor-text"), (
          new z.VD(b, {
            name: "shimmy-shake",
            duration: 400
          })).start(), a = a.ya.query(".js-tweetEditor-error"), z.mC(a, RVa), !
        1)
    },
    UWa = function(a) {
      var b = a.wa,
        c = a.$u.RAa;
      a = a.$u.QAa;
      var d = b.creator,
        e = b.approvedHomeCollection,
        g = z.Kr,
        h = null;
      e && (h = e.image);
      var l = null;
      e && e.logo && e.logo.imageId && (l = e.logo.imageId);
      var p = null;
      e && e.tintColor && 2 == e.colorBehavior && e.logo && e.logo.imageId &&
        (p = e.tintColor);
      var r = null;
      e && e.tintColor && (r = z.zya(e.tintColor), r = z.Rw(r, .6).color);
      return new w$({
        content: c,
        altText: a,
        title: b.title,
        author: d && d.name,
        date: z.xi(b.createdAt,
          g),
        authorAvatarId: d && d.imageId,
        collection: e && e.name,
        collectionAvatarId: h ? h.imageId : null,
        collectionLogoId: l,
        collectionBackgroundColor: p,
        collectionHighlightColor: r,
        version: 2
      })
    },
    $$ = function(a) {
      this.la = a.get("request");
      this.nj = a.get("uri-fragment");
      this.ha = a.get("route-builder");
      this.qa = a
    };
  z.m(o$, z.le);
  o$.prototype.vj = function(a) {
    var b = {};
    z.TJ(this, b, a.bc(), "");
    return b
  };
  o$.prototype.Gb = function(a, b) {
    if (!a || !b) return null;
    var c = new a;
    Object.keys(b).forEach(function(a) {
      for (var e = a.split(/[[\]]+/).filter(function(a) {
          return !!a
        }), g = c, h = e.shift(); h;) {
        var l = z.oj(g, h);
        if (!l) break;
        var p = l.g();
        if (l.oa()) {
          var r = z.ij(g, h) || [],
            t = e.shift(),
            x = Number(t);
          if (void 0 === t || !Number.isInteger(x) || 0 > x) break;
          if (p.prototype instanceof z.cj) l = r[x], l || (l = new p, r[
            x] = l), z.K(g, h, r), g = l;
          else {
            if (void 0 !== e.shift()) break;
            p = rVa(b[a], l);
            r[x] = p;
            z.K(g, h, r)
          }
        } else if (p.prototype instanceof z.cj) r = z.ij(g,
          h), r || (r = new p, z.K(g, h, r)), g = r;
        else {
          if (void 0 !== e.shift()) break;
          p = rVa(b[a], l);
          z.K(g, h, p)
        }
        h = e.shift()
      }
    });
    return c
  };
  z.q(p$, z.uj);
  z.f = p$.prototype;
  z.f.aa = function() {
    return ""
  };
  z.f.ba = function() {
    return ""
  };
  z.f.eO = z.k(593);
  z.f.ea = function() {
    return p$.prototype
  };
  z.f.ca = {
    name: "PlacementsResponse",
    fa: !1,
    fields: {
      placements: {
        name: "placements",
        g: function() {
          return z.pR
        },
        oa: z.U,
        h: 1
      }
    },
    ga: {}
  };
  z.q(q$, z.L);
  q$.prototype.aa = function() {
    return ""
  };
  q$.prototype.ba = function() {
    return ""
  };
  q$.prototype.ea = function() {
    return q$.prototype
  };
  q$.prototype.ca = {
    name: "PlacementsRequestQuery",
    fa: !1,
    fields: {
      requestContext: {
        name: "requestContext",
        g: function() {
          return z.JI
        },
        h: 1
      },
      slots: {
        name: "slots",
        g: function() {
          return z.LI
        },
        oa: z.U,
        h: 2
      }
    },
    ga: {}
  };
  z.A_.prototype.YP = z.X(608, function(a) {
    a != this.aK && this.lb && (this.lb.mh.contentEditable = a);
    this.aK = a
  });
  z.PL.prototype.IZ = z.X(600, function(a) {
    a = r$(a);
    if (!a) return null;
    a = s$(a) && s$(a).Em();
    return a ? (a = a.Wb()) && a.length ? a[0].getName() : null : null
  });
  z.rK.prototype.KQ = z.X(599, function(a) {
    this.im = a;
    return this
  });
  z.bM.prototype.KQ = z.X(598, function(a) {
    this.im = a;
    return this
  });
  p$.prototype.eO = z.X(593, function() {
    return z.I(this, "placements")
  });
  z.UJ.prototype.eO = z.X(592, function(a, b) {
    var c = this;
    a = tVa(uVa(new q$, a), b);
    a = (new o$).vj(a);
    var d = this.ha.ia(z.Xoa, {}, a);
    return z.VJ(this, d, function() {
      return z.u(c.la.get(d, {
        background: !0
      }), function(a) {
        a = c.za.Fb(p$, a);
        c.sa.Jb(a);
        return a
      })
    })
  });
  z.$D.prototype.co = z.X(455, function() {
    return z.I(this, "note")
  });
  z.QJ.prototype.co = z.X(454, function(a) {
    return this.kc("Note", a)
  });
  z.Bz.prototype.Jv = z.X(453, function() {
    return z.I(this, "replyId")
  });
  z.$D.prototype.Jv = z.X(452, function() {
    return z.I(this, "replyId")
  });
  z.zz.prototype.Aw = z.X(451, function(a) {
    return z.K(this, "highlight", a)
  });
  z.zz.prototype.UN = z.X(450, function() {
    return z.I(this, "highlight")
  });
  z.zz.prototype.ut = z.X(449, function(a) {
    return z.K(this, "author", a)
  });
  z.Bz.prototype.ut = z.X(448, function(a) {
    return z.K(this, "author", a)
  });
  z.zz.prototype.dF = z.X(447, function() {
    return z.I(this, "author")
  });
  z.Bz.prototype.dF = z.X(446, function() {
    return z.I(this, "author")
  });
  z.zz.prototype.oz = z.X(445, function() {
    return z.I(this, "highlightId")
  });
  z.zz.prototype.mA = z.X(444, function(a) {
    return z.K(this, "authorId", a)
  });
  z.Bz.prototype.mA = z.X(443, function(a) {
    return z.K(this, "authorId", a)
  });
  z.zz.prototype.Fw = z.X(442, function(a) {
    return z.K(this, "state", a)
  });
  z.Bz.prototype.Fw = z.X(441, function(a) {
    return z.K(this, "state", a)
  });
  z.cE.prototype.Fw = z.X(440, function(a) {
    return z.K(this, "state", a)
  });
  z.zz.prototype.Rf = z.X(439, function() {
    return z.I(this, "noteId")
  });
  z.Bz.prototype.Rf = z.X(438, function() {
    return z.I(this, "noteId")
  });
  z.$D.prototype.Rf = z.X(437, function() {
    return z.I(this, "noteId")
  });
  z.mv.prototype.Dd = z.X(355, function() {
    return z.I(this, "catalogId")
  });
  z.mP.prototype.Dd = z.X(354, function() {
    return z.I(this, "catalogId")
  });
  z.fP.prototype.Dd = z.X(353, function() {
    return z.I(this, "catalogId")
  });
  z.dP.prototype.Dd = z.X(352, function() {
    return z.I(this, "catalogId")
  });
  z.NQ.prototype.Dd = z.X(351, function() {
    return z.I(this, "catalogId")
  });
  z.GQ.prototype.Dd = z.X(350, function() {
    return z.I(this, "catalogId")
  });
  z.KO.prototype.Dd = z.X(349, function() {
    return z.I(this, "catalogId")
  });
  z.wQ.prototype.Dd = z.X(348, function() {
    return z.I(this, "catalogId")
  });
  z.AP.prototype.Dd = z.X(347, function() {
    return z.I(this, "catalogId")
  });
  z.oQ.prototype.Dd = z.X(346, function() {
    return z.I(this, "catalogId")
  });
  z.nQ.prototype.Dd = z.X(345, function() {
    return z.I(this, "catalogId")
  });
  z.mQ.prototype.Dd = z.X(344, function() {
    return z.I(this, "catalogId")
  });
  z.gw.prototype.Dd = z.X(343, function() {
    return z.I(this, "catalogId")
  });
  z.$D.prototype.Dd = z.X(342, function() {
    return z.I(this, "catalogId")
  });
  z.eR.prototype.Dd = z.X(341, function() {
    return z.I(this, "catalogId")
  });
  z.$M.prototype.Dd = z.X(340, function() {
    return z.I(this, "catalogId")
  });
  z.Vt.prototype.fO = z.X(84, function() {
    return z.I(this, "point")
  });
  z.zj.prototype.Dm = z.X(21, function() {
    return z.I(this, "offset")
  });
  z.SK.prototype.Dm = z.X(20, function() {
    return this.zK
  });
  u$.prototype.fO = function() {
    var a = window.document.body;
    return z.Xg(a, this.sh.node) ? this.sh : this.Qj && z.Xg(a, this.Qj) ?
      z.ER(this.zK, this.Qj) : this.ne && (a = z.ex(this.Uja, this.ne)) ? z
      .ER(this.zK, a) : null
  };
  z.q(v$, z.cs);
  v$.prototype.xG = function() {
    if (!this.jj) return null;
    var a = this.jj.fO();
    if (!a) return null;
    var b = this.Vk.fO();
    return b ? z.Ks(a.node, a.offset, b.node, b.offset) : null
  };
  z.q(w$, z.L);
  z.f = w$.prototype;
  z.f.aa = function() {
    return ""
  };
  z.f.ba = function() {
    return ""
  };
  z.f.Ua = function() {
    return z.I(this, "content")
  };
  z.f.Nc = function(a) {
    return z.K(this, "content", a)
  };
  z.f.Ib = function() {
    return z.I(this, "title")
  };
  z.f.Uc = function(a) {
    return z.K(this, "title", a)
  };
  z.f.dF = function() {
    return z.I(this, "author")
  };
  z.f.ut = function(a) {
    return z.K(this, "author", a)
  };
  z.f.getDate = function() {
    return z.I(this, "date")
  };
  z.f.setDate = function(a) {
    return z.K(this, "date", a)
  };
  z.f.ub = function() {
    return z.I(this, "collection")
  };
  z.f.setVersion = function(a) {
    return z.K(this, "version", a)
  };
  z.f.R1 = function(a) {
    return z.K(this, "template", a)
  };
  z.f.hf = function() {
    return z.I(this, "subtitle")
  };
  z.f.mi = function(a) {
    return z.K(this, "subtitle", a)
  };
  z.f.ea = function() {
    return w$.prototype
  };
  z.f.ca = {
    name: "TextshotInfo",
    fa: !1,
    fields: {
      content: {
        name: "content",
        g: z.V,
        h: 1
      },
      altText: {
        name: "altText",
        g: z.V,
        h: 2
      },
      title: {
        name: "title",
        g: z.V,
        h: 3
      },
      author: {
        name: "author",
        g: z.V,
        h: 4
      },
      date: {
        name: "date",
        g: z.V,
        h: 5
      },
      authorAvatarId: {
        name: "authorAvatarId",
        g: z.V,
        h: 6
      },
      collection: {
        name: "collection",
        g: z.V,
        h: 7
      },
      collectionAvatarId: {
        name: "collectionAvatarId",
        g: z.V,
        h: 8
      },
      collectionLogoId: {
        name: "collectionLogoId",
        g: z.V,
        h: 9
      },
      collectionBackgroundColor: {
        name: "collectionBackgroundColor",
        g: z.V,
        h: 10
      },
      collectionHighlightColor: {
        name: "collectionHighlightColor",
        g: z.V,
        h: 11
      },
      version: {
        name: "version",
        g: z.W,
        h: 12
      },
      base64: {
        name: "base64",
        g: z.hN,
        h: 13
      },
      template: {
        name: "template",
        g: z.V,
        h: 14
      },
      mainStat: {
        name: "mainStat",
        g: z.V,
        h: 15
      },
      mainStatTitle: {
        name: "mainStatTitle",
        g: z.V,
        h: 16
      },
      subtitle: {
        name: "subtitle",
        g: z.V,
        h: 17
      },
      icon: {
        name: "icon",
        g: z.V,
        h: 18
      },
      imgKey: {
        name: "imgKey",
        g: z.V,
        h: 19
      }
    },
    ga: {}
  };
  z.q(x$, z.S);
  z.f = x$.prototype;
  z.f.xj = function() {
    return this.fm.xj()
  };
  z.f.ka = function() {
    x$.pa.ka.call(this);
    z.HD(this, this.VT, "data-redirect-type-quote", this.hna, this);
    this.Ka(this.xd, "click", this.iu, this);
    z.lL(this.Za) && z.rC() && this.Ka(this.xd, "mouseover", this.Kka, this);
    this.Za.eb().Fs() && !this.Za.jc() && z.v(this.Zd.load(this.Za.Ia()), z
      .wD);
    var a = this.xj();
    a && (z.HD(this, a, "quote", this.Fka, this), z.HD(this, a,
      "quote-respond", this.Gka, this), z.HD(this, a, "show", this.KX,
      this), z.HD(this, a, "hide", this.Ana, this))
  };
  z.f.hna = function(a) {
    var b = z.cL(this.fm, this.xj().Wu);
    b && (a.url = new z.Gd(this.ha.ia(z.Nra, {
      postId: this.Za.Ia()
    }, {
      paragraphs: JSON.stringify([b.Rv.Gb().bc()]),
      startOffset: b.start,
      endOffset: b.end
    })))
  };
  z.f.iu = function(a) {
    z.ax(a.target, function(a) {
      if (a === this.xd) return !0;
      var c = z.AH(a);
      if (3 == c) return !0;
      if (7 == c) {
        if (c = VVa(this, a))
          if (y$(this, c), z.rC()) A$(this, c);
          else {
            var d = new z.TI;
            TVa(this, c, a, d)
          }
        return !0
      }
      return !1
    }.bind(this))
  };
  z.f.Kka = function(a) {
    z.ax(a.target, function(a) {
      if (a === this.xd) return !0;
      var c = z.AH(a);
      if (3 == c) return !0;
      if (7 == c) {
        c = z.dt();
        if (!(c && !c.isCollapsed() || this.xj() && this.xj().Jl()) &&
          (c = VVa(this, a))) {
          var d = this.xd.querySelector('.markup--quote[name~\x3d"' + c
            .ci() + '"]');
          a = new z.mK(a, 100);
          TVa(this, c, d, a);
          y$(this, c)
        }
        return !0
      }
      return !1
    }.bind(this))
  };
  z.f.KX = function() {
    var a = z.dt();
    a && !a.isCollapsed() && y$(this, null);
    z.lL(this.Za) && (a = z.cL(this.fm, this.xj().Wu)) && (a = z.Mla(this.Zd,
      a.Rv, a.start, a.end), z.jd(this.xj().Oa().querySelector(
      ".js-highlightMenuQuoteButton"), "is-active", !!a))
  };
  z.f.Ana = function() {
    this.Mn && y$(this, null)
  };
  z.f.Fka = function() {
    if (z.lL(this.Za)) {
      var a = z.YK(this.xj());
      if (a) {
        var b = a.range,
          c = a.wya,
          d = z.bd(this.xj().Oa().querySelector(
            ".js-highlightMenuQuoteButton"), "is-active"),
          a = z.cL(this.fm, b);
        z.v(z.u(this.Zd.toggle(a.Rv, a.start, a.end, !c), function(a) {
          z.Dya();
          d ? z.$K(this.xj()) : A$(this, a);
          var b = c ? "selection_menu" : "quote_click_menu";
          B$(this, a.ci(), !d, b)
        }, this), z.wD)
      }
    }
  };
  z.f.Gka = function() {
    if (z.lL(this.Za) && z.Kr.supportsEdit) {
      var a = z.YK(this.xj());
      if (a) {
        var b = z.cL(this.fm, a.range);
        z.v(z.u(this.Zd.create(b.Rv, b.start, b.end, 1, !0), function(a) {
          B$(this, a.ci(), !0, "selection_menu_quote_respond");
          this.va("quote-respond", a, b.Rv.name)
        }, this), z.wD)
      }
    }
  };
  z.f.Rka = function(a) {
    var b = this.Mn,
      c = z$(this, b),
      d = b.gd(),
      e = b.ce(),
      b = a.query(".js-quoteAttributions-pileOn"),
      g = z.bd(b, "is-active");
    z.v(z.u(this.Zd.toggle(c, d, e, !0), function(b) {
      var l = a.query(".js-quoteAttributions-pileOn");
      z.ld(l, "is-active");
      if (l = z.UK(this.Zd, c, d, e)) {
        var p = SVa(this, l),
          r = a.query(".js-quoteAttributions-info");
        z.mC(r, FVa, p)
      } else a.Cc();
      !g && z.rC() && (a.Cc(), A$(this, l));
      l = z.rC() ? "quote_hover" : "quote_click_mobile";
      B$(this, b.ci(), !g, l)
    }, this), z.wD)
  };
  z.f.Ska = function() {
    if (z.lL(this.Za) && z.Kr.supportsEdit) {
      var a = z$(this, this.Mn),
        b = this.Mn.gd(),
        c = this.Mn.ce();
      z.v(z.u(this.Zd.create(a, b, c, 1, !0), function(b) {
        B$(this, b.ci(), !0, "quote_respond");
        this.va("quote-respond", b, a.name)
      }, this), z.wD)
    }
  };
  z.f.Tka = function() {
    var a = XVa(this, this.Mn);
    a && z.Wla(this.fm, a)
  };
  z.f.y8 = function() {
    var a = new v$(this.xd),
      b = this.Zd.Qr,
      c = Object.keys(b).concat(this.Z4);
    z.cb(c);
    c.forEach(function(a) {
      var c = b[a] || [],
        g = this.Za;
      if (g = (a = g.xd && z.ex(g.xd, a)) && this.Za.bi(a)) EVa(g, c),
        a.innerHTML = z.pz(g, z.Kr, z.bma(this.Za)), z.Sna(this.eqa, a)
    }, this);
    this.Z4 = Object.keys(b);
    (a = a.restore()) && a.select()
  };
  z.q(C$, z.DD);
  z.f = C$.prototype;
  z.f.load = function(a) {
    if (!z.yv()) return z.Uc([]);
    this.Ya = a;
    this.Qg || (this.Qg = z.v(z.u(this.jm.get(this.ha.ia(z.Fra, {
      postId: a
    }), {
      background: !0
    }), this.cqa, this), z.wD));
    return this.Qg.Ic()
  };
  z.f.xo = function() {
    return this.W4
  };
  z.f.zl = function() {
    return this.V7
  };
  z.f.UN = function(a) {
    return this.o6[a] || null
  };
  z.f.co = function(a, b) {
    return z.iS(D$(this, b), a)
  };
  z.f.Aw = function(a, b) {
    this.o6[a] = b
  };
  z.f.Ia = function() {
    return this.Ya
  };
  z.f.cqa = function(a) {
    var b = a.references.User;
    this.V7 = a.post.visibility;
    var c = a.value;
    if (c)
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        if ("HIDDEN" != e.state) {
          var g = e.replies,
            h = b;
          if (g)
            for (var l = 0; l < g.length; l++) {
              var p = g[l],
                r = p.authorId || null;
              p.author = r && h[r] || null
            }
          g = e.anchor;
          h = e.authorId || null;
          e.author = h && b[h] || null;
          g = D$(this, g);
          e = z.Az(e);
          g.add(z.mI(this.sa, e))
        }
      }
    if (a = a.highlights)
      for (b = 0; b < a.length; b++) this.Aw(a[b].id, z.Ot.Gb(z.Dz, a[b]));
    this.W4 = !0
  };
  z.m(G$, z.S);
  G$.prototype.ka = function() {
    var a = this;
    z.S.prototype.ka.call(this);
    z.u(this.Sa.eO(this.oL, this.Qpa), function(b) {
      b.placements && b.placements.forEach(a.zla, a)
    })
  };
  G$.prototype.zla = function(a) {
    if (this.isActive()) {
      var b = null;
      switch (a.location) {
        case 1:
          b = this.La.query(".js-postFooterPlacements");
          if (!b) break;
          z.mC(b, z.ST, {
            items: a.items,
            context: 9
          });
          z.T(b).w("show-more-recommendations", this.vsa, this);
          break;
        case 2:
          b = this.La.query(".js-readNextMetabarRight");
          if (!b) break;
          z.mC(b, z.ST, {
            items: a.items,
            context: 2
          });
          break;
        case 6:
          (b = this.La.query(".js-postPromotionWrapper")) && z.mC(b, z.ST, {
            items: a.items,
            context: 2
          })
      }
      b && dWa(this, b)
    }
  };
  G$.prototype.vsa = function(a) {
    z.pE(z.iva, {});
    var b = this.La.query(".js-moreRecommendations");
    b && (z.hx(b), z.gx(a.target))
  };
  eWa.prototype.gN = function(a, b, c) {
    return new x$(a, b, c)
  };
  fWa.prototype.get = function(a) {
    return H$(this, a)
  };
  z.q(I$, z.A_);
  z.f = I$.prototype;
  z.f.OD = !1;
  z.f.Sx = "";
  z.f.PD = 0;
  z.f.Gl = z.U;
  z.f.Rf = function() {
    return this.tV
  };
  z.f.save = function() {
    this.Ua().length <= this.$k && this.ik()
  };
  z.f.sb = function() {
    (0, window.clearTimeout)(this.PD);
    I$.pa.sb.call(this)
  };
  z.f.ka = function() {
    function a(a) {
      a.stopPropagation()
    }
    I$.pa.ka.call(this);
    this.Sx = this.Ua();
    this.Nc(this.Sx);
    this.hv(13, this.xV, this);
    this.hv(27, this.yV, this);
    this.lb.Ka("blur", this.wV, !1, this);
    var b = this.lb.Oa();
    z.GC(b, "keydown", a);
    z.GC(b, "keyup", a);
    z.GC(b, "keypress", a)
  };
  z.f.X0 = function(a) {
    return a
  };
  z.f.ik = function() {
    if (this.isEnabled()) {
      var a = this.Ua().trim();
      if (a) {
        this.YP(!1);
        var b = this.Naa(),
          a = this.Maa(a);
        this.va("saving", a);
        z.Mc(z.v(z.u(this.jm.post(b, a.bc()), this.aoa, this), this.Zna.bind(
          this, a)), this.YP.bind(this, !0))
      }
    }
  };
  z.f.aoa = function(a) {
    this.va("save", this.X0(a.value))
  };
  z.f.Zna = function(a, b) {
    this.va("fail", a);
    this.ya.error(iWa());
    z.wD(b)
  };
  z.f.xV = function(a) {
    if (this.$r && z.o0(this.$r)) return !1;
    a.shiftKey || (a.preventDefault(), this.save());
    return !0
  };
  z.f.yV = function(a) {
    if (this.$r && z.o0(this.$r)) return !1;
    a.preventDefault();
    this.Nc(this.Sx);
    this.va("cancel");
    return !1
  };
  z.f.wV = function() {
    this.OD && (this.Ua().length >= this.$k ? (0, window.confirm)(this.Paa()) ?
      (this.Nc(this.Sx), this.va("cancel")) : this.focus() : this.PD = (0,
        window.setTimeout)(this.ik.bind(this), 100))
  };
  z.q(J$, I$);
  z.f = J$.prototype;
  z.f.bS = null;
  z.f.q4 = null;
  z.f.cS = null;
  z.f.cj = null;
  z.f.oU = null;
  z.f.nU = null;
  z.f.n6 = null;
  z.f.Aw = function(a) {
    this.cj = a;
    this.oU = a.startIndex;
    this.nU = a.endIndex;
    this.n6 = a.content;
    return this
  };
  z.f.Paa = function() {
    var a = z.n(
      "Your note is too long; do you want to abandon your changes?");
    return (0, z.y)("" + a)
  };
  z.f.X0 = function(a) {
    var b = z.kC();
    a = z.Az(a).ut(b).mA(b.gb());
    this.cj && a.oz() && this.Te.Aw(a.oz(), this.cj);
    var b = this.Te,
      c;
    c = z.mI(b.sa, a);
    D$(b, c.Td()).add(c);
    return a
  };
  z.f.Naa = function() {
    return this.Rf() ? this.ha.ia(z.Gra, {
      postId: this.Ya,
      noteId: this.Rf()
    }) : this.ha.ia(z.Era, {
      postId: this.Ya
    })
  };
  z.f.Maa = function(a) {
    var b = z.kC();
    a = (new z.zz({
      content: a,
      anchor: this.bS,
      anchorContent: this.q4,
      anchorImage: this.cS ? this.cS.bc() : null,
      replies: [],
      createdAt: Date.now()
    })).ut(b);
    null != this.oU && null != this.nU && (b = new z.Dz({
      anchor: this.bS,
      startIndex: this.oU,
      endIndex: this.nU,
      content: this.n6
    }), a.Aw(b));
    return a
  };
  z.q(K$, I$);
  K$.prototype.Paa = function() {
    var a = z.n(
      "Your reply is too long; do you want to abandon your changes?");
    return (0, z.y)("" + a)
  };
  K$.prototype.X0 = function(a) {
    var b = z.kC();
    a = z.Cz(a).ut(b).mA(b.gb());
    z.I(this.Te.co(a.Rf(), this.ne), "replies").push(a);
    return a
  };
  K$.prototype.Naa = function() {
    return this.u8 ? this.ha.ia(z.Jra, {
      postId: this.Ya,
      noteId: this.Rf(),
      replyId: this.u8
    }) : this.ha.ia(z.Ira, {
      postId: this.Ya,
      noteId: this.Rf()
    })
  };
  K$.prototype.Maa = function(a) {
    var b = z.kC();
    return (new z.Bz({
      replyId: "",
      postId: this.Ya,
      noteId: this.Rf(),
      content: a,
      createdAt: Date.now()
    })).ut(b)
  };
  z.q(M$, z.S);
  z.f = M$.prototype;
  z.f.ka = function() {
    M$.pa.ka.call(this);
    z.T(this.ma()).w("show-note-editor", this.dX, this).w(
      "hide-note-editor", this.kU.bind(this, !0)).w("show-reply-editor",
      this.Isa, this).w("hide-reply-editor", this.mla, this).w(
      "save-note", this.pra, this).w("save-reply", this.rra, this).w(
      "highlight-quote", this.pla, this).w("dismiss-note", this.d5.bind(
      this, !0), this).w("delete-note", this.d5.bind(this, !1), this).w(
      "delete-reply", this.dja, this).w("previous-highlight-tip", this.aqa,
      this).w("next-highlight-tip", this.Mma, this);
    wWa(this);
    this.zi && m$(this.zi) && (vWa(this), z.HD(this, m$(this.zi), "add",
      this.Yna, this));
    if (this.pW && this.z6 && this.B6) {
      var a = this.query(".js-inlineNewPostControl"),
        b = this.pW,
        c = this.Za.Ia(),
        d = new z.bW(this.qa);
      d.QG("web-inline-quote-responses");
      d.Wa(a);
      d.TB = !0;
      d.cT = !0;
      d.aT = !0;
      d.R1(GVa);
      d.Rx = b;
      d.YG(c);
      z.cW(d, !0);
      this.uc = d;
      this.uc.na();
      a = O$(this.sD);
      this.va("set-active-highlight", this.ne, a)
    }
    this.cj && (this.dX(), this.mf && this.mf.focus());
    P$(this, 0)
  };
  z.f.xa = function() {
    this.ip && this.ip.$Y();
    (this.cj || this.sD) && this.va("reset-highlight", this.ne, null);
    M$.pa.xa.call(this)
  };
  z.f.sb = function() {
    z.UE(this.ma());
    z.Rg(this.ma());
    z.Qr(this.uc);
    z.Qr(this.mf);
    z.Qr(this.ip);
    z.Rr(z.lb(this.fj));
    this.ip = this.fj = this.mf = this.uc = null;
    M$.pa.sb.call(this)
  };
  z.f.Im = function() {
    if (this.mf && this.mf.Ua()) return !0;
    for (var a = z.lb(this.fj), b = 0; b < a.length; b++)
      if (a[b] && a[b].Ua()) return !0;
    return this.uc && !this.uc.isDismissable() ? !0 : !1
  };
  z.f.Zt = function() {
    var a = [],
      b = [],
      c = [],
      d = this.Wx && (this.cj || this.sD);
    d || (this.qu ? (a = this.Zd ? n$(this.Zd, this.qu.quotes) : [], b =
      this.qu.notes, c = this.qu.responses) : (b = this.Te ? z.uI(D$(
      this.Te, this.ne)) : [], this.tV || (this.Zd ? (a = this.Zd, a =
      n$(a, a.Qr[this.ne] || [])) : a = [], c = this.zi ? t$(this.zi,
      this.ne) : [])));
    return z.oC(sWa, {
      post: this.Za.eb(),
      quotes: a,
      notes: b,
      responses: c,
      A2: !!this.pW,
      eQ: d,
      cH: this.Wx,
      DA: this.z9,
      lza: z.kL(this.Za)
    })
  };
  z.f.Yna = function() {
    var a = this.query(".js-postList"),
      b = z.oC(rWa, {
        responses: t$(this.zi, this.ne)
      });
    z.Sg(b, a);
    vWa(this)
  };
  z.f.dX = function() {
    if (this.Wx) {
      if (!this.mf) {
        var a = this.query(".js-noteEditor"),
          b = z.nC(pWa),
          a = this.mf = new J$(this.qa, a, this.Za.Ia(), null, b),
          b = this.ne,
          c = this.Za.bi(this.Ie.get(this.ne)),
          d = c.Ca(),
          c = 4 == c.type ? c.Ud() : null;
        a.bS = b;
        a.q4 = d;
        a.cS = c;
        (a = this.cj) && this.mf.Aw(a);
        z.HD(this, this.mf, "saving", this.Foa, this);
        z.HD(this, this.mf, "fail", this.yna, this);
        z.HD(this, this.mf, "save", this.zoa, this)
      }
      z.dd(this.query(".js-noteActions"), "is-noteEditorVisible");
      this.mf && this.mf.focus()
    }
  };
  z.f.pra = function() {
    this.mf && this.mf.save()
  };
  z.f.Foa = function(a) {
    this.mf.Nc("");
    var b = this.query(".js-notesList");
    a = {
      note: a,
      post: this.Za.eb(),
      eQ: this.Wx,
      cH: this.Wx
    };
    a = z.oC(L$, a);
    b.appendChild(a);
    z.gd(b, "is-empty");
    wWa(this);
    this.kU()
  };
  z.f.zoa = function(a) {
    var b = this.query(".js-notesList").lastChild;
    a = a.Rf();
    z.dd(b, "js-note-" + a);
    b.setAttribute("data-note-id", a);
    (b = b.querySelector(".js-deleteNote")) && b.setAttribute(
      "data-action-value", a)
  };
  z.f.yna = function() {
    var a = this.query(".js-notesList");
    a.removeChild(a.lastChild);
    z.dd(a, "is-empty");
    this.dX()
  };
  z.f.kU = function(a) {
    a ? this.va("close") : this.mf && (this.mf.Ua() && this.mf.Nc(""), z.gd(
      this.query(".js-noteActions"), "is-noteEditorVisible"))
  };
  z.f.Isa = function(a) {
    (a = N$(a.target)) && this.Wx && xWa(this, a)
  };
  z.f.rra = function(a) {
    a = N$(a.target);
    (a = this.fj[a]) && a.save()
  };
  z.f.Goa = function(a) {
    var b = a.Rf();
    this.fj[b] && this.fj[b].Nc("");
    var c = this.Te.co(b, this.ne).author.userId == a.author.userId,
      d = this.query(".js-note-" + a.Rf() + " .js-repliesList");
    a = {
      note: a,
      post: this.Za.eb(),
      Rba: c
    };
    a = z.oC(L$, a);
    d.appendChild(a);
    z.gd(d, "is-empty");
    yWa(this, b)
  };
  z.f.Aoa = function(a) {
    var b = this.query(".js-note-" + a.Rf()).querySelector(
      ".js-repliesList").lastChild;
    a = a.Jv();
    z.dd(b, "js-reply-" + a);
    (b = b.querySelector(".js-deleteNote")) && b.setAttribute(
      "data-action-value", a)
  };
  z.f.zna = function(a) {
    var b = this.query(".js-note-" + a.Rf() + " .js-repliesList");
    b.removeChild(b.lastChild);
    z.dd(b, "is-empty");
    xWa(this, a.Rf())
  };
  z.f.mla = function(a) {
    (a = N$(a.target)) && yWa(this, a)
  };
  z.f.pla = function(a) {
    a = a.target;
    var b = a.getAttribute("data-quote-creator-id"),
      c = H$(this.Ie, this.ne);
    c && (this.ip && this.ip.$Y(), this.ip = AWa(this, c, a, function() {
      zWa(this, b, !1);
      z.Qr(this.ip);
      this.ip = null
    }), zWa(this, b, !0))
  };
  z.f.ola = function(a) {
    var b = H$(this.Ie, this.ne);
    (a = this.Te.co(a.target.getAttribute("data-note-id"), this.ne)) && b &&
      (b = (b = a.oz()) ? this.Te.UN(b) : null, this.va(
        "set-active-highlight", this.ne, b))
  };
  z.f.qla = function(a) {
    var b = H$(this.Ie, this.ne),
      c;
    c = this.zi;
    a = a.target.getAttribute("data-post-id");
    c = m$(c) ? z.iS(m$(c), a) : null;
    b && c && (b = r$(c)) && (b = s$(b) && s$(b).Em()) && (c = b.Wb()) && c
      .length && (b = O$(b), this.va("set-active-highlight", this.ne, b))
  };
  z.f.JX = function() {
    var a = null;
    this.sD && (a = O$(this.sD));
    this.cj && (a = this.cj);
    this.va("reset-highlight", this.ne, a)
  };
  z.f.d5 = function(a, b) {
    b = b.value;
    var c = this.Te.co(b, this.ne),
      d = this.query(".js-note-" + b);
    if (c && d) {
      z.gx(d);
      this.JX();
      this.tb(".js-note-item").every(function(a) {
        return z.bd(a, "u-hide")
      }) && this.kU(!0);
      var e = E$(this.Te, c, "HIDDEN");
      z.v(e.rk, function(b) {
        this.ra.na(a ? jWa() : kWa(), "error");
        e.yG();
        z.hx(d);
        (400 > b.status || 499 < b.status) && E$(this.Te, c, "NEW")
      }, this);
      z.u(this.ra.na(a ? mWa() : nWa(), {
        type: "success",
        EA: !0
      }), function() {
        this.ra.Cc();
        e.yG();
        E$(this.Te, c, "NEW");
        z.hx(d)
      }, this)
    }
  };
  z.f.dja = function(a) {
    var b = a.value,
      c = this.query(".js-reply-" + b),
      d = N$(a.target);
    if (d && c) {
      z.gx(c);
      var e = F$(this.Te, b, d, this.Za.Ia(), this.ne, "HIDDEN");
      z.v(e.rk, function() {
        this.ra.na(lWa(), "error");
        e.yG();
        z.hx(c);
        F$(this.Te, b, d, this.Za.Ia(), this.ne, "")
      }, this);
      z.u(this.ra.na(oWa(), {
        type: "success",
        EA: !0
      }), function() {
        this.ra.Cc();
        e.yG();
        F$(this.Te, b, d, this.Za.Ia(), this.ne, "");
        z.hx(c)
      }, this)
    }
  };
  z.f.aqa = function() {
    P$(this, this.MJ - 1)
  };
  z.f.Mma = function() {
    P$(this, this.MJ + 1)
  };
  z.q(Q$, z.S);
  z.f = Q$.prototype;
  z.f.ka = function() {
    Q$.pa.ka.call(this);
    var a = [];
    z.kL(this.Za) && a.push(this.Te.load(this.Ya));
    this.G6 || (a.push(this.Zd.load(this.Ya)), a.push(this.zi.load(this.Ya)));
    this.au = z.u(z.u(z.u(z.XU(a), function() {
      this.au = null
    }, this), this.QP, this), this.aia, this);
    z.HD(this, this.vb, "resize-end", this.Hf, this)
  };
  z.f.xa = function() {
    this.au && this.au.cancel();
    Q$.pa.xa.call(this)
  };
  z.f.sb = function() {
    this.au = null;
    Q$.pa.sb.call(this)
  };
  z.f.QP = function() {
    gWa(this.Ie, function(a, b) {
      R$(this, b)
    }, this)
  };
  z.f.Hf = function() {
    gWa(this.Ie, function(a, b) {
      HWa(this, b)
    }, this)
  };
  z.f.aia = function() {
    var a = this.Zd.Bn;
    z.HD(this, a, "add", this.F7, this);
    z.HD(this, a, "remove", this.F7, this);
    (a = m$(this.zi)) && z.HD(this, a, "add", this.woa, this)
  };
  z.f.F7 = function(a) {
    BWa(this, Object.keys(z.Qla(this.Zd, a instanceof Array ? a : [a])))
  };
  z.f.woa = function(a) {
    BWa(this, (a instanceof Array ? a : [a]).map(this.zi.IZ, this.zi))
  };
  z.f.Zt = function(a) {
    var b = window.document.createElement("div");
    b.className = "notesMarkers";
    a.appendChild(b);
    return b
  };
  z.f.UC = function(a, b) {
    z.ub(a, {
      startIndex: Math.min(a.startIndex, b.startIndex),
      endIndex: Math.max(a.endIndex, b.endIndex),
      notes: a.notes.concat(b.notes),
      quotes: a.quotes.concat(b.quotes),
      responses: a.responses.concat(b.responses)
    })
  };
  z.q(S$, z.S);
  z.f = S$.prototype;
  z.f.ka = function() {
    S$.pa.ka.call(this);
    this.Ka(this.La.ma(), "click", this.oma, this, !0);
    z.T(this.QC).w("select-anchor", this.Hoa, this);
    var a = this.Za.eb();
    if (a.Fs() && !this.Za.jc()) {
      var b = z.hv(a),
        b = 2 == a.visibility && b && !z.I(b.lo(),
          "memberOfMembershipPlanId");
      a.allowResponses && !b && z.v(this.zi.load(this.Za.Ia(), "best"), z.wD);
      z.v(this.Zd.load(this.Za.Ia()), z.wD)
    }
    a.lo().xN() && (this.xK = z.u(this.Te.load(this.Za.Ia()), this.boa,
      this));
    this.bV && U$(this);
    z.HD(this, this.kb, "historyUpdate", function() {
        U$(this, z.nL())
      },
      this);
    this.oe && z.HD(this, this.oe, "highlight", this.$na, this)
  };
  z.f.sb = function() {
    z.Qr(this.Tg);
    this.Tg = null;
    z.Qr(this.Sk);
    this.Sk = null;
    this.QC && z.T(this.QC).clear("select-anchor");
    this.xK && this.xK.cancel();
    this.xK = null;
    S$.pa.sb.call(this)
  };
  z.f.qza = function(a, b) {
    T$(this, b, null, null, a)
  };
  z.f.cBa = function() {
    this.Tg && this.Tg.Hf()
  };
  z.f.Im = function() {
    if (!this.Sk) return !1;
    var a = this.Sk.Ua();
    return a ? a.Im() : !1
  };
  z.f.Xna = function(a) {
    a.subscribe("add", this.H9, this);
    a.subscribe("remove", this.H9, this)
  };
  z.f.H9 = function(a) {
    (z.pa(a) ? a : [a]).forEach(function(a) {
      R$(this.Tg, a.Td())
    }, this)
  };
  z.f.boa = function() {
    var a = (0, z.Ja)();
    this.xK = null;
    U$(this, z.nL());
    this.Ka(this.bn, z.FN, this.HV, this);
    z.RF("notes.renderMarkers", (0, z.Ja)() - a)
  };
  z.f.HV = function(a) {
    (a = a.target.getAttribute("name")) && H$(this.Ie, a) && HWa(this.Tg, a)
  };
  z.f.$na = function() {
    if (this.oe) {
      var a = NWa(this, this.oe.Wu);
      z.$K(this.oe);
      a && (a = a.highlight, this.F8(a.anchor, a), T$(this, a.anchor, a))
    }
  };
  z.f.oma = function(a) {
    if (this.Sk) {
      var b = a.target;
      if (!z.Xg(this.Sk.ma(), b)) {
        var c = this.Sk.Ua(),
          d;
        if (!(d = !c)) {
          a: if (c.mf && c.mf.Ua()) c = !0;
            else {
              d = z.lb(c.fj);
              for (var e = 0; e < d.length; e++)
                if (d[e] && d[e].Ua()) {
                  c = !0;
                  break a
                }
              c = c.uc && !c.uc.ei() ? !0 : !1
            }d = !c
        }
        d && (c = this.Sk && this.Sk.pm, d = "select-anchor" == b.getAttribute(
          "data-action"), this.wW(), c && d && z.Xg(c, b) && a.stopPropagation())
      }
    }
  };
  z.f.im = function(a) {
    if (!(767 >= window.innerWidth)) {
      var b = a.pm,
        c = z.SC(b);
      a.xk();
      a = a.ma();
      var d = z.SC(a),
        e = window.innerHeight,
        g = window.innerWidth,
        h = this.La.query(".js-metabar"),
        l = 0;
      h && (l = z.SC(h).height);
      d.height >= e - l ? $Va(a) : (z.NC(b), b = c.top + d.height >= e ? z.OC()
        .top + e - d.height - 10 : z.NC(b), c = z.SC(this.QC).left + 10,
        c + d.width >= g && (c = g - d.width - 10), a.style.top = b +
        "px", a.style.left = c + "px")
    }
  };
  z.f.wW = function() {
    z.Qr(this.Sk);
    this.Sk = null
  };
  z.f.Hoa = function(a) {
    var b = z.ax(a.target, function(a) {
        return z.bd(a, "js-paragraphControl")
      }, this.P7),
      b = IWa(this.Tg, a.value, b);
    T$(this, a.value, null, null, null, b)
  };
  z.f.F8 = function(a, b) {
    if (this.Za.jc()) {
      var c = z.dt();
      this.tL = (c = c && hWa(this.Ie, c.Ig())) && new v$(c)
    }
    MWa(this, a, b)
  };
  z.f.Yqa = function(a, b) {
    MWa(this, a, b);
    this.Za.jc() && this.tL && (a = this.tL.restore()) && a.select();
    this.tL = null
  };
  z.f.Ou = function(a) {
    if (this.Ie && (a = H$(this.Ie, a))) {
      a = Math.max(z.NC(a), 0);
      var b = window.document.body;
      this.Ph && this.Ph.cancel();
      this.Ph = new z.tC(b, "scrollTop", 600, a)
    }
  };
  OWa.prototype.gN = function(a, b, c) {
    return new S$(a, b, c)
  };
  z.m(V$, z.S);
  z.f = V$.prototype;
  z.f.bd = function(a) {
    this.wa = a
  };
  z.f.pAa = function(a) {
    this.aX = a
  };
  z.f.qAa = function(a) {
    this.T8 = a
  };
  z.f.ka = function() {
    this.ma() ? (z.S.prototype.ka.call(this), z.T(this.ma()).w(
      "show-other-responses", this.Z8, this), z.mC(this.ma(), PWa, {
      post: this.wa
    }), this.wa.Fs() && z.v(z.u(z.u(z.u(DVa(this.Sa, this.wa.yb(),
        "best"), this.r8.bind(this, "best")), this.Hqa, this),
      function() {
        this.VX.a2 && this.Z8()
      }, this), z.wD)) : z.wD(
      "Attempted to initialize ResponsesStreamControl without root element."
    )
  };
  z.f.xa = function() {
    z.T(this.ma()).clear("show-other-responses");
    z.S.prototype.xa.call(this)
  };
  z.f.r8 = function(a, b) {
    this.isActive() && (b = b.nd, "best" == a ? (a = this.query(
        ".js-responsesStream"), z.HD(this, b, "add", this.h7.bind(this,
        b)), this.h7(b)) : a = this.query(".js-responsesStreamOther"), b &&
      (z.Av() || 0 < b.re()) && a && (z.mC(a, z.ST, {
        items: z.uI(b),
        context: 2
      }), b = new z.nW(this.qa, b), b.Wa(a), b.Ge(2), this.track(b), z.hx(
        this.query(".js-responsesStreamWrapper"))), this.T8 && (a = z.NC(
        a), z.KC(window.document.body, 0, a)))
  };
  z.f.Hqa = function() {
    var a = this.query(".js-inlineNewPostControl"),
      b = this.query(".js-responsesLoggedOutPrompt");
    z.Av() ? a ? (this.uc = z.cW(vVa((new z.bW(this.qa)).QG(
      "web-inline-post-response").YG(this.wa.yb()), z.lC(z.lk, {
      post: this.wa,
      SP: !0
    })), this.aX).Wa(a), this.track(this.uc)) : b && this.aX && (a = z.MC(
      b), b = z.NC(b), z.KC(a, 0, b)) : b && z.dd(b, "u-hide")
  };
  z.f.Z8 = function() {
    this.NV || (this.NV = z.Mc(z.u(z.u(DVa(this.Sa, this.wa.yb(), "other"),
      this.r8.bind(this, "other")), function() {
      z.gx(this.query(".js-showOtherResponses"));
      this.VX.a2 = !0
    }, this), function() {
      this.NV = null
    }, this))
  };
  z.f.h7 = function(a) {
    (a = a.dk) && a.next && "other" == a.next.filter && !this.VX.a2 && (z.hx(
      this.query(".js-responsesStreamWrapper")), z.hx(this.query(
      ".js-showOtherResponses")))
  };
  z.f.uv = function() {
    this.uc && (z.LU(this.uc.ma(), new z.jt(60, 0, 200, 0)), this.uc.uv())
  };
  z.q(W$, z.DD);
  W$.prototype.focus = function() {
    this.isActive && this.Pw.focus()
  };
  W$.prototype.close = function() {
    this.Pw && !this.Pw.closed && this.Pw.close();
    this.va("close");
    this.qf()
  };
  W$.prototype.isActive = function() {
    return this.Pw ? !this.Pw.closed : !1
  };
  W$.prototype.Na = function() {
    this.Pw = null;
    W$.pa.Na.call(this)
  };
  X$.prototype.bQ = function(a, b, c) {
    var d;
    d = this.nj.Tp();
    var e = z.Kr,
      g = new z.kk(z.Jr(e)),
      g = new z.Gd(g.rm(a));
    d = IVa(g, d, e);
    this.jD(d);
    z.pE(z.jO, {
      postId: a.id,
      type: b,
      source: c,
      dest: "facebook",
      dialogType: "native"
    })
  };
  X$.prototype.V1 = function(a) {
    var b;
    b = this.nj.Tp();
    var c = z.Kr,
      d = new z.kk(z.Jr(c));
    a = new z.Gd(d.ia(z.hB, {
      catalogSlug: a.Dd(),
      username: a.Xe().Cl()
    }));
    b = IVa(a, b, c);
    this.jD(b)
  };
  X$.prototype.FZ = function() {
    var a = this.ha.ia(z.kra);
    return this.la.get(a)
  };
  X$.prototype.jD = function(a) {
    QWa(a, "facebook-share", {
      width: 550,
      height: 320
    })
  };
  var TWa = /(?:https?:\/\/|www\.)\w[\w~#-@![\]]*/g;
  z.q(Z$, z.Or);
  Z$.prototype.open = function(a, b) {
    this.wa = a;
    this.$u = b;
    this.ya = this.QB.open({
      bodyHtml: z.lC(OVa, this.$u),
      type: "tweet"
    }, !0);
    a = this.ya.query(".js-tweetEditor-text");
    b = this.qa;
    var c = String,
      d;
    d = z.n("Enter tweet text.");
    d = (0, z.y)("" + d);
    this.oE = new z.Q1(b, a, c(d), !0);
    a = new z.n1(140, !0);
    a.P4 = Y$;
    this.oE.Va(a);
    a = SWa(KVa, this.$u, z.Kr);
    this.oE.Nc(a);
    this.oE.focus();
    VWa(this);
    z.T(this.ya.Xb).w("remove-textshot", this.K8.bind(this, !1), this).w(
      "add-textshot", this.K8.bind(this, !0), this).w(
      "toggle-expand-image", this.Cta,
      this);
    this.ya.subscribe("submit", this.kua.bind(this))
  };
  Z$.prototype.kua = function() {
    var a = this.oE.Ua();
    if (WWa(this, a)) {
      var b = this.QJ ? UWa(this) : null;
      z.v(z.u(this.la.post(this.ha.ia(z.ira), {
        tweet: a,
        textshotInfo: b
      }), function(a) {
        a = z.nC(MVa, {
          id: a.value
        });
        a = z.lC(QVa, {
          YAa: a
        });
        this.ra.na(a, {
          type: "success",
          Lo: 1E4
        })
      }, this), function(a) {
        z.wD(a);
        this.ra.na(PVa(), "error")
      }, this);
      z.LF(z.Tta, {
        postId: this.wa.id,
        type: this.$u.shareType,
        source: this.$u.uAa,
        dest: "twitter",
        style: this.QJ ? "textshot" : null
      });
      this.ya.close()
    }
  };
  Z$.prototype.K8 = function(a) {
    this.QJ = a;
    z.jd(this.ya.query(".js-tweetEditor-imageContainer"), "u-hide", !a);
    z.jd(this.ya.query(".js-tweetEditor-addTextshot"), "u-hide", a)
  };
  Z$.prototype.Cta = function() {
    var a = this.ya.query(".js-tweetEditor-image");
    z.ld(a, "tweetEditor-image--expanded")
  };
  $$.prototype.tAa = function(a, b) {
    var c = z.wv(),
      d = a.creator || {},
      e = BVa(b),
      g = AVa(b),
      h = RWa(a, this.nj.Tp(), z.Kr);
    (b = aWa(CVa(b))) && z.Od(h, z.lw(b, h.vv.split(".")[1] || ""));
    var l = {
      name: d.name || "",
      username: d.username || "",
      twitterScreenName: d.twitterScreenName || "",
      url: h.toString(),
      content: a.title,
      user: c,
      RAa: e,
      QAa: g,
      shareType: "highlight",
      uAa: "highlight_menu"
    };
    z.v(z.u(this.qa.load("tweet-dialog"), function(b) {
      b.open(a, l)
    }), z.wD);
    z.LF(z.jO, {
      postId: a.id,
      type: "highlight",
      source: "highlight_menu",
      dest: "twitter",
      dialogType: "inapp"
    });
    return !0
  };
  $$.prototype.bQ = function(a, b, c, d, e) {
    var g = z.wv().userId,
      h = "highlight" == c ? KVa : z.oma,
      l = this.nj.Tp(),
      p = z.Kr,
      r = a.creator || {};
    b = {
      content: b,
      name: r.name || "",
      username: r.username || "",
      twitterScreenName: r.twitterScreenName || "",
      p$: r.userId == g,
      url: RWa(a, l, p).toString(),
      collaborators: d || []
    };
    d = d && d.length ? String(h(b, null, p)) : SWa(h, b, p);
    h = new z.Gd("https://twitter.com/intent/tweet");
    z.Sd(h, "text", d);
    this.jD(h);
    z.pE(z.jO, {
      postId: a.id,
      type: c,
      source: e,
      dest: "twitter",
      dialogType: "native"
    })
  };
  $$.prototype.V1 = function(a) {
    var b = this.nj.Tp(),
      c = z.Kr,
      d = new z.kk(z.Jr(c)),
      d = new z.Gd(d.ia(z.hB, {
        catalogSlug: a.Dd(),
        username: a.Xe().Cl()
      }));
    z.mw(d, b);
    b = d.toString();
    a = z.B("" + z.mo(String(a.name)) + ((null == a.creator ? null : a.creator
      .userId) != c.currentUser.userId ? " — " + z.wL({
      twitterScreenName: null == a.creator ? null : a.creator.twitterScreenName,
      name: null == a.creator ? null : a.creator.name
    }) : "") + " " + ("" + b));
    c = new z.Gd("https://twitter.com/intent/tweet");
    z.Sd(c, "text", a);
    this.jD(c)
  };
  $$.prototype.jD = function(a) {
    QWa(a, "twitter-share", {
      width: 670,
      height: 420
    })
  };
  var XWa = z.lF,
    YWa = XWa.Fa();
  YWa.scope("screen").add("quotes", eWa).add("quote-responses", OWa).add(
    "responses-stream-control", V$).add("notes-data", C$);
  z.pF(YWa.scope("app"), "PlacementsControl", G$).add("twitter", $$).add(
    "facebook", X$).add("tweet-dialog", Z$);
  z.jS(XWa, "notes");
}).call(this, _mdm);
