import {
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react";

type QuantumDoodleWaveProps = {
  className?: string;
  sectionRef?: RefObject<HTMLElement | null>;
  textRef?: RefObject<HTMLDivElement | null>;
  interferenceText?: ReactNode;
};

type LayoutState = {
  sectionWidth: number;
  sectionHeight: number;
  textX: number;
  textY: number;
  textWidth: number;
  textHeight: number;
  measured: boolean;
};

const HERO_DARK = "#050505";
const TWO_PI = Math.PI * 2;
const WAVE_1_PERIOD_SECONDS = 33;
const WAVE_2_PERIOD_SECONDS = 39;
const WAVE_START_X = -500;
const WAVE_END_X = 2000;
const WAVE_BASELINE = 400;
const WAVE_BOTTOM_Y = 1600;
const WAVE_WAVELENGTH = 500;
const WAVE_SAMPLE_COUNT = 140;

function shouldRunDesktopWave() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }

  return window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)").matches;
}

type WavePathOptions = {
  amplitude: number;
  phase: number;
  harmonicPhase: number;
  harmonicStrength: number;
};

function getInitialLayout(): LayoutState {
  const sectionWidth =
    typeof window === "undefined" ? 1440 : Math.max(window.innerWidth, 320);
  const sectionHeight =
    typeof window === "undefined" ? 820 : Math.max(window.innerHeight, 560);

  return {
    sectionWidth,
    sectionHeight,
    textX: 0,
    textY: 0,
    textWidth: 0,
    textHeight: 0,
    measured: false,
  };
}

function round(value: number) {
  return Number(value.toFixed(2));
}

function buildPhysicsWavePath({
  amplitude,
  phase,
  harmonicPhase,
  harmonicStrength,
}: WavePathOptions) {
  const step = (WAVE_END_X - WAVE_START_X) / WAVE_SAMPLE_COUNT;
  const points: string[] = [];

  for (let index = 0; index <= WAVE_SAMPLE_COUNT; index += 1) {
    const x = WAVE_START_X + step * index;
    const theta = (TWO_PI * x) / WAVE_WAVELENGTH + phase;

    // The primary sine creates the broad wave front. The smaller harmonics keep
    // the surface from looking mechanically perfect while still remaining fully
    // deterministic and phase locked for the masks below.
    const primary = Math.sin(theta);
    const secondary = Math.sin(theta * 2 + harmonicPhase);
    const tertiary = Math.cos(theta * 0.5 - harmonicPhase * 0.6);
    const y =
      WAVE_BASELINE -
      amplitude * primary -
      amplitude * harmonicStrength * secondary -
      amplitude * 0.035 * tertiary;

    points.push(`${round(x)},${round(y)}`);
  }

  return `M ${points.join(" L ")}`;
}

const WAVE_1_CURVE = buildPhysicsWavePath({
  amplitude: 150,
  phase: 0,
  harmonicPhase: Math.PI / 5,
  harmonicStrength: 0.07,
});

const WAVE_2_CURVE = buildPhysicsWavePath({
  amplitude: 225,
  phase: 0,
  harmonicPhase: Math.PI / 2,
  harmonicStrength: 0.05,
});

const FILL_SUFFIX = ` L ${WAVE_END_X},${WAVE_BOTTOM_Y} L ${WAVE_START_X},${WAVE_BOTTOM_Y} Z`;

function buildWaveLayout(sectionWidth: number, sectionHeight: number) {
  const isMd = sectionWidth >= 768;
  const isSm = sectionWidth >= 640;

  const waveWidth = sectionWidth * (isMd ? 1.5 : 2);
  const waveHeight = isMd ? 400 : isSm ? 300 : 250;
  const waveTranslateY = isMd ? -48 : -32;
  const waveLeft = (sectionWidth - waveWidth) / 2;
  const waveTop = (sectionHeight - waveHeight) / 2 + waveTranslateY;

  return {
    transform: `translate(${waveLeft} ${waveTop}) scale(${waveWidth / 1000} ${
      waveHeight / 800
    })`,
  };
}

