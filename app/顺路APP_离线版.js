/* 顺路APP 离线版 v0.2
 * 完整界面、样式、路线计算与广告演示都包含在这个 JavaScript 文件中。
 * 无外部依赖，无联网请求。通过同目录的 HTML 入口在浏览器运行。
 */
(function () {
  'use strict';
  function startShunlu() {
    if (document.getElementById('shunlu-offline-style')) return;
    document.title = '顺路APP · JavaScript 离线版';
    document.documentElement.lang = 'zh-CN';
    var style = document.createElement('style');
    style.id = 'shunlu-offline-style';
    style.textContent = ":root{--ink:#243c35;--muted:#738078;--green:#214e40;--green-light:#eaf1e9;--paper:#f7f6f0;--line:#dfe4da;--orange:#bf653e;--orange-light:#fbede2;--white:#fff;--red:#9d3d37;--shadow:0 9px 28px #213b3010}*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font-family:Inter,\"PingFang SC\",\"Microsoft YaHei\",sans-serif;font-size:15px;line-height:1.65}button,input,select{font:inherit}button{cursor:pointer}button:disabled{cursor:not-allowed;opacity:.45}button:focus-visible,input:focus-visible,select:focus-visible,a:focus-visible{outline:3px solid #bf653e;outline-offset:3px}a{color:inherit}.topbar{height:91px;max-width:1280px;margin:auto;display:flex;align-items:center;justify-content:space-between;padding:0 42px}.brand{display:flex;align-items:center;gap:12px;text-decoration:none;font-size:19px;font-weight:700}.brandmark{display:grid;place-items:center;background:var(--green);color:#fff;border-radius:13px 13px 13px 3px;width:44px;height:44px;font-size:26px;font-weight:500}.brand small{display:block;font-size:9px;letter-spacing:2px;font-weight:500;line-height:1.2;margin-top:3px}.top-actions{display:flex;gap:18px;align-items:center}.pill,.tag{font-size:12px;padding:5px 10px;border-radius:99px;background:var(--green-light);color:var(--green);white-space:nowrap}.text-btn,.inline-btn{background:none;border:0;padding:4px 0;color:var(--muted);font-size:13px}.text-btn:hover,.inline-btn:hover{color:var(--green);text-decoration:underline}.prototype-note{border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:10px 32px;display:flex;gap:10px;align-items:center;justify-content:center;font-size:12px;background:#f0eee5;color:#6c715f}.prototype-note strong{color:#7a6245;white-space:nowrap}.note-dot{height:6px;width:6px;min-width:6px;background:var(--orange);border-radius:50%}.shell{max-width:1196px;margin:auto;padding:0 26px}.intro{display:flex;align-items:center;justify-content:space-between;padding:37px 0 30px}.eyebrow{font-size:12px;letter-spacing:2px;color:var(--orange);margin:0 0 8px}h1{font-size:36px;font-weight:600;letter-spacing:1px;line-height:1.4;margin:0}.intro p:not(.eyebrow){color:var(--muted);margin:8px 0 0}.intro-stamp{display:flex;flex-direction:column;text-align:center;border-left:1px solid #ccd5c8;padding-left:32px;line-height:1.35}.intro-stamp span{font-size:12px;letter-spacing:4px;color:var(--muted)}.intro-stamp strong{font-size:42px;font-family:Georgia,serif;font-weight:400}.intro-stamp small{font-size:11px;color:var(--muted);margin-top:7px}.steps{display:grid;grid-template-columns:repeat(6,1fr);border-bottom:1px solid var(--line);margin-bottom:28px;gap:16px}.step{border:0;border-bottom:3px solid transparent;padding:0 0 16px;display:flex;align-items:center;gap:9px;background:none;text-align:left;color:#92998f;font-size:13px}.step span{display:grid;place-items:center;width:25px;height:25px;border:1px solid var(--line);border-radius:50%;font-size:11px}.step.active{color:var(--green);border-bottom-color:var(--green);font-weight:600}.step.active span{background:var(--green);border-color:var(--green);color:white}.step.done span{background:var(--green-light);color:var(--green)}.workspace{display:grid;grid-template-columns:minmax(0,1fr) 290px;gap:26px;align-items:start}.content{background:var(--white);border:1px solid var(--line);border-radius:16px;padding:30px;box-shadow:var(--shadow);min-height:520px}.section-top{display:flex;align-items:flex-start;justify-content:space-between;gap:15px;margin-bottom:22px}h2{margin:0;font-size:23px;font-weight:600;line-height:1.5}.sub{font-size:13px;color:var(--muted);margin:5px 0 0}.section-number{font-family:Georgia,serif;color:#d0d9cd;font-size:42px;line-height:1}.summary{position:sticky;top:24px}.side-card{border:1px solid var(--line);border-radius:16px;padding:23px;background:#edf1e8;margin-bottom:15px}.side-card.white{background:#fff}.side-label{font-size:11px;letter-spacing:1.5px;color:var(--muted);text-transform:uppercase}.side-title{font-size:17px;font-weight:600;margin:7px 0 18px}.meta-row{display:flex;justify-content:space-between;font-size:13px;margin:9px 0;gap:8px}.meta-row span:first-child{color:var(--muted)}.side-divider{height:1px;background:#d8dfd3;margin:17px 0}.tiny{font-size:11px;color:var(--muted);line-height:1.7}.side-note{font-size:13px;line-height:1.85;margin:12px 0 0}.members-mini{display:flex;gap:5px;margin:15px 0 8px}.avatar{height:34px;width:34px;border-radius:50%;background:#d7e1d1;display:inline-grid;place-items:center;color:var(--green);font-size:13px;font-weight:600}.avatar.c1{background:#f0ddce;color:#965c3e}.avatar.c2{background:#d8e2e6;color:#506c78}.avatar.c3{background:#e5dfed;color:#776084}.avatar.c4{background:#ebe4cb;color:#8b7c4c}.avatar.c5{background:#eadbd9;color:#986d6a}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:22px 0}.field{display:flex;flex-direction:column;gap:7px;font-size:13px}.field.full{grid-column:1/-1}input,select{min-width:0;width:100%;height:44px;border:1px solid #d8dfd3;border-radius:8px;background:#fff;padding:9px 12px;color:var(--ink)}input[type=checkbox]{width:16px;height:16px;accent-color:var(--green);margin:0}.field small{font-size:11px;color:var(--muted);line-height:1.5}.fixed-field{background:#f7f8f3;padding:13px 15px;border:1px solid var(--line);border-radius:10px}.fixed-field strong{display:block;font-size:14px;font-weight:500}.checkbox-row{display:flex;align-items:flex-start;gap:9px;font-size:13px;line-height:1.8}.checkbox-row input{margin-top:4px;flex-shrink:0}.actions{display:flex;align-items:center;justify-content:space-between;gap:12px;padding-top:24px;margin-top:24px;border-top:1px solid #e8ece3}.btn{border:1px solid var(--green);border-radius:9px;background:var(--green);color:white;padding:11px 21px;font-size:14px;font-weight:500;line-height:1.4;transition:background .15s}.btn:hover{background:#143c2f}.btn.secondary{background:white;color:var(--green);border-color:#cdd8c8}.btn.secondary:hover{background:#f3f6ef}.btn.soft{background:var(--green-light);color:var(--green);border-color:transparent}.btn.small{padding:8px 12px;font-size:12px}.btn.orange{background:var(--orange);border-color:var(--orange)}.quiet-link{color:var(--green);border:0;background:transparent;font-size:13px;text-decoration:underline}.info-box,.warning,.error-box,.success-box{border-radius:10px;padding:15px 17px;font-size:13px;line-height:1.85;background:#f2f5ef;border:1px solid #e0e6da}.warning{background:#fff6e9;border-color:#efdfc6;color:#8d683c}.error-box{background:#fff1ed;border-color:#eac8bd;color:#944a40}.success-box{background:#ecf5ed;border-color:#cddfcb;color:#2c6349}.info-box strong,.warning strong,.error-box strong,.success-box strong{display:block;margin-bottom:3px;font-weight:600}.invite{display:flex;align-items:center;gap:9px;margin:19px 0}.invite input{font-size:12px;background:#f5f7f1;flex:1}.member-list{display:flex;flex-direction:column;gap:10px}.member-row{border:1px solid var(--line);border-radius:11px;padding:13px;display:flex;align-items:center;gap:12px}.member-row .member-name{flex:1;font-size:14px}.member-row small{display:block;font-size:11px;color:var(--muted)}.status{font-size:11px;color:var(--muted)}.status.ready{color:var(--green)}.member-tabs{display:flex;flex-wrap:wrap;gap:8px;margin:18px 0}.member-tab{display:flex;align-items:center;gap:7px;padding:7px 12px 7px 7px;border:1px solid var(--line);border-radius:24px;background:white;color:var(--muted);font-size:12px}.member-tab .avatar{height:27px;width:27px;font-size:11px}.member-tab.active{border-color:var(--green);color:var(--green);background:#f1f5ed}.member-tab .dot{width:5px;height:5px;border-radius:50%;background:#9fafa1}.member-tab.complete .dot{background:var(--green)}.legend{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-bottom:19px}.legend div{padding:10px;border-radius:8px;background:#f3f6ef;font-size:11px;color:var(--muted)}.legend strong{display:block;font-size:12px;color:var(--green)}.legend div:last-child{background:#faf0eb}.legend div:last-child strong{color:#9b604b}.place-list{display:flex;flex-direction:column;gap:9px}.place-row{display:flex;align-items:center;gap:12px;border:1px solid #e2e7dc;border-radius:10px;padding:12px}.place-icon{width:37px;height:37px;border-radius:10px;background:#f2f1e9;display:grid;place-items:center;color:#7a8b75;font-size:17px;flex-shrink:0}.place-copy{flex:1}.place-copy strong{display:block;font-size:13px;font-weight:500}.place-copy small{display:block;font-size:11px;color:var(--muted)}.place-row select{width:127px;font-size:12px;height:36px;padding:4px 8px}.constraint-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:20px 0 15px}.constraint-grid .field{font-size:12px}.constraint-grid input{height:39px}.note-line{font-size:11px;color:var(--muted);margin-top:9px}.group-status{display:flex;gap:8px;flex-wrap:wrap;margin-top:17px}.route-card{padding:19px;border:1px solid var(--line);border-radius:12px;margin-top:16px;position:relative}.route-card.featured{border-color:#7c9f81;box-shadow:0 0 0 1px #7c9f8135}.route-top{display:flex;align-items:center;justify-content:space-between;gap:10px}.route-top h3{font-size:17px;margin:0;font-weight:600}.route-stats{display:flex;gap:24px;margin:17px 0}.route-stats strong{display:block;font-size:21px;font-family:Georgia,serif;font-weight:500;line-height:1.25}.route-stats small{font-size:10px;color:var(--muted)}.route-chips{display:flex;gap:5px;flex-wrap:wrap}.route-chip{background:#f2f5ed;color:#586b53;padding:4px 7px;border-radius:5px;font-size:11px}.route-explain{font-size:12px;color:var(--muted);margin:14px 0}.route-footer{border-top:1px dashed var(--line);padding-top:13px;display:flex;align-items:center;justify-content:space-between;gap:10px}.coverage{display:flex;gap:9px;font-size:10px;color:var(--muted)}.coverage strong{font-size:11px;color:var(--green)}.timeline{margin:22px 0}.timeline-row{display:grid;grid-template-columns:55px 18px 1fr;gap:10px;min-height:66px}.timeline-time{font-size:12px;color:var(--muted);padding-top:3px}.timeline-axis{position:relative}.timeline-axis:before{content:\"\";position:absolute;left:6px;top:15px;bottom:-1px;width:1px;background:#cdd8c6}.timeline-row:last-child .timeline-axis:before{display:none}.timeline-axis:after{content:\"\";position:absolute;top:8px;left:2px;width:9px;height:9px;background:var(--green);border:2px solid white;outline:1px solid #a6ba9c;border-radius:50%}.timeline-detail{padding:0 0 16px}.timeline-detail strong{font-size:14px;font-weight:500}.timeline-detail small{display:block;font-size:11px;color:var(--muted)}.confirm-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:16px}.confirm-card{border:1px solid var(--line);border-radius:10px;padding:12px}.confirm-card.accepted{background:#f0f6ed;border-color:#bfd0b6}.confirm-card label{display:flex;gap:8px;align-items:center;font-size:13px}.confirm-card small{display:block;margin-top:7px;font-size:11px;color:var(--muted)}.event-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin:20px 0}.event-card{padding:12px 8px;border:1px solid var(--line);border-radius:10px;background:white;color:var(--muted);text-align:center}.event-card span{display:block;font-size:21px;line-height:1.6}.event-card strong{font-size:12px;font-weight:500}.event-card.active{border-color:var(--green);background:#f0f5ec;color:var(--green)}.metric-strip{display:flex;gap:15px;align-items:center;padding:14px;background:#f1f5ed;border-radius:10px;margin:14px 0}.metric-strip div{flex:1}.metric-strip strong{display:block;font-size:17px}.metric-strip small{font-size:10px;color:var(--muted)}.muted{color:var(--muted)}.list-plain{margin:8px 0;padding-left:19px}.list-plain li{margin:5px 0}.empty-state{text-align:center;padding:35px 15px}.empty-state h3{font-weight:500}.empty-state p{font-size:13px;color:var(--muted)}footer{display:flex;justify-content:space-between;gap:15px;padding:25px 0 35px;font-size:11px;color:#929a8e}footer .inline-btn{font-size:11px}.toast{position:fixed;bottom:25px;left:50%;transform:translateX(-50%) translateY(25px);background:#203d31;color:#fff;border-radius:10px;padding:13px 22px;box-shadow:var(--shadow);font-size:13px;opacity:0;transition:.2s;pointer-events:none;z-index:20;max-width:90vw}.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}.privacy-line{font-size:12px;color:var(--muted);margin:15px 0}details{font-size:12px;color:var(--muted);margin-top:18px}summary{cursor:pointer;color:var(--green)}details p{line-height:1.8}.route-decision{background:#edf3e7;border-radius:8px;padding:11px 13px;font-size:12px;margin:13px 0}.counter-row{display:flex;align-items:center;gap:8px}.count{font-size:12px;color:var(--muted)}\n@media(max-width:1000px){.workspace{grid-template-columns:minmax(0,1fr) 245px;gap:18px}.content{padding:23px}.side-card{padding:18px}.step{font-size:12px;gap:6px}.steps{gap:7px}.constraint-grid{grid-template-columns:1fr 1fr}.constraint-grid .field:last-child{grid-column:1/-1}}\n@media(max-width:760px){.topbar{height:78px;padding:0 19px}.top-actions{gap:13px}.top-actions .pill{display:none}.brand{font-size:16px}.brandmark{width:37px;height:37px;font-size:22px}.brand small{font-size:8px}.top-actions button{font-size:11px}.prototype-note{padding:10px 18px;align-items:flex-start;font-size:10px;gap:7px}.note-dot{margin-top:6px}.shell{padding:0 17px}.intro{padding:27px 0 23px}.intro h1{font-size:28px}.intro p:not(.eyebrow){font-size:12px}.eyebrow{font-size:10px;letter-spacing:1px}.intro-stamp{padding-left:14px}.intro-stamp strong{font-size:31px}.intro-stamp small{font-size:9px}.intro-stamp span{font-size:10px}.steps{gap:0;margin-bottom:19px;overflow-x:auto}.step{flex-direction:column;text-align:center;gap:5px;padding-bottom:11px;font-size:10px;white-space:nowrap}.step span{width:23px;height:23px}.workspace{display:flex;flex-direction:column}.content{width:100%;padding:20px 17px;min-height:unset;border-radius:12px}.summary{position:static;width:100%;display:grid;grid-template-columns:1fr 1fr;gap:12px}.side-card{margin:0;padding:16px;border-radius:12px}.side-title{font-size:14px}.side-note{font-size:12px}.meta-row{font-size:11px}.section-top{margin-bottom:19px}h2{font-size:21px}.section-number{font-size:36px}.sub{font-size:12px}.form-grid{gap:14px}.actions{margin-top:20px;padding-top:20px;align-items:stretch}.btn{padding:11px 14px;font-size:12px}.legend{gap:5px}.legend div{padding:9px 7px;font-size:10px}.legend strong{font-size:11px}.place-row{gap:8px;padding:10px}.place-icon{width:30px;height:30px;font-size:14px}.place-copy strong{font-size:12px}.place-copy small{font-size:10px}.place-row select{width:103px;font-size:11px}.route-stats{gap:24px}.coverage{gap:7px}.route-footer{align-items:flex-start;flex-direction:column}.route-footer .btn{width:100%}.confirm-grid{grid-template-columns:1fr}.invite{flex-wrap:wrap}.invite input{width:100%;flex-basis:100%}.event-grid{gap:6px}.event-card strong{font-size:11px}.info-box,.error-box,.warning{font-size:12px;padding:13px}.constraint-grid{gap:10px}.metric-strip{gap:10px}.metric-strip strong{font-size:15px}footer{flex-direction:column;gap:4px;padding-top:20px;font-size:10px}}\n@media(prefers-reduced-motion:reduce){*{transition:none!important}}\n.browse-note{display:flex;gap:10px;align-items:center;margin:-10px 0 22px;font-size:12px;color:#65766a;line-height:1.8}.browse-note>span{flex-shrink:0;border:1px solid #c8d5c3;border-radius:5px;padding:1px 6px;font-size:10px;color:var(--green)}.step:not(.active){color:#637566}.step:hover{color:var(--green);border-bottom-color:#a8bba0}.preview-status{font-size:12px;color:#576b5b;background:#f0f5ec;padding:12px 15px;margin-bottom:16px;border-radius:9px}\n.sponsor-banner{position:relative;isolation:isolate;border:1px solid #e2d4be;background:#f5ead7;color:#654527;border-radius:13px;padding:18px 21px;margin:0 0 24px;overflow:hidden}.sponsor-banner.dining{background:#f9e7db;border-color:#edcdb7;color:#884321}.sponsor-topline{display:flex;justify-content:space-between;align-items:center;gap:10px;font-size:10px;letter-spacing:.8px}.ad-label{border:1px solid currentColor;border-radius:4px;padding:2px 6px;font-size:10px;letter-spacing:0;line-height:1.6;white-space:nowrap;display:inline-block}.sponsor-main{display:flex;align-items:center;gap:18px;padding:13px 0 12px}.sponsor-copy{flex:1;min-width:0}.sponsor-merchant{font-weight:650;font-size:12px;margin:0 0 6px}.sponsor-merchant>span{font-weight:400;margin-left:9px;font-size:10px;opacity:.85}.sponsor-copy h3{font-size:23px;line-height:1.45;margin:0 0 4px;letter-spacing:.2px}.sponsor-subtitle{font-size:12px;margin:0;opacity:.9}.sponsor-price{display:flex;align-items:baseline;gap:5px;margin-top:5px;font-size:12px}.sponsor-price strong{font-size:37px;line-height:1.2;font-family:Georgia,serif;font-weight:500}.sponsor-price>span:first-child{font-size:17px}.sponsor-perk{font-size:11px;margin:4px 0 0}.sponsor-art{flex:0 0 148px;transform:rotate(-4deg)}.sponsor-art svg{display:block;width:100%;height:auto}.sponsor-bottom{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #b18c5c40;padding-top:13px;gap:12px;font-size:11px}.sponsor-bottom strong{font-weight:600}.ad-cta{border-color:#654527;background:#654527;white-space:nowrap}.ad-cta:hover{background:#49301b}.dining .ad-cta{background:#984c2b;border-color:#984c2b}.dining .ad-cta:hover{background:#75371d}.ad-model{margin:11px 0 0;font-size:11px;color:inherit}.ad-model summary{color:inherit}.ad-model p{line-height:1.8;margin:8px 0}.ad-disclaimer{font-size:10px;line-height:1.7;opacity:.85;margin:9px 0 0}.offer-dialog{border:1px solid var(--line);border-radius:18px;padding:26px;width:calc(100% - 32px);max-width:480px;background:#fffcf5;color:var(--ink);box-shadow:0 24px 90px #15362e38;max-height:calc(100dvh - 40px);overflow:auto}.offer-dialog::backdrop{background:#183b3290;backdrop-filter:blur(3px)}.offer-heading{display:flex;align-items:center;justify-content:space-between;margin-bottom:19px;color:#8b5c36}.offer-close{border:0;background:#efe9dd;border-radius:50%;width:32px;height:32px;line-height:1;font-size:23px;color:#6a624f}.offer-dialog h2{font-size:22px}.offer-terms{font-size:13px;line-height:1.9;padding-left:19px;margin:20px 0}.offer-terms li{margin:7px 0}.coupon-code{border:1px dashed #b6c7ac;border-radius:10px;padding:14px 16px;background:#eef4e9}.coupon-code small{display:block;font-size:11px;color:var(--muted)}.coupon-code strong{display:block;font-size:22px;letter-spacing:1.8px;margin-top:4px}.offer-status{font-size:12px;min-height:20px;margin:15px 0 8px;color:#547146}.claim-offer{width:100%}\n@media(max-width:1000px){.sponsor-art{flex-basis:115px}.sponsor-copy h3{font-size:21px}.sponsor-merchant>span{display:block;margin:2px 0 0}.sponsor-banner{padding:17px}}\n@media(max-width:760px){.browse-note{font-size:11px;align-items:flex-start;margin:-4px 0 17px;gap:7px}.browse-note>span{margin-top:1px}.sponsor-banner{padding:15px;margin-bottom:20px}.sponsor-main{gap:2px}.sponsor-art{flex-basis:90px}.sponsor-copy h3{font-size:20px}.sponsor-subtitle{font-size:11px}.sponsor-price strong{font-size:33px}.sponsor-perk{font-size:10px}.sponsor-bottom{align-items:flex-start;gap:8px;font-size:10px}.sponsor-bottom>span{line-height:1.9}.sponsor-bottom strong{display:block}.ad-cta{padding:9px 10px;font-size:11px}.ad-model,.ad-model summary{font-size:10px}.sponsor-topline{font-size:9px;letter-spacing:.3px}.offer-dialog{padding:22px}.summary{grid-template-columns:1fr}.actions{flex-wrap:wrap}.sponsor-topline .ad-label{font-size:9px}}\n@media(max-width:380px){.sponsor-art{flex-basis:68px}.sponsor-copy h3{font-size:18px}.sponsor-price strong{font-size:29px}}";
    document.head.appendChild(style);
    document.body.innerHTML = "<header class=\"topbar\">\n    <a class=\"brand\" href=\"#\" aria-label=\"顺路APP首页\"><span class=\"brandmark\">顺</span><span>顺路APP<small>ALONG THE WAY APP</small></span></a>\n    <div class=\"top-actions\"><span class=\"pill\">离线演示 v0.2</span><button class=\"text-btn\" id=\"export\">导出方案</button><button class=\"text-btn\" id=\"reset\">重置示例</button></div>\n  </header>\n  <div class=\"prototype-note\"><span class=\"note-dot\"></span><strong>离线演示</strong><span>无需联网即可体验。地点、费用和广告均为虚构示例；数据保存在当前浏览器，不含跨设备同步。</span></div>\n  <main class=\"shell\">\n    <section class=\"intro\"><div><p class=\"eyebrow\">上海正大广场 · 半日小组出游</p><h1>一起把半天安排好。</h1><p>把每个人在意的事说清楚，再决定一起怎么走。</p></div><div class=\"intro-stamp\"><span>半天</span><strong>4h</strong><small>3–6人 · 首次到访</small></div></section>\n    <nav class=\"steps\" id=\"steps\" aria-label=\"规划步骤\"></nav>\n    <p class=\"browse-note\"><span>自由浏览</span> 点击任一步骤即可查看，无需先填完表单。未填写时使用示例设置，之后可随时修改。</p>\n    <div class=\"workspace\"><section id=\"content\" class=\"content\" aria-live=\"polite\"></section><aside id=\"summary\" class=\"summary\"></aside></div>\n    <footer><span>顺路APP · ENT303TC Group 11</span><span>偏好仅保存在本浏览器。<button id=\"clear\" class=\"inline-btn\">清除本地数据</button></span></footer>\n  </main>\n  <div id=\"toast\" class=\"toast\" role=\"status\" aria-live=\"polite\"></div>";
    (function(){
"use strict";
const PLACES = [
 {id:'books',name:'书店漫游',icon:'▤',floor:3,duration:35,wait:5,cost:0,rest:0,open:780,close:1020,accessible:true},
 {id:'art',name:'城市文化小展',icon:'▧',floor:4,duration:40,wait:5,cost:45,rest:0,open:810,close:990,accessible:true},
 {id:'lunch',name:'轻松用餐',icon:'◡',floor:6,duration:50,wait:10,cost:65,rest:15,open:660,close:1200,accessible:true},
 {id:'cafe',name:'咖啡与休息',icon:'☕',floor:2,duration:25,wait:3,cost:30,rest:25,open:600,close:1260,accessible:true},
 {id:'design',name:'设计小店',icon:'◇',floor:5,duration:30,wait:0,cost:0,rest:0,open:600,close:1260,accessible:true},
 {id:'workshop',name:'手作体验',icon:'✦',floor:4,duration:55,wait:5,cost:99,rest:10,open:870,close:990,accessible:false},
 {id:'lounge',name:'窗边休息区',icon:'◌',floor:2,duration:20,wait:0,cost:0,rest:20,open:600,close:1260,accessible:true}
];
const clock = m => `${String(Math.floor(m/60)).padStart(2,'0')}:${String(m%60).padStart(2,'0')}`;
const mins = t => {const [h,m]=t.split(':').map(Number);return h*60+m;};
const walkLeg = (a,b) => a===b?2:3+Math.abs(a-b);
const permutations = a => a.length<2?[a]:a.flatMap((x,i)=>permutations(a.filter((_,j)=>i!==j)).map(p=>[x,...p]));
function propose(state){
 const members=state.members, cfg=state.config, event=state.event||{}, progress=state.progress||{ids:[],schedule:[],elapsed:0,walk:0}, done=new Set(progress.ids||[]), start=mins(cfg.start), end=mins(cfg.end), buffer=15+(event.rain||event.type==='rain'?10:0);
 const closed=new Set(event.closedIds||[]);if(event.type==='closed')closed.add(event.target);
 const queued=new Set(event.queueIds||[]);if(event.type==='queue')queued.add(event.target);
 const fatigued=event.fatigue||event.type==='fatigue';
 const places=PLACES.map(p=>({...p,wait:p.wait+(queued.has(p.id)?25:0)}));
 const byId=Object.fromEntries(places.map(p=>[p.id,p]));
 const required=[...new Set(members.flatMap(m=>Object.entries(m.prefs).filter(([,v])=>v==='must').map(([k])=>k)))];
 const veto=[...new Set(members.flatMap(m=>Object.entries(m.prefs).filter(([,v])=>v==='no').map(([k])=>k)))];
 const reasons=[];
 for(const id of required){
   const wants=members.filter(m=>m.prefs[id]==='must').map(m=>m.name).join('、');
   const rejects=members.filter(m=>m.prefs[id]==='no').map(m=>m.name).join('、');
   if(veto.includes(id))reasons.push(`${wants}将「${byId[id]?.name}」设为必须，${rejects}将其设为不能接受。需要成员亲自调整偏好。`);
   if(!done.has(id)&&closed.has(id))reasons.push(`${wants}的必须项目「${byId[id]?.name}」已模拟关闭，不能自动删去。请协商替代后修改偏好。`);
 }
 if(reasons.length)return {routes:[],reasons};
 const accessible=members.some(m=>m.accessible), restNeed=Math.max(...members.map(m=>Number(m.rest)))+(fatigued?15:0), walkMax=Math.min(...members.map(m=>Number(m.walk)))-(fatigued?8:0);
 const requiredNew=required.filter(id=>!done.has(id));
 const available=places.filter(p=>!done.has(p.id)&&!veto.includes(p.id)&&!closed.has(p.id)&&(!accessible||p.accessible));
 if(requiredNew.some(id=>!available.some(p=>p.id===id))){return{routes:[],reasons:['某个必须项目不满足成员的无障碍约束。请成员协商更换，不能以多数票覆盖。']};}
 let candidates=[], bestRejected=null;
 for(let mask=0;mask<(1<<available.length);mask++){
   const subset=available.filter((_,i)=>mask&(1<<i));
   const ids=[...done,...subset.map(p=>p.id)];
   if(ids.length>5||ids.length<3||!requiredNew.every(id=>ids.includes(id)))continue;
   const cost=ids.reduce((s,id)=>s+(byId[id]?.cost||0),0), rest=ids.reduce((s,id)=>s+(byId[id]?.rest||0),0);
   let rejected=[];
   for(const m of members)if(cost>Number(m.budget))rejected.push(`${m.name}的预算为¥${m.budget}，此组合需每人¥${cost}。`);
   if(rest<restNeed)rejected.push(`至少需要${restNeed}分钟坐下休息，此组合只有${rest}分钟。`);
   let best=null;
   for(const ordered of permutations(subset)){
     let t=start+Number(progress.elapsed||0), floor=progress.ids.length?byId[progress.ids.at(-1)].floor:1, walk=Number(progress.walk||0), schedule=[...(progress.schedule||[])], valid=true;
     for(const p of ordered){
       const leg=walkLeg(floor,p.floor);walk+=leg;t+=leg;
       const wait=p.wait+Math.max(0,p.open-t);t+=wait;
       if(t+p.duration>p.close){valid=false;break;}
       schedule.push({id:p.id,start:t,end:t+p.duration,walk:leg,wait,completed:false});t+=p.duration;floor=p.floor;
     }
     const returnWalk=walkLeg(floor,1);walk+=returnWalk;t+=returnWalk;
     if(valid&&(!best||t<best.returnAt||(t===best.returnAt&&walk<best.walk)))best={schedule,returnAt:t,walk,returnWalk};
   }
   if(!best)continue;
   if(best.walk>walkMax)rejected.push(`全组步行上限为${walkMax}分钟，此组合预计${best.walk}分钟。`);
   if(best.returnAt+buffer>end)rejected.push(`返回时间加${buffer}分钟缓冲超过${cfg.end}，需减少活动或另行协商。`);
   if(rejected.length){if(!bestRejected||rejected.length<bestRejected.length)bestRejected=rejected;continue;}
   const coverage=members.map(m=>{const entries=Object.entries(m.prefs).filter(([,v])=>v==='must'||v==='yes');const total=entries.reduce((s,[,v])=>s+(v==='must'?3:1),0);const met=entries.reduce((s,[id,v])=>s+(ids.includes(id)?(v==='must'?3:1):0),0);return total?Math.round(met/total*100):100;});
   const fair=Math.min(...coverage), mean=coverage.reduce((a,b)=>a+b,0)/coverage.length;
   candidates.push({...best,ids:best.schedule.map(x=>x.id),cost,rest,buffer,free:end-best.returnAt-buffer,coverage,fair,mean,totalTime:best.returnAt-start+buffer,key:ids.slice().sort().join('-')});
 }
 candidates.sort((a,b)=>b.fair-a.fair||b.mean-a.mean||a.totalTime-b.totalTime||a.cost-b.cost);
 if(!candidates.length)return {routes:[],reasons:bestRejected||['当前的时间、预算、步行或地点约束下没有可行组合。请调整条件后重试。']};
 const picks=[candidates[0]];
 const choose=(sorter,label)=>{const next=candidates.filter(c=>!picks.some(p=>p.key===c.key)).sort(sorter)[0];if(next)picks.push({...next,label});};
 picks[0]={...picks[0],label:'优先照顾每个人'};
 choose((a,b)=>a.totalTime-b.totalTime||b.fair-a.fair,'留更多自由时间');
 choose((a,b)=>a.cost-b.cost||b.fair-a.fair||a.walk-b.walk,'换一种停留组合');
 return {routes:picks,reasons:[],feasibleCount:candidates.length};
}


const offers = {
  coffee: {
    merchant: '慢半拍咖啡', category: '午后休憩', location: '演示 F2 · 咖啡与休息',
    title: '先坐一会儿，再一起出发。', subtitle: '两杯咖啡，把下午留给聊天。',
    amount: '39', unit: '/ 双人咖啡', perk: '两杯指定咖啡 · 堂食专享',
    action: '领取咖啡券', code: 'SL-COFFEE-039', model: '商家付费展示',
    revenue: '按千次展示收费（CPM）', rate: '示例刊例价：¥30 / 千次有效展示。',
    example: '课堂测算：10,000 次有效展示 × ¥30 ÷ 1,000 = ¥300 广告收入。',
    terms: ['示例套餐含两杯指定咖啡，合计 ¥39。', '演示适用时段：13:00–17:00，每组一份。', '优惠券只保存在当前浏览器，不会替小组选择活动。']
  },
  dining: {
    merchant: '一起食堂', category: '顺路好食光', location: '演示 F6 · 轻松用餐',
    title: '这一餐，顺路一起吃。', subtitle: '逛到饭点，给两个人留一桌好味道。',
    amount: '20', unit: '元优惠券', perk: '双人餐满 ¥138 可用 · 示例实付 ¥118',
    action: '领取餐饮券', code: 'SL-MEAL-020', model: '到店核销佣金',
    revenue: '按核销后的实付金额收取佣金（CPS）', rate: '示例佣金比例：商家支付实付金额的 5%。',
    example: '课堂测算：¥118 实付 × 5% = ¥5.90 / 单；100 单可产生 ¥590 佣金收入。',
    terms: ['示例双人套餐满 ¥138 减 ¥20，优惠后共 ¥118。', '每桌每次限用一张，不与其他优惠叠加。', '正式合作可由商家核销后结算；本原型只演示领券。']
  }
};

const coffeeArt = `<svg viewBox="0 0 180 144" aria-hidden="true"><ellipse cx="90" cy="124" rx="68" ry="9" fill="currentColor" opacity=".12"/><g fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M53 40c-9-12 12-14 4-27M79 35c-8-11 10-14 4-24" opacity=".5"/><path d="M32 54h65v37a26 26 0 0 1-26 26H58a26 26 0 0 1-26-26z" fill="#fff9ee"/><path d="M97 61h7c21 0 21 29 0 29h-7M23 118h85"/><path d="M116 65h34l-4 47h-26z" fill="#d6b88f"/><path d="M113 65h40M118 57h30M124 78h18"/></g><path d="M55 78c8-13 24-5 13 7l-6 6-6-6c-11-12 1-20 6-9" fill="currentColor" opacity=".35"/></svg>`;
const diningArt = `<svg viewBox="0 0 180 144" aria-hidden="true"><ellipse cx="91" cy="126" rx="66" ry="8" fill="currentColor" opacity=".12"/><g stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="92" cy="76" r="49" fill="#fff6df"/><circle cx="92" cy="76" r="37" fill="none" opacity=".4"/><path d="M20 36v30m-7-30v22q7 13 14 0V36m-7 30v47M161 36v77m0-77q-14 16-7 34h7" fill="none"/><path d="M67 79q25-36 49 0v18H67z" fill="#e4ac60"/><path d="M76 61q-11-21 7-18m13 16q13-24 22-8M78 87h27" fill="none"/><path d="M68 62q-12 0-10 12m58-10q12-5 13 8" fill="none"/></g></svg>`;

function hasCoupon(kind) {
  try { return localStorage.getItem(`shunlu-offline-coupon-${kind}`) === 'claimed'; } catch { return false; }
}

function sponsorBanner(kind) {
  const ad = offers[kind];
  return `<aside class="sponsor-banner ${kind}" aria-label="${ad.merchant}广告示例">
    <div class="sponsor-topline"><span class="ad-label">广告 · 合作示例</span><span>${ad.category}</span></div>
    <div class="sponsor-main"><div class="sponsor-copy"><p class="sponsor-merchant">${ad.merchant}<span>${ad.location}</span></p><h3>${ad.title}</h3><p class="sponsor-subtitle">${ad.subtitle}</p><div class="sponsor-price"><span>¥</span><strong>${ad.amount}</strong><span>${ad.unit}</span></div><p class="sponsor-perk">${ad.perk}</p></div><div class="sponsor-art">${kind==='coffee'?coffeeArt:diningArt}</div></div>
    <div class="sponsor-bottom"><span>盈利方式：<strong>${ad.model}</strong></span><button class="btn small ad-cta" data-ad="${kind}">${hasCoupon(kind)?'查看已领示例券':ad.action}<span aria-hidden="true"> ↗</span></button></div>
    <details class="ad-model"><summary>广告合作与收入示例</summary><p><strong>${ad.revenue}</strong><br>${ad.rate}<br>${ad.example}</p><p>以上为商业模式假设，未实际签约或产生收入。广告独立展示，路线仍按成员偏好、时间与预算排序。</p></details>
    <p class="ad-disclaimer">虚构商家与优惠，仅供原型演示；不可实际消费或核销。</p>
  </aside>`;
}

let lastTrigger;
function closeOffer() { document.querySelector('#offer-dialog')?.close(); lastTrigger?.focus(); }
function openOffer(kind, trigger) {
  const ad = offers[kind];
  if (!ad) return;
  document.querySelector('#offer-dialog')?.remove();
  lastTrigger = trigger;
  const dialog = document.createElement('dialog');
  dialog.id = 'offer-dialog'; dialog.className = 'offer-dialog';
  dialog.setAttribute('aria-labelledby', 'offer-title');
  const claimed = hasCoupon(kind);
  dialog.innerHTML = `<div class="offer-heading"><span class="ad-label">广告 · 示例优惠券</span><button class="offer-close" aria-label="关闭优惠详情">×</button></div><p class="sponsor-merchant">${ad.merchant}</p><h2 id="offer-title">${ad.perk}</h2><p class="sub">${ad.location} · 虚构商家</p><ul class="offer-terms">${ad.terms.map(term=>`<li>${term}</li>`).join('')}</ul><div class="coupon-code"><small>演示券码 · 不可实际核销</small><strong>${ad.code}</strong></div><p class="offer-status" role="status">${claimed?'已保存到本浏览器。':'无需登录，可体验领券流程。'}</p><button class="btn claim-offer" ${claimed?'disabled':''}>${claimed?'已领取示例券':'保存示例优惠券'}</button><p class="ad-disclaimer">本次演示不产生订单、付款或真实佣金。</p>`;
  document.body.append(dialog);
  dialog.querySelector('.offer-close').addEventListener('click', closeOffer);
  dialog.addEventListener('click', e => { if (e.target === dialog) closeOffer(); });
  dialog.addEventListener('close', () => lastTrigger?.focus());
  dialog.querySelector('.claim-offer').addEventListener('click', e => {
    try {
      localStorage.setItem(`shunlu-offline-coupon-${kind}`, 'claimed');
      dialog.querySelector('.offer-status').textContent = '已保存到本浏览器，可再次点击广告查看。';
      e.target.textContent = '已领取示例券'; e.target.disabled = true;
      trigger.textContent = '查看已领示例券 ↗';
    } catch { dialog.querySelector('.offer-status').textContent = '浏览器未允许保存，可以在这里查看示例券。'; }
  });
  dialog.showModal();
}

function clearCoupons() {
  try { Object.keys(offers).forEach(kind => localStorage.removeItem(`shunlu-offline-coupon-${kind}`)); } catch {}
}

document.addEventListener('click', e => {
  const trigger = e.target.closest('[data-ad]');
  if (trigger) openOffer(trigger.dataset.ad, trigger);
});



const KEY='along-the-way-offline-v2';
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const place=id=>PLACES.find(p=>p.id===id);
const labels=['创建小组','邀请成员','表达偏好','比较方案','共同确认','途中调整'];
const baseMembers=[
 {id:'m1',name:'小林',prefs:{books:'must',art:'yes',design:'yes',cafe:'yes'},budget:220,walk:45,rest:15},
 {id:'m2',name:'阿宁',prefs:{lunch:'must',books:'yes',design:'yes',cafe:'yes',workshop:'no'},budget:200,walk:40,rest:15},
 {id:'m3',name:'小周',prefs:{art:'must',lunch:'yes',design:'yes',cafe:'yes'},budget:200,walk:35,rest:20},
 {id:'m4',name:'晓雨',prefs:{design:'yes',art:'yes',lunch:'yes',workshop:'no'},budget:180,walk:40,rest:15},
 {id:'m5',name:'可可',prefs:{books:'yes',art:'yes',lunch:'yes'},budget:200,walk:40,rest:15},
 {id:'m6',name:'阿青',prefs:{books:'yes',design:'yes',lunch:'yes'},budget:200,walk:40,rest:15}
];
const makeMembers=n=>structuredClone(baseMembers.slice(0,n)).map((m,i)=>({...m,joined:i===0,submitted:false,confirmed:false,accessible:false}));
const initial=()=>({v:1,step:0,unlocked:0,activeMember:0,groupId:'SL-2401',config:{name:'正大广场半日同行',start:'13:00',end:'17:00',size:4},members:makeMembers(4),created:false,consent:false,selected:null,locked:false,event:{type:'none',target:'lunch'},progress:{ids:[],schedule:[],elapsed:0,walk:0},changeDraft:{type:'rain',target:'lunch',count:0,delay:0},revision:1});
let state=initial();
try{const old=JSON.parse(localStorage.getItem(KEY));if(old?.v===1&&Array.isArray(old.members))state=old;}catch{}
let toastTimer;
function toast(text){$('#toast').textContent=text;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3200);}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch{}}
function fillMissingConfig(){const defaults=initial().config;state.config.name=state.config.name.trim()||defaults.name;state.config.start=state.config.start||defaults.start;state.config.end=state.config.end||defaults.end;}
function invalidate(){state.selected=null;state.locked=false;state.members.forEach(m=>m.confirmed=false);state.unlocked=Math.min(state.unlocked,3);}
function top(title,sub){return `<div class="section-top"><div><h2>${title}</h2><p class="sub">${sub}</p></div><span class="section-number">0${state.step+1}</span></div>`;}
function actions(prev,next,label,disabled=false){return `<div class="actions">${prev!==null?`<button class="btn secondary" data-nav="${prev}">上一步</button>`:'<button class="quiet-link" data-action="demo">使用完整四人示例</button>'}<button class="btn" data-action="${next}" ${disabled?'disabled':''}>${label} <span aria-hidden="true">→</span></button></div>`;}
function render(){
 $('#steps').innerHTML=labels.map((l,i)=>`<button class="step ${i===state.step?'active':''} " data-nav="${i}"  ${i===state.step?'aria-current="step"':''}><span>${i+1}</span>${l}</button>`).join('');
 $('#content').innerHTML=[createView,joinView,prefsView,compareView,confirmView,changeView][state.step]();
 renderSummary();save();
}
function renderSummary(){
 const ready=state.members.filter(m=>m.submitted).length;
 $('#summary').innerHTML=`<div class="side-card"><span class="side-label">OUR HALF DAY</span><h3 class="side-title">${esc(state.config.name)}</h3><div class="meta-row"><span>地点</span><span>上海正大广场</span></div><div class="meta-row"><span>可用时间</span><span>${esc(state.config.start)}—${esc(state.config.end)}</span></div><div class="meta-row"><span>起点 / 终点</span><span>同一入口（待实地确认）</span></div><div class="meta-row"><span>交通方式</span><span>场内步行 / 电梯</span></div><div class="side-divider"></div><div class="members-mini">${state.members.map((m,i)=>`<span class="avatar c${i}" title="${esc(m.name)}">${esc(m.name.slice(-1))}</span>`).join('')}</div><div class="meta-row"><span>${state.members.length}位演示成员</span><span>${ready}/${state.members.length} 已填偏好</span></div>${state.selected?`<div class="side-divider"></div><div class="meta-row"><span>当前方案</span><span>每人 ¥${state.selected.cost}</span></div><div class="meta-row"><span>预计返回</span><span>${clock(state.selected.returnAt)}</span></div><div class="meta-row"><span>确认状态</span><span>${state.locked?'已模拟锁定':`${state.members.filter(m=>m.confirmed).length}/${state.members.length} 已确认`}</span></div>`:''}</div><div class="side-card white"><span class="side-label">HOW WE DECIDE</span><p class="side-note">先满足每个人的硬约束，再优先改善偏好覆盖最低的成员。</p><p class="tiny">“不能接受”与“必须去”冲突时，交还小组协商。多数票不会自动覆盖任何人的明确限制。</p><details><summary>数据与推荐如何处理？</summary><p>本原型没有后端、账号或真实地点接口。第3、4页展示虚构商家广告与示例领券，分别演示广告展示费和到店核销佣金；尚未接入真实广告投放或结算。浏览器本地保存演示偏好，可随时清除。链接只携带演示小组编号，不携带成员偏好；分享不能同步成员数据。</p><p>所有费用按每人估算；楼层、开放时间与步行时间均为模拟输入。集合点暂按演示1层计算，同层通行2分钟，跨层通行按3分钟加楼层差估算；真实动线需另行核验。候选不超过5个活动，额外预留15分钟返回缓冲。偏好覆盖仅作规则排序，不代表真实满意度。</p></details></div>`;
}
function createView(){return top('先约定这半天的边界','可以先用示例设置继续，再随时回来修改。')+`
 <div class="fixed-field"><strong>上海正大广场 · 商场内部</strong><span class="tiny">首批用户：首次到访的国内游客小组，3–6人。起终点在同一现场核验入口。</span></div>
 <div class="form-grid"><label class="field full">小组名称<input id="group-name" value="${esc(state.config.name)}" maxlength="32"></label><label class="field">开始时间<input id="start" type="time" value="${state.config.start}"></label><label class="field">最迟返回<input id="end" type="time" value="${state.config.end}"></label><label class="field">同行人数<select id="size">${[3,4,5,6].map(n=>`<option ${state.members.length===n?'selected':''}>${n}</option>`).join('')}</select></label><div class="field">集合方式<div class="fixed-field"><span>同一入口集合并返回</span></div></div></div>
 <label class="checkbox-row"><input id="consent" type="checkbox" ${state.consent?'checked':''}><span>已了解演示数据说明（选填，不影响浏览）。演示成员姓名为虚构，数据只保存在当前浏览器。</span></label>
 ${actions(null,'create','继续邀请成员')}`;}
function joinView(){
 const invite=state.groupId;
 return top('把小组邀请发到群里','这里用同一台设备演示加入，不需要填写账号。')+`<div class="info-box"><strong>小组 ${state.groupId}</strong>离线版请直接把这个 HTML 文件发给朋友。下方按钮模拟成员加入；小组编号用于演示，不会联网或跨设备同步。</div><div class="invite"><input aria-label="演示小组编号" readonly value="${esc(invite)}"><button class="btn secondary small" data-action="copy">复制演示编号</button></div><div class="member-list">${state.members.map((m,i)=>`<div class="member-row"><span class="avatar c${i}">${esc(m.name.slice(-1))}</span><div class="member-name">${esc(m.name)}<small>${i===0?'小组发起人':'同行成员'} · 虚构示例</small></div>${m.joined?'<span class="status ready">已模拟加入 ✓</span>':`<button class="btn soft small" data-join="${i}">模拟加入</button>`}</div>`).join('')}</div><p class="privacy-line">每个人都可以表达自己的限制，发起人不代替其他成员确认。</p><button class="quiet-link" data-action="join-all">让其余示例成员加入</button>${actions(0,'to-prefs','查看成员偏好')}`;
}
function prefsView(){const m=state.members[state.activeMember];return top('每个人，在意的可以不同','切换成员，模拟各自输入；也可以先用当前示例偏好比较方案。')+sponsorBanner('coffee')+`
 <div class="member-tabs">${state.members.map((m,i)=>`<button class="member-tab ${i===state.activeMember?'active':''} ${m.submitted?'complete':''}" data-member="${i}"><span class="avatar c${i}">${esc(m.name.slice(-1))}</span>${esc(m.name)}<span class="dot"></span></button>`).join('')}</div>
 <div class="legend"><div><strong>必须去</strong>此行重要目标，需满足</div><div><strong>愿意去</strong>有兴趣，可协商取舍</div><div><strong>不能接受</strong>明确限制，不被多数覆盖</div></div>
 <label class="field" style="max-width:240px;margin-bottom:16px">演示昵称<input id="member-name" value="${esc(m.name)}" maxlength="12"></label>
 <div class="place-list">${PLACES.map(p=>`<div class="place-row"><span class="place-icon" aria-hidden="true">${p.icon}</span><div class="place-copy"><strong>${p.name}</strong><small>演示 F${p.floor} · ${p.duration}分钟 · ¥${p.cost}/人${p.rest?` · 可休息${p.rest}分钟`:''}</small></div><select data-pref="${p.id}" aria-label="${esc(m.name)}对${p.name}的偏好"><option value="none" ${!m.prefs[p.id]||m.prefs[p.id]==='none'?'selected':''}>无特别偏好</option><option value="must" ${m.prefs[p.id]==='must'?'selected':''}>必须去</option><option value="yes" ${m.prefs[p.id]==='yes'?'selected':''}>愿意去</option><option value="no" ${m.prefs[p.id]==='no'?'selected':''}>不能接受</option></select></div>`).join('')}</div>
 <div class="constraint-grid"><label class="field">个人费用上限（元）<input type="number" id="budget" min="0" max="2000" value="${m.budget}"></label><label class="field">总步行上限（分钟）<input type="number" id="walk" min="5" max="120" value="${m.walk}"></label><label class="field">至少坐下休息（分钟）<input type="number" id="rest" min="0" max="120" value="${m.rest}"></label></div>
 <label class="checkbox-row"><input id="accessible" type="checkbox" ${m.accessible?'checked':''}><span>需要全程无障碍通行（演示约束；真实电梯和入口需现场核验）</span></label><p class="note-line">餐饮、付费项目与咖啡均计入每人总预算。所有数字为演示估计，排队与步行时间另计。</p>
 <div class="group-status">${state.members.map(x=>`<span class="tag">${esc(x.name)}：${x.submitted?'已提交':'待提交'}</span>`).join('')}</div>
 <div class="actions"><button class="btn secondary" data-action="submit-pref">${esc(m.name)}提交偏好</button><button class="btn" data-action="compare" >比较可行方案 →</button></div>`;}
function compareView(){
 const span=mins(state.config.end)-mins(state.config.start);
 const valid=Number.isFinite(span)&&span>=180&&span<=300;
 const result=valid?propose(state):{routes:[],reasons:['请将活动时间设置为同一天的3–5小时；也可以返回第一页使用示例时间。']};state.routes=result.routes;
 return top('比较能一起接受的方案','先过滤硬约束，再比较每个人的偏好覆盖与取舍。')+sponsorBanner('dining')+
 (!state.members.every(m=>m.submitted)?`<div class="preview-status">当前为方案预览：采用已填写内容与未修改的示例偏好，可随时返回第3页调整。</div>`:'')+
 (state.revision>1?`<div class="warning"><strong>第${state.revision}版 · 已重新计算</strong>保留已完成活动与已有花费；新方案仍需每位成员重新确认。</div>`:'')+
 (!result.routes.length?`<div class="error-box"><strong>目前没有共同可行的路线</strong><ul class="list-plain">${result.reasons.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div class="empty-state"><h3>先协商限制，再继续规划。</h3><p>系统不会替你删除某个人的“必须去”，也不会忽略“不能接受”。</p><button class="btn" data-nav="2">回到成员偏好</button></div>`:
 `<div class="info-box">找到${result.feasibleCount}个满足当前硬约束的活动组合。以下给出${result.routes.length}个有不同取舍的方案。</div>`+result.routes.map((r,i)=>`<article class="route-card ${i===0?'featured':''}"><div class="route-top"><h3>${r.label}</h3><span class="tag">方案 ${String.fromCharCode(65+i)}</span></div><div class="route-stats"><div><strong>¥${r.cost}</strong><small>预计费用 / 人</small></div><div><strong>${clock(r.returnAt)}</strong><small>预计返回时间</small></div><div><strong>${r.walk}′</strong><small>全程步行估计</small></div></div><div class="route-chips">${r.ids.map(id=>`<span class="route-chip">${place(id).name}${state.progress.ids.includes(id)?' ✓':''}</span>`).join('')}</div><p class="route-explain">${r.ids.length}个活动 · 坐下休息${r.rest}分钟 · 返回后保留${r.buffer}分钟缓冲${r.free>0?`，另有${r.free}分钟自由余量`:''}。${i===0?'优先提高偏好覆盖最低的成员。':i===1?'在可行组合中优先保留自由时间。':'展示不同活动组合带来的费用与偏好取舍。'}</p><div class="route-footer"><div class="coverage">${state.members.map((m,j)=>`<span>${esc(m.name)}<br><strong>${r.coverage[j]}%</strong></span>`).join('')}</div><button class="btn small" data-route="${i}">查看并共同确认</button></div></article>`).join('')+`<p class="note-line">上述百分比是演示偏好覆盖：必须去计3份，愿意去计1份；不等于真实满意度。总预算、明确否决和必须项目均作为硬约束。</p>`)+`<div class="actions"><button class="btn secondary" data-nav="2">调整成员偏好</button><span class="tiny">广告独立展示，不影响方案排序</span></div>`;
}
function timeline(r){return `<div class="timeline"><div class="timeline-row"><span class="timeline-time">${state.config.start}</span><span class="timeline-axis"></span><div class="timeline-detail"><strong>同一入口集合</strong><small>入口位置与楼层待现场核实</small></div></div>${r.schedule.map(s=>{const p=place(s.id);return `<div class="timeline-row"><span class="timeline-time">${clock(s.start)}</span><span class="timeline-axis"></span><div class="timeline-detail"><strong>${p.name} ${state.progress.ids.includes(s.id)?'<span class="tag">已完成</span>':''}</strong><small>演示 F${p.floor} · 至${clock(s.end)} · ¥${p.cost}/人 · 此段步行${s.walk}分钟 / 等待${s.wait}分钟</small></div></div>`;}).join('')}<div class="timeline-row"><span class="timeline-time">${clock(r.returnAt)}</span><span class="timeline-axis"></span><div class="timeline-detail"><strong>回到集合入口</strong><small>最后一段步行${r.returnWalk}分钟，另保留${r.buffer}分钟缓冲</small></div></div></div>`;}
function confirmView(){const r=state.selected;if(!r)return top('先选择一个方案','返回比较页选择路线。')+`<button class="btn" data-nav="3">比较方案</button>`;return top('这条路线，每个人都确认一次','确认的是具体方案。任何条件变化后，确认都会重新开始。')+`<div class="metric-strip"><div><strong>¥${r.cost}/人</strong><small>费用估计</small></div><div><strong>${r.walk}分钟</strong><small>总步行时间</small></div><div><strong>${r.rest}分钟</strong><small>坐下休息</small></div></div>${timeline(r)}<div class="route-decision">所有“必须去”已纳入，没有加入任何人的“不能接受”项目；每位成员的预算、步行和休息限制均通过演示规则检查。</div><div class="confirm-grid">${state.members.map((m,i)=>`<div class="confirm-card ${m.confirmed?'accepted':''}"><label><input type="checkbox" data-confirm="${i}" ${m.confirmed?'checked':''}>${esc(m.name)}接受此方案（演示）</label><small>偏好覆盖 ${r.coverage[i]}% · 个人预算上限¥${m.budget}</small></div>`).join('')}</div><p class="note-line">本页面的勾选是同机流程演示，不代表真实成员已作出同意。</p>${actions(3,'lock','全员确认并锁定',!state.members.every(m=>m.confirmed))}`;}
function changeView(){const r=state.selected;if(!r||!state.locked)return top('确认后，再开始这段行程','先请每位成员接受具体方案。')+`<button class="btn" data-nav="4">返回共同确认</button>`;const d=state.changeDraft;const types=[['rain','☂','下雨'],['fatigue','◌','有人累了'],['queue','◷','排队变长'],['closed','⊘','场所关闭'],['late','⌛','已经超时'],['mind','⇄','改变想法']];return top('计划可以变，重要的仍然保留','记录已完成的部分，再协商剩余行程。')+`<div class="success-box"><strong>第${state.revision}版路线已模拟锁定</strong>${r.ids.map(id=>place(id).name).join(' → ')}。预计${clock(r.returnAt)}回到入口。</div><div class="event-grid">${types.map(([v,icon,l])=>`<button class="event-card ${d.type===v?'active':''}" data-event="${v}"><span aria-hidden="true">${icon}</span><strong>${l}</strong></button>`).join('')}</div><div class="form-grid"><label class="field">已经完成的活动数<select id="completed-count">${r.ids.map((_,i)=>`<option value="${i}" ${d.count===i?'selected':''}>${i===0?'尚未开始':`前${i}项已完成`}</option>`).join('')}<option value="${r.ids.length}" ${d.count===r.ids.length?'selected':''}>全部活动已完成</option></select><small>按当前路线顺序记录，已花费用和步行会保留。</small></label><label class="field">额外已耗时（分钟）<input id="delay" type="number" min="0" max="180" value="${d.delay}"><small>在计划之外已经过去的时间。</small></label>${['queue','closed'].includes(d.type)?`<label class="field full">变化发生在哪一项<select id="event-target">${r.ids.filter((_,i)=>i>=d.count).map(id=>`<option value="${id}" ${d.target===id?'selected':''}>${place(id).name}</option>`).join('')}</select></label>`:''}</div><div class="info-box"><strong>${{rain:'大雨情境',fatigue:'疲劳情境',queue:'排队情境',closed:'关闭情境',late:'延误情境',mind:'想法改变'}[d.type]}</strong>${{rain:'本轮只在商场内部活动。模拟进出入口的不确定性，额外增加10分钟返回缓冲。',fatigue:'模拟小组步行上限减少8分钟，并额外需要15分钟坐下休息。若无法满足，明确提示无解。',queue:'为选定活动增加25分钟预计排队，重新检查最迟返回和营业时窗。',closed:'移除尚未完成的关闭地点；若它是某人的必须项目，会要求协商，不能静默删去。',late:'保留已完成活动，并扣除你填写的额外耗时，重新检查剩余时间。',mind:'将保留完成进度，返回成员偏好。修改后需要重新提交和共同确认。'}[d.type]}</div><div class="actions"><button class="btn secondary" data-nav="4">查看当前路线</button><button class="btn orange" data-action="replan">${d.type==='mind'?'调整偏好':'重新计算剩余路线'} →</button></div>`;}

document.addEventListener('click',async e=>{
 const b=e.target.closest('button');if(!b||b.disabled)return;
 if(b.dataset.nav!==undefined){const n=Number(b.dataset.nav);if(Number.isInteger(n)&&n>=0&&n<labels.length){fillMissingConfig();state.step=n;render();}return;}
 if(b.dataset.join!==undefined){state.members[Number(b.dataset.join)].joined=true;render();return;}
 if(b.dataset.member!==undefined){state.activeMember=Number(b.dataset.member);render();return;}
 if(b.dataset.route!==undefined){state.selected=state.routes[Number(b.dataset.route)];state.members.forEach(m=>m.confirmed=false);state.locked=false;state.step=4;state.unlocked=4;render();return;}
 if(b.dataset.event){state.changeDraft.type=b.dataset.event;const remaining=state.selected.ids.slice(state.changeDraft.count);if(!remaining.includes(state.changeDraft.target))state.changeDraft.target=remaining[0]||'';render();return;}
 const action=b.dataset.action;
 if(action==='demo'){state=initial();state.created=true;state.members.forEach(m=>{m.joined=true;m.submitted=true;});state.step=3;state.unlocked=3;render();toast('已载入四位虚构成员的完整示例');}
 if(action==='create'){fillMissingConfig();state.created=true;state.step=1;state.unlocked=Math.max(1,state.unlocked);render();}
 if(action==='join-all'){state.members.forEach(m=>m.joined=true);render();toast('示例成员已模拟加入');}
 if(action==='to-prefs'){state.step=2;state.unlocked=Math.max(2,state.unlocked);render();}
 if(action==='submit-pref'){const m=state.members[state.activeMember];if(!m.name.trim()||m.budget<0||m.walk<5||m.rest<0){toast('请检查昵称、预算、步行与休息输入');return;}m.submitted=true;const next=state.members.findIndex(m=>!m.submitted);if(next>=0)state.activeMember=next;render();toast(next>=0?'已提交，接着看看下一位成员':'所有成员偏好已提交，可以比较方案');}
 if(action==='compare'){state.step=3;state.unlocked=Math.max(3,state.unlocked);render();}
 if(action==='copy'){const invite=state.groupId;try{await navigator.clipboard.writeText(invite);toast('已复制演示编号；不包含偏好，也不支持实时同步');}catch{const input=$('.invite input');input.focus();input.select();toast('请复制已选中的演示小组编号');}}
 if(action==='lock'){if(!state.members.every(m=>m.confirmed))return;state.locked=true;state.step=5;state.unlocked=5;state.changeDraft.count=state.progress.ids.length;const remaining=state.selected.ids.slice(state.changeDraft.count);state.changeDraft.target=remaining.includes('lunch')?'lunch':remaining[0]||'';render();toast('路线已模拟锁定，途中可以继续调整');}
 if(action==='replan'){
   const r=state.selected,d=state.changeDraft,count=Math.max(state.progress.ids.length,Math.min(Number(d.count),r.ids.length));
   if(['queue','closed'].includes(d.type)&&count===r.ids.length){toast('活动已全部完成，没有剩余活动可应用此变化');return;}
   const schedule=r.schedule.slice(0,count).map(s=>({...s,completed:true}));
   const elapsed=Math.max(state.progress.elapsed||0,count?Math.max(0,schedule.at(-1).end-mins(state.config.start)):0)+Math.max(0,Number(d.delay||0));
   state.progress={ids:r.ids.slice(0,count),schedule,elapsed,walk:schedule.reduce((s,x)=>s+x.walk,0)};
   state.event={...state.event,type:d.type,target:d.target,rain:state.event.rain||d.type==='rain',fatigue:state.event.fatigue||d.type==='fatigue',closedIds:[...new Set([...(state.event.closedIds||[]),...(d.type==='closed'?[d.target]:[])])],queueIds:[...new Set([...(state.event.queueIds||[]),...(d.type==='queue'?[d.target]:[])])]};state.revision++;
   invalidate();
   if(d.type==='mind'){state.members.forEach(m=>m.submitted=false);state.step=2;state.activeMember=0;}else{state.step=3;state.unlocked=3;}
   render();toast('已保留完成进度，并重新检查剩余约束');
 }
 if(b.id==='reset'){clearCoupons();state=initial();render();toast('已重置为四人示例，保留在本浏览器');}
 if(b.id==='clear'){clearCoupons();try{localStorage.removeItem(KEY);}catch{}state=initial();render();try{localStorage.removeItem(KEY);}catch{}toast('已清除本地数据，当前为未保存的默认示例');}
 if(b.id==='export'){const payload={prototype:true,notice:'演示数据；非实地调查、真实成员确认或现场导航。',exportedAt:new Date().toISOString(),...state};delete payload.routes;const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='along-the-way-demo.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('演示方案已导出，文件中保留数据性质说明');}
});
document.addEventListener('change',e=>{
 const t=e.target,m=state.members[state.activeMember];
 if(t.dataset.pref){m.prefs[t.dataset.pref]=t.value;m.submitted=false;invalidate();}
 if(t.dataset.confirm!==undefined)state.members[Number(t.dataset.confirm)].confirmed=t.checked;
 if(t.id==='group-name'){state.config.name=t.value;invalidate();}
 if(t.id==='start'||t.id==='end'){state.config[t.id]=t.value;state.progress={ids:[],schedule:[],elapsed:0,walk:0};state.event={type:'none',target:'lunch'};invalidate();}
 if(t.id==='size'){state.config.size=Number(t.value);state.members=makeMembers(Number(t.value));state.activeMember=0;state.created=false;state.unlocked=0;invalidate();}
 if(t.id==='consent')state.consent=t.checked;
 if(t.id==='member-name'){m.name=t.value;m.submitted=false;invalidate();}
 if(['budget','walk','rest'].includes(t.id)){m[t.id]=Number(t.value);m.submitted=false;invalidate();}
 if(t.id==='accessible'){m.accessible=t.checked;m.submitted=false;invalidate();}
 if(t.id==='completed-count'){state.changeDraft.count=Math.max(state.progress.ids.length,Number(t.value));const remaining=state.selected.ids.slice(state.changeDraft.count);if(!remaining.includes(state.changeDraft.target))state.changeDraft.target=remaining[0]||'';}
 if(t.id==='delay')state.changeDraft.delay=Math.max(0,Number(t.value));
 if(t.id==='event-target')state.changeDraft.target=t.value;
 render();
});
render();

})();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startShunlu, { once: true });
  } else {
    startShunlu();
  }
})();
