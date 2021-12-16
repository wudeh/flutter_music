self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={ajF:function ajF(d,e){this.a=d
this.b=e},ajG:function ajG(d,e){this.a=d
this.b=e},FA:function FA(d,e,f){this.a=d
this.b=e
this.c=f},kL:function kL(d,e,f){var _=this
_.e=0
_.c4$=d
_.ao$=e
_.a=f},NG:function NG(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var _=this
_.C=d
_.q=e
_.w=f
_.L=g
_.af=h
_.aR=i
_.aC=j
_.aG=k
_.b2=l
_.be=!1
_.bE=m
_.cj$=n
_.a9$=o
_.c3$=p
_.r1=_.k4=null
_.r2=!1
_.ry=_.rx=null
_.x1=0
_.d=!1
_.f=_.e=null
_.x=_.r=!1
_.y=null
_.z=!1
_.Q=!0
_.ch=null
_.cx=!1
_.cy=null
_.db=!1
_.dx=q
_.dy=!1
_.fr=$
_.fx=!0
_.fy=null
_.go=!0
_.id=null
_.a=0
_.c=_.b=null},Vn:function Vn(){},Vo:function Vo(){},
aA2(d,e,f){return new A.Q1(f,e,d,null)},
Q1:function Q1(d,e,f,g){var _=this
_.r=d
_.y=e
_.c=f
_.a=g}},C,B,D
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[17],A)
C=c[2]
B=c[0]
D=c[40]
A.ajF.prototype={
j(d){return"WrapAlignment."+this.b}}
A.ajG.prototype={
j(d){return"WrapCrossAlignment."+this.b}}
A.FA.prototype={}
A.kL.prototype={}
A.NG.prototype={
safh(d,e){if(this.C===e)return
this.C=e
this.W()},
sdM(d){if(this.q===d)return
this.q=d
this.W()},
sVI(d,e){if(this.w===e)return
this.w=e
this.W()},
saln(d){if(this.L===d)return
this.L=d
this.W()},
salo(d){if(this.af===d)return
this.af=d
this.W()},
saeD(d){if(this.aR===d)return
this.aR=d
this.W()},
ew(d){if(!(d.e instanceof A.kL))d.e=new A.kL(null,null,C.j)},
e1(d){return this.Ej(d)},
Bs(d){switch(this.C.a){case 0:return d.a
case 1:return d.b}},
Bq(d){switch(this.C.a){case 0:return d.b
case 1:return d.a}},
a3T(d,e){switch(this.C.a){case 0:return new B.m(d,e)
case 1:return new B.m(e,d)}},
a3z(d,e,f){var x=e-f
switch(this.aR.a){case 0:return d?x:0
case 1:return d?0:x
case 2:return x/2}},
c7(d){return this.a1q(d)},
a1q(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this
switch(k.C.a){case 0:x=d.b
w=new B.aG(0,x,0,1/0)
break
case 1:x=d.d
w=new B.aG(0,1/0,0,x)
break
default:w=null
x=0}v=k.a9$
for(u=B.p(k).i("am.1"),t=0,s=0,r=0,q=0,p=0;v!=null;){o=B.aCP(v,w)
n=k.Bs(o)
m=k.Bq(o)
if(p>0&&r+n+k.w>x){t=Math.max(t,r)
s+=q+k.af
r=0
q=0
p=0}r+=n
q=Math.max(q,m)
if(p>0)r+=k.w;++p
l=v.e
l.toString
v=u.a(l).ao$}s+=q
t=Math.max(t,r)
switch(k.C.a){case 0:return d.bX(new B.P(t,s))
case 1:return d.bX(new B.P(s,t))}},
bK(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=this,b2=y.a.a(B.t.prototype.gV.call(b1))
b1.be=!1
x=b1.a9$
if(x==null){b1.rx=new B.P(C.e.E(0,b2.a,b2.b),C.e.E(0,b2.c,b2.d))
return}switch(b1.C.a){case 0:w=b2.b
v=new B.aG(0,w,0,1/0)
u=b1.aC===C.Y&&!0
t=b1.aG===C.iR&&!0
break
case 1:w=b2.d
v=new B.aG(0,1/0,0,w)
u=b1.aG===C.iR&&!0
t=b1.aC===C.Y&&!0
break
default:v=null
w=0
u=!1
t=!1}s=b1.w
r=b1.af
q=B.b([],y.l)
for(p=y.e,o=0,n=0,m=0,l=0,k=0;x!=null;){x.ct(0,v,!0)
j=x.rx
j.toString
i=b1.Bs(j)
j=x.rx
j.toString
h=b1.Bq(j)
if(k>0&&m+s+i>w){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.FA(m,l,k))
m=0
l=0
k=0}m+=i
if(k>0)m+=s
l=Math.max(l,h);++k
j=x.e
j.toString
p.a(j)
j.e=q.length
x=j.ao$}if(k>0){o=Math.max(o,m)
n+=l
if(q.length!==0)n+=r
q.push(new A.FA(m,l,k))}g=q.length
switch(b1.C.a){case 0:j=b1.rx=b2.bX(new B.P(o,n))
f=j.a
e=j.b
break
case 1:j=b1.rx=b2.bX(new B.P(n,o))
f=j.b
e=j.a
break
default:f=0
e=0}b1.be=f<o||e<n
d=Math.max(0,e-n)
switch(b1.L.a){case 0:a0=0
a1=0
break
case 1:a0=d
a1=0
break
case 2:a0=d/2
a1=0
break
case 3:a1=g>1?d/(g-1):0
a0=0
break
case 4:a1=d/g
a0=a1/2
break
case 5:a1=d/(g+1)
a0=a1
break
default:a0=0
a1=0}a1+=r
a2=t?e-a0:a0
x=b1.a9$
for(a3=0;a3<g;++a3){a4=q[a3]
l=a4.b
k=a4.c
a5=Math.max(0,f-a4.a)
switch(b1.q.a){case 0:a6=0
a7=0
break
case 1:a6=a5
a7=0
break
case 2:a6=a5/2
a7=0
break
case 3:a7=k>1?a5/(k-1):0
a6=0
break
case 4:a7=a5/k
a6=a7/2
break
case 5:a7=a5/(k+1)
a6=a7
break
default:a6=0
a7=0}a7+=s
a8=u?f-a6:a6
if(t)a2-=l
for(;x!=null;){j=x.e
j.toString
p.a(j)
if(j.e!==a3)break
a9=x.rx
a9.toString
i=b1.Bs(a9)
a9=x.rx
a9.toString
b0=b1.a3z(t,l,b1.Bq(a9))
if(u)a8-=i
j.a=b1.a3T(a8,a2+b0)
a8=u?a8-a7:a8+(i+a7)
x=j.ao$}a2=t?a2-a1:a2+(l+a1)}},
cZ(d,e){return this.xs(d,e)},
aB(d,e){var x,w=this,v=w.be&&w.b2!==C.h,u=w.bE
if(v){v=B.a(w.fr,"_needsCompositing")
x=w.rx
u.saN(0,d.jK(v,e,new B.E(0,0,0+x.a,0+x.b),w.gQf(),w.b2,u.a))}else{u.saN(0,null)
w.nf(d,e)}},
m(d){this.bE.saN(0,null)
this.l8(0)}}
A.Vn.prototype={
ah(d){var x,w,v
this.dn(d)
x=this.a9$
for(w=y.e;x!=null;){x.ah(d)
v=x.e
v.toString
x=w.a(v).ao$}},
a8(d){var x,w,v
this.d5(0)
x=this.a9$
for(w=y.e;x!=null;){x.a8(0)
v=x.e
v.toString
x=w.a(v).ao$}}}
A.Vo.prototype={}
A.Q1.prototype={
aH(d){var x=B.ee(d)
x=new A.NG(C.a2,D.fi,this.r,D.fi,this.y,D.xg,x,C.bn,C.h,B.ap(),0,null,null,B.ap())
x.gat()
x.gaz()
x.fr=!1
x.R(0,null)
return x},
aT(d,e){var x
e.safh(0,C.a2)
e.sdM(D.fi)
e.sVI(0,this.r)
e.saln(D.fi)
e.salo(this.y)
e.saeD(D.xg)
x=B.ee(d)
if(e.aC!=x){e.aC=x
e.W()}if(e.aG!==C.bn){e.aG=C.bn
e.W()}if(C.h!==e.b2){e.b2=C.h
e.an()
e.ay()}}}
var z=a.updateTypes([]);(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inheritMany,u=a.inherit
v(B.jL,[A.ajF,A.ajG])
u(A.FA,B.D)
u(A.kL,B.t4)
u(A.Vn,B.G)
u(A.Vo,A.Vn)
u(A.NG,A.Vo)
u(A.Q1,B.ek)
x(A.Vn,B.am)
w(A.Vo,B.cU)})()
B.dP(b.typeUniverse,JSON.parse('{"kL":{"fB":[],"fb":["G"]},"NG":{"cU":["G","kL"],"G":[],"am":["G","kL"],"t":[],"M":[],"an":[],"am.1":"kL","cU.1":"kL","am.0":"G"},"Q1":{"ek":[],"at":[],"h":[]}}'))
var y={a:B.U("aG"),l:B.U("q<FA>"),e:B.U("kL")};(function constants(){D.fi=new A.ajF(0,"start")
D.xg=new A.ajG(0,"start")})()}
$__dart_deferred_initializers__["uC0t5/3P4GWkMBlzLRTDQBLl0Uc="] = $__dart_deferred_initializers__.current
