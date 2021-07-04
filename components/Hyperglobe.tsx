import styled from "styled-components";

const StyledHyperGlobe = styled.div`
  width: 400px;
  height: 400px;
  animation: fadeInUp 1s 1.5s ease-in-out forwards;
  will-change: auto;

  -webkit-animation: spin 4s linear infinite;
  -moz-animation: spin 4s linear infinite;
  animation: spin 60s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  span {
    display: block;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border: 1px dashed var(--color-text);
    position: absolute;
    top: 50%;
    left: 91.35%;
    width: 0;
    height: 0;
    animation: globe 40s -40s linear infinite;
  }

  span + span {
    animation: globe 40s -38s linear infinite;
  }

  span + span + span {
    animation: globe 40s -36s linear infinite;
  }

  span + span + span + span {
    animation: globe 40s -34s linear infinite;
  }

  span + span + span + span + span {
    animation: globe 40s -32s linear infinite;
  }

  span + span + span + span + span + span {
    animation: globe 40s -30s linear infinite;
  }

  span + span + span + span + span + span + span {
    animation: globe 40s -28s linear infinite;
  }

  span + span + span + span + span + span + span + span {
    animation: globe 40s -26s linear infinite;
  }

  span + span + span + span + span + span + span + span + span {
    animation: globe 40s -24s linear infinite;
  }

  span + span + span + span + span + span + span + span + span + span {
    animation: globe 40s -22s linear infinite;
  }

  span + span + span + span + span + span + span + span + span + span + span {
    animation: globe 40s -20s linear infinite;
  }

  span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span {
    animation: globe 40s -18s linear infinite;
  }

  span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span {
    animation: globe 40s -16s linear infinite;
  }

  span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span {
    animation: globe 40s -14s linear infinite;
  }

  span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span {
    animation: globe 40s -12s linear infinite;
  }

  span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span {
    animation: globe 40s -10s linear infinite;
  }

  span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span {
    animation: globe 40s -8s linear infinite;
  }

  span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span {
    animation: globe 40s -6s linear infinite;
  }

  span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span {
    animation: globe 40s -4s linear infinite;
  }

  span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span {
    animation: globe 40s -2s linear infinite;
  }

  span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span
    + span {
    display: none;
    animation: globe 40s 0s linear infinite;
  }

  @keyframes globe {
    6.25% {
      top: 36%;
      left: 82%;
      width: 15.5%;
      height: 28%;
    }
    12.5% {
      top: 23.5%;
      left: 67.5%;
      width: 32.5%;
      height: 53%;
    }
    18.75% {
      top: 14%;
      left: 53%;
      width: 47%;
      height: 72%;
    }
    25% {
      top: 6%;
      left: 37%;
      width: 60%;
      height: 88%;
    }
    31.25% {
      top: 1.25%;
      left: 24.3%;
      width: 70.5%;
      height: 97.5%;
    }
    37.5% {
      top: 0%;
      left: 13%;
      width: 77.5%;
      height: 100%;
    }
    43.75% {
      top: 1.25%;
      left: 5%;
      width: 80%;
      height: 97.5%;
    }
    50% {
      top: 3.5%;
      left: 2.2%;
      width: 78%;
      height: 93%;
    }
    56.25% {
      top: 7.6%;
      left: 0%;
      width: 73.5%;
      height: 84.8%;
    }
    62.5% {
      top: 12.7%;
      left: 2%;
      width: 65.8%;
      height: 74.6%;
    }
    68.75% {
      top: 18.075%;
      left: 5.5%;
      width: 56.5%;
      height: 63.85%;
    }
    75% {
      top: 24.5%;
      left: 9.5%;
      width: 46.25%;
      height: 51%;
    }
    81.25% {
      top: 30.6%;
      left: 13.97%;
      width: 35.65%;
      height: 38.8%;
    }
    87.5% {
      top: 36.625%;
      left: 19.27%;
      width: 24%;
      height: 26.75%;
    }
    93.75% {
      top: 43.5%;
      left: 25.3%;
      width: 12%;
      height: 13%;
    }
    100% {
      top: 50%;
      left: 31.3%;
      width: 0%;
      height: 0%;
    }
  }
`;

export const HyperGlobe = () => {
  return (
    <StyledHyperGlobe>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </StyledHyperGlobe>
  );
};
