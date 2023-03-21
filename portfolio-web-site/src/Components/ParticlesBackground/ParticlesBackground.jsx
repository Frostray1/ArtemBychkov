import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./config/particles-config";






const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded}
  options={particlesConfig}
  />;
};

export default ParticlesBackground;
// import React from 'react';
// import Particles from "react-particles";
// import type { Engine } from "tsparticles-engine";
// import { loadLinksPreset } from "tsparticles-preset-links";

// interface IProps {}

// export class ParticlesContainer extends React.PureComponent<IProps> {
//   // this customizes the component tsParticles installation
//   async customInit(engine: Engine): Promise<void> {
//     // this adds the preset to tsParticles, you can safely use the
//     await loadLinksPreset(engine);
//   }

//   render() {
//     const options = {
//       preset: "links",
//     };

//     return <Particles options={options} init={this.customInit} />;
//   }
// }

// import React, { useRef, useEffect } from 'react';
// import Particles from 'react-tsparticles';
// import { Links } from 'tsparticles/dist/Options/Classes';

// const TSParticlesPresetLinks = () => {
//   const particlesContainer = useRef(null);

//   useEffect(() => {
//     if (particlesContainer.current) {
//       // инициализация эффекта частиц
//       Particles.load('particles-container', {
//         preset: new Links(),
//         // настройки эффекта, например:
//         options: {
//           particles: {
//             number: {
//               value: 50,
//             },
//             links: {
//               color: '#fff',
//               distance: 100,
//               enable: true,
//               opacity: 0.5,
//               width: 1,
//             },
//           },
//         },
//       });
//     }
//   }, [particlesContainer]);

//   return (
//     <div
//       ref={particlesContainer}
//       id="particles-container"
//       style={{ width: '100%', height: '100%' }}
//     />
//   );
// };

// export default TSParticlesPresetLinks;



