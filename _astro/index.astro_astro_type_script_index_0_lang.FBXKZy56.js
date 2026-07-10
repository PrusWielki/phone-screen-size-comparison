var e=[{id:`s1`,diagonal:6.7,aspectW:19.5,aspectH:9,color:`#3b82f6`},{id:`s2`,diagonal:5.5,aspectW:16,aspectH:9,color:`#ef4444`}],t=`center`,n=[`#3b82f6`,`#ef4444`,`#10b981`,`#f59e0b`,`#8b5cf6`,`#ec4899`],r=document.getElementById(`screen-inputs`),i=document.getElementById(`add-btn`),a=document.getElementById(`canvas-overlay`),o=document.getElementById(`btn-align-center`),s=document.getElementById(`btn-align-bottom-left`);function c(){let n=localStorage.getItem(`overlay_screens`);n&&(e=JSON.parse(n));let r=localStorage.getItem(`overlay_align`);(r===`center`||r===`bottom-left`)&&(t=r),i.addEventListener(`click`,f),o.addEventListener(`click`,()=>{t=`center`,u(),d(),v()}),s.addEventListener(`click`,()=>{t=`bottom-left`,u(),d(),v()}),d(),g()}function l(){localStorage.setItem(`overlay_screens`,JSON.stringify(e))}function u(){localStorage.setItem(`overlay_align`,t)}function d(){t===`center`?(o.classList.add(`btn-active`,`text-white`),o.classList.remove(`text-slate-400`),s.classList.remove(`btn-active`,`text-white`),s.classList.add(`text-slate-400`)):(s.classList.add(`btn-active`,`text-white`),s.classList.remove(`text-slate-400`),o.classList.remove(`btn-active`,`text-white`),o.classList.add(`text-slate-400`))}function f(){let t=n[e.length%n.length];e.push({id:`s-${Date.now()}`,diagonal:6,aspectW:16,aspectH:9,color:t}),g()}function p(t){e=e.filter(e=>e.id!==t),g()}function m(t,n,r){let i=e.find(e=>e.id===t);i&&(i[n]=r,l(),v())}function h(e){let t=e.diagonal,n=e.aspectW/e.aspectH,r=t/Math.sqrt(n*n+1),i=n*r;return{w:i,h:r,area:i*r}}function g(){l(),_(),v()}function _(){r.innerHTML=``,e.forEach((e,t)=>{let n=document.createElement(`div`);n.className=`p-3 bg-slate-950 border border-slate-800 rounded-lg space-y-3 relative`,n.innerHTML=`
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
      `,n.querySelector(`.btn-del`).addEventListener(`click`,()=>p(e.id)),n.querySelector(`.inp-diag`).addEventListener(`input`,t=>{let n=parseFloat(t.target.value);!isNaN(n)&&n>0&&m(e.id,`diagonal`,n)}),n.querySelector(`.inp-w`).addEventListener(`input`,t=>{let n=parseFloat(t.target.value);!isNaN(n)&&n>0&&m(e.id,`aspectW`,n)}),n.querySelector(`.inp-h`).addEventListener(`input`,t=>{let n=parseFloat(t.target.value);!isNaN(n)&&n>0&&m(e.id,`aspectH`,n)}),n.querySelector(`.inp-color`).addEventListener(`input`,t=>{m(e.id,`color`,t.target.value)}),r.appendChild(n)})}function v(){if(a.innerHTML=``,e.length===0)return;let n=a.clientWidth,r=a.clientHeight,i=n-40,o=r-40,s=e.map(e=>({id:e.id,color:e.color,diagonal:e.diagonal,aspectW:e.aspectW,aspectH:e.aspectH,dims:h(e)})),c=Math.max(...s.map(e=>e.dims.w)),l=Math.max(...s.map(e=>e.dims.h)),u=i/c,d=o/l,f=Math.min(u,d);s.forEach((e,i)=>{let o=e.dims.w*f,s=e.dims.h*f,c=document.createElement(`div`);c.className=`absolute border-2 transition-all duration-200 flex flex-col justify-between p-2 pointer-events-none`,c.style.borderColor=e.color,c.style.background=`${e.color}0a`,c.style.width=`${o}px`,c.style.height=`${s}px`,t===`center`?(c.style.left=`${(n-o)/2}px`,c.style.top=`${(r-s)/2}px`):(c.style.left=`20px`,c.style.top=`${r-s-20}px`),c.innerHTML=`
        <div class="text-[9px] font-bold" style="color: ${e.color}">#${i+1} (${e.diagonal.toFixed(1)}")</div>
        <div class="text-[9px] text-slate-400 text-center pointer-events-none">
          ${e.dims.w.toFixed(1)}" x ${e.dims.h.toFixed(1)}"
          <div class="text-[8px] text-slate-500">${e.dims.area.toFixed(1)} sq in</div>
        </div>
        <div class="text-[8px] text-right text-slate-500">${e.aspectW}:${e.aspectH}</div>
      `,a.appendChild(c)})}var y;window.addEventListener(`resize`,()=>{clearTimeout(y),y=setTimeout(v,100)}),c();