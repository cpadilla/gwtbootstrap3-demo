$wnd.GwtBootstrap3Demo.runAsyncCallback36("function Nfc(){}\nfunction Rfc(){}\nfunction Tfc(){}\nfunction Ufc(){Ufc=Y_;Qfc=new Tfc}\nfunction Mfc(){Ulb(this,Ofc(new Pfc))}\nfunction p_b(a){Rfb.call(this,a);o_b(this)}\nfunction Gfc(a,b,c){jlb();Flb.call(this,a,b,c,(K_b(),J_b))}\nfunction Pfc(){this.a=(new Rfc,Ufc(),Qfc);Sfc(this.a)}\nfunction Ohc(a){var b;if(!a.F){b=new Mfc(new Nfc);a.F=b}return a.F}\nfunction Nhc(a){var b;if(!a.D){b=new Gfc(Kkb(gmb(a.a)),Ohc(a),Mhc(a));blb((jmb(a.a),b),umb(jmb(a.a)));a.D=b}return a.D}\nfunction Sfc(a){if(!a.a){a.a=true;du((ry(),'.GPBYFDEBL{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDECL{margin-top:0 !important;}.GPBYFDEDL{margin-left:5px;}'));return true}return false}\nfunction Ofc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new yEb;gzb(a,(b=new pBb(yIc),gzb(b,(c=new rDb,c.a='Offline',qDb(c),c)),gzb(b,(d=new dAb,gzb(d,(e=new SBb((fMb(),cMb)),S3((dbb(),e.db),'GPBYFDECL',true),C_b(e.b,QMc),hzb(e,e.b,0),e)),gzb(d,new w_b((j=new Grb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new S1(j.a)).a)),gzb(d,(f=new ync,pEb(f,(k=new Grb,k.a+=RMc,new S1(k.a)).a),S3(f.db,DIc,true),f)),gzb(d,new w_b((l=new Grb,l.a+=SMc,new S1(l.a)).a)),gzb(d,(g=new ync,pEb(g,(m=new Grb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new S1(m.a)).a),S3(g.db,DIc,true),g)),S3(d.db,'GPBYFDEBL',true),d)),gzb(b,(h=new DDb,gzb(h,(n=new SDb,gzb(n,(o=new SBb(bMb),C_b(o.b,'What is Offline?'),hzb(o,o.b,0),o)),n)),gzb(h,(p=new FDb,gzb(p,new p_b((q=new Grb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new S1(q.a)).a)),p)),gzb(h,new PDb),h)),gzb(b,(i=new DDb,gzb(i,(r=new SDb,gzb(r,(s=new SBb(bMb),C_b(s.b,'How to configure?'),hzb(s,s.b,0),s)),r)),gzb(i,(t=new FDb,gzb(t,new w_b((u=new Grb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new S1(u.a)).a)),gzb(t,(v=new ync,pEb(v,(w=new Grb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new S1(w.a)).a),S3(v.db,DIc,true),v)),gzb(t,new w_b((A=new Grb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new S1(A.a)).a)),gzb(t,(B=new ync,pEb(B,(C=new Grb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new S1(C.a)).a),S3(B.db,DIc,true),B)),gzb(t,new w_b((D=new Grb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new S1(D.a)).a)),gzb(t,(F=new ync,pEb(F,(G=new Grb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new S1(G.a)).a),S3(F.db,DIc,true),F)),t)),gzb(i,new PDb),i)),b));return a}\nX_(309,244,ZGc,p_b);X_(717,46,SFc,Gfc);var WV=jqb(oIc,'OfflinePresenter',717);X_(922,TFc,UFc,Mfc);var _V=jqb(oIc,'OfflineView',922);X_(1115,1,{},Nfc);var $V=jqb(oIc,'OfflineView_BinderImpl',1115);X_(1116,1,{},Pfc);var XV=jqb(oIc,'OfflineView_BinderImpl/Widgets',1116);X_(1363,1,{},Rfc);var Qfc;var ZV=jqb(oIc,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator',1363);X_(1364,1,{},Tfc);_.a=false;var YV=jqb(oIc,'OfflineView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1',1364);X_(647,1,THc);_.Jb=function Vic(){Enb(this.b,Nhc(this.a.a))};RDc(_l)(36);\n//# sourceURL=GwtBootstrap3Demo-36.js\n")
