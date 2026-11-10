(()=>{
let promptEvent=null;const install=document.getElementById('installApp');
const standalone=()=>matchMedia('(display-mode: standalone)').matches||navigator.standalone;
function installed(){install.textContent='Uygulama olarak açıldı';install.disabled=true;document.getElementById('installSteps').hidden=true}
if(standalone())installed();
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();promptEvent=e;install.textContent='Uygulamayı yükle'});
window.addEventListener('appinstalled',()=>{promptEvent=null;install.textContent='Ana ekrana eklendi';install.disabled=true});
install.onclick=async()=>{if(promptEvent){await promptEvent.prompt();await promptEvent.userChoice;promptEvent=null}else{document.getElementById('installSteps').hidden=false;install.textContent='Aşağıdaki adımları izleyin'}};
document.getElementById('installHelp').onclick=()=>{document.getElementById('panel').classList.add('open');document.querySelector('.drawer').scrollTop=0;document.getElementById('closeMenu').focus()};
if('serviceWorker' in navigator&&window.isSecureContext)navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'}).catch(()=>{});
})();
