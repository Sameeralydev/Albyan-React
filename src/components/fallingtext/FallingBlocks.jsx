import { useRef, useState, useEffect } from "react";
import Matter from "matter-js";
import "./FallingBlocks.css";

const FallingBlocks = ({
  items = [],
  items2 = [],
  items4 = [],
  items5 = [],
  items3 = [],
  items2Figures = [], // optional: figure for items2
  items4Figures = [],
  items5Figures = [],
  className = "",
  trigger = "auto",
  backgroundColor = "transparent",
  wireframes = false,
  gravity = 0.6,
  mouseConstraintStiffness = 0.9,
  particlesCount = 12,
}) => {
  const containerRef = useRef(null);
  const blocksRef = useRef(null);
  const canvasRef = useRef(null);
  const [started, setStarted] = useState(false);

  /* Trigger */
  useEffect(() => {
    if (trigger === "auto") setStarted(true);
    if (trigger === "scroll" && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  /* Matter.js */
  useEffect(() => {
    if (!started) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasRef.current,
      engine,
      options: { width, height, background: backgroundColor, wireframes },
    });

    const wallOptions = { isStatic: true, render: { visible: false } };
    const floor = Bodies.rectangle(width / 2, height + 40, width, 80, wallOptions);
    const left = Bodies.rectangle(-40, height / 2, 80, height, wallOptions);
    const right = Bodies.rectangle(width + 40, height / 2, 80, height, wallOptions);
    const top = Bodies.rectangle(width / 2, -40, width, 80, wallOptions);

    const blockElems = blocksRef.current.querySelectorAll(
      ".falling-block, .falling-block2, .falling-block4, .falling-block5, .falling-block3"
    );

    const padding = 40;
    const availableWidth = width - padding * 2;
    const step = availableWidth / blockElems.length;

    const blockBodies = [...blockElems].map((el, index) => {
      const r = el.getBoundingClientRect();
      const randomX = padding + index * step + (Math.random() - 0.5) * step * 0.8;
      const randomY = 40 + Math.random() * 50;

      const body = Bodies.rectangle(randomX, randomY, r.width, r.height, {
        restitution: 0.85,
        friction: 0.25,
        frictionAir: 0.035,
        render: { visible: false },
      });

      Matter.Body.setVelocity(body, { x: (Math.random() - 0.5) * 6, y: Math.random() * 2 });
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.18);
      Matter.Body.applyForce(body, body.position, { x: (Math.random() - 0.5) * 0.02, y: Math.random() * 0.02 });

      return { el, body };
    });

    /* ⚫ PARTICLES (7x7 circles) */
    const particleBodies = Array.from({ length: particlesCount }).map(() => {
      const radius = 3.5;
      const body = Bodies.circle(Math.random() * width, Math.random() * 80, radius, {
        restitution: 0.9,
        frictionAir: 0.02,
        render: { visible: false },
      });
      Matter.Body.setVelocity(body, { x: (Math.random() - 0.5) * 4, y: Math.random() * 2 });
      return body;
    });

    /* Mouse */
    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: mouseConstraintStiffness, render: { visible: false } },
    });

    World.add(engine.world, [
      floor,
      left,
      right,
      top,
      mouseConstraint,
      ...blockBodies.map((b) => b.body),
      ...particleBodies,
    ]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    /* Sync DOM */
    const update = () => {
      blockBodies.forEach(({ body, el }) => {
        el.style.left = `${body.position.x}px`;
        el.style.top = `${body.position.y}px`;
        el.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      });
      Matter.Engine.update(engine);
      requestAnimationFrame(update);
    };

    update();

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, [started, gravity, wireframes, backgroundColor, mouseConstraintStiffness, particlesCount]);

  const startEffect = () => {
    if (!started && (trigger === "hover" || trigger === "click")) setStarted(true);
  };

  return (
    <div
      ref={containerRef}
      className={`falling-container ${className}`}
      onMouseEnter={trigger === "hover" ? startEffect : undefined}
      onClick={trigger === "click" ? startEffect : undefined}
    >
      <div ref={blocksRef} className="blocks-wrapper">
        {items.map((item, i) => (
          <div key={`items1-${i}`} className="falling-block">{item}</div>
        ))}

        {items2.map((item, i) => (
          <div key={`items2-${i}`} className="falling-block2" data-index={i}>
            <div className="figure">{items2Figures[i] || ""}</div>
            <div className="label">{item}</div>
          </div>
        ))}

        {items4.map((item, i) => (
          <div key={`items4-${i}`} className="falling-block4" data-index={i}>
            <div className="figure">{items4Figures[i] || ""}</div>
            <div className="label">{item}</div>
          </div>
        ))}

        {items5.map((item, i) => (
          <div key={`items5-${i}`} className="falling-block5" data-index={i}>
            <div className="figure">{items5Figures[i] || ""}</div>
            <div className="label">{item}</div>
          </div>
        ))}

        {items3.map((item, i) => (
          <div key={`items3-${i}`} className="falling-block3">{item}</div>
        ))}
      </div>

      <div ref={canvasRef} className="canvas-layer" />
    </div>
  );
};

export default FallingBlocks;
