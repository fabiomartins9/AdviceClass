"use strict";(()=>{var e={};e.id=118,e.ids=[118],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},20661:e=>{e.exports=require("sqlite3")},57147:e=>{e.exports=require("fs")},71017:e=>{e.exports=require("path")},21729:(e,i,r)=>{r.r(i),r.d(i,{originalPathname:()=>_,patchFetch:()=>v,requestAsyncStorage:()=>m,routeModule:()=>c,serverHooks:()=>x,staticGenerationAsyncStorage:()=>R});var s={};r.r(s),r.d(s,{GET:()=>l});var a=r(49303),t=r(88716),o=r(60670),n=r(26360),p=r(20661),d=r.n(p),u=r(87070);async function l(e){let{searchParams:i}=new URL(e.url),r=decodeURIComponent(i.get("id"));try{let e=await (0,n.bA)({filename:"public/uploads/escola.db",driver:d().Database}),i=`
    SELECT DISTINCT
    disciplina.id,
    disciplina.nome
  FROM disciplina
  INNER JOIN join_disciplina_professor_turma
    ON disciplina.id = join_disciplina_professor_turma.id_disciplina
  WHERE join_disciplina_professor_turma.id_turma = ?
  ORDER BY ROW_NUMBER() OVER (PARTITION BY disciplina.id, disciplina.nome)
  
    `,s=(await e.all(i,[r])).map(({nome:e})=>e);return u.NextResponse.json(s,{status:200})}catch(e){return console.error(e),u.NextResponse.json({message:"Erro ao buscar os dados."},{status:500})}}let c=new a.AppRouteRouteModule({definition:{kind:t.x.APP_ROUTE,page:"/api/disciplina/route",pathname:"/api/disciplina",filename:"route",bundlePath:"app/api/disciplina/route"},resolvedPagePath:"C:\\Users\\Fabio\\Desktop\\AdviceClass\\src\\app\\api\\disciplina\\route.jsx",nextConfigOutput:"",userland:s}),{requestAsyncStorage:m,staticGenerationAsyncStorage:R,serverHooks:x}=c,_="/api/disciplina/route";function v(){return(0,o.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:R})}}};var i=require("../../../webpack-runtime.js");i.C(e);var r=e=>i(i.s=e),s=i.X(0,[948,972,360],()=>r(21729));module.exports=s})();