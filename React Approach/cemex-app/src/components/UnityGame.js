import Unity, { UnityContext } from "react-unity-webgl";

export function UnityApp() {
  const unityContext = new UnityContext({
    loaderUrl: "./UnityGame/Build/UnityGame.loader.js", // Starts directory at public folder
    dataUrl: "./UnityGame/Build/UnityGame.data",
    frameworkUrl: "./UnityGame/Build/UnityGame.framework.js",
    codeUrl: "./UnityGame/Build/UnityGame.wasm",
    webglContextAttributes: {
        preserveDrawingBuffer: true,
    }
  });

  return (
    <Unity
      unityContext={unityContext}
      style={{ width: "100%", height: "auto" }}
    />
  );
}
