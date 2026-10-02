const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.main-nav');
if(menuBtn){menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open?'true':'false')})}
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
const sections=[...document.querySelectorAll('main section[id], #top')];
const links=[...document.querySelectorAll('.main-nav a')];
window.addEventListener('scroll',()=>{let current='top';sections.forEach(s=>{if(s.getBoundingClientRect().top<160)current=s.id||'top'});links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))},{passive:true});

const restaurantData={
  nesu:{
    name:'เนสสึโอเด้ง',en:'NESU ODEN',type:'โอเด้งญี่ปุ่น • หม่าล่า • ของเสียบไม้',
    headline:'โอเด้งร้อน ๆ เลือกหยิบเอง เริ่มต้นเพียงหลักสิบ',
    desc:'ร้านโอเด้งสไตล์ญี่ปุ่นที่มีของเสียบไม้ให้เลือกหลากหลาย จุดเด่นคือน้ำซุป 2 สไตล์ ทั้งน้ำดำดาชิแบบออริจินอลรสกลมกล่อม และน้ำซุปหม่าล่าสำหรับคนที่ชอบรสจัด เลือกหยิบของที่ชอบแล้วจัดชุดในแบบของตัวเองได้',
    menus:['โอเด้งน้ำดำดาชิ','โอเด้งหม่าล่า','เบคอนพันเห็ดเข็มทอง','เบคอนพันไส้กรอก','ลูกชิ้นและของเสียบไม้','เริ่มต้นประมาณ 5–10 บาท/ไม้'],
    images:['assets/images/restaurants/nesu-cover.jpg','assets/images/restaurants/nesu-2.jpg','assets/images/restaurants/nesu-3.jpg','assets/images/restaurants/nesu-4.jpg','assets/images/restaurants/nesu-5.jpg']
  },
  nackkuu:{
    name:'NACK KUU',en:'NACK KUU',type:'ไก่ทอด • ไก่เกาหลี • ของทานเล่น • เครื่องดื่ม',
    headline:'ทอดใหม่ กินเพลิน พร้อมสเลอปี้ชาไทยสูตรลับ',
    desc:'ร้านของทานเล่นที่เหมาะทั้งวัยเรียน วัยทำงาน และครอบครัว มีตั้งแต่ไก่ทอด ไก่เกาหลี นักเก็ต เฟรนช์ฟรายส์ ไปจนถึงเครื่องดื่ม จุดเด่นอีกอย่างคือสเลอปี้ชาไทย เนื้อเกล็ดน้ำแข็ง หอมชาไทย เป็นหนึ่งในเมนูซิกเนเจอร์ของร้าน',
    menus:['ไก่ทอด','ไก่เกาหลี','นักเก็ต','เฟรนช์ฟรายส์','สเลอปี้ชาไทย'],
    images:['assets/images/restaurants/nack-cover.jpg']
  },
  srinang:{
    name:'สเต๊กศรีนาง',en:'SRI NANG STEAK',type:'สเต๊ก • บาร์บีคิว • หม่าล่าเสียบไม้',
    headline:'สเต๊กร้อน ๆ จานเต็ม อิ่มง่ายในราคาสบายกระเป๋า',
    desc:'ร้านสเต๊กสำหรับมื้อเที่ยงหรือมื้อเย็น เน้นเมนูย่างร้อน ๆ ทั้งสเต๊กเนื้อนุ่ม บาร์บีคิว และหม่าล่าเสียบไม้ เหมาะกับการนั่งกินสบาย ๆ ทั้งมากับเพื่อนและครอบครัว',
    menus:['สเต๊กหมู','สเต๊กเนื้อ','บาร์บีคิวเสียบไม้','หม่าล่าเสียบไม้','ชุดสเต๊กพร้อมเฟรนช์ฟรายส์และสลัด'],
    images:['assets/images/restaurants/srinang-cover.jpg','assets/images/restaurants/srinang-2.jpg','assets/images/restaurants/srinang-3.jpg']
  },
  pakza:{
    name:'แป๊กซ่า',en:'PAKZA',type:'ลูกชิ้น • ไส้กรอก • ของเสียบไม้ • ยำแซ่บ',
    headline:'เลือกเอง จิ้มเอง หรือยำให้แซ่บก็ได้',
    desc:'สายลูกชิ้นและของเสียบไม้ไม่ควรพลาด เพราะมีทั้งลูกชิ้น ไส้กรอก หมาล่า และของทอดให้เลือกหลากหลาย สามารถเลือกกินแบบจิ้มน้ำจิ้มรสเด็ด หรือเพิ่มความจัดจ้านด้วยการทำเป็นยำแซ่บได้ตามชอบ',
    menus:['ลูกชิ้นยืนกิน','ไส้กรอก','หมาล่าทอดเสียบไม้','ยำลูกชิ้น','ของเสียบไม้รวม'],
    images:['assets/images/restaurants/pakza-cover.jpg']
  },
  tammagin:{
    name:'ตามมากิน',en:'TAMMAGIN',type:'บะหมี่ • อาหารจานเดียว • สลัดโรล • เกี๊ยว',
    headline:'อาหารทำสด รสมือโฮมเมด มีทั้งอิ่มและเฮลท์ตี้',
    desc:'ร้านที่เกิดจากความชื่นชอบในการทำอาหาร เน้นรสมือแบบโฮมเมดและเลือกใช้วัตถุดิบสดใหม่ มีตั้งแต่บะหมี่รสเข้มข้น เมนูมาม่า ไปจนถึงสลัดโรลสำหรับคนที่อยากกินเบา ๆ',
    menus:['บะหมี่ไก่เทริยากิ','บะหมี่หมูพริกไทยดำ','สลัดโรล','เกี๊ยวสูตรพิเศษ','มาม่าหลากหลายสูตร'],
    images:['assets/images/restaurants/tammagin-cover.jpg']
  },
  fifa:{
    name:'ฟีฟ่า & สายฟ้า พาเจียว',en:'FIFA & SAIFA PAJIEW',type:'ไข่เจียวบุฟเฟต์ • อาหารจานเดียว • เมนูแซ่บ • ของกินเล่น',
    headline:'เลือกท็อปปิ้งให้สนุก เจียวความสุขให้เต็มจาน',
    desc:'จุดเด่นของร้านคือข้าวไข่เจียวบุฟเฟต์ท็อปปิ้งที่ลูกค้าสามารถเลือกเครื่องได้เองตามชอบ จะเลือกแบบง่าย ๆ หรือจัดเต็มหลายท็อปปิ้งก็ได้ นอกจากนี้ยังมีเมนูสายแซ่บและของกินเล่นอีกหลายอย่าง',
    menus:['ข้าวไข่เจียวบุฟเฟต์','ตำถั่วหมูกรอบ','ซุปเปอร์ตีนไก่','ผลไม้ดองนานาชนิด'],
    images:['assets/images/restaurants/fifa-cover.jpg','assets/images/restaurants/fifa-2.jpg']
  }
};

