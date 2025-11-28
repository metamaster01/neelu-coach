"use client";

import React, { useRef, useEffect } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

interface LiquidChromeProps extends React.HTMLAttributes<HTMLDivElement> {
  baseColor?: [number, number, number];
  speed?: number;
  amplitude?: number;
  frequencyX?: number;
  frequencyY?: number;
  interactive?: boolean;
}

const LiquidChrome: React.FC<LiquidChromeProps> = ({
  baseColor = [0.9, 0.3, 0.5], // Pink tone for hero
  speed = 0.7,
  amplitude = 0.45,
  frequencyX = 3,
  frequencyY = 2,
  interactive = true,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const renderer = new Renderer({ antialias: true });
    const gl = renderer.gl;

    const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = vec4(position, 0.0, 1.0); }
    `;

    const fragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec3 uResolution;
      uniform vec3 uBaseColor;
      uniform float uAmplitude;
      uniform float uFrequencyX;
      uniform float uFrequencyY;
      uniform vec2 uMouse;
      varying vec2 vUv;

      vec4 renderImage(vec2 uvCoord) {
        vec2 fragCoord = uvCoord * uResolution.xy;
        vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);

        for (float i = 1.0; i < 10.0; i++){
          uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159);
          uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159);
        }

        vec3 color = uBaseColor / abs(sin(uTime - uv.y - uv.x));
        return vec4(color, 1.0);
      }

      void main() {
        vec4 col = vec4(0.0);
        for (int i = -1; i <= 1; i++){
          for (int j = -1; j <= 1; j++){
            col += renderImage(vUv);
          }
        }
        gl_FragColor = col / 9.0;
      }
    `;

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new Float32Array([gl.canvas.width, gl.canvas.height, 1]),
        },
        uBaseColor: { value: new Float32Array(baseColor) },
        uAmplitude: { value: amplitude },
        uFrequencyX: { value: frequencyX },
        uFrequencyY: { value: frequencyY },
        uMouse: { value: new Float32Array([0, 0]) },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      renderer.setSize(container.offsetWidth, container.offsetHeight);
      const res = program.uniforms.uResolution.value as Float32Array;
      res[0] = gl.canvas.width;
      res[1] = gl.canvas.height;
    }

    window.addEventListener("resize", resize);
    resize();

    if (interactive) {
      container.addEventListener("mousemove", (e) => {
        const r = container.getBoundingClientRect();
        program.uniforms.uMouse.value[0] = (e.clientX - r.left) / r.width;
        program.uniforms.uMouse.value[1] = 1 - (e.clientY - r.top) / r.height;
      });
    }

    let raf = 0;
    const update = (t: number) => {
      program.uniforms.uTime.value = t * 0.001 * speed;
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(update);
    };
    update(0);

    container.appendChild(gl.canvas);

    return () => {
      cancelAnimationFrame(raf);
      if (gl.canvas.parentNode) gl.canvas.parentNode.removeChild(gl.canvas);
    };
  }, [baseColor, speed, amplitude, frequencyX, frequencyY, interactive]);

  return <div ref={containerRef} className="w-full h-full" {...props} />;
};

export default LiquidChrome;
