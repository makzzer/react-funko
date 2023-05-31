// 1) Desestructuracion
// 2) Spread Operator
// 3) Rest Operator

const IconLogo = ({ fill = "#fff", ancho, alto,...props }) => {
    return (
        <svg width={ancho} height={alto} viewBox="0 0 372 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_76_80)">
        <path d="M48.1673 36.9445C46.0483 36.9445 44.3228 40.1395 44.3228 44.0874C44.3228 48.0342 46.0483 51.238 48.1673 51.238C50.2853 51.238 52.0075 48.0353 52.0075 44.0874C52.0108 40.1373 50.2886 36.9445 48.1673 36.9445Z" fill="#FF4848"/>
        <path d="M32.0779 36.9445C29.9544 36.9445 28.2322 40.1395 28.2322 44.0874C28.2322 48.0342 29.9544 51.238 32.0779 51.238C34.198 51.238 35.9192 48.0353 35.9192 44.0874C35.9192 40.1395 34.198 36.9445 32.0779 36.9445Z" fill="#FF4848"/>
        <path d="M73.721 16.7454C74.3684 15.1617 76.4918 8.77268 73.0484 0.141581C73.0484 0.141581 67.7717 -1.52793 55.8203 6.63826C50.8161 5.26111 45.4383 5.05558 40.1199 5.05558C34.8014 5.05558 29.428 5.26111 24.4085 6.64266C12.4614 -1.52903 7.18691 0.140483 7.18691 0.140483C3.74787 8.77598 5.8735 15.1606 6.51866 16.7454C2.46854 21.1231 0 26.7119 0 33.5636C0 59.3591 16.7083 65.1919 40.0264 65.1919C63.3556 65.1919 80.2353 59.3602 80.2353 33.5636C80.2353 26.7119 77.7668 21.122 73.7155 16.7454H73.721ZM40.122 60.256C23.5589 60.256 10.1302 59.48 10.1302 43.4334C10.1302 39.6009 12.0163 36.0223 15.2498 33.0657C20.6353 28.1308 29.7676 30.739 40.1231 30.739C50.4864 30.739 59.6055 28.1308 64.9965 33.0602C68.2333 36.0223 70.1248 39.5899 70.1248 43.429C70.1248 59.4811 56.6874 60.256 40.1242 60.256H40.122Z" fill="#FF4848"/>
        <path d="M120.263 30.0874C120.667 30.0874 121.01 30.2288 121.293 30.5116C121.576 30.7943 121.717 31.1377 121.717 31.5416V34.5308C121.717 34.9078 121.576 35.2377 121.293 35.5205C121.01 35.8032 120.667 35.9446 120.263 35.9446H106.973V46.2855C106.973 46.6625 106.839 46.9924 106.569 47.2752C106.3 47.5579 105.963 47.6993 105.559 47.6993H102.489C102.112 47.6993 101.783 47.5579 101.5 47.2752C101.217 46.9924 101.076 46.6625 101.076 46.2855V31.5416C101.076 31.1377 101.217 30.7943 101.5 30.5116C101.783 30.2288 102.112 30.0874 102.489 30.0874H120.263ZM122.081 17.7268C122.458 17.7268 122.788 17.8682 123.07 18.1509C123.353 18.4337 123.495 18.7636 123.495 19.1406V22.0894C123.495 22.4933 123.353 22.8367 123.07 23.1194C122.788 23.4022 122.458 23.5436 122.081 23.5436H102.489C102.112 23.5436 101.783 23.4022 101.5 23.1194C101.217 22.8367 101.076 22.4933 101.076 22.0894V19.1406C101.076 18.7636 101.217 18.4337 101.5 18.1509C101.783 17.8682 102.112 17.7268 102.489 17.7268H122.081ZM138.158 42.0845C138.481 42.1922 138.737 42.374 138.925 42.6298C139.114 42.8857 139.208 43.1752 139.208 43.4983V46.6087C139.208 47.0396 139.033 47.4031 138.683 47.6993C138.413 47.9148 138.117 48.0225 137.794 48.0225C137.659 48.0225 137.565 48.009 137.511 47.9821C135.007 47.4974 132.853 46.3394 131.048 44.5082C128.625 42.0307 127.413 38.7722 127.413 34.7328V19.181C127.413 18.777 127.554 18.4337 127.837 18.1509C128.12 17.8682 128.45 17.7268 128.827 17.7268H131.937C132.341 17.7268 132.684 17.8682 132.967 18.1509C133.25 18.4337 133.391 18.777 133.391 19.181V34.8136C133.391 37.3719 134.118 39.3243 135.572 40.6707C136.326 41.3709 137.188 41.8422 138.158 42.0845ZM152.094 17.7268C152.498 17.7268 152.841 17.8682 153.124 18.1509C153.406 18.4337 153.548 18.777 153.548 19.181V34.7328C153.548 38.7722 152.336 42.0307 149.912 44.5082C148.108 46.3394 145.954 47.4974 143.449 47.9821C143.395 48.009 143.301 48.0225 143.167 48.0225C142.843 48.0225 142.547 47.9148 142.278 47.6993C141.928 47.43 141.753 47.053 141.753 46.5683V43.4579C141.753 43.1617 141.847 42.8857 142.035 42.6298C142.224 42.374 142.48 42.1922 142.803 42.0845C143.826 41.7883 144.688 41.317 145.388 40.6707C146.842 39.3781 147.569 37.4257 147.569 34.8136V19.181C147.569 18.777 147.711 18.4337 147.994 18.1509C148.276 17.8682 148.62 17.7268 149.024 17.7268H152.094ZM184.53 17.7268C184.907 17.7268 185.237 17.8682 185.52 18.1509C185.803 18.4337 185.944 18.7636 185.944 19.1406V46.2047C185.944 46.5818 185.803 46.9116 185.52 47.1944C185.237 47.4772 184.907 47.6185 184.53 47.6185H180.976C180.491 47.6185 180.1 47.43 179.804 47.053L160.051 19.9889C159.89 19.7734 159.795 19.5311 159.769 19.2618C159.742 18.9925 159.789 18.7366 159.91 18.4943C160.031 18.2519 160.206 18.0634 160.435 17.9288C160.664 17.7941 160.913 17.7268 161.182 17.7268H164.737C164.952 17.7268 165.168 17.7739 165.383 17.8682C165.599 17.9624 165.76 18.1038 165.868 18.2923L180.046 37.5604V19.1406C180.046 18.7636 180.181 18.4337 180.45 18.1509C180.72 17.8682 181.056 17.7268 181.46 17.7268H184.53ZM164.252 37.318C164.629 37.318 164.959 37.4527 165.242 37.7219C165.525 37.9912 165.666 38.3279 165.666 38.7318V46.2047C165.666 46.5818 165.525 46.9116 165.242 47.1944C164.959 47.4772 164.629 47.6185 164.252 47.6185H161.182C160.805 47.6185 160.475 47.4772 160.193 47.1944C159.91 46.9116 159.769 46.5818 159.769 46.2047V38.7318C159.769 38.3279 159.91 37.9912 160.193 37.7219C160.475 37.4527 160.805 37.318 161.182 37.318H164.252ZM218.138 45.3969C218.3 45.5854 218.394 45.8143 218.421 46.0836C218.448 46.3529 218.401 46.6087 218.28 46.851C218.158 47.0934 217.983 47.2819 217.755 47.4166C217.526 47.5512 217.277 47.6185 217.007 47.6185H213.17C212.927 47.6185 212.705 47.5647 212.503 47.457C212.301 47.3492 212.133 47.2011 211.998 47.0126L202.344 33.117L198.385 36.8333V46.2047C198.385 46.5818 198.244 46.9116 197.961 47.1944C197.679 47.4772 197.349 47.6185 196.972 47.6185H193.902C193.525 47.6185 193.195 47.4772 192.912 47.1944C192.629 46.9116 192.488 46.5818 192.488 46.2047V34.9751C192.488 34.5443 192.636 34.2076 192.932 33.9653L209.817 18.1307C210.086 17.8614 210.41 17.7268 210.787 17.7268H215.149C215.418 17.7268 215.674 17.8076 215.917 17.9691C216.159 18.1307 216.334 18.3462 216.442 18.6155C216.549 18.8848 216.576 19.1608 216.522 19.4435C216.469 19.7263 216.334 19.9754 216.119 20.1908L206.666 29.0776L218.138 45.3969ZM193.902 28.0273C193.525 28.0273 193.195 27.8927 192.912 27.6234C192.629 27.3541 192.488 27.0175 192.488 26.6135V19.1406C192.488 18.7636 192.629 18.4337 192.912 18.1509C193.195 17.8682 193.525 17.7268 193.902 17.7268H196.972C197.349 17.7268 197.679 17.8682 197.961 18.1509C198.244 18.4337 198.385 18.7636 198.385 19.1406V26.6135C198.385 27.0175 198.244 27.3541 197.961 27.6234C197.679 27.8927 197.349 28.0273 196.972 28.0273H193.902ZM233.205 18.0499C233.528 18.3192 233.69 18.6828 233.69 19.1406V22.1702C233.69 22.5202 233.589 22.8232 233.387 23.079C233.185 23.3349 232.909 23.5032 232.559 23.584C230.836 23.934 229.368 24.7554 228.156 26.048C226.513 27.7715 225.692 30.0134 225.692 32.7736C225.692 35.5339 226.513 37.7893 228.156 39.5397C229.368 40.8054 230.836 41.6133 232.559 41.9633C232.909 42.0441 233.185 42.2124 233.387 42.4683C233.589 42.7241 233.69 43.0271 233.69 43.3771V46.4067C233.69 46.8376 233.528 47.2011 233.205 47.4974C232.909 47.7128 232.599 47.8205 232.276 47.8205H232.034C228.91 47.3088 226.231 45.8951 223.995 43.5791C221.195 40.6977 219.794 37.1093 219.794 32.814C219.794 28.5188 221.195 24.9035 223.995 21.9682C226.177 19.7061 228.856 18.3058 232.034 17.7672C232.465 17.6864 232.855 17.7806 233.205 18.0499ZM245.889 21.9682C248.69 24.9035 250.09 28.5188 250.09 32.814C250.09 37.1093 248.69 40.6977 245.889 43.5791C243.654 45.8951 240.974 47.3088 237.851 47.8205H237.608C237.285 47.8205 236.975 47.7128 236.679 47.4974C236.356 47.2011 236.195 46.8376 236.195 46.4067V43.3771C236.195 43.0271 236.295 42.7241 236.497 42.4683C236.699 42.2124 236.975 42.0441 237.326 41.9633C239.049 41.6133 240.517 40.8054 241.729 39.5397C243.371 37.7893 244.193 35.5339 244.193 32.7736C244.193 30.0134 243.371 27.7715 241.729 26.048C240.517 24.7554 239.049 23.934 237.326 23.584C236.975 23.5032 236.699 23.3349 236.497 23.079C236.295 22.8232 236.195 22.5202 236.195 22.1702V19.1406C236.195 18.6828 236.363 18.3192 236.699 18.0499C237.036 17.7806 237.42 17.6864 237.851 17.7672C241.028 18.3058 243.708 19.7061 245.889 21.9682ZM274.69 32.7131C275.848 33.4402 276.73 34.3288 277.336 35.3791C277.942 36.4293 278.245 37.6008 278.245 38.8934C278.245 41.9364 277.087 44.2658 274.771 45.8816C273.209 47.0126 271.095 47.7263 268.429 48.0225H268.268C267.891 48.0225 267.581 47.9013 267.338 47.6589C267.015 47.3627 266.854 47.0126 266.854 46.6087V43.7003C266.854 43.3502 266.975 43.0405 267.217 42.7712C267.46 42.5019 267.756 42.3404 268.106 42.2865C269.372 42.1518 270.355 41.8556 271.055 41.3978C271.593 41.0747 271.957 40.6573 272.145 40.1456C272.253 39.8494 272.307 39.4724 272.307 39.0146C272.307 38.7183 272.253 38.4625 272.145 38.2471C272.038 38.0316 271.849 37.8297 271.58 37.6412C270.799 37.1026 269.789 36.6448 268.55 36.2678L267.904 36.0658C266.558 35.6888 265.319 35.3791 264.188 35.1367C263.945 35.0829 263.555 34.9886 263.016 34.854L262.572 34.7328C261.603 34.4904 260.579 34.1538 259.502 33.7229C257.913 33.0497 256.607 32.2014 255.584 31.1781C254.399 29.9932 253.806 28.4313 253.806 26.4923C253.806 23.8263 254.83 21.6585 256.876 19.9889C258.277 18.804 260.243 18.0499 262.774 17.7268C263.205 17.6729 263.575 17.7941 263.885 18.0903C264.194 18.3866 264.349 18.7366 264.349 19.1406V22.049C264.349 22.3991 264.242 22.7087 264.026 22.978C263.811 23.2473 263.535 23.4022 263.198 23.4426C262.861 23.483 262.518 23.557 262.168 23.6647C261.387 23.961 260.835 24.2505 260.512 24.5332C260.189 24.816 259.96 25.1055 259.825 25.4017C259.691 25.8595 259.623 26.2904 259.623 26.6943C259.623 26.9097 259.744 27.1386 259.987 27.381C260.364 27.758 260.916 28.0946 261.643 28.3909C261.966 28.5255 262.532 28.7275 263.339 28.9968L268.389 30.249L268.631 30.3298C269.897 30.6799 270.812 30.9492 271.378 31.1377C272.644 31.5686 273.748 32.0937 274.69 32.7131ZM267.944 23.584C267.621 23.5032 267.359 23.3349 267.157 23.079C266.955 22.8232 266.854 22.5202 266.854 22.1702V19.2214C266.854 18.7905 267.029 18.427 267.379 18.1307C267.514 17.9961 267.689 17.9086 267.904 17.8682C268.119 17.8278 268.321 17.821 268.51 17.848C270.88 18.225 272.805 19.0329 274.286 20.2716C276.306 21.9413 277.383 24.0687 277.518 26.6539C277.545 27.0309 277.417 27.3743 277.134 27.684C276.851 27.9937 276.508 28.1485 276.104 28.1485H272.953C272.603 28.1485 272.294 28.0273 272.024 27.785C271.755 27.5426 271.607 27.2464 271.58 26.8963C271.472 26.1961 271.243 25.6171 270.893 25.1593C270.328 24.4861 269.452 23.9744 268.268 23.6243C268.187 23.6243 268.133 23.6109 268.106 23.584H267.944ZM263.218 42.1249C263.541 42.1788 263.811 42.3404 264.026 42.6096C264.242 42.8789 264.349 43.1752 264.349 43.4983V46.4875C264.349 46.9184 264.188 47.2819 263.865 47.5781C263.595 47.7936 263.286 47.9013 262.936 47.9013H262.734C260.229 47.5243 258.169 46.7029 256.553 45.4372C254.453 43.7676 253.268 41.4382 252.999 38.449C252.945 38.0182 253.066 37.6479 253.362 37.3382C253.658 37.0285 254.008 36.8737 254.412 36.8737H257.603C257.98 36.8737 258.304 37.0016 258.573 37.2574C258.842 37.5132 258.99 37.8297 259.017 38.2067C259.098 39.5532 259.758 40.5899 260.997 41.317C261.562 41.6402 262.303 41.9095 263.218 42.1249ZM284.344 28.0677C283.967 28.0677 283.638 27.9263 283.355 27.6436C283.072 27.3608 282.931 27.0309 282.931 26.6539V19.1406C282.931 18.7636 283.072 18.4337 283.355 18.1509C283.638 17.8682 283.967 17.7268 284.344 17.7268H287.414C287.818 17.7268 288.155 17.8682 288.424 18.1509C288.694 18.4337 288.828 18.7636 288.828 19.1406V26.6539C288.828 27.0309 288.694 27.3608 288.424 27.6436C288.155 27.9263 287.818 28.0677 287.414 28.0677H284.344ZM306.279 17.7268C306.656 17.7268 306.985 17.8682 307.268 18.1509C307.551 18.4337 307.692 18.7636 307.692 19.1406V46.2855C307.692 46.6625 307.551 46.9924 307.268 47.2752C306.985 47.5579 306.656 47.6993 306.279 47.6993H303.209C302.805 47.6993 302.468 47.5579 302.199 47.2752C301.929 46.9924 301.795 46.6625 301.795 46.2855V35.6214H288.828V46.2855C288.828 46.6625 288.694 46.9924 288.424 47.2752C288.155 47.5579 287.818 47.6993 287.414 47.6993H284.344C283.967 47.6993 283.638 47.5579 283.355 47.2752C283.072 46.9924 282.931 46.6625 282.931 46.2855V31.1781C282.931 30.8011 283.072 30.4712 283.355 30.1884C283.638 29.9057 283.967 29.7643 284.344 29.7643H301.795V19.1406C301.795 18.7636 301.929 18.4337 302.199 18.1509C302.468 17.8682 302.805 17.7268 303.209 17.7268H306.279ZM325.951 18.0499C326.274 18.3192 326.435 18.6828 326.435 19.1406V22.1702C326.435 22.5202 326.334 22.8232 326.132 23.079C325.93 23.3349 325.654 23.5032 325.304 23.584C323.581 23.934 322.113 24.7554 320.901 26.048C319.259 27.7715 318.437 30.0134 318.437 32.7736C318.437 35.5339 319.259 37.7893 320.901 39.5397C322.113 40.8054 323.581 41.6133 325.304 41.9633C325.654 42.0441 325.93 42.2124 326.132 42.4683C326.334 42.7241 326.435 43.0271 326.435 43.3771V46.4067C326.435 46.8376 326.274 47.2011 325.951 47.4974C325.654 47.7128 325.345 47.8205 325.021 47.8205H324.779C321.655 47.3088 318.976 45.8951 316.741 43.5791C313.94 40.6977 312.54 37.1093 312.54 32.814C312.54 28.5188 313.94 24.9035 316.741 21.9682C318.922 19.7061 321.601 18.3058 324.779 17.7672C325.21 17.6864 325.6 17.7806 325.951 18.0499ZM338.634 21.9682C341.435 24.9035 342.835 28.5188 342.835 32.814C342.835 37.1093 341.435 40.6977 338.634 43.5791C336.399 45.8951 333.72 47.3088 330.596 47.8205H330.354C330.03 47.8205 329.721 47.7128 329.424 47.4974C329.101 47.2011 328.94 46.8376 328.94 46.4067V43.3771C328.94 43.0271 329.041 42.7241 329.243 42.4683C329.445 42.2124 329.721 42.0441 330.071 41.9633C331.794 41.6133 333.262 40.8054 334.474 39.5397C336.116 37.7893 336.938 35.5339 336.938 32.7736C336.938 30.0134 336.116 27.7715 334.474 26.048C333.262 24.7554 331.794 23.934 330.071 23.584C329.721 23.5032 329.445 23.3349 329.243 23.079C329.041 22.8232 328.94 22.5202 328.94 22.1702V19.1406C328.94 18.6828 329.108 18.3192 329.445 18.0499C329.781 17.7806 330.165 17.6864 330.596 17.7672C333.774 18.3058 336.453 19.7061 338.634 21.9682ZM361.296 17.7268C364.5 17.7268 367.085 18.6491 369.051 20.4938C371.017 22.3385 372 24.7958 372 27.8657C372 30.9357 371.031 33.3863 369.092 35.2175C367.153 37.0487 364.554 37.9643 361.296 37.9643H353.58V46.2047C353.58 46.5818 353.439 46.9116 353.156 47.1944C352.873 47.4772 352.543 47.6185 352.166 47.6185H349.096C348.719 47.6185 348.39 47.4772 348.107 47.1944C347.824 46.9116 347.683 46.5818 347.683 46.2047V33.6825C347.683 33.3055 347.824 32.9756 348.107 32.6929C348.39 32.4101 348.719 32.2687 349.096 32.2687H361.053C362.857 32.2687 364.15 31.8782 364.931 31.0973C365.712 30.3971 366.102 29.3334 366.102 27.9061C366.102 26.4789 365.699 25.3815 364.891 24.614C364.083 23.8465 362.804 23.4628 361.053 23.4628H349.096C348.719 23.4628 348.39 23.3214 348.107 23.0386C347.824 22.7559 347.683 22.426 347.683 22.049V19.1406C347.683 18.7636 347.824 18.4337 348.107 18.1509C348.39 17.8682 348.719 17.7268 349.096 17.7268H361.296Z" fill="#FAFAFF"/>
        </g>
        <defs>
        <clipPath id="clip0_76_80">
        <rect width="372" height="65.1919" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        
    );
  };
  
  export default IconLogo;