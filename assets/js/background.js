!function() {
    function e() {
        window.addEventListener("resize", c), r(), c(), s()
    }

    function r() {
        try {
            u = g.create(document.getElementById("canvas"));
            var e = i(1200);
            l = u.program(p["particles-vs"], p["particles-fs"]), f = u.program(p["gradient-vs"], p["gradient-fs"]), m = u.mesh({
                mode: u.POINTS,
                textures: {
                    uTexture: u.texture("./assets/images/particle.png")
                },
                vertices: {
                    aParticle: e.vertices
                },
                attributes: {
                    aExtra: e.extra
                }
            }), d = u.mesh({
                vertices: {
                    aPosition: u.vbo([-1, 1, 1, 1, -1, -1, 1, -1])
                }
            }), u.enable(u.BLEND), u.blendFunc(u.SRC_ALPHA, u.ONE)
        } catch (t) {}
    }

    function i(e) {
        for (var t = [], a = [], n = 0; e > n; n++) t.push(o(-1, 1), o(-1, 1), .5 * o(0, 1), o(2, 25)), a.push(o(), o(), o(), o(-1, 1));
        return {
            vertices: u.vbo(t),
            extra: u.vbo(a)
        }
    }

    function o(e, t) {
        return "number" != typeof t && (t = e || 1, e = 0), e + Math.random() * (t - e)
    }

    function s() {
        if (u) {
            requestAnimationFrame(s);
            var e = v + performance.now() % h;
            f.uTime.set(e), l.uTime.set(e), f.draw(d), l.draw(m)
        }
    }

    function c() {
        u && (u.size(window.innerWidth, window.innerHeight), f.uResolution.set([u.width, u.height]))
    }! 
    (jQuery),
    function() {
        if ("undefined" == typeof window.performance && (window.performance = {}), !window.performance.now) {
            var e = Date.now();
            performance.timing && performance.timing.navigationStart && (e = performance.timing.navigationStart), window.performance.now = function() {
                return Date.now() - e
            }
        }
    }();
    var u, l, f, m, d, g = function() {
            "use strict";

            function e(e, a, n) {
                for (var r in a) !n && r in e && t(e[r]) || (e[r] = a[r]);
                return e
            }

            function t(e) {
                return null != e
            }

            function a(e) {
                return 0 === (e & e - 1)
            }

            function n(e, t) {
                var a = new Image;
                a.onload = function() {
                    t(a)
                }, a.src = e
            }

            function r(e, t) {
                return "uniform{m}{d}{t}{a}".replace("{m}", /mat/i.test(e) ? "Matrix" : "").replace("{d}", /\d$/.test(e) ? e.match(/\d$/)[0] : 1).replace("{t}", /^[bis]/i.test(e) ? "i" : "f").replace("{a}", t > 0 ? "v" : "")
            }

            function i(e) {
                return /\d/.test(e) ? parseInt(e.match(/\d$/)[0], 10) : 1
            }

            function o(e) {
                return /^[bi]/i.test(e) ? U : W
            }

            function s(e) {
                return {}.toString.call(e).match(/\s([a-zA-Z0-9]+)/)[1].toLowerCase()
            }

            function c(e, t) {
                var a = /\d+:(\d+)/g.exec(e);
                throw a && (a = parseInt(a[1], 10) - 1, t = t.split("\n"), console.log("%c" + t.splice(0, a).join("\n") + "%c\n" + t[0] + "\n%c" + t.splice(1).join("\n"), "color: #ccc", "color: red", "color: #ccc")), e
            } {
                var u, l = {
                        create: function(l, U) {
                            if (l || (l = document.createElement("canvas")), !(u = l.getContext("webgl", U) || l.getContext("experimental-webgl", U))) throw "Error creating WebGL context";
                            var N, O = {};
                            return e(u, {
                                bindings: O,
                                shader: function(e, t) {
                                    return e = m + e, u.shaderSource(N = u.createShader(t), e), u.compileShader(N), u.getShaderParameter(N, C) || c(u.getShaderInfoLog(N), e), N
                                },
                                program: function(t, a) {
                                    var n, r, i, o, s, c, l, r = u.createProgram();
                                    if (r.state = {}, u.attachShader(r, u.shader(t, z)), u.attachShader(r, u.shader(a, j)), u.linkProgram(r), !u.getProgramParameter(r, D)) throw u.getProgramInfoLog(r);
                                    for (o = [t, a].join("\n").replace(p, ""); n = d.exec(o);) c = n[1], s = n[2], r[s] || (r[s] = u.attribute(r, s, c));
                                    for (; i = g.exec(o);) c = i[1], s = i[2], l = i[5], r[s] || (r[s] = u.uniform(r, s, c, l));
                                    return e(r, {
                                        on: function() {
                                            u.usedProgram !== r && u.useProgram(u.usedProgram = r)
                                        },
                                        draw: function(e, t, a, n) {
                                            r.on();
                                            var i, o, s, c = 0;
                                            for (i in s = e.attributes) r[i] && s[i].on(r[i]);
                                            for (i in s = e.uniforms) r[i] && r[i].set(s[i]);
                                            for (i in s = e.textures) r[i] && (s[i].on(c), r[i].set(c++));
                                            for (i in s = e.vertices)(o = s[i]).on(r[i]);
                                            e.indices ? (e.indices.on(), u.drawElements($, e.indices.length, P, 0)) : u.drawArrays(t || e.mode, a || 0, n || o.length / r[i].size)
                                        }
                                    })
                                },
                                attribute: function(e, t, a) {
                                    var n = u.getAttribLocation(e, t),
                                        r = o(a),
                                        s = i(a),
                                        c = !1;
                                    return {
                                        name: t,
                                        type: a,
                                        size: s,
                                        dataType: r,
                                        location: n,
                                        on: function() {
                                            c || u.enableVertexAttribArray(n), u.vertexAttribPointer(n, s, r, !1, 0, 0), c = !0
                                        },
                                        off: function() {
                                            u.disableVertexAttribArray(n)
                                        }
                                    }
                                },
                                uniform: function(e, t, a, n) {
                                    var i = u.getUniformLocation(e, t),
                                        o = u[r(a, n)],
                                        s = e.state;
                                    return {
                                        name: t,
                                        type: a,
                                        span: n || 1,
                                        location: i,
                                        setter: o,
                                        get: function() {
                                            return u.getUniform(e, i)
                                        },
                                        set: function(a) {
                                            s[t] !== a && (e.on(), o.apply(u, [i].concat(s[t] = a)))
                                        }
                                    }
                                },
                                buffer: function(t, a) {
                                    var n = t === _ ? Float32Array : Uint16Array,
                                        r = u.createBuffer();
                                    return e(r, {
                                        length: 0,
                                        on: function(e) {
                                            O[t] !== r && (u.bindBuffer(t, O[t] = r), e && e.on())
                                        },
                                        fill: function(e, a) {
                                            "array" == s(e) && (e = new n(e)), u.bindBuffer(t, r), u.bufferData(t, e, a || L), r.length = e.length
                                        },
                                        push: function(e, a) {
                                            isArray(e) && (e = new n(e)), u.bindBuffer(t, r), u.bufferSubData(t, a, e)
                                        }
                                    }), a && r.fill(a), r
                                },
                                vbo: function(e) {
                                    return u.buffer(_, e)
                                },
                                ibo: function(e) {
                                    return u.buffer(v, e)
                                },
                                fbo: function(t, a, n, r) {
                                    var i = u.createFramebuffer(),
                                        o = u.texture();
                                    return e(i, {
                                        texture: o,
                                        set: function(e, t, a, n) {
                                            i.on(), o.set(e, i.width = t, i.height = a, n), u.framebufferTexture2D(I, y, F, o, 0), i.off()
                                        },
                                        on: function() {
                                            u.bindFramebuffer(I, i)
                                        },
                                        off: function() {
                                            u.bindFramebuffer(I, null)
                                        }
                                    }), i.set(n, t || 1, a || 1, r), i
                                },
                                texture: function(r, i, o, c) {
                                    var l, m = u.createTexture();
                                    return "object" == typeof i && (c = i), e(m, {
                                        param: function(e, t) {
                                            u.texParameteri(F, e, t)
                                        },
                                        setup: function(t) {
                                            t = e(t || {}, {
                                                min: M,
                                                mag: M,
                                                s: A,
                                                t: A
                                            }), m.on(), m.param(b, t.mag), m.param(w, t.min), m.param(E, t.s), m.param(T, t.t), t.mipmap && u.generateMipmap(F), m.off()
                                        },
                                        on: function(e) {
                                            t(e) && u.activeTexture(B + e), u.bindTexture(F, m)
                                        },
                                        off: function() {
                                            u.bindTexture(F, null)
                                        },
                                        set: function(t, i, o, c) {
                                            c = e(c || {}, {
                                                mipmap: l = i > 1 && o > 1 && a(i) && a(o),
                                                min: l ? h : M,
                                                flip: !0
                                            });
                                            var d = "string" == typeof t;
                                            if (d || !t && !i && !o) return m.set(f, 1, 1), void(d && n(t, m.set));
                                            var g = /^float/i.test(s(t)) ? W : S;
                                            m.on(), u.pixelStorei(x, c.flip), i && o ? u.texImage2D(F, 0, R, i, o, 0, R, g, t) : u.texImage2D(F, 0, R, R, S, t), t !== r && m.setup(c), m.off()
                                        }
                                    }), m.set(r, i, o, c), m
                                },
                                size: function(e, t) {
                                    u.viewport(0, 0, e, t), u.height = l.height = t, u.width = l.width = e
                                },
                                mesh: function(t) {
                                    var a = e(t || {}, {
                                        mode: k,
                                        attributes: {},
                                        uniforms: {},
                                        textures: {},
                                        indices: null,
                                        vertices: {}
                                    });
                                    return a
                                }
                            })
                        }
                    },
                    f = new Uint8Array([0, 0, 0, 0]),
                    m = "#ifdef GL_ES\nprecision mediump float;\n#endif\n",
                    d = /attribute\s+(\w+)\s+([\w_-]+)/gi,
                    g = /uniform\s+(\w+)\s+([\w_-]+)(\[(\s+)?([\w_-]+))?/gi,
                    p = /(\/\/.+|\/\*[^(\*\/)]+\*\/)/i,
                    v = 34963,
                    h = 9987,
                    x = 37440,
                    b = 10240,
                    w = 10241,
                    y = 36064,
                    j = 35632,
                    C = 35713,
                    P = 5123,
                    E = 10242,
                    T = 10243,
                    k = 5,
                    A = 33071,
                    S = 5121,
                    z = 35633,
                    _ = 34962,
                    I = 36160,
                    L = 35044,
                    D = 35714,
                    F = 3553,
                    $ = 4,
                    B = 33984,
                    M = 9729,
                    W = 5126,
                    R = 6408,
                    U = 5124;
                Object.defineProperty
            }
            return l
        }(),
        p = {
            "gradient-vs": "attribute vec2 aPosition;void main(){gl_Position=vec4(aPosition,0.0,1.0);}",
            "particles-fs": "uniform sampler2D uTexture;varying float vAlpha;void main(){gl_FragColor=texture2D(uTexture,gl_PointCoord);gl_FragColor.a*=vAlpha*0.15;}",
            "particles-vs": "attribute vec4 aParticle;attribute vec4 aExtra;varying float vAlpha;uniform float uTime;void main(){vec3 a=aParticle.xyz;float b=uTime*0.001;a.z+=sin(aExtra.x+aExtra.z*b)*0.05;float c=1.0+a.z*8.0;a.y+=b*0.00413*aExtra.x;a.y=mod(a.y,c)*4.0-2.0;a.x=a.x*1.5+cos(aExtra.x+a.y+b*aExtra.y)*aExtra.z*0.1;a.x+=tan(aExtra.x+aExtra.y*b*0.1)*aExtra.w*aExtra.z;gl_Position=vec4(a,c);gl_PointSize=aParticle.w/c;gl_PointSize*=sin(aExtra.w+aExtra.z*b*2.0);gl_PointSize*=0.2+(aExtra.x*aExtra.y)*0.8;gl_PointSize=min(10.0,max(0.0,gl_PointSize));vAlpha=cos(aExtra.x+b*aExtra.y*0.324)+1.0;}",
            "gradient-fs": "uniform vec2 uResolution;uniform float uTime;vec3 a(vec2 b,vec2 c,vec4 d,float e){float f=smoothstep(0.0,1.0,pow(distance(b,c),e));return (1.0-f)*d.rgb*d.w;}float g(vec2 h){return fract(sin(dot(h.xy,vec2(12.9898,78.233)))*43758.5453);}void main(){vec2 e=gl_FragCoord.xy/uResolution;vec2 b=e-vec2(0.5);float i=uTime*0.001;vec4 j[3];vec2 k[3];j[0]=vec4(1.0,0.0,0.5,0.5);j[1]=vec4(0.5,1.0,0.0,0.4);j[2]=vec4(0.1,0.5,0.9,0.6);k[0]=vec2(sin(i*0.22)*0.41,cos(i*0.22)*0.31);k[1]=vec2(cos(i*0.15)*0.35,sin(i*0.31)*0.35);k[2]=vec2(sin(i*0.11)*0.47,sin(i*0.17)*0.42);vec3 d=vec3(sin(0.1+i*0.25)*0.20,sin(0.8+i*0.58)*0.05,0.1+cos(i*0.31)*0.11);d+=a(b,k[0],j[0],1.0+sin(i*0.20)*0.2);d+=a(b,k[1],j[1],1.0+cos(i*0.35)*0.2);d+=a(b,k[2],j[2],1.0+sin(i*0.18)*0.2);d+=g(e+i)*0.05;float l=smoothstep(0.75,0.8,length(b));d=mix(d,d*l,0.4+sin(i*0.32)*0.1);gl_FragColor=vec4(d,1.0);}"
        },
        v = Math.floor(1e4 * Math.random()),
        h = 3e5;
    e()
}();