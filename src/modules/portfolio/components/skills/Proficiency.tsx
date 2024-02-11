import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react'

const ProficiencyCounter = ({proficiency}: any) => {
  const value = proficiency;
  const direction: any = 'up';
  const ref = useRef<any>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US").format(
            latest.toFixed(0)
          ) + '%';
        }
      }),
    [springValue]
  );



  return (
    
    <div
    className='
    grid place-content-center
    absolute bg-white p-2 rounded-full w-12 h-12
    border border-slate-400 bg-opacity-80
    text-lg font-bold text-green-800
    '
    style={{
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
    ref={ref}
    >
    </div>
  )
}

export default ProficiencyCounter