export default function QuantumDoodleWave({
  className = "absolute inset-0",
  sectionRef,
  textRef,
  interferenceText,
}: QuantumDoodleWaveProps) {
  const [layout, setLayout] = useState<LayoutState>(() => getInitialLayout());
  const [desktopWaveEnabled, setDesktopWaveEnabled] = useState(() => shouldRunDesktopWave());

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQuery = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    const syncDesktopWaveState = () => setDesktopWaveEnabled(mediaQuery.matches);

    syncDesktopWaveState();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncDesktopWaveState);
      return () => mediaQuery.removeEventListener("change", syncDesktopWaveState);
    }

    mediaQuery.addListener(syncDesktopWaveState);
    return () => mediaQuery.removeListener(syncDesktopWaveState);
  }, []);

  if (!desktopWaveEnabled) {
    return (
      <div
        className={`${className} quinfosys-wave-field pointer-events-none`}
        style={{ backgroundColor: HERO_DARK }}
        aria-hidden="true"
      />
    );
  }

  // The visible waves and the text-interference masks use the same negative
  // delays. This keeps the white wave surface and the dark text copy phase
  // locked even when React mounts the overlay slightly later than the base SVG.
  const animationSync = useMemo(() => {
    const nowSeconds =
      typeof performance !== "undefined"
        ? performance.now() / 1000
        : Date.now() / 1000;

    return {
      wave1Delay: `-${nowSeconds % WAVE_1_PERIOD_SECONDS}s`,
      wave2Delay: `-${nowSeconds % WAVE_2_PERIOD_SECONDS}s`,
    };
  }, []);

  useEffect(() => {
    const section = sectionRef?.current;
    const text = textRef?.current;

    if (!section) {
      return;
    }

    let animationFrame = 0;

    const updateLayout = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const sectionRect = section.getBoundingClientRect();
        const textRect = text?.getBoundingClientRect();

        if (sectionRect.width <= 24 || sectionRect.height <= 24) {
          return;
        }

        setLayout({
          sectionWidth: sectionRect.width,
          sectionHeight: sectionRect.height,
          textX: textRect ? textRect.left - sectionRect.left : 0,
          textY: textRect ? textRect.top - sectionRect.top : 0,
          textWidth: textRect ? textRect.width : 0,
          textHeight: textRect ? textRect.height : 0,
          measured: true,
        });
      });
    };

    updateLayout();

    const observer = new ResizeObserver(updateLayout);
    observer.observe(section);

    if (text) {
      observer.observe(text);
    }

    window.addEventListener("resize", updateLayout);
    window.addEventListener("orientationchange", updateLayout);

    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(updateLayout);
    }

    const delayedLayoutTimer = window.setTimeout(updateLayout, 160);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener("resize", updateLayout);
      window.removeEventListener("orientationchange", updateLayout);
      window.clearTimeout(delayedLayoutTimer);
    };
  }, [sectionRef, textRef]);

  const sectionWidth = Math.max(layout.sectionWidth, 320);
  const sectionHeight = Math.max(layout.sectionHeight, 320);
  const { transform: waveTransform } = buildWaveLayout(sectionWidth, sectionHeight);

  const canRenderTextOverlay =
    Boolean(interferenceText) &&
    layout.measured &&
    layout.textWidth > 0 &&
    layout.textHeight > 0 &&
    layout.sectionWidth > 0 &&
    layout.sectionHeight > 0;

  const wave1Style = {
    animationDelay: animationSync.wave1Delay,
  } satisfies CSSProperties;

  const wave2Style = {
    animationDelay: animationSync.wave2Delay,
  } satisfies CSSProperties;

  const waveDefs = (idPrefix: string) => {
    const oneMinusTwoMaskId = `${idPrefix}-one-minus-two`;
    const twoMinusOneMaskId = `${idPrefix}-two-minus-one`;

    return {
      oneMinusTwoMaskId,
      twoMinusOneMaskId,
      defs: (
        <defs>
          <mask
            id={oneMinusTwoMaskId}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width={sectionWidth}
            height={sectionHeight}
          >
            <rect x="0" y="0" width={sectionWidth} height={sectionHeight} fill="black" />
            <g transform={waveTransform}>
              <path
                className="quinfosys-wave-mask quinfosys-wave-1"
                d={WAVE_1_CURVE + FILL_SUFFIX}
                fill="white"
                style={wave1Style}
              />
              <path
                className="quinfosys-wave-mask quinfosys-wave-2"
                d={WAVE_2_CURVE + FILL_SUFFIX}
                fill="black"
                style={wave2Style}
              />
            </g>
          </mask>

          <mask
            id={twoMinusOneMaskId}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width={sectionWidth}
            height={sectionHeight}
          >
            <rect x="0" y="0" width={sectionWidth} height={sectionHeight} fill="black" />
            <g transform={waveTransform}>
              <path
                className="quinfosys-wave-mask quinfosys-wave-2"
                d={WAVE_2_CURVE + FILL_SUFFIX}
                fill="white"
                style={wave2Style}
              />
              <path
                className="quinfosys-wave-mask quinfosys-wave-1"
                d={WAVE_1_CURVE + FILL_SUFFIX}
                fill="black"
                style={wave1Style}
              />
            </g>
          </mask>
        </defs>
      ),
    };
  };

  const visibleDefs = waveDefs("quinfosys-visible-wave");
  const textDefs = waveDefs("quinfosys-text-wave");

  const maskedText = (maskId: string) => (
    <foreignObject
      x={layout.textX}
      y={layout.textY}
      width={layout.textWidth}
      height={layout.textHeight}
      mask={`url(#${maskId})`}
    >
      <div className="h-full w-full text-center" style={{ color: HERO_DARK }}>
        {interferenceText}
      </div>
    </foreignObject>
  );

  return (
    <div
      className={`${className} quinfosys-wave-field overflow-hidden pointer-events-none`}
      style={{ backgroundColor: HERO_DARK }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes quinfosysWaveDrift {
          0% { transform: translateX(0); }
          100% { transform: translateX(-500px); }
        }

        .quinfosys-wave-mask,
        .quinfosys-wave-outline {
          animation-name: quinfosysWaveDrift;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          transform-box: fill-box;
          transform-origin: center;
          will-change: transform;
        }

        .quinfosys-wave-1 { animation-duration: ${WAVE_1_PERIOD_SECONDS}s; }
        .quinfosys-wave-2 { animation-duration: ${WAVE_2_PERIOD_SECONDS}s; animation-direction: reverse; }

        .quinfosys-wave-surface {
          fill: #ffffff;
        }

        .quinfosys-wave-outline {
          fill: none;
          stroke: rgba(255, 255, 255, 0.62);
          stroke-width: 3px;
          opacity: 0.72;
        }

        @media (prefers-reduced-motion: reduce) {
          .quinfosys-wave-mask,
          .quinfosys-wave-outline {
            animation-duration: 90s;
          }
        }
      `}</style>

      <svg
        className="absolute inset-0 z-0 h-full w-full"
        viewBox={`0 0 ${sectionWidth} ${sectionHeight}`}
        preserveAspectRatio="none"
        role="presentation"
      >
        {visibleDefs.defs}

        <rect
          className="quinfosys-wave-surface"
          x="0"
          y="0"
          width={sectionWidth}
          height={sectionHeight}
          mask={`url(#${visibleDefs.oneMinusTwoMaskId})`}
        />
        <rect
          className="quinfosys-wave-surface"
          x="0"
          y="0"
          width={sectionWidth}
          height={sectionHeight}
          mask={`url(#${visibleDefs.twoMinusOneMaskId})`}
        />

        <g transform={waveTransform}>
          <path
            className="quinfosys-wave-outline quinfosys-wave-1"
            d={WAVE_1_CURVE}
            style={wave1Style}
          />
          <path
            className="quinfosys-wave-outline quinfosys-wave-2"
            d={WAVE_2_CURVE}
            style={wave2Style}
          />
        </g>
      </svg>

      {canRenderTextOverlay ? (
        <svg
          className="absolute inset-0 z-20 h-full w-full"
          viewBox={`0 0 ${sectionWidth} ${sectionHeight}`}
          preserveAspectRatio="none"
          role="presentation"
        >
          {textDefs.defs}
          {maskedText(textDefs.oneMinusTwoMaskId)}
          {maskedText(textDefs.twoMinusOneMaskId)}
        </svg>
      ) : null}
    </div>
  );
}
