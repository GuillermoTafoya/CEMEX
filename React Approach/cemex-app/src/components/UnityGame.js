import React, { Component, Fragment, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

export function UnityApp({update}) {
  const unityProvider = new UnityContext({
    loaderUrl: "./UnityGame/Build/UnityFinal.loader.js", // Starts directory at public folder
    dataUrl: "./UnityGame/Build/UnityFinal.data",
    frameworkUrl: "./UnityGame/Build/UnityFinal.framework.js",
    codeUrl: "./UnityGame/Build/UnityFinal.wasm",
    webGLContextAttributes: {
      alpha: true,
      antialias: true,
      depth: true,
      failIfMajorPerformanceCaveat: true,
      powerPreference: "high-performance",
      premultipliedAlpha: true,
      preserveDrawingBuffer: true,
      stencil: true,
      desynchronized: false,
      xrCompatible: true,
    },
  });


  


  return (
      < Fragment >
        <Unity unityContext={unityProvider} 
        id="juego-unity"
        style = {{
            // Resize the Unity container to fit the parent container
            width: "100%",
            height: "100%",
        }}
        />
        {/*<button className="overlap button button--primary" type="submit" onClick={update}> NAVBAR </button>*/}
        
      </Fragment>
    
  );
}
