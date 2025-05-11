  // 3.1 กำหนดจำนวนภาพและสร้างอาร์เรย์เก็บลิงก์ภาพ
  const frameCount = 3;
  const images = [];
  for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = `/img-shost/img${i}.jpg`;        // ชื่อไฟล์ img1.jpg, img2.jpg, … img10.jpg
    images.push(img);               // เก็บเข้าอาร์เรย์ (preload) :contentReference[oaicite:1]{index=1}
  }

  // 3.2 อ้างอิง <img> บนหน้า
  const sequenceImg = document.getElementById('sequence');

  // 3.3 คำนวณความสูงทั้งหมดที่ใช้เลื่อน
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  // 3.4 ฟังก์ชันอัพเดตภาพตามตำแหน่งการเลื่อน
const  updateImage = () => {
    const scrollY = window.scrollY;
    const scrollFraction = scrollY / maxScroll;
    // หา index 0–(frameCount-1)
    let frameIndex = Math.floor(scrollFraction * frameCount);
    frameIndex = Math.min(frameIndex, frameCount - 1);
    // เปลี่ยน src ของ <img> :contentReference[oaicite:2]{index=2}
    sequenceImg.src = images[frameIndex].src;
  }

  // 3.5 ฟังอีเวนต์ scroll และใช้ requestAnimationFrame เพื่อความลื่นไหล :contentReference[oaicite:3]{index=3}
  window.addEventListener('scroll', () => {
    window.requestAnimationFrame(updateImage);
  });