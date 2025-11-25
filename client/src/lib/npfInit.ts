(function(){
  try {
    var s=document.createElement('script');
    s.type='text/javascript';
    s.async=true;
    s.src='https://widgets.in8.nopaperforms.com/emwgts.js';
    document.body.appendChild(s);
  } catch(e) {}
})();

(function(){
  try {
    var baseurl='widgets.in8.nopaperforms.com';
    var mainId='550974b33503dfc785c6fbf5148e6d84';
    var qp=new URLSearchParams(window.location.search);
    var useMulti=qp.get('npf')==='multi';
    var ids=useMulti?[
      mainId,
      '6f02920af7038d6b629201af29a8c43d',
      'b90761d553ba1ef721aa08c760f669b3',
      '64b63ee0b99580af377d995a9434088f'
    ]:[mainId];

    var ensureVendor=function(cb: () => void){
      var has=[].slice.call(document.scripts).some(function(s: HTMLScriptElement){
        return s.src && s.src.indexOf('npfwpopup.js')!==-1;
      });
      if (has){
        cb();
        return;
      }
      var t=document.createElement('script');
      t.src='https://in8cdn.npfs.co/js/widget/npfwpopup.js';
      t.async=true;
      t.addEventListener('load', cb);
      document.body.appendChild(t);
    };

    var waitForCtor=function(cb: () => void){
      var tries=0;
      var max=60;
      var timer=setInterval(function(){
        if (typeof (window as any).NpfWidgetsInit==='function'){
          clearInterval(timer);
          cb();
        } else {
          tries++;
          if (tries>max){
            clearInterval(timer);
          }
        }
      }, 200);
    };

    var init=function(){
      if (typeof (window as any).NpfWidgetsInit!=='function') return;
      ids.forEach(function(id){
        if (!document.querySelector('.npfWidget-'+id)){
          var btn=document.createElement('button');
          btn.type='button';
          btn.className='npfWidgetButton npfWidget-'+id;
          btn.style.display='none';
          btn.textContent='Enquire Now';
          document.body.appendChild(btn);
        }
        try {
          var inst=new (window as any).NpfWidgetsInit({
            widgetId:id,
            baseurl:baseurl,
            formTitle:'Enquiry Form',
            titleColor:'#FF0033',
            backgroundColor:'#ddd',
            iframeHeight:'500px',
            buttonbgColor:'#4c79dc',
            buttonTextColor:'#FFF'
          });
          (window as any)['npfW'+id]=inst;
        } catch {}
      });
      (window as any).openNpfPopup=function(id?: string){
        try {
          var targetId=id||mainId;
          var trigger=document.querySelector('.npfWidget-'+targetId) as HTMLButtonElement | null;
          if (trigger) trigger.click();
        } catch {}
      };
    };

    var start=function(){ waitForCtor(init); };

    if (document.readyState==='loading'){
      document.addEventListener('DOMContentLoaded', function(){ ensureVendor(start); });
    } else {
      ensureVendor(start);
    }
  } catch(e) {}
})();

console.log('npfInit loaded');