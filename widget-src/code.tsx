const { widget } = figma;
const { Frame, SVG } = widget;

function Widget() {
  const buttonSvgSrc = `
  <svg width="150" height="189" viewBox="0 0 150 189" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M54.3268 110.207C50.4231 115.886 49.654 122.802 52.6876 126.694C52.8728 126.931 55.2288 126.209 55.5206 125.498C57.0562 121.758 58.1911 117.854 59.615 114.064C59.9238 113.243 60.8482 112.654 61.4885 111.958C62.0125 113.062 63.1178 114.278 62.9342 115.249C62.5938 117.051 61.4745 118.699 60.7261 120.432C54.8963 133.924 46.5505 146.04 39.7504 158.999C38.6269 161.14 38.0093 163.559 36.8062 165.645C35.6274 167.689 36.6412 172.57 31.2066 170.1C30.4804 169.77 27.5859 174.365 25.6188 176.61C23.4986 179.031 21.289 181.372 19.1186 183.747C18.6283 180.565 17.9072 177.4 17.6905 174.199C16.9612 163.441 20.2255 153.288 22.4202 142.938C24.2967 134.085 25.0493 125.051 27.9805 116.346C30.2088 109.727 25.4885 104.543 21.8372 99.8179C19.1409 96.3284 15.0516 93.9263 11.6129 91.0043C10.7279 90.2519 9.63862 89.5078 9.19224 88.5126C7.74655 85.2882 1.45637 90.7272 1.80447 84.0957C1.95861 81.1664 0.72085 78.1735 0.192746 75.1956C-0.588289 70.7927 0.99033 69.0751 5.18413 68.1146C14.7805 65.917 24.4866 66.6637 34.1662 66.3571C38.5964 66.2168 43.3659 66.1091 47.2974 64.4029C50.2126 63.1384 53.4283 59.6101 54.0542 56.5804C55.6913 48.6543 59.6244 41.8886 63.1302 34.9106C67.9126 25.3928 70.8857 15.31 73.5325 5.08125C73.8071 4.01975 73.8128 2.85468 74.2582 1.88223C74.6006 1.13659 75.4385 0.618781 76.0561 0C76.382 0.671079 76.6582 1.37219 77.0404 2.00909C81.4189 9.30139 83.5897 17.3575 85.9489 25.4736C88.7244 35.0225 92.838 44.1846 96.4929 53.4658C96.8766 54.4398 98.0803 55.0886 98.9037 55.8886C98.8432 54.6857 98.627 53.4647 98.7656 52.2862C98.9001 51.1455 99.3853 50.0431 99.7453 48.9334C99.9113 48.4218 100.147 47.9335 100.351 47.4343C100.729 47.978 101.316 48.4736 101.453 49.0727C102.673 54.4128 103.699 59.8012 105.071 65.0999C105.364 66.2308 106.834 67.0556 107.76 68.0214C107.998 66.9526 108.687 65.7347 108.394 64.8405C107.05 60.7358 111.009 60.9403 112.685 59.8079C115.545 57.8759 119.222 57.1598 122.083 55.2294C124.695 53.4663 123.617 56.0579 124.268 56.3971C125.864 57.2282 128.014 57.9557 129.655 57.5539C134.36 56.4023 138.878 54.5045 143.564 53.254C145.196 52.8185 147.689 52.7724 148.725 53.719C149.824 54.7215 150.105 57.151 149.968 58.896C149.238 68.2171 143.61 74.5742 137.151 80.7361C125.681 91.6769 114.559 102.999 106.238 116.715C105.601 117.764 104.059 118.346 102.834 118.928C101.61 119.509 99.407 122.599 99.6889 117.913C99.7696 116.576 99.2472 115.202 99.0015 113.845L96.5311 114.871C97.5144 112.976 93.2032 111.879 96.0118 109.235C97.5082 107.826 97.3722 104.667 97.9065 102.284C97.9189 102.229 96.8777 101.758 96.7639 101.882C94.8956 103.926 92.0492 105.311 92.7082 108.96C93.5849 113.812 90.6159 119.517 96.1173 123.386C96.6739 123.777 96.7287 126.147 96.1628 126.671C92.9761 129.62 94.907 133.27 94.5537 136.548C93.7287 144.196 94.0246 151.422 103.386 153.997C106.717 154.914 103.447 156.437 103.259 156.456C101.496 156.636 99.4629 157.099 97.9711 156.435C93.842 154.595 93.0397 154.752 92.7863 158.907C92.6094 161.814 92.8541 164.746 92.7072 167.657C92.6394 168.991 92.3446 170.461 91.6634 171.567C91.1627 172.38 89.867 172.701 88.9261 173.242C88.4549 172.375 87.7639 171.561 87.5487 170.635C86.3099 165.3 85.1544 159.944 84.0434 154.58C83.8142 153.474 84.2694 152.082 83.7578 151.204C82.1994 148.528 80.3233 146.037 78.5714 143.475C74.3166 146.217 81.0309 148.666 78.3428 151.792C77.0327 152.88 76.1228 153.491 75.3314 154.229C75.2275 154.326 75.7333 155.079 75.9568 155.528C76.7213 154.898 77.5406 154.32 78.2259 153.612C78.5451 153.282 78.603 152.699 78.7794 152.23C81.7008 157.627 82.3887 163.488 82.2542 169.493C82.1968 172.066 81.5415 174.897 85.8092 174.253C86.0058 174.223 86.7604 175.811 86.7103 176.612C86.5158 179.687 86.2158 182.767 85.7058 185.803C85.5165 186.929 84.6382 187.938 84.0744 189C82.9561 188.189 80.9063 187.419 80.8696 186.562C80.6032 180.33 76.8754 175.321 75.3097 169.591C71.5178 155.715 67.848 141.806 64.127 127.912C63.7763 126.602 63.2119 125.308 63.1256 123.981C63.0573 122.944 63.5766 121.869 63.8347 120.811C64.8273 121.157 66.0263 121.26 66.7711 121.896C68.5297 123.401 69.422 125.998 70.3028 120.978C71.2251 115.723 71.2359 111.086 70.6095 105.712C69.8492 99.1903 66.2445 92.5857 69.7059 85.2188C71.6099 81.1659 69.9733 75.4726 70.1213 70.5244C70.1451 69.7291 71.1573 68.9632 71.7123 68.1839C72.3216 68.9094 73.5133 69.6918 73.4492 70.352C72.8497 76.5181 73.8946 82.6054 72.2249 88.976C70.8475 94.2302 73.2232 100.492 74.0316 106.293C74.2944 108.178 74.8799 110.016 75.2782 111.884C75.5083 112.962 75.6594 114.058 75.8466 115.146C76.4621 114.154 77.269 113.23 77.6482 112.155C78.1892 110.62 78.9413 108.885 78.6852 107.394C77.7604 102.01 76.0996 96.7354 75.4396 91.331C75.1277 88.7689 76.8573 86.0219 76.9571 83.3324C77.2701 74.9035 75.7049 66.731 73.7766 58.5092C72.8052 54.3662 72.7328 49.619 75.2011 45.2606C78.5425 39.3607 78.962 33.0838 78.2978 26.1131C77.809 20.9831 78.8782 15.613 77.0083 10.4908C76.7983 9.91499 76.249 9.46346 75.857 8.95446C75.6666 9.45777 75.2844 9.97609 75.3211 10.4623C75.4483 12.1266 75.6563 13.7929 75.9832 15.4286C76.0799 15.9138 77.0559 16.5828 76.9773 16.691C72.948 22.2362 76.2759 28.6286 74.9016 34.4876C73.6468 39.8355 72.7318 45.2683 71.8183 50.6898C71.0792 55.0746 71.6823 60.0989 69.7132 63.7758C65.8152 71.0536 66.6469 78.5556 66.6102 86.0898C66.5906 90.1437 66.2606 93.9014 63.2218 96.9534C62.4568 97.7218 61.3742 98.7605 61.4042 99.6418C61.6194 105.861 57.9376 110.46 54.7638 115.46C54.3268 114.001 54.3268 112.541 54.7638 110.645C56.8406 105.06 58.4642 99.909 60.1261 94.7692C61.8361 89.4783 63.6195 84.2013 63.034 78.5085C62.9823 78.0083 62.5628 77.5464 62.3145 77.0669C61.9809 77.4253 61.4792 77.7282 61.339 78.1512C59.5535 83.5318 58.3245 89.1681 55.9349 94.2582C53.4428 99.5662 54.8523 104.906 54.3268 110.207ZM94.4989 58.5532L92.8804 58.4253C93.4199 58.7598 93.9594 59.0943 94.4989 60.3045L96.1178 60.4329C95.5778 60.0984 95.0389 59.7633 94.4989 58.5532ZM123.318 78.6898L123.19 80.3121C123.524 79.7715 123.858 79.2303 125.065 78.6898L125.193 77.0669C124.859 77.6075 124.525 78.1486 123.318 78.6898ZM87.5125 67.3083L87.0356 65.0792L85.8941 65.4292C86.4335 66.3473 86.973 67.2654 87.5125 69.059C87.5125 73.3496 87.4716 77.6402 87.558 81.9286C87.5704 82.5593 88.188 83.1776 88.5263 83.8016C88.728 83.5996 89.1221 83.377 89.1035 83.1983C88.5806 78.1927 91.0628 72.8613 87.5125 67.3083ZM83.1459 96.1989C86.9332 93.496 86.7878 89.3421 85.1321 86.2011C82.0427 80.341 82.5211 74.277 82.2144 68.1322C81.8916 61.6559 81.1308 55.2009 80.4728 48.7454C80.4314 48.3441 79.3639 47.628 79.2077 47.73C78.4913 48.195 77.3678 48.9303 77.3994 49.5128C77.7511 55.9445 77.2773 62.6584 79.0173 68.7214C81.6283 77.8188 79.3468 87.2885 81.3992 96.1989L81.2715 97.8217C81.6051 97.2806 81.9387 96.74 83.1459 96.1989ZM35.988 108.456C36.2786 110.667 37.2299 113.036 36.7473 115.063C34.5961 124.102 33.2517 133.196 33.3407 142.5C33.3536 143.88 32.9688 145.261 32.8302 146.647C32.4107 150.852 31.9659 155.056 31.6902 159.271C31.655 159.81 32.5638 160.412 33.0355 160.984C33.7286 160.342 34.9012 159.785 35.0326 159.043C35.6642 155.472 35.3817 151.618 36.6024 148.3C38.8592 142.166 40.6323 135.956 42.4287 129.694C43.7911 124.943 43.264 121.555 41.568 117.281C40.1187 113.629 36.1814 109.741 40.2417 105.14C40.7067 104.613 39.8745 101.792 39.215 101.613C36.4297 100.852 37.1026 103.177 36.7933 104.796C36.5481 106.076 35.6968 107.24 34.2407 108.456L33.5424 111.257L34.6835 111.514C34.8273 110.495 34.9705 109.475 35.988 108.456ZM142.531 69.9347C143.144 68.7359 144.11 67.5859 144.285 66.3255C144.519 64.6556 144.702 61.7942 143.91 61.3862C141.474 60.1294 140.276 61.8403 139.287 64.2978C137.3 69.233 134.135 73.3936 130.252 77.1747C126.673 80.66 123.849 84.9262 120.7 88.8554C119.741 90.0531 118.81 91.2735 117.865 92.4836C117.063 91.0721 116.205 89.6885 115.482 88.2376C115.126 87.5246 115.018 86.6873 114.798 85.9065C113.977 86.5869 112.865 87.1161 112.416 87.988C111.938 88.917 111.791 90.2358 112.017 91.271C113.026 95.9022 110.393 98.6414 107.542 101.712C105.186 104.248 103.663 107.596 102.013 110.714C101.791 111.132 102.948 112.335 103.58 113.077C103.646 113.155 104.634 112.672 104.958 112.263C116.436 97.7725 128.253 83.5856 142.531 69.9347ZM63.0599 41.0441C62.478 44.2814 61.6649 47.498 61.368 50.7618C60.9382 55.4857 62.1475 59.8436 56.763 63.7603C52.1544 67.1131 54.5073 74.3215 54.4059 79.8859C54.3925 80.6445 55.4476 81.4222 56.0083 82.1917C56.6119 81.4662 57.6366 80.804 57.7556 80.006C59.1216 70.8501 66.7954 63.3756 64.8651 53.3306C64.8025 53.0054 65.8866 52.5591 65.9616 52.0925C66.7954 46.9124 67.5951 41.7245 68.2478 36.5189C68.3756 35.5014 67.8325 34.4001 67.5987 33.3375C66.6682 34.2856 65.478 35.095 64.8785 36.2202C64.263 37.3754 64.2242 38.8392 63.0599 41.0441ZM42.9738 94.4482C43.8474 93.6938 45.409 92.9968 45.4773 92.175C45.8042 88.2423 44.7862 84.1547 48.9418 81.2198C50.1837 80.3426 50.3574 77.8002 50.7718 75.964C50.9285 75.2691 50.3823 74.4147 50.1568 73.6334C49.745 73.9145 49.2862 74.147 48.9304 74.4872C47.8768 75.4928 46.2593 76.3819 45.9402 77.6008C44.6166 82.6469 42.9702 85.1235 37.7755 80.7874C36.3857 79.627 33.0992 81.0624 31.0535 80.3032C28.2997 79.2801 23.7707 83.624 22.7078 77.6334C22.1854 77.8286 21.2745 77.9286 21.2 78.2341C20.2002 82.3284 24.0852 86.1094 28.0069 84.9392C34.9364 82.8711 39.4897 83.7125 41.5819 87.9451C42.4426 89.6865 43.7192 92.4971 39.574 92.7943C38.6249 92.8622 37.7631 94.1484 36.8611 94.8744C37.5785 95.7432 38.3781 97.379 38.9952 97.3127C40.0886 97.1952 41.0719 96.0431 42.9738 94.4482ZM43.8474 105.83C41.6621 108.845 42.6138 111.882 43.8769 114.865C44.2411 115.725 44.9642 116.433 45.5223 117.211C46.1285 116.481 47.2969 115.709 47.2473 115.027C46.9695 111.225 48.9764 108.143 49.8842 104.738C51.5228 98.5896 51.7752 92.0684 52.5464 85.6962C52.6028 85.2292 52.1725 84.7031 51.9687 84.2044C51.3516 84.6482 50.4454 84.963 50.178 85.5631C49.6323 86.7883 49.683 88.3086 49.0421 89.4576C46.6892 93.6741 49.4849 100.683 42.2052 102.223C42.7524 102.841 43.3002 103.46 43.8474 105.83ZM27.2543 146.977C26.6781 146.977 25.6193 146.873 25.594 146.992C24.0557 154.168 22.5531 161.352 21.2078 168.566C21.05 169.414 21.8026 170.432 22.1336 171.371C22.9488 170.554 24.306 169.845 24.4933 168.902C25.8795 161.919 29.4692 155.302 27.2543 146.977ZM111.965 74.3122L107.826 69.9347C106.877 71.5342 105.875 73.1057 104.996 74.743C104.313 76.0158 103.783 77.3709 103.185 78.6898C102.618 77.3393 102.168 75.9205 101.434 74.6695C101.094 74.0901 100.175 73.4915 99.5663 73.5381C99.0082 73.5811 98.1594 74.4147 98.0523 75.0102C97.5361 77.8794 100.585 81.7785 103.839 82.1275C106.294 82.3905 109.337 82.9808 108.62 78.4438C108.472 77.5128 110.218 76.2809 111.965 74.3122ZM23.7614 89.1951L20.166 87.5469C19.909 88.3143 19.1916 89.4498 19.4647 89.7942C22.7993 93.9884 26.2607 98.0832 29.7821 102.123C29.9486 102.314 31.5542 101.605 31.5392 101.541C31.039 99.4347 30.7111 97.2086 29.7479 95.3114C28.6348 93.1195 26.9466 91.2212 23.7614 89.1951ZM122.445 67.3083L129.21 61.8341C125.904 59.6427 123.686 62.7905 120.99 63.5589C120.506 63.6971 120.186 64.3434 119.731 64.6737C117.936 65.9781 114.043 62.1033 114.021 66.9221C114.019 67.3327 118.377 67.7676 120.712 68.1772C120.99 68.2259 121.284 68.1839 122.445 67.3083ZM42.9738 146.977C44.9843 143.21 47.5514 139.62 48.814 135.617C49.6897 132.841 48.769 129.495 48.65 126.403C47.6316 128.851 46.4419 131.245 45.633 133.761C44.3238 137.832 43.265 141.984 42.9738 146.977ZM97.1187 92.697C97.4099 90.5124 98.1589 88.2614 97.8589 86.1612C97.5791 84.2013 96.1856 82.4014 95.282 80.5311C94.4389 82.4868 93.4737 84.4012 92.8039 86.4149C92.4687 87.4226 94.9416 92.0813 97.1187 92.697ZM70.0463 133.845L72.4277 143.236C72.7985 140.089 73.2532 136.949 73.5092 133.793C73.6721 131.788 73.6426 129.75 73.4787 127.746C73.4275 127.122 72.6537 126.558 72.2104 125.966C71.4894 126.566 70.3245 127.057 70.1425 127.792C69.8068 129.151 70.0463 130.652 70.0463 133.845ZM18.5212 71.6859C17.1081 71.6859 15.6304 71.4192 14.2959 71.7444C11.9166 72.3238 8.71275 69.8021 7.16827 73.5681C9.62723 74.1082 12.0986 75.0988 14.54 75.0294C16.1802 74.9833 17.7779 73.4366 18.5212 71.6859ZM87.5125 62.0552C87.5125 58.3596 87.6097 54.6588 87.4277 50.972C87.3925 50.2611 86.2623 49.6045 85.6375 48.923C85.098 49.6904 83.9973 50.5567 84.1111 51.2092C84.7996 55.1435 85.7658 59.0291 87.5125 62.0552ZM78.7794 119.837L77.4366 117.211C76.7197 117.816 75.3309 118.522 75.4028 119.011C75.7126 121.116 76.6835 123.125 76.9773 125.23C77.4035 128.285 77.4527 131.392 77.6627 134.476C78.0351 131.334 78.4421 128.194 78.7608 125.046C78.8761 123.905 78.7794 122.741 78.7794 119.837ZM35.9874 75.1873C39.0733 75.0128 42.1773 74.9755 45.2295 74.5571C45.9133 74.4634 47.0269 72.8603 46.8568 72.2627C46.6085 71.3907 45.1033 70.0361 44.6099 70.2143C41.3735 71.3809 38.2649 72.9048 35.9874 75.1873ZM19.3948 84.818C19.37 80.3364 15.0557 80.5518 12.6128 78.7804C11.9574 78.3055 10.5003 78.9419 9.41103 79.0683C10.0891 80.079 10.5495 81.4357 11.4893 82.0327C13.7119 83.4448 16.1631 84.4965 19.3948 84.818ZM85.7658 119.837C85.7658 121.269 85.7202 122.702 85.7906 124.13C85.8154 124.636 86.1227 125.128 86.3011 125.626C86.7051 125.447 87.4085 125.337 87.4665 125.08C88.1213 122.189 88.7187 119.282 89.1609 116.354C89.1894 116.165 87.3821 115.327 87.1644 115.541C86.5039 116.192 86.2054 117.211 85.7658 119.837ZM117.205 76.0634C118.879 75.7714 120.771 75.8687 122.167 75.0822C123.667 74.2371 125.998 71.9909 125.715 71.3462C124.417 68.3792 123.259 73.4273 121.218 71.8651C120.764 71.5181 118.588 73.4366 117.205 76.0634ZM103.232 95.3238C103.431 95.5227 103.603 95.7707 103.838 95.9038C103.983 95.9856 104.348 95.9659 104.406 95.868C105.215 94.5176 106.12 93.2024 106.728 91.7624C107.272 90.4761 107.478 89.0459 107.833 87.6794C106.47 88.3055 104.737 88.6172 103.858 89.6554C103.128 90.5175 103.403 92.2346 103.232 95.3238ZM92.7522 100.576C92.2018 98.8573 91.7151 97.1118 91.0333 95.4465C90.9284 95.1908 89.9228 95.3057 89.3342 95.2488C90.1644 97.3236 86.9358 101.073 92.7522 100.576ZM92.7522 63.8064C92.7522 64.3869 92.5272 65.1159 92.7935 65.5203C93.7054 66.9075 94.7901 68.1803 95.8085 69.4971C95.6953 67.924 95.7552 66.3084 95.3922 64.7959C95.2184 64.0741 94.2397 63.5465 92.7522 63.8064ZM83.1459 139.973C85.3758 138.586 85.9339 136.925 84.0263 134.815C83.5933 134.335 83.2504 133.774 82.8661 133.25C82.6685 134.909 82.4652 136.567 82.277 138.227C82.2444 138.514 82.2728 138.807 83.1459 139.973ZM28.1279 128.592C28.1279 129.166 28.0581 129.75 28.1445 130.31C28.2666 131.103 28.504 131.877 28.6923 132.66C29.0864 132.456 29.8395 132.208 29.8209 132.055C29.509 129.531 29.1004 127.018 28.7135 124.503C28.5185 124.995 28.2898 125.478 28.1419 125.984C28.0643 126.248 28.1279 126.554 28.1279 128.592ZM27.2543 134.72C26.9636 136.85 26.5876 138.973 26.4283 141.113C26.375 141.832 26.8705 142.594 27.1157 143.336C27.4529 142.443 27.9966 141.571 28.0829 140.655C28.2407 138.982 28.1279 137.283 27.2543 134.72ZM83.1459 104.954C82.9473 105.922 82.3504 107.046 82.6515 107.818C83.0171 108.755 84.1396 109.396 84.9351 110.164C85.2123 109.152 85.668 108.146 85.7047 107.126C85.7306 106.413 85.1839 105.678 83.1459 104.954ZM91.879 153.981C91.8708 152.813 91.8827 151.644 91.7823 150.485C91.7782 150.436 90.2337 150.436 90.229 150.485C90.1282 151.644 90.1406 152.813 91.879 153.981ZM80.5261 37.5421L81.5409 43.5285C81.6904 41.4381 81.8559 39.3488 81.962 37.2563C81.9713 37.0699 81.5958 36.8638 80.5261 37.5421ZM84.8927 141.724C84.6015 142.977 84.2296 144.22 84.0656 145.49C84.0128 145.901 84.5042 146.382 84.7468 146.831C85.0866 146.245 85.5883 145.694 85.7249 145.064C85.8956 144.277 85.7658 143.424 84.8927 141.724ZM35.9874 90.9463L36.1204 87.5779L33.4054 88.3572L35.9874 90.9463ZM28.1279 70.8103C26.8778 70.5182 25.6379 70.1459 24.3717 69.9813C23.9621 69.9279 23.4816 70.4209 23.0336 70.6643C23.6181 71.0044 24.1674 71.5072 24.7964 71.6445C25.5816 71.8158 26.4324 71.6859 28.1279 70.8103ZM132.051 66.4327L129.843 66.8956C129.945 67.2736 130.113 67.9867 130.141 67.981C131.077 67.7992 132 67.5486 132.051 66.4327ZM114.585 80.4405L113.886 81.4911C114.411 81.4326 114.934 81.3741 114.585 80.4405ZM145.151 56.8025L146.199 57.5031C146.14 56.9775 146.082 56.4525 145.151 56.8025Z" fill="#1677FF"/>
  </svg>
`;

  return (
    <Frame name="container" width={200} height={200}>
      <SVG name="marker" src={buttonSvgSrc} x={28} y={5.5} />
    </Frame>
  );
}
widget.register(Widget);
