import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

export function UnityApp() {
  const unityProvider = new UnityContext({
    loaderUrl: "./UnityGame/Build/UnityGame.loader.js", // Starts directory at public folder
    dataUrl: "./UnityGame/Build/UnityGame.data",
    frameworkUrl: "./UnityGame/Build/UnityGame.framework.js",
    codeUrl: "./UnityGame/Build/UnityGame.wasm",
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
        <Unity unityContext={unityProvider} 
        style = {{
            // Resize the Unity container to fit the parent container
            width: "100%",
            height: "auto",
            
            
        }}
        />
    
  );
}
