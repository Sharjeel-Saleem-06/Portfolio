import { useEffect } from "react";
import useFluidCursor from "../hooks/useFluidCursor";

const FluidCursor = () => {
  useEffect(() => {
    useFluidCursor();
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <canvas id="fluid" className="h-screen w-screen" />
    </div>
  );
};

export default FluidCursor;


