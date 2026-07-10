var e=[{id:`s1`,diagonal:6.7,aspectW:19.5,aspectH:9,color:`#3b82f6`},{id:`s2`,diagonal:5.5,aspectW:16,aspectH:9,color:`#ef4444`}],t=[`#3b82f6`,`#ef4444`,`#10b981`,`#f59e0b`,`#8b5cf6`,`#ec4899`],n=document.getElementById(`screen-inputs`),r=document.getElementById(`add-btn`),i=document.getElementById(`canvas-overlay`);function a(){let t=localStorage.getItem(`overlay_screens`);t&&(e=JSON.parse(t)),r.addEventListener(`click`,s),d()}function o(){localStorage.setItem(`overlay_screens`,JSON.stringify(e))}function s(){let n=t[e.length%t.length];e.push({id:`s-${Date.now()}`,diagonal:6,aspectW:16,aspectH:9,color:n}),d()}function c(t){e=e.filter(e=>e.id!==t),d()}function l(t,n,r){let i=e.find(e=>e.id===t);i&&(i[n]=r,o(),p())}function u(e){let t=e.diagonal,n=e.aspectW/e.aspectH,r=t/Math.sqrt(n*n+1),i=n*r;return{w:i,h:r,area:i*r}}function d(){o(),f(),p()}function f(){n.innerHTML=``,e.forEach((e,t)=>{let r=document.createElement(`div`);r.className=`p-3 bg-slate-950 border border-slate-800 rounded-lg space-y-3 relative`,r.innerHTML=`
        <div class="flex justify-between items-center">
          <span class="text-xs font-bold text-white">Screen #${t+1}</span>
          <button class="text-slate-500 hover:text-red-400 text-[10px] btn-del" data-id="${e.id}">Delete</button>
        </div>
        
        <div class="grid grid-cols-3 gap-2">
          <div>
            <label class="block text-[10px] text-slate-500 mb-0.5">Diagonal (in)</label>
            <input type="number" step="0.1" class="input input-bordered input-xs w-full text-center font-bold bg-slate-900 border-slate-800 inp-diag" data-id="${e.id}" value="${e.diagonal}">
          </div>
          <div>
            <label class="block text-[10px] text-slate-500 mb-0.5">Aspect W</label>
            <input type="number" step="0.1" class="input input-bordered input-xs w-full text-center bg-slate-900 border-slate-800 inp-w" data-id="${e.id}" value="${e.aspectW}">
          </div>
          <div>
            <label class="block text-[10px] text-slate-500 mb-0.5">Aspect H</label>
            <input type="number" step="0.1" class="input input-bordered input-xs w-full text-center bg-slate-900 border-slate-800 inp-h" data-id="${e.id}" value="${e.aspectH}">
          </div>
        </div>

        <div class="flex gap-2 items-center">
          <label class="text-[10px] text-slate-500">Color:</label>
          <input type="color" class="w-6 h-5 rounded cursor-pointer border border-slate-850 bg-transparent inp-color" data-id="${e.id}" value="${e.color}">
        </div>
      `,r.querySelector(`.btn-del`).addEventListener(`click`,()=>c(e.id)),r.querySelector(`.inp-diag`).addEventListener(`input`,t=>{let n=parseFloat(t.target.value);!isNaN(n)&&n>0&&l(e.id,`diagonal`,n)}),r.querySelector(`.inp-w`).addEventListener(`input`,t=>{let n=parseFloat(t.target.value);!isNaN(n)&&n>0&&l(e.id,`aspectW`,n)}),r.querySelector(`.inp-h`).addEventListener(`input`,t=>{let n=parseFloat(t.target.value);!isNaN(n)&&n>0&&l(e.id,`aspectH`,n)}),r.querySelector(`.inp-color`).addEventListener(`input`,t=>{l(e.id,`color`,t.target.value)}),n.appendChild(r)})}function p(){if(i.innerHTML=``,e.length===0)return;let t=i.clientWidth,n=i.clientHeight,r=t-40,a=n-40,o=e.map(e=>({id:e.id,color:e.color,diagonal:e.diagonal,aspectW:e.aspectW,aspectH:e.aspectH,dims:u(e)})),s=Math.max(...o.map(e=>e.dims.w)),c=Math.max(...o.map(e=>e.dims.h)),l=r/s,d=a/c,f=Math.min(l,d);o.forEach((e,r)=>{let a=e.dims.w*f,o=e.dims.h*f,s=document.createElement(`div`);s.className=`absolute border-2 transition-all duration-200 flex flex-col justify-between p-2 pointer-events-none`,s.style.borderColor=e.color,s.style.background=`${e.color}0a`,s.style.width=`${a}px`,s.style.height=`${o}px`,s.style.left=`${(t-a)/2}px`,s.style.top=`${(n-o)/2}px`,s.innerHTML=`
        <div class="text-[9px] font-bold" style="color: ${e.color}">#${r+1} (${e.diagonal.toFixed(1)}")</div>
        <div class="text-[9px] text-slate-400 text-center pointer-events-none">
          ${e.dims.w.toFixed(1)}" x ${e.dims.h.toFixed(1)}"
          <div class="text-[8px] text-slate-500">${e.dims.area.toFixed(1)} sq in</div>
        </div>
        <div class="text-[8px] text-right text-slate-500">${e.aspectW}:${e.aspectH}</div>
      `,i.appendChild(s)})}var m;window.addEventListener(`resize`,()=>{clearTimeout(m),m=setTimeout(p,100)}),a();