const modal=document.getElementById('restaurantModal');
const modalHero=document.getElementById('modalHero');
const modalGallery=document.getElementById('modalGallery');
const modalTitle=document.getElementById('modalTitle');
const modalEn=document.getElementById('modalEn');
const modalType=document.getElementById('modalType');
const modalHeadline=document.getElementById('modalHeadline');
const modalDesc=document.getElementById('modalDesc');
const modalMenus=document.getElementById('modalMenus');
let lastFocused=null;

function setModalImage(src,alt,button){
  modalHero.src=src;modalHero.alt=alt;
  modalGallery.querySelectorAll('.modal-thumb').forEach(b=>b.classList.remove('active'));
  if(button)button.classList.add('active');
}
function openRestaurant(key,trigger){
  const d=restaurantData[key];if(!d||!modal)return;
  lastFocused=trigger||document.activeElement;
  modalType.textContent=d.type;modalTitle.textContent=d.name;modalEn.textContent=d.en;
  modalHeadline.textContent=d.headline;modalDesc.textContent=d.desc;
  modalMenus.innerHTML=d.menus.map(m=>`<span>${m}</span>`).join('');
  modalGallery.innerHTML='';
  d.images.forEach((src,i)=>{
    const b=document.createElement('button');b.type='button';b.className='modal-thumb'+(i===0?' active':'');
    b.setAttribute('aria-label',`ดูรูป ${i+1} ของ ${d.name}`);
    b.innerHTML=`<img src="${src}" alt="${d.name} รูปที่ ${i+1}">`;
    b.addEventListener('click',()=>setModalImage(src,`${d.name} รูปที่ ${i+1}`,b));
    modalGallery.appendChild(b);
  });
  setModalImage(d.images[0],d.name,modalGallery.querySelector('.modal-thumb'));
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');
  requestAnimationFrame(()=>modal.querySelector('.modal-close')?.focus());
}
function closeRestaurant(){
  if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');
  if(lastFocused&&typeof lastFocused.focus==='function')lastFocused.focus();
}
document.querySelectorAll('.food-card[data-restaurant]').forEach(card=>{
  card.addEventListener('click',()=>openRestaurant(card.dataset.restaurant,card));
  card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openRestaurant(card.dataset.restaurant,card)}});
});
document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeRestaurant));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal?.classList.contains('open'))closeRestaurant()});
