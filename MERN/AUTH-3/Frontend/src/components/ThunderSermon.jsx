import { useEffect, useRef } from "react";

export default function ThunderSermon() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const gl = canvas.getContext("webgl", {
            alpha: true,
            antialias: false,
            preserveDrawingBuffer: false,
        });

        if (!gl) {
            console.error("WebGL is not supported");
            return;
        }

        // =========================
        // VERTEX SHADER
        // =========================

        const vertSrc = `
            attribute vec2 a_pos;

            void main() {
                gl_Position = vec4(a_pos, 0.0, 1.0);
            }
        `;


        // =========================
        // FRAGMENT SHADER
        // =========================

        const fragSrc = `
            precision highp float;

            uniform float u_time;
            uniform vec2 u_res;
            uniform vec2 u_mouse;

            #define PI 3.14159265359

            float hash(vec2 p) {
                return fract(
                    sin(dot(p, vec2(127.1, 311.7)))
                    * 43758.5453
                );
            }

            float hash1(float n) {
                return fract(
                    sin(n) * 43758.5453123
                );
            }

            float noise(vec2 p) {

                vec2 i = floor(p);
                vec2 f = fract(p);

                f = f * f * (3.0 - 2.0 * f);

                float a = hash(i);
                float b = hash(i + vec2(1.0, 0.0));
                float c = hash(i + vec2(0.0, 1.0));
                float d = hash(i + vec2(1.0, 1.0));

                return mix(
                    mix(a, b, f.x),
                    mix(c, d, f.x),
                    f.y
                );
            }

            float fbm(vec2 p, int octaves) {

                float val = 0.0;
                float amp = 0.5;
                float freq = 1.0;

                for (int i = 0; i < 7; i++) {

                    if (i >= octaves)
                        break;

                    val += amp * noise(p * freq);

                    freq *= 2.03;
                    amp *= 0.5;

                    p += vec2(1.7, 9.2);
                }

                return val;
            }

            float stormClouds(vec2 p, float t) {

                vec2 drift =
                    vec2(t * 0.03, t * 0.015);

                vec2 pp = p + drift;

                vec2 q = vec2(
                    fbm(pp, 5),
                    fbm(pp + vec2(5.2, 1.3), 5)
                );

                vec2 r = vec2(
                    fbm(
                        pp +
                        3.0 * q +
                        vec2(1.7, 9.2) +
                        t * 0.05,
                        6
                    ),

                    fbm(
                        pp +
                        3.0 * q +
                        vec2(8.3, 2.8) +
                        t * 0.03,
                        6
                    )
                );

                float f =
                    fbm(pp + 2.5 * r, 7);

                return
                    f * 0.5 +
                    length(q) * 0.3 +
                    length(r) * 0.2;
            }

            float segDist(
                vec2 p,
                vec2 a,
                vec2 b
            ) {

                vec2 pa = p - a;
                vec2 ba = b - a;

                float h =
                    clamp(
                        dot(pa, ba) /
                        dot(ba, ba),
                        0.0,
                        1.0
                    );

                return length(pa - ba * h);
            }

            float lightningBolt(
                vec2 uv,
                float seed,
                float startX,
                float endX
            ) {

                float minD = 100.0;

                float prevX = startX;
                float prevY = -0.6;

                for (int i = 1; i <= 14; i++) {

                    float fi = float(i);
                    float frac = fi / 14.0;

                    float jit =
                        hash1(
                            seed * 13.37 +
                            fi * 7.91
                        ) * 2.0 - 1.0;

                    float jit2 =
                        hash1(
                            seed * 29.13 +
                            fi * 3.17
                        ) * 2.0 - 1.0;

                    float disp =
                        jit *
                        0.15 *
                        (1.0 - frac * 0.4)
                        +
                        jit2 * 0.05;

                    float targetX =
                        mix(
                            startX,
                            endX,
                            frac
                        );

                    float curX =
                        targetX + disp;

                    float curY =
                        mix(
                            -0.6,
                            0.55,
                            frac
                        );

                    float d =
                        segDist(
                            uv,
                            vec2(prevX, prevY),
                            vec2(curX, curY)
                        );

                    minD = min(minD, d);

                    prevX = curX;
                    prevY = curY;
                }

                return minD;
            }

            void main() {

                vec2 uv =
                    (gl_FragCoord.xy - u_res * 0.5)
                    / min(u_res.x, u_res.y);

                vec2 screenUV =
                    gl_FragCoord.xy / u_res;

                float t = u_time;


                // =========================
                // STORM SKY
                // =========================

                vec3 skyTop =
                    vec3(
                        0.015,
                        0.008,
                        0.05
                    );

                vec3 skyMid =
                    vec3(
                        0.025,
                        0.018,
                        0.07
                    );

                vec3 skyBot =
                    vec3(
                        0.01,
                        0.012,
                        0.035
                    );

                vec3 sky =
                    mix(
                        skyTop,
                        skyMid,
                        smoothstep(
                            0.0,
                            0.5,
                            screenUV.y
                        )
                    );

                sky =
                    mix(
                        sky,
                        skyBot,
                        smoothstep(
                            0.5,
                            1.0,
                            screenUV.y
                        )
                    );


                // =========================
                // CLOUDS
                // =========================

                float cloud1 =
                    stormClouds(
                        uv * 1.8,
                        t
                    );

                float cloud2 =
                    stormClouds(
                        uv * 2.4 +
                        vec2(3.7, 1.2),
                        t * 1.1
                    );

                float cloudDensity =
                    smoothstep(
                        0.3,
                        0.75,
                        cloud1
                    ) * 0.6
                    +
                    smoothstep(
                        0.35,
                        0.8,
                        cloud2
                    ) * 0.4;


                vec3 cloudDark =
                    vec3(
                        0.025,
                        0.02,
                        0.055
                    );

                vec3 cloudMid =
                    vec3(
                        0.055,
                        0.045,
                        0.09
                    );

                vec3 cloudLight =
                    vec3(
                        0.09,
                        0.07,
                        0.13
                    );

                vec3 cloudColor =
                    mix(
                        cloudDark,
                        cloudMid,
                        smoothstep(
                            0.1,
                            0.4,
                            cloudDensity
                        )
                    );

                cloudColor =
                    mix(
                        cloudColor,
                        cloudLight,
                        smoothstep(
                            0.4,
                            0.8,
                            cloudDensity
                        )
                    );

                vec3 col =
                    mix(
                        sky,
                        cloudColor,
                        cloudDensity * 0.85
                    );


                // =========================
                // LIGHTNING
                // =========================

                float interval = 1.5;

                float period =
                    interval * 60.0;

                float ct =
                    mod(t, period);

                int cycle =
                    int(
                        floor(
                            ct / interval
                        )
                    );

                for (
                    int i = -2;
                    i <= 5;
                    i++
                ) {

                    int bi =
                        cycle + i;

                    if (bi < 0)
                        continue;

                    float fi =
                        float(bi);

                    float birth =
                        fi * interval +
                        hash1(
                            fi * 17.31 +
                            42.0
                        ) *
                        interval *
                        0.5;

                    float seed =
                        fi * 7.13 + 1.0;

                    float sx =
                        (
                            hash1(
                                fi * 13.37 +
                                100.0
                            ) - 0.5
                        ) * 0.8;

                    float ex =
                        sx +
                        (
                            hash1(
                                fi * 9.91 +
                                200.0
                            ) - 0.5
                        ) * 0.35;

                    float age =
                        ct - birth;

                    if (
                        age < -0.01 ||
                        age > 1.5
                    )
                        continue;

                    if (age < 0.0)
                        age = 0.0;


                    float flash = 0.0;

                    if (age < 0.06) {

                        flash = 1.0;

                    } else if (age < 0.12) {

                        flash =
                            0.4 +
                            0.6 *
                            smoothstep(
                                0.12,
                                0.06,
                                age
                            );

                    } else if (age < 0.22) {

                        float rs =
                            smoothstep(
                                0.12,
                                0.16,
                                age
                            ) *
                            smoothstep(
                                0.22,
                                0.16,
                                age
                            );

                        flash =
                            0.15 +
                            rs * 0.7;

                    } else if (age < 0.7) {

                        flash =
                            0.15 *
                            smoothstep(
                                0.7,
                                0.22,
                                age
                            );
                    }


                    float boltVis =
                        smoothstep(
                            0.45,
                            0.0,
                            age
                        );


                    if (boltVis > 0.001) {

                        float d =
                            lightningBolt(
                                uv,
                                seed,
                                sx,
                                ex
                            );


                        float outer =
                            exp(
                                -d * d / 0.012
                            )
                            *
                            boltVis
                            *
                            flash;

                        col +=
                            vec3(
                                0.25,
                                0.25,
                                0.7
                            )
                            *
                            outer
                            *
                            0.6;


                        float mid =
                            exp(
                                -d * d / 0.003
                            )
                            *
                            boltVis
                            *
                            flash;

                        col +=
                            vec3(
                                0.5,
                                0.6,
                                1.0
                            )
                            *
                            mid;


                        float core =
                            exp(
                                -d * d /
                                0.0004
                            )
                            *
                            boltVis;

                        col +=
                            vec3(
                                1.0,
                                0.97,
                                0.92
                            )
                            *
                            core
                            *
                            flash
                            *
                            3.0;
                    }
                }


                // =========================
                // RAIN
                // =========================

                vec2 rainUV =
                    gl_FragCoord.xy /
                    min(
                        u_res.x,
                        u_res.y
                    );

                vec2 rc =
                    vec2(
                        rainUV.x +
                        rainUV.y * 0.12,
                        rainUV.y
                    );

                rc.y += t * 3.0;
                rc.x += t * 0.35;

                float rain = 0.0;

                for (
                    int i = 0;
                    i < 3;
                    i++
                ) {

                    float fi =
                        float(i);

                    float scale =
                        35.0 +
                        fi * 20.0;

                    vec2 rv =
                        rc * scale +
                        vec2(
                            fi * 7.3,
                            fi * 11.1
                        );

                    float ry =
                        fract(rv.y);

                    float rx =
                        floor(rv.x);

                    float rs =
                        hash1(
                            rx * 13.7 +
                            fi * 31.0
                        );

                    if (rs > 0.65) {

                        float streak =
                            smoothstep(
                                0.0,
                                0.008,
                                ry
                            )
                            *
                            smoothstep(
                                0.12 +
                                rs * 0.08,
                                0.008,
                                ry
                            );

                        rain +=
                            streak *
                            (
                                0.018 +
                                fi * 0.006
                            );
                    }
                }

                col +=
                    vec3(
                        0.35,
                        0.38,
                        0.5
                    )
                    *
                    rain;


                // =========================
                // VIGNETTE
                // =========================

                float vd =
                    length(uv);

                float vig =
                    1.0 -
                    smoothstep(
                        0.35,
                        1.3,
                        vd
                    );

                col *=
                    0.5 +
                    vig * 0.5;


                // =========================
                // TONE MAPPING
                // =========================

                col =
                    col /
                    (1.0 + col);

                col.r =
                    pow(
                        col.r,
                        1.05
                    );

                col.b =
                    pow(
                        col.b,
                        0.93
                    );

                col =
                    max(
                        col,
                        vec3(0.0)
                    );

                gl_FragColor =
                    vec4(
                        col,
                        1.0
                    );
            }
        `;


        // =========================
        // SHADER COMPILER
        // =========================

        const compileShader = (
            type,
            source
        ) => {

            const shader =
                gl.createShader(type);

            gl.shaderSource(
                shader,
                source
            );

            gl.compileShader(shader);

            if (
                !gl.getShaderParameter(
                    shader,
                    gl.COMPILE_STATUS
                )
            ) {

                console.error(
                    gl.getShaderInfoLog(shader)
                );

                return null;
            }

            return shader;
        };


        const vertexShader =
            compileShader(
                gl.VERTEX_SHADER,
                vertSrc
            );

        const fragmentShader =
            compileShader(
                gl.FRAGMENT_SHADER,
                fragSrc
            );

        if (
            !vertexShader ||
            !fragmentShader
        ) {
            return;
        }


        const program =
            gl.createProgram();

        gl.attachShader(
            program,
            vertexShader
        );

        gl.attachShader(
            program,
            fragmentShader
        );

        gl.linkProgram(program);

        gl.useProgram(program);


        // =========================
        // FULLSCREEN TRIANGLE
        // =========================

        const buffer =
            gl.createBuffer();

        gl.bindBuffer(
            gl.ARRAY_BUFFER,
            buffer
        );

        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([
                -1, -1,
                 3, -1,
                -1,  3
            ]),
            gl.STATIC_DRAW
        );


        const position =
            gl.getAttribLocation(
                program,
                "a_pos"
            );

        gl.enableVertexAttribArray(
            position
        );

        gl.vertexAttribPointer(
            position,
            2,
            gl.FLOAT,
            false,
            0,
            0
        );


        const uTime =
            gl.getUniformLocation(
                program,
                "u_time"
            );

        const uRes =
            gl.getUniformLocation(
                program,
                "u_res"
            );

        const uMouse =
            gl.getUniformLocation(
                program,
                "u_mouse"
            );


        let mouseX = -1;
        let mouseY = -1;

        const handleMouseMove = (e) => {

            const rect =
                canvas.getBoundingClientRect();

            mouseX =
                (e.clientX - rect.left) *
                (canvas.width / rect.width);

            mouseY =
                (rect.bottom - e.clientY) *
                (canvas.height / rect.height);
        };


        canvas.addEventListener(
            "mousemove",
            handleMouseMove
        );


        // =========================
        // RESIZE
        // =========================

        const resize = () => {

            const dpr =
                Math.min(
                    window.devicePixelRatio || 1,
                    2
                );

            const width =
                canvas.clientWidth * dpr;

            const height =
                canvas.clientHeight * dpr;

            canvas.width = width;
            canvas.height = height;

            gl.viewport(
                0,
                0,
                width,
                height
            );

            gl.uniform2f(
                uRes,
                width,
                height
            );
        };


        resize();

        const resizeObserver =
            new ResizeObserver(resize);

        resizeObserver.observe(canvas);


        // =========================
        // ANIMATION
        // =========================

        const start =
            performance.now();

        let animationFrame;

        const render = (now) => {

            const time =
                (now - start) / 1000;

            gl.uniform1f(
                uTime,
                time
            );

            gl.uniform2f(
                uMouse,
                mouseX,
                mouseY
            );

            gl.drawArrays(
                gl.TRIANGLES,
                0,
                3
            );

            animationFrame =
                requestAnimationFrame(render);
        };


        animationFrame =
            requestAnimationFrame(render);


        // =========================
        // CLEANUP
        // =========================

        return () => {

            cancelAnimationFrame(
                animationFrame
            );

            resizeObserver.disconnect();

            canvas.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            gl.deleteProgram(program);

            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);

            gl.deleteBuffer(buffer);
        };

    }, []);


    return (
        <canvas
            ref={canvasRef}
            className="
                absolute
                inset-0
                w-full
                h-full
                pointer-events-none
            "
        />
    );
}