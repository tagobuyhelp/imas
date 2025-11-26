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
    var ids=[
      mainId,
      '6f02920af7038d6b629201af29a8c43d',
      'b90761d553ba1ef721aa08c760f669b3',
      '64b63ee0b99580af377d995a9434088f'
    ];

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
          try {
            setTimeout(function(){
              try {
                var has=!!document.querySelector('iframe[src*="nopaperforms.com"]');
                if(!has){
                  var tid=id||mainId;
                  var url='https://widgets.in8.nopaperforms.com/widget/'+tid;
                  var w=920,h=700;
                  var left=Math.max(0,(window.innerWidth-w)/2);
                  var top=Math.max(0,(window.innerHeight-h)/2);
                  var features='toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width='+w+',height='+h+',top='+top+',left='+left;
                  var win=window.open(url,'Enquiry Form',features);
                  if(!win) window.open(url,'_blank','noopener,noreferrer');
                }
              } catch {}
            },800);
          } catch {}
        };
        window.mapBrochureId=function(href){
          try {
            var id='6f02920af7038d6b629201af29a8c43d';
            var s=String(href||'').toLowerCase();
            if(s.indexOf('mba_global')>-1||s.indexOf('mba')>-1){
              id='64b63ee0b99580af377d995a9434088f';
            } else if(s.indexOf('executive')>-1){
              id='b90761d553ba1ef721aa08c760f669b3';
            }
            return id;
          } catch(e){
            return '6f02920af7038d6b629201af29a8c43d';
          }
        };
        window.openBrochurePopup=function(href){
          try {
            var id=window.mapBrochureId(href);
            var trigger=document.querySelector('.npfWidget-'+id);
            if (trigger) trigger.click();
          } catch {}
          try {
            setTimeout(function(){
              try {
                var has=!!document.querySelector('iframe[src*="nopaperforms.com"]');
                if(!has){
                  var id2=window.mapBrochureId(href);
                  var url='https://widgets.in8.nopaperforms.com/widget/'+id2;
                  var w=920,h=700;
                  var left=Math.max(0,(window.innerWidth-w)/2);
                  var top=Math.max(0,(window.innerHeight-h)/2);
                  var features='toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width='+w+',height='+h+',top='+top+',left='+left;
                  var win=window.open(url,'Brochure Form',features);
                  if(!win) window.open(url,'_blank','noopener,noreferrer');
                }
              } catch {}
            },800);
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
