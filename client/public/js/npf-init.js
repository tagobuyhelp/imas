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

    var init=function(){
      if (typeof NpfWidgetsInit==='function'){
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
            var inst=new NpfWidgetsInit({
              widgetId:id,
              baseurl:baseurl,
              formTitle:'Enquiry Form',
              titleColor:'#FF0033',
              backgroundColor:'#ddd',
              iframeHeight:'500px',
              buttonbgColor:'#4c79dc',
              buttonTextColor:'#FFF'
            });
            window['npfW'+id]=inst;
          } catch {}
        });
        window.openNpfPopup=function(id){
          try {
            var targetId=id||mainId;
            var trigger=document.querySelector('.npfWidget-'+targetId);
            if (trigger) trigger.click();
          } catch {}
        };
      }
    };

    if (document.readyState==='loading'){
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  } catch(e) {}
})();