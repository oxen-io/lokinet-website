import { Scene } from "three"
import React from "react";

import { ThemeContext } from "../theme/theme";

function TestWebGL(): boolean {

	try {
		const canvas = document.createElement( 'canvas' );
		return !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );
	} catch ( e ) {
		return false;
	}

}

export var IsWebGLAvailable = TestWebGL()

export var FallbackHoleWireframe = () => {

    const { colorMode } = React.useContext(ThemeContext);
    let gif = "fallback-animations/hole-wireframe-white.gif";
    if (colorMode === "dark") {
      gif = "fallback-animations/hole-wireframe-dark.gif";
    }

    return(
        <img src={gif} />
    );

}

export var FallbackSphereWireframe = () => {

    const { colorMode } = React.useContext(ThemeContext);
    let gif = "fallback-animations/sphere-wireframe-white.gif";
    if (colorMode === "dark") {
      gif = "fallback-animations/sphere-wireframe-dark.gif";
    }

    return(
        <img src={gif} />
    );

}
