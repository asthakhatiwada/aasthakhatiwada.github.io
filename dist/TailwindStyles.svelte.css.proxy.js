// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "*,*::before,*::after{box-sizing:border-box}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}body{font-family:system-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji'}hr{height:0;color:inherit}abbr[title]{-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}button,[type='button']{-webkit-appearance:button}legend{padding:0}progress{vertical-align:baseline}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset{margin:0;padding:0}ol,ul{list-style:none;margin:0;padding:0}html{font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";line-height:1.5}body{font-family:inherit;line-height:inherit}*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=\"button\"]{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}pre,code,kbd,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.bg-black{--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity:1;background-color:rgba(249, 250, 251, var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgba(229, 231, 235, var(--tw-bg-opacity))}.bg-gray-600{--tw-bg-opacity:1;background-color:rgba(75, 85, 99, var(--tw-bg-opacity))}.hover\\:bg-black:hover{--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity))}.dark .dark\\:bg-gray-600{--tw-bg-opacity:1;background-color:rgba(75, 85, 99, var(--tw-bg-opacity))}.dark .dark\\:bg-gray-700{--tw-bg-opacity:1;background-color:rgba(55, 65, 81, var(--tw-bg-opacity))}.dark .dark\\:bg-gray-800{--tw-bg-opacity:1;background-color:rgba(31, 41, 55, var(--tw-bg-opacity))}.rounded{border-radius:0.25rem}.border{border-width:1px}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.table{display:table}.hidden{display:none}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.flex-1{flex:1 1 0%}.flex-grow{flex-grow:1}.flex-shrink-0{flex-shrink:0}.font-light{font-weight:300}.font-semibold{font-weight:600}.font-bold{font-weight:700}.h-6{height:1.5rem}.h-8{height:2rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-2xl{font-size:1.5rem;line-height:2rem}.list-outside{list-style-position:outside}.list-disc{list-style-type:disc}.m-2{margin:0.5rem}.m-auto{margin:auto}.mx-2{margin-left:0.5rem;margin-right:0.5rem}.mx-4{margin-left:1rem;margin-right:1rem}.mt-0{margin-top:0px}.mr-1{margin-right:0.25rem}.mt-4{margin-top:1rem}.mb-4{margin-bottom:1rem}.mr-8{margin-right:2rem}.ml-8{margin-left:2rem}.mt-10{margin-top:2.5rem}.max-w-screen-lg{max-width:1024px}.min-h-screen{min-height:100vh}.p-2{padding:0.5rem}.p-4{padding:1rem}.py-0{padding-top:0px;padding-bottom:0px}.px-0{padding-left:0px;padding-right:0px}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.px-2{padding-left:0.5rem;padding-right:0.5rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-4{padding-left:1rem;padding-right:1rem}.py-10{padding-top:2.5rem;padding-bottom:2.5rem}.py-0\\.5{padding-top:0.125rem;padding-bottom:0.125rem}.pr-0{padding-right:0px}.pt-2{padding-top:0.5rem}.pl-2{padding-left:0.5rem}.pr-4{padding-right:1rem}.pb-4{padding-bottom:1rem}.pl-6{padding-left:1.5rem}.fixed{position:fixed}.bottom-0{bottom:0px}.left-0{left:0px}*{--tw-shadow:0 0 #0000}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}*{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000}.fill-current{fill:currentColor}.text-white{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.text-gray-100{--tw-text-opacity:1;color:rgba(243, 244, 246, var(--tw-text-opacity))}.text-gray-300{--tw-text-opacity:1;color:rgba(209, 213, 219, var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgba(75, 85, 99, var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:rgba(31, 41, 55, var(--tw-text-opacity))}.text-yellow-600{--tw-text-opacity:1;color:rgba(217, 119, 6, var(--tw-text-opacity))}.hover\\:text-white:hover{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.hover\\:text-blue-100:hover{--tw-text-opacity:1;color:rgba(219, 234, 254, var(--tw-text-opacity))}.focus\\:text-white:focus{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.dark .dark\\:text-gray-200{--tw-text-opacity:1;color:rgba(229, 231, 235, var(--tw-text-opacity))}.italic{font-style:italic}.underline{text-decoration:underline}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.w-6{width:1.5rem}.w-8{width:2rem}.w-36{width:9rem}.w-screen{width:100vw}@-webkit-keyframes spin{to{transform:rotate(360deg)}}@keyframes spin{to{transform:rotate(360deg)}}@-webkit-keyframes ping{75%,100%{transform:scale(2);opacity:0}}@keyframes ping{75%,100%{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,100%{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);animation-timing-function:cubic-bezier(0,0,0.2,1)}}@keyframes bounce{0%,100%{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);animation-timing-function:cubic-bezier(0.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);animation-timing-function:cubic-bezier(0,0,0.2,1)}}@media(min-width: 640px){.sm\\:block{display:block}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:justify-center{justify-content:center}.sm\\:justify-between{justify-content:space-between}.sm\\:mt-0{margin-top:0px}.sm\\:ml-2{margin-left:0.5rem}.sm\\:mr-6{margin-right:1.5rem}.sm\\:p-0{padding:0px}.sm\\:py-3{padding-top:0.75rem;padding-bottom:0.75rem}.sm\\:px-4{padding-left:1rem;padding-right:1rem}.sm\\:px-20{padding-left:5rem;padding-right:5rem}.sm\\:pr-3{padding-right:0.75rem}.sm\\:pl-6{padding-left:1.5rem}.sm\\:w-1\\/3{width:33.333333%}.sm\\:w-2\\/3{width:66.666667%}}@media(min-width: 768px){}@media(min-width: 1024px){}@media(min-width: 1280px){}@media(min-width: 1536px){}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}