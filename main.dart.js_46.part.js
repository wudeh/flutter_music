self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={mL:function mL(d,e){this.a=d
this.b=e},
aCp(d,e,f,g,h,i,j,k){var x,w,v=null
if(g==null)x=e!=null?new B.bN(e,v,v,v,v,v,C.D):v
else x=g
if(k!=null||i!=null)w=B.k6(i,k)
else w=v
return new A.xj(d,j,x,w,f,h,v,v)},
oW:function oW(d,e){this.a=d
this.b=e},
pT:function pT(d,e){this.a=d
this.b=e},
xj:function xj(d,e,f,g,h,i,j,k){var _=this
_.r=d
_.y=e
_.z=f
_.ch=g
_.c=h
_.d=i
_.e=j
_.a=k},
Qk:function Qk(d,e){var _=this
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=null
_.e=_.d=$
_.c6$=d
_.a=null
_.b=e
_.c=null},
ak5:function ak5(){},
ak6:function ak6(){},
ak7:function ak7(){},
ak8:function ak8(){},
ak9:function ak9(){},
aka:function aka(){},
akb:function akb(){},
akc:function akc(){},
aEX(){var x=new Float64Array(4)
x[3]=1
return new A.nP(x)},
nP:function nP(d){this.a=d}},B,C
a.setFunctionNamesIfNecessary([A])
A=a.updateHolder(c[11],A)
B=c[0]
C=c[2]
A.mL.prototype={
eh(d){return B.axU(this.a,this.b,d)}}
A.oW.prototype={
eh(d){var x=B.rR(this.a,this.b,d)
x.toString
return x}}
A.pT.prototype={
eh(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.dS(new Float64Array(3)),a3=new B.dS(new Float64Array(3)),a4=A.aEX(),a5=A.aEX(),a6=new B.dS(new Float64Array(3)),a7=new B.dS(new Float64Array(3))
this.a.Qi(a2,a4,a6)
this.b.Qi(a3,a5,a7)
x=1-a8
w=a2.j3(x).X(0,a3.j3(a8))
v=a4.j3(x).X(0,a5.j3(a8))
u=new Float64Array(4)
t=new A.nP(u)
t.bc(v)
t.u2(0)
s=a6.j3(x).X(0,a7.j3(a8))
x=new Float64Array(16)
v=new B.aL(x)
r=u[0]
q=u[1]
p=u[2]
o=u[3]
n=r+r
m=q+q
l=p+p
k=r*n
j=r*m
i=r*l
h=q*m
g=q*l
f=p*l
e=o*n
d=o*m
a0=o*l
a1=w.a
x[0]=1-(h+f)
x[1]=j+a0
x[2]=i-d
x[3]=0
x[4]=j-a0
x[5]=1-(k+f)
x[6]=g+e
x[7]=0
x[8]=i+d
x[9]=g-e
x[10]=1-(k+h)
x[11]=0
x[12]=a1[0]
x[13]=a1[1]
x[14]=a1[2]
x[15]=1
v.bM(0,s)
return v}}
A.xj.prototype={
a5(){return new A.Qk(null,C.l)}}
A.Qk.prototype={
lU(d){var x,w,v,u=this,t=null,s=u.dx
u.a.toString
x=y.b
u.dx=x.a(d.$3(s,t,new A.ak5()))
s=y.f
u.dy=s.a(d.$3(u.dy,u.a.y,new A.ak6()))
w=y.d
u.fr=w.a(d.$3(u.fr,u.a.z,new A.ak7()))
v=u.fx
u.a.toString
u.fx=w.a(d.$3(v,t,new A.ak8()))
u.fy=y.e.a(d.$3(u.fy,u.a.ch,new A.ak9()))
v=u.go
u.a.toString
u.go=s.a(d.$3(v,t,new A.aka()))
v=u.id
u.a.toString
u.id=y.w.a(d.$3(v,t,new A.akb()))
v=u.k1
u.a.toString
u.k1=x.a(d.$3(v,t,new A.akc()))},
J(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=q.gek(),n=q.dx
n=n==null?p:n.T(0,o.gl(o))
x=q.dy
x=x==null?p:x.T(0,o.gl(o))
w=q.fr
w=w==null?p:w.T(0,o.gl(o))
v=q.fx
v=v==null?p:v.T(0,o.gl(o))
u=q.fy
u=u==null?p:u.T(0,o.gl(o))
t=q.go
t=t==null?p:t.T(0,o.gl(o))
s=q.id
s=s==null?p:s.T(0,o.gl(o))
r=q.k1
r=r==null?p:r.T(0,o.gl(o))
return B.a3(n,q.a.r,C.h,p,u,w,v,p,t,x,s,r,p)}}
A.nP.prototype={
bc(d){var x=d.a,w=this.a
w[0]=x[0]
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
UZ(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r[3]=x*0.5
x=0.5/x
r[0]=(s[5]-s[7])*x
r[1]=(s[6]-s[2])*x
r[2]=(s[1]-s[3])*x}else{if(r<q)w=q<p?2:1
else w=r<p?2:0
v=(w+1)%3
u=(w+2)%3
r=w*3
q=v*3
p=u*3
x=Math.sqrt(s[r+w]-s[q+v]-s[p+u]+1)
t=this.a
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
u2(d){var x,w,v=Math.sqrt(this.gnx())
if(v===0)return 0
x=1/v
w=this.a
w[0]=w[0]*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return v},
gnx(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gp(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
j3(d){var x=new Float64Array(4),w=new A.nP(x)
w.bc(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
Z(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gamz(),a1=a0.h(0,3),a2=a0.h(0,2),a3=a0.h(0,1),a4=a0.h(0,0)
h=C.d.Z(g,a4)
x=C.d.Z(d,a1)
w=C.d.Z(e,a2)
v=C.d.Z(f,a3)
u=C.d.Z(g,a3)
t=C.d.Z(e,a1)
s=C.d.Z(f,a4)
r=C.d.Z(d,a2)
q=C.d.Z(g,a2)
p=C.d.Z(f,a1)
o=C.d.Z(d,a3)
n=C.d.Z(e,a4)
m=C.d.Z(g,a1)
l=C.d.Z(d,a4)
k=C.d.Z(e,a3)
j=C.d.Z(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.nP(i)},
X(d,e){var x,w=new Float64Array(4),v=new A.nP(w)
v.bc(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
a4(d,e){var x,w=new Float64Array(4),v=new A.nP(w)
v.bc(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
h(d,e){return this.a[e]},
t(d,e,f){this.a[e]=f},
j(d){var x=this.a
return B.d(x[0])+", "+B.d(x[1])+", "+B.d(x[2])+" @ "+B.d(x[3])}}
var z=a.updateTypes(["mL(@)","oW(@)","pT(@)"])
A.ak5.prototype={
$1(d){return new A.mL(y.k.a(d),null)},
$S:z+0}
A.ak6.prototype={
$1(d){return new B.kc(y.m.a(d),null)},
$S:82}
A.ak7.prototype={
$1(d){return new B.ll(y.r.a(d),null)},
$S:153}
A.ak8.prototype={
$1(d){return new B.ll(y.r.a(d),null)},
$S:153}
A.ak9.prototype={
$1(d){return new A.oW(y.a.a(d),null)},
$S:z+1}
A.aka.prototype={
$1(d){return new B.kc(y.m.a(d),null)},
$S:82}
A.akb.prototype={
$1(d){return new A.pT(y.E.a(d),null)},
$S:z+2}
A.akc.prototype={
$1(d){return new A.mL(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.af,[A.mL,A.oW,A.pT])
w(A.xj,B.tL)
w(A.Qk,B.mO)
x(B.bu,[A.ak5,A.ak6,A.ak7,A.ak8,A.ak9,A.aka,A.akb,A.akc])
w(A.nP,B.w)})()
B.cc(b.typeUniverse,JSON.parse('{"mL":{"af":["ia?"],"ao":["ia?"],"ao.T":"ia?","af.T":"ia?"},"oW":{"af":["aH"],"ao":["aH"],"ao.T":"aH","af.T":"aH"},"pT":{"af":["aL"],"ao":["aL"],"ao.T":"aL","af.T":"aL"},"xj":{"O":[],"h":[]},"Qk":{"Y":["xj"]}}'))
var y=(function rtii(){var x=B.M
return{k:x("ia"),a:x("aH"),r:x("fM"),m:x("d9"),E:x("aL"),b:x("mL?"),e:x("oW?"),d:x("ll?"),f:x("kc?"),w:x("pT?")}})()}
$__dart_deferred_initializers__["WnFYngKYDDZFopZ/ghvUWzlJ0x0="] = $__dart_deferred_initializers__.current
