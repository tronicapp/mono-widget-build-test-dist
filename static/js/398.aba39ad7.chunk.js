(self.webpackChunkweb=self.webpackChunkweb||[]).push([[398],{42955:function(r,n,e){"use strict";e.r(n),e.d(n,{getED25519Key:function(){return i}});var t=e(98414),a=e(65482),f=e.n(a),c=e(93483).Buffer,o=f().lowlevel;function i(r){var n;n="string"===typeof r?c.from(r,"hex"):r;var e=new Uint8Array(64),a=[o.gf(),o.gf(),o.gf(),o.gf()],f=new Uint8Array([].concat((0,t.Z)(new Uint8Array(n)),(0,t.Z)(new Uint8Array(32)))),i=new Uint8Array(32);o.crypto_hash(e,f,32),e[0]&=248,e[31]&=127,e[31]|=64,o.scalarbase(a,e),o.pack(i,a);for(var u=0;u<32;u+=1)f[u+32]=i[u];return{sk:c.from(f),pk:c.from(i)}}},58722:function(){}}]);
//# sourceMappingURL=398.aba39ad7.chunk.js